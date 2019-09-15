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
    margin-top: 6rem;
    list-style: none !important;

    li {
      margin-bottom: 2.4rem;
      padding-bottom: 0.8rem;
      border-bottom: 0.1rem solid var(--text-primary);

      a {
        color: var(--text-primary-light);
        text-decoration: none;

        p:first-child {
          font-weight: bold;
          color: var(--text-primary);
          font-size: 2.4rem;
          text-transform: capitalize;

          + p {
            font-size: 1.4rem;
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
