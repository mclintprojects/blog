<template>
  <div class="navbar">
    <a href="/">
      <img :src="$withBase('/selfie.png')" alt="logo" />
    </a>

    <ul class="nav-links">
      <a
        href="/posts"
        :style="{
          'text-decoration':
            $page.path.startsWith('/posts') || $frontmatter.route == 'posts'
              ? 'underline'
              : 'none',
        }"
        >posts</a
      >
      <a
        href="/projects"
        :style="{
          'text-decoration':
            $frontmatter.route == 'projects' ? 'underline' : 'none',
        }"
        >projects</a
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    console.log(this.$page);
  },
};
</script>

<style scoped>
.navbar {
  color: var(--text-primary);
  display: flex;
  align-items: center;
  margin: auto;
  font-family: "Inter", "Helvetica Neue", sans-serif;
  width: var(--page-width);
}

label {
  font-size: 1.6rem;
}

a img {
  width: 3.6rem;
  margin-right: 2.4rem;
}

.nav-links {
  display: flex;
  justify-content: center;
  margin: 0;
}

.nav-links a {
  margin-right: 3.2rem;
  font-size: 2.4rem;
  text-decoration: none;
  font-weight: bold;
  font-family: "Fugaz One";
  color: var(--text-primary);
}

@media screen and (max-device-width: 932px) {
  .navbar {
    width: 100%;
  }
}
</style>
