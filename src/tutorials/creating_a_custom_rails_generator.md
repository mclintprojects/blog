---
title: 'Creating a custom Rails generator'
published: 07/27/2019
readTime: 3
---

### For the purpose of this tutorial, assume we're making a custom generator named `gqlspec`.

- Run `rails g generate gqlspec`. It should generate the following files and folders.
  - `lib/generators`
  - `lib/generators/gqlspec`
  - `lib/generators/gqlspec/templates`
  - `lib/generators/gqlspec/gqlspec_generator.rb`
  - `lib/generators/gqlspec/USAGE`
- Edit your USAGE file with the appropriate data. The data in this file will be shown whenever you run `rails g gqlspec --help`

```
// lib/generators/gqlspec/USAGE

Description:
    Setups up rspec for a GraphQL mutation.

Example:
    rails generate gqlspec mutation_name

    This will create:
        spec/graphql/mutations/mutation_name_spec.rb
```

- In your `lib/generators/gqlspec/gqlspec_generator.rb` file
  - Change `Rails::Generators::NamedBase` to `Rails::Generators::Base`. Inheriting from `NamedBase` with automatically define a `name` argument with its value set to your custom generator's name.
  - Define the arguments for your generator.

```ruby
argument :mutation, type: :string, required: true, default: "", description: ""
```

- **Optionally**, define options for your generator. You can access an option `arguments` with `options[:arguments]`

```ruby
class_option :arguments, type: :array, required: true, default: []
```

- Define templates for use as a base when generating files.
  - You can copy the exact contents of a template to a different location using the `copy_file` method
  - You can copy the contents of a template after it has been run through Rails' template engine to a different location using the `template` method

```erb
# lib/generators/gqlspec/templates/mutation_spec.template
require "rails_helper"

module Mutations
    RSpec.describe <%= mutation.camelize %>, type: :request do
        describe "resolve" do
        end

        def data(response, key)
            gql_response(response, mutation.camelize(:lower))[key.to_s]
        end

        def query(<%= "#{arguments.join(", ")}" %>)
            <<~GQL
                mutation{
                    <%= mutation.camelize(:lower) %>(input: {<%= "#{arguments.map{|argument| "#{argument}: \"\#{#{argument}}\"" }.join(", ")}" %>}){
                        status, data, errors
                    }
                }
            GQL
        end
    end
end
```

**Important to note**

- Any public methods in your generator class will automatically be called in the order they were defined. If you don't want a method to be called, mark it as private.
- Methods defined in your generator class will be available for use in your template.

Here's what your generator class should look like in the end.

```ruby
# lib/generators/gqlspec/gqlspec_generator.rb
class GqlSpecGenerator < Rails::Generators::Base
    source_root File.expand_path("templates", __dir__)
    argument :mutation, type: :string, required: true
    class_option :arguments, type: :array, required: true, default: []

    def generate_mutation
        generate_spec_file
    end

    private

    def generate_spec_file
        template "mutation_spec.template", "spec/graphql/mutations/#{mutation}_spec.rb"
    end

    def arguments
        options[:arguments]
    end
end
```

Here's what using it will looks like

- Run `rails g gqlspec forgot_password --arguments email`
- If you followed this tutorial correctly, our gqlspec generator should generate the file below:

```ruby
# app/graphql/mutations/forgot_password_spec.rb
require "rails_helper"

module Mutations
    RSpec.describe ForgotPassword, type: :request do
        describe "resolve"
        end

        def data(response, key)
            gql_response(response, "forgotPassword")[key.to_s]
        end

        def query(email)
            <<~GQL
                mutation{
                    forgotPassword(input: {email: "#{email}"}){
                        status, data, errors
                    }
                }
            GQL
        end
    end
end
```
