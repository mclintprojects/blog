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
        >writing</a
      >
      <a
        href="/bookshelf"
        :style="{
          'text-decoration':
            $frontmatter.route == 'bookshelf' ? 'underline' : 'none',
        }"
        >bookshelf</a
      >
      <a
        href="/sandbox"
        :style="{
          'text-decoration':
            $frontmatter.route == 'sandbox' ? 'underline' : 'none',
        }"
        >sandbox</a
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
  width: 2.4rem;
  margin-right: 2rem;
}

.nav-links {
  display: flex;
  justify-content: center;
  margin: 0;
}

.nav-links a {
  margin-right: 2rem;
  font-size: 1.8rem;
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
