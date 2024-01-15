<template>
  <div>
    <navbar></navbar>
    <home v-if="$page.frontmatter.route == 'home'" />
    <posts v-else-if="$page.frontmatter.route == 'posts'" />
    <post v-else />
  </div>
</template>

<script>
import Home from "./Home";
import Post from "../components/Post";
import Posts from "./Posts";
import Navbar from "../components/Navbar";

export default {
  components: { Home, Navbar, Posts, Post },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
:root {
  --page-width: 40%;
  --bg: #ffffff;
  --text-primary: rgba(0, 0, 0, 1);
  --text-primary-light: rgba(0, 0, 0, 0.84);
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

p {
  line-height: 140%;
  font-family: "Inter" !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Fugaz One";
  line-height: 140%;
}

body {
  background: var(--bg);
  transition: all 500ms;
  color: var(--text-primary-light);
  padding: 100px 24px 0 24px;
}

.page {
  width: var(--page-width);
  margin: auto;
  font-size: 1.6rem;
  margin: 6rem 0;
}

pre,
code {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.mt-2 {
  margin-top: 1.6rem;
}

@media screen and (max-device-width: 932px) {
  body {
    padding: 24px 24px 0 24px;
  }

  .page {
    width: 100%;
  }
}
</style>
