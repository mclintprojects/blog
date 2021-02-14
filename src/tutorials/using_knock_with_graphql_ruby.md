---
title: 'Using Knock with GraphQL-Ruby'
published: 02/14/2021
readTime: 4
---

In this tutorial you will learn how to setup auth for GraphQL queries & mutations using [Knock](https://github.com/nsarno/knock).

Knock is a super easy to setup authentication gem for Rails applications based on JWTs. It's been my go-to for JWT authentication ever since I started using it because it just works out-of-the-box.

## Setting up Knock

- Add `gem 'knock'` to your application's Gemfile then run `bundle install` to install the gem.
- Include the `Knock::Authenticable` module in your `ApplicationController`
  ```ruby
  class ApplicationController < ActionController::API
    include Knock::Authenticable
  end
  ```

- At this point Knock has added a bunch of helper methods to `ApplicationController` and by inheritance, its descendants. You can call `authenticate_user`, provided by `Knock::Authenticable`, as a `before_action` in any controller you want to protect. If a request contains a valid JWT in its `Authorization` header you'll have access to the current user as `current_user` in your controller actions.
  ```ruby
  class TransactionsController < ApplicationController
    before_action :authenticate_user

    def index
      respond json: current_user.transactions, status: 200
    end
  end
  ```

### FYI

Users aren't the only entities you can authenticate. When you call `authenticate_user` as a `before_action`, what you're actually telling Knock with the suffix to `authenticate_` (in this case, `user`) is that you want to authenticate a `User` entity (read as ActiveRecord) for that controller.

Knock gets the JWT from the request's `Authorization` header, decodes it and uses the `id` from the decoded payload to find the `User` for that token. It goes on to set a `current_user` instance variable for you. If the user it tried to find with the `id` from the decoded payload exists and the JWT isn't **expired** or **invalid**, calling `current_user` will return it and if it doesn't, `current_user` returns `nil`.

This means that calling `current_business` as a `before_action` will authenticate a `Business` entity and set a `current_business` instance variable, available to you in your controller's actions.

## Getting Knock to work with GraphQL-Ruby

Since Knock already handles getting the JWT from the request, decoding the token, and finding the entity for that token, all that's left to do is getting GraphQL to know who `current_user` is and that is where GraphQL's `context` comes in.

Like the name suggests, GraphQL context allows us to inject helpful (application or request specific) "outside" information to the GraphQL execution flow. A common usecase for context is what we intend to do now –– passing the current user into the GraphQL request execution flow.

To add the current user to your GraphQL context, in `graphql_controller.rb`, add `current` to the `context` hash defined in `execute`:
```ruby
class GraphqlController < ApplicationController
  before_action :authenticate_user

  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]

    context = {
      current_user: current_user,
    }

    result = SwipeSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  rescue => e
    raise e unless Rails.env.development?
    handle_error_in_development e
  end
end
```

In your query or mutation, you'll have access to the `context` hash and you can retrieve your current user with `context[:current_user]`. If `current_user` is nil for a protected query/mutation, you can then throw an `'Unauthorized' GraphQL::ExecutionError`.

```ruby
module Mutations
  class ApproveBusiness < Mutations::BaseMutation
    argument :id, Int, required: true

    def resolve(id:)
      raise GraphQL::ExecutionError.new("Unauthorized") if current_user.nil?
      current_user.business.approve!
    end

    def current_user
      context[:current_user]
    end
  end
end
```

At this point, you might think your auth flow is ready for use but when you pass an invalid JWT, instead of getting a GraphQL execution error telling you that you're unauthorized, you'll get a `401 Unauthorized` HEAD response because Knock is (rightfully) configured to work like that out-of-the-box.

Knock calls `unauthorized_entity` when authorization fails and that's what returns the `401 Unauthorized` HEAD response that's preventing your own GraphQL execution error message being returned to your API's consumer. To fix, in your `application_controller.rb` you should replace Knock's `unauthorized_entity` method with one that does nothing thus allowing GraphQL to return a response.

```ruby
# application_controller.rb
def unauthorized_entity(entity_name)
end
```

<content-break />

## Cleaning up

Littering every single one of your protected queries/mutations with `raise GraphQL::ExecutionError.new("Unauthorized") if context[:current_user].nil?` is bad practice because you should not be repeating yourself. 

To cleanup, use a module to encapsulate the authorization flow. You can then include that module in the base query & mutation all your queries and mutations inherit from and have the module's methods available to all queries and mutations.

```ruby
module Authorizable
  def ensure_authorized!
    instance_variable_set("@current_user", context[:current_user])
    raise GraphQL::ExecutionError.new("Unauthorized") if @current_user.nil?
  end

  def current_user
    @current_user
  end
end
```

You can then refactor the `ApproveBusiness` mutation above to:
```ruby
module Mutations
  class ApproveBusiness < Mutations::BaseMutation
    def resolve
      ensure_authorized!
      current_user.business.approve!
    end
  end
end
```