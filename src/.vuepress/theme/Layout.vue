<template>
  <div>
    <navbar @modechange="modeChanged"></navbar>
    <Home v-if="$page.frontmatter.home"/>
    <Post v-else/>
  </div>
</template>

<script>
import Home from "./components/Home";
import Post from "./components/Post";
import Navbar from "./components/Navbar";

export default {
  components: { Home, Navbar, Post },
  methods: {
    modeChanged(mode) {
      if (mode == "dark") this.switchToDark();
      else this.switchToLight();

      localStorage.setItem("mode", mode);
    },
    switchToDark() {
      const root = document.documentElement.style;
      root.setProperty("--bg", "#000000");
      root.setProperty("--text-primary", "white");
      root.setProperty("--text-primary-light", "rgba(255, 255, 255, 0.54)");
    },
    switchToLight() {
      const root = document.documentElement.style;
      root.setProperty("--bg", "#f8f2e5");
      root.setProperty("--text-primary", "rgba(0, 0, 0, 0.8)");
      root.setProperty("--text-primary-light", "rgba(0, 0, 0, 0.54)");
    }
  },
  mounted() {
    const head = document.querySelector("head");
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css?family=Oxygen:400,700";
    fontLink.rel = "stylesheet";

    head.appendChild(fontLink);

    const mode = localStorage.getItem("mode");
    if (mode) this.modeChanged(mode);
  }
};
</script>

<style>
:root {
  --page-width: 74rem;
  --bg: #f8f2e5;
  --text-primary: rgba(0, 0, 0, 0.8);
  --text-primary-light: rgba(0, 0, 0, 0.54);
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: all 500ms;
  font-family: "Oxygen", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--text-primary-light);
}

body {
  background: var(--bg);
}

.page {
  width: var(--page-width);
  margin: auto;
  font-size: 1.6rem;
}

.content p {
  line-height: 3rem;
  margin-top: 3rem;
  font-size: 2rem;
}

a {
  color: var(--text-primary);
  text-decoration: none;
}
</style>