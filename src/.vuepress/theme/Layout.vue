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
    modeChanged() {}
  },
  mounted() {
    console.log(this);
  }
};
</script>

<style>
:root {
  --bg: #fff;
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: all 500ms;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.page {
  width: 30%;
  margin: auto;
  font-size: 2rem;
}

.content p {
  line-height: 3rem;
  margin-top: 2.4rem;
}
</style>