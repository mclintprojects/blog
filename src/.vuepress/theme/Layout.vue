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
import Home from "./Home";
import Post from "../components/Post";
import Posts from "./Posts";
import Bookshelf from "./Bookshelf";
import Sandbox from "./Sandbox";
import Navbar from "../components/Navbar";

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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

p {
  line-height: 160%;
  font-family: "Inter";
  color: var(--text-primary);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Fugaz One";
  line-height: 140%;
  color: var(--text-primary);
}

body {
  background: var(--bg);
  color: var(--text-primary);
  padding: 100px 24px 0 24px;
}

.page {
  width: var(--page-width);
  margin: 6rem auto;
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
