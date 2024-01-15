<template>
  <div class="posts page">
    <h1>Posts</h1>
    <ul>
      <li v-for="(page, index) in pages" :key="index" class="post">
        <a :href="page.path">
          <h3 class="post-title">{{ page.title }}</h3>
          <p class="post-publish-date">
            {{ getDate(page.frontmatter.published) }}
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$site.pages
        .filter((page) => page.path.endsWith(".html"))
        .sort(
          (page, next) =>
            new Date(next.frontmatter.published).getTime() -
            new Date(page.frontmatter.published).getTime()
        );
    },
  },
  methods: {
    getDate(dateString) {
      return new Date(dateString).toDateString().substring(4);
    },
  },
};
</script>

<style>
.posts ul {
  margin: 0;
  margin-top: 3.2rem;
}

.posts ul li {
  list-style-type: none;
  margin-bottom: 2.4rem;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding-bottom: 2rem;
}

.posts ul li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.posts ul li a {
  text-decoration: none;
}

.post-title {
  color: var(--text-primary);
}

.post-publish-date {
  color: var(--text-primary-light);
  margin-top: 0.4rem;
  font-size: 1.4rem;
}
</style>
