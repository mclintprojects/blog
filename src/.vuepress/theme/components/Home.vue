<template>
  <div class="page">
    <section class="intro">
      <a href="https://clintonmbah.com">Mbah Clinton</a>
      <p>softie. computer nerd with (yuuuge) muscles. i make cool things that run on android and the web with kotlin, vuejs, rails, and nodejs.</p>
    </section>
    <section>
      <ul>
        <li v-for="(page, index) in pages" :key="index" class="article">
          <a :href="page.path">
            <p>{{page.title}}</p>
            <p>{{getDate(page.frontmatter.published)}} • {{getReadTimeLabel(page.frontmatter.readTime)}}</p>
          </a>
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
  },
  methods: {
    getDate(dateString) {
      return new Date(dateString).toDateString().substring(4);
    },
    getReadTimeLabel(readTime) {
      return `${readTime} ${readTime > 1 ? "mins" : "min"} read`;
    }
  }
};
</script>

<style>
.intro {
  margin-top: 2.4rem;
}

.intro a {
  font-weight: bold;
}

.intro a + p {
  color: var(--text-primary-light);
}

ul {
  margin-top: 6rem;
  list-style: none;
}

ul li {
  margin-bottom: 1.6rem;
}

ul li a {
  color: var(--text-primary-light);
  text-decoration: none;
}

ul li a p:first-child {
  font-weight: bold;
  color: var(--text-primary);
  font-size: 2.4rem;
  text-transform: capitalize;
}

ul li a p:first-child + p {
  font-size: 1.4rem;
}
</style>
