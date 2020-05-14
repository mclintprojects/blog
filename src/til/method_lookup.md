---
title: 'TIL #3 - Method look-up in ruby'
published: 05/14/2020
readTime: 2
tags: ['ruby', 'method lookup', 'foundational']
---

I stumbled across this TIL because I've been looking up advanced topics in a bid to learn new things and deepen my knowledge of Ruby & Rails. 

### Super useful preamble

- Everything in Ruby is an object. Unsurprisingly, the root ancestor of all things in Ruby is `Object`.
- All classes have a `Class` ancestor.
- All classes inherit from `Module` which means every class is sort of a module. "Sort of" because unlike actual modules you can't mixin classes. `Module` adds in initialization and a few other properties to classes.

Method lookup in Rails is possible because of a few fields all Ruby objects, classes, and modules have.

**objects**
- `class`: A pointer to the class object of the object. For example, for an Fish class, calling the `class` method returns `Class`.
- `iv_tbl` (Instance Variable Table): a hashtable containing the instance variables of the object.

**classes, modules**
- `m_tbl` (Method Table) - A hashtable containing all the class or module's instance methods.
- `super` - A pointer to the class or module's superclass (_direct ancestor_). `Object` is always at the end of the `super` ancestor chain. _FYI, you can lookup the ancestors of a class by calling the `ancestors` method on that class._

### How method lookup works

- Ruby follows the object's `class` pointer and check it's method table (`m_tbl`) for a match.
- If there's no match, it follows the object's `super` pointer and checks it's method table for a match. Ruby continues up the `super` ancestor chain, looking into each ancestor's method table for a match.
- If there is still no match, Ruby invokes `method_missing` on the original object. FYI, `method_missing` is a method so it'll undergo this lookup process too until it is found and invoked.