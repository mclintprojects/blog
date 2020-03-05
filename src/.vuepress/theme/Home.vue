<template>
  <div class="home page">
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
      return this.$site.pages
        .filter(page => page.path.endsWith(".html"))
        .sort(
          (page, next) =>
            new Date(next.frontmatter.published).getTime() -
            new Date(page.frontmatter.published).getTime()
        );
    }
  },
  methods: {
    getDate(dateString) {
      return new Date(dateString).toDateString().substring(4);
    },
    getReadTimeLabel(readTime) {
      return `${readTime} ${readTime == 0 ? "mins" : "min"} read`;
    }
  }
};
</script>

<style lang="scss">
.home {
  ul {
    list-style: none !important;

    li {
      margin-bottom: 3rem;

      a {
        color: var(--text-primary-light);
        text-decoration: none;

        p:first-child {
          font-weight: bold;
          color: var(--text-primary);
          font-size: 3rem;

          + p {
            font-size: 1.2rem;
            text-transform: uppercase;
          }
        }
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
