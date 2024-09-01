<template>
  <div>
    <navbar></navbar>
    <home v-if="$page.frontmatter.route == 'home'" />
    <posts v-else-if="$page.frontmatter.route == 'posts'" />
    <bookshelf v-else-if="$page.frontmatter.route == 'bookshelf'" />
    <sandbox v-else-if="$page.frontmatter.route == 'sandbox'" />
    <post v-else />
  </div>
</template>

<script>
import Home from "./Home.vue";
import Post from "../components/Post.vue";
import Posts from "./Posts.vue";
import Bookshelf from "./Bookshelf.vue";
import Sandbox from "./Sandbox.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Home, Navbar, Posts, Post, Bookshelf, Sandbox },
};
</script>

<style>
:root {
  --page-width: 30%;
  --bg: #ffffff;
  --text-primary: rgba(0, 0, 0, 8);
  --text-primary-light: rgba(0, 0, 0, 0.54);
  font-size: 62.5%;
}

@font-face {
  font-family: "Departure Mono";
  src: url("/fonts/DepartureMono-Regular.otf");
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

p {
  line-height: 200%;
  font-family: "Departure Mono";
  color: var(--text-primary);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Departure Mono";
  line-height: 160%;
  color: var(--text-primary);
}

h1 {
  font-size: 2.8rem;
}

body {
  background: var(--bg);
  color: var(--text-primary);
  padding: 100px 24px 0 24px;
}

.page {
  width: var(--page-width);
  padding: 3.2rem auto !important;
  margin-top: 3.2rem;
}

.mt-2 {
  margin-top: 1.6rem;
}

a {
  text-decoration: underline;
}

a span {
  display: none !important;
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
