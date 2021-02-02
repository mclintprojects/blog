---
title: 'Really Simple State Thing'
published: 02/02/2021
readTime: 5
tags: ['vue', 'state', 'simple']
---

The origin of this really simple state thing is a review comment about me finding a simpler way to show different views for the different states of an component.

<table-of-content :page="$page" />

## Finding some inspiration for my implementation

One of my absolute favorite things about learning new programming languages is the new ways they cause you to think about approaching and solving problems. The way I thought about implementing this really simple state thing was borne of my delightful experience with [enumerize](https://github.com/brainspec/enumerize) and Ruby.

### How enumerize works

- Define all your possible states
- Point out which column you want to store the current state in
- You're good to go :)

Enumerize goes on to do a bunch of neat things that makes your life easy like defining predicate methods that let you know if a particular state is the current state, preventing incorrect state etc.

## Conceiving really simple state thing

Heavily inspired by enumerize I outlined what I wanted from my own implementation in Vue.

- Define my possible states.
- Ability to transition state.
- Predicates to find out if a state is the current state is.

## Implementing really simple state thing

```javascript
  // mixins/reallysimplestatething.js

  export default {
    beforeCreate() {
      const states = this.$options.states;
      if (states) {
        this.$options.computed = this.$options.computed || {};

        states.forEach((state) => {
          this.$options.computed[state] = function() {
            return this.currentState == state;
          };
        });
      }
    },
    data() {
      const states = this.$options.states;
      let stateData = {};

      if (states) {
        stateData = {
          currentState: states[0],
        };
      }

      return { ...stateData };
    },
  }
```

What's happening here:

- I've made a mixin because I want every component to be able to use the really simple state thing.
- In `beforeCreate`, I'm checking if the component being created has a `states` options array defined.
  - If it does, I'm taking that as the array of possible states for that component and creating computed properties that match the name of the state and function as a predicate for finding out if that particular state matches what's been set as the current state.
  - I'm also setting the first entry of the possible states as the default state.
- In `data`, I'm setting up the reactive `currentState` property that will be made accessible to the component. Setting the `currentState` is where the magic happens.

```vue
  <template>
    <div>
      <Loader v-if="loading" />
      <ul v-show="loaded">
        <li v-for="bank in banks" :key="bank.id>
          <p>{{bank.name}}</p>
        </li>
      </ul>
      <Error v-if="error" message="errorMessage">
    </div>
  </template>

  <script>
    export default {
      states: ["loading", "loaded", "error"],
      data(){
        return {
          banks: [],
          errorMessage: null,
        };
      },
      methods: {
        async getBanks(){
          try{
            const banks = await axios.get("/banks");
            this.banks = response.data;
            this.currentState = "loaded";
          } catch(err){
            this.currentState = "error";
            this.errorMessage = err.response.data.errors[0].message;
          }
        }
      },
      created(){
        this.getBanks();
      }
    }
  </script>
```

What's happening here:

- My component has different views with their accompanying state.
  - A loader is shown when the state is `loading`
  - A list of banks is shown when the state is `loaded`
  - An error message is shown when the state is `error`.
- All the possible states for this component are defined in my `states` options array and the really simple state thing will set the first entry as the default. In this case, `loading` will be the state of the component until I transition away from it from setting `currentState` to a new state.
- In `getBanks`, I'm transitioning to the `loaded` state if I successfully get my list of banks or the `error` state if I don't.

<content-break />

## $RSST to the moon

In its current state (pun intended *wink wink*), the really simple state thing is very useful to me because it takes away the tedious recurrent chore of creating the predicate computed properties for my component's possible states and it does so with a delightful (to me) API. That said, there's quite a bit I can add to improve it and maybe I will do it and release it as a Vue plugin.

Hopefully this tutorial is useful to ya. Peace!