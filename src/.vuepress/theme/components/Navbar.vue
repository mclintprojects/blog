<template>
  <div class="navbar">
    <a href="/">
      <img :src="$withBase('/selfie.svg')" alt="logo">
    </a>

    <div class="mode">
      <input type="checkbox" v-model="checked">
      <label>{{mode}}</label>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.checked ? "Light mode" : "Dark mode";
    }
  },
  data() {
    return {
      checked: true
    };
  }
};
</script>

<style scoped>
.navbar {
  color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin: auto;
  padding: 1.6rem 0;
}

a img {
  width: 4rem;
  margin-right: 1.6rem;
}

.mode {
  display: flex;
  align-items: center;
}

.mode input[type="checkbox"] {
  margin-right: 0.8rem;
}
</style>
