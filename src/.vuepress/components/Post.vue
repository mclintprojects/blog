<template>
  <div class="page">
    <h1>{{$page.title}}</h1>
    <p>{{getDate($page.frontmatter.published)}}</p>

    <Content/>

    <footer>
      <div v-if="nextPost">
        <p>Now read this next</p>
        <a :href="nextPost.path">{{nextPost.title}}</a>
      </div>
      <ul>
        <li>
          <a href="https://mobile.twitter.com/mclint_">@mclint_</a>
        </li>
        <li>
          <a href="https://www.clintonmbah.com">clintonmbah.com</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Post",
  computed: {
    pages() {
      return this.$site.pages
        .filter(page => page.path.endsWith(".html"))
        .sort(
          (page, next) =>
            new Date(next.frontmatter.published).getTime() -
            new Date(page.frontmatter.published).getTime()
        );
    },
    nextPost() {
      const index = this.pages.findIndex(p => p.title == this.$page.title);
      return index + 1 > this.pages.length ? null : this.pages[index + 1];
    }
  },
  methods: {
    getDate(dateString) {
      return new Date(dateString).toDateString().substring(4);
    }
  },
  mounted() {
    console.log(this.$site);
  }
};
</script>

<style lang="scss">
h1 {
  color: var(--text-primary);
}

footer {
  margin-top: 6rem;
  border-top: 0.1rem solid var(--text-primary-light);
  padding-top: 3rem;
  padding-bottom: 3rem;

  div {
    padding-bottom: 3rem;

    p {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.1rem;
      margin-bottom: 0.4rem;

      + a {
        font-size: 3rem;
        color: var(--text-primary);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  ul {
    margin: 0;
    display: flex;
    justify-content: space-between;
    color: var(--text-primary);
  }
}
</style>
