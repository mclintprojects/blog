---
title: 'TIL #2 - Ruby class methods'
published: 05/08/2020
readTime: 5
tags: ['ruby', 'class methods', 'meta-programming']
---

I've always been a huge fan of class methods, even before I knew what they actually were. This is mostly because they almost always were readable, tiny-footprint methods that packed a punch. Take `validates_presence_of` or `has_secure_password` for example, you're mostly interfacing with an otherwise "simple" method but a **ton** of nice things are happening for you under the hood.

That said, wondering about how to make my own version of `validates_presence_of` is how I learnt about class methods.

Quick explainer: class methods are methods that live on and can only be called on the class itself. Class methods are inherited by descendants of the class but aren't available to its instances — use instance methods instead.

```ruby
class ActiveRecord
  def self.validates_presence_of(property)
  end
end

class User < ActiveRecord
  validates_presence_of :name

  def validate_name
    validates_presence_of :name # undefined method `validates_presence_of' for #<User:0x0000557920dac930>
  end
end

user = User.new
user.validates_presence_of(:name) # undefined method `validates_presence_of' for #<User:0x0000557920dac930>
```

In the example above, `validates_presence_of` lives on the ActiveRecord class itself. Its descendants inherit it and are able to call it.

## Defining class methods

There's different ways to define class methods. I'd recommend going with Style 1 or 2 as shown below. Ideally and unlike in Style 3, you shouldn't repeat yourself very often in your code. With Style 3, should you ever rename your class you'd have to also find all of its class methods and update them too.

```ruby
# Style 1
class User
  def self.say_hello
    puts "Hello"
  end
end

# Style 2
class User
  class << self
    def say_hello
      puts "Hello"
    end
  end
end

# Style 3
class User
  def User.say_hello
    puts "Hello"
  end
end
```

## Using class methods

I personally like to use class methods to improve the readability of my classes. Usually by hiding "magic" that no one should be directly bothered with.

```ruby
class User
  class << self
    def has_secure_password
      # self is User
      # class_eval allows you to make changes to a class on the fly
      # here we're defining a password setter and an authenticate instance method
      self.class_eval do
        def password=(password)
          digest = BCrypt::Password.create(password, salt: 12)
          self.update(password_digest: digest)
        end

        def authenticate(password)
          digest = BCrypt::Password.new(self.password_digest)
          digest == password
            self
          else
            false
          end
        end
      end
    end
  end
end
```

The code above is a basic implementation of `has_secure_password` and it does two things.
1. Adds a setter for `password`. This lets you pass in a plaintext password and have it hashed and saved to the `password_digest` column of your users table.
2. Sets up an `authenticate` instance method that lets you know if the plaintext password you pass in matches the stored hash digest.

## Introducing modules

I know. I talked a lot about "readability" and "small footprint" yet the class above isn't exactly a fine example of it. True and that's where modules come in. You can move all of the class method code above into a module. One benefit is that your class is much cleaner. Another much more important benefit is that the module allows you to reuse the class method(s) across several "unrelated" classes.

```ruby
module Authorizable
  def self.include(base)
    # self.include is called when a module is included in a class with 'include <Module>'
    # its first parameter is the class the module is being included in
    base.extend AuthorizableClassMethods
  end

  module AuthorizableClassMethods
    def requires_auth(value = true)
      if value
        self.class_eval do
          def ensure_authorized!
            # authorization logic
          end

          def current_user
            context[:current_user]
          end
        end
      end
    end
  end
end

class BaseMutation
  include Authorizable
end

class SendMoney < BaseMutation
  requires_auth

  def resolve(amount:)
    ensure_authorized!
    SendMoneyJob.perform_async(current_user.id, amount)
  end
end
```

Look at how clean `BaseMutation` is with the class method code being in a module. Should you also want to have authorization happen in a different class that requires it, it's now as simple as `include Authorizable`.

There's a lot of great use-cases for class methods and I hope this helps you implement them.
