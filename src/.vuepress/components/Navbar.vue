<template>
  <div class="navbar">
    <a href="/">
      <img :src="$withBase('/selfie.svg')" alt="logo">
    </a>

    <div class="mode">
      <button @click="changeMode('light')" :class="{selected: mode == 'light'}">Light</button>
      <button @click="changeMode('dark')" :class="{selected: mode == 'dark'}">Dark</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "light"
    };
  },
  methods: {
    changeMode(mode) {
      this.mode = mode;
      this.$emit("modechange", mode);
    }
  },
  mounted() {
    const mode = localStorage.getItem("mode");
    if (mode) this.changeMode(mode);
  }
};
</script>

<style scoped>
.navbar {
  color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--page-width);
  margin: auto;
  padding: 1.6rem 0;
}

label {
  font-size: 1.6rem;
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

button {
  border: 0.1rem solid var(--text-primary);
  background: var(--bg);
  color: var(--text-primary);
  text-transform: lowercase;
  padding: 0.4rem 0.8rem;
}

button:hover {
  cursor: pointer;
}

button:first-child {
  border-right: none;
}

button.selected {
  font-weight: bold;
}
</style>
