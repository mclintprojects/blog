---
title: 'TIL #1 - Cleaning up pagination'
published: 05/07/2020
readTime: 2
tags: ['ruby', 'const_set', 'meta-programming']
---

TIL is going to be a series of posts where I share the details of new information (mostly code-related) that I recently encountered and deem worthy of writing about.

This post, the very first of the aforementioned series is about meta-programming in Ruby. I learnt how to define a Ruby class at runtime while trying to clean up my implementation of list pagination for a GraphQL API.

### Before clean-up
```ruby
class PaginatedUsersType < Types::BaseObject
  field :data, [Types::UserType], null: false
  field :pagination, Types::PaginationType, null: false
end
```

Before learning about how to define a class at runtime, to paginate a list I had to manually write several classes like the one above for each list being paginated. I kept thinking it was tedious and that there had to be a better way.

Defining a class at runtime is made possible with `Object.const_set` which allows you to define constants. The first argument is the name of the constant you're setting. The second is the value of that constant.

### After clean-up

```ruby
def paginate(type)
  type = "Paginated#{type.demodulize.gsub("Type", "").pluralize}Type"
  Object.const_set(type, Class.new(Types::BaseObject) do
    field :data, [data_type], null: false
    field :pagination, Types::PaginationType, null: false
  end)
end

# example usage
paginate Types::UserType
```

For my use-case, instead of manually having to write near similar classes for each of the lists I wanted to paginate I could instead call `paginate`, pass in the underlying type of the list and have the class generated for me saving me time and eliminating unneeded code.

### A gotcha

`Object.const_set` does not overwrite previous definitions, it creates new ones. To prevent duplicate definitions you can use `Object.const_defined?` to check if a constant is defined and `Object.const_get` to get an already defined constant.

That's all for today! 😁