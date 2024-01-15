<template>
  <div>
    <navbar @modechange="modeChanged"></navbar>
    <home v-if="$page.frontmatter.home" />
    <post v-else />
  </div>
</template>

<script>
import Home from "./Home";
import Post from "../components/Post";
import Navbar from "../components/Navbar";

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
      root.setProperty("--text-primary-light", "rgba(255, 255, 255, 0.7)");
    },
    switchToLight() {
      const root = document.documentElement.style;
      root.setProperty("--bg", "#ffffff");
      root.setProperty("--text-primary", "rgba(0, 0, 0, 0.8)");
      root.setProperty("--text-primary-light", "rgba(0, 0, 0, 0.7)");
    },
  },
  mounted() {},
};
</script>

<style>
:root {
  --page-width: 40%;
  --bg: #ffffff;
  --text-primary: rgba(0, 0, 0, 1);
  --text-primary-light: rgba(0, 0, 0, 0.7);
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "CircularStd";
  src: url("/fonts/CircularStd.ttf");
}

@font-face {
  font-family: "CircularStd";
  src: url("/fonts/CircularStd-Bold.ttf");
  font-weight: bold;
}

body {
  background: var(--bg);
  transition: all 500ms;
  color: var(--text-primary-light);
}

.page {
  width: var(--page-width);
  margin: auto;
  font-size: 1.6rem;
  margin-top: 3rem;
  font-family: "Inter", "Helvetica Neue", sans-serif;

  h1 {
    font-family: "CircularStd", sans-serif;
  }
}

pre,
code {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
