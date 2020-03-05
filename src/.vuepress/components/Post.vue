<template>
  <div class="page">
    <h1>{{$page.title}}</h1>
    <p>{{getDate($page.frontmatter.published)}} &bull; {{getReadTimeLabel($page.frontmatter.readTime)}}</p>

    <Content />

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
    },
    getReadTimeLabel(readTime) {
      return `${readTime} ${readTime == 0 ? "mins" : "min"} read`;
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
  font-size: 3rem;
}

h1 + p {
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-bottom: 3rem;
}

ul {
  margin-top: 1.6rem;
  list-style: disc !important;
  margin-left: 3.2rem;
}

ul li {
  margin-bottom: 1rem;
}

li ul {
  margin-top: 0rem !important;
  margin-left: 1.6rem;
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
      font-size: 1.1rem;
      margin-bottom: 0.4rem;
      color: var(--text-primary);

      + a {
        font-weight: bold;
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
    list-style: none !important;
  }
}
</style>
