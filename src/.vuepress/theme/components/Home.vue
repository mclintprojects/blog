<template>
  <div class="page">
    <section>
      <p>
        Personal blog by
        <a href="https://clintonmbah.com">Mbah Clinton</a>
      </p>
      <p>softie. computer nerd with (yuuuge) muscles. i make cool things that run on android and the web with kotlin, vuejs, rails, and nodejs.</p>
    </section>
    <section>
      <ul>
        <li v-for="(page, index) in pages" :key="index" class="article">
          <a :href="page.path">{{page.title}}</a>
          <p>{{new Date(page.frontmatter.published).toLocaleDateString()}}</p>
          <p>{{page.frontmatter.description}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$site.pages.filter(page => page.path.endsWith(".html"));
    }
  }
};
</script>

<style>
</style>
