---
title: 'TIL #4 - You can use this.$root as a Vue eventbus'
published: 02/02/2021
readTime: 1
tags: ['vue', 'eventbus', 'hack']
---

I don't know how I'm only just realizing this but since `this.$root` is a Vue instance you can use it as an eventbus to communicate between components. Before today, I'd been manually creating every single eventbus I've ever used, when I did not have to, thanks to an eventbus tutorial I read years ago.

What I was doing:

```javascript
  // eventbus.js
  export default new Vue({});


  // main.js
  import eventbus from "../utils/eventbus"
  Vue.prototype.$eventbus = eventbus;


  // Banks.vue
  this.$eventbus.$on('token-set', this.getBanks);
  this.$eventbus.$emit('token-set');
```

What I'm doing and what you should be doing:

```javascript
  // Banks.vue
  this.$root.$on('token-set', this.getBanks);
  this.$root.$emit('token-set');
```

Hopefully this prevents you from losing several minutes of your precious time on earth to unnecessarily manually implementing an eventbus. 😂