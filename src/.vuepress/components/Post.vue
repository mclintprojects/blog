<template>
  <div class="page">
    <h1>{{ $page.title }}</h1>
    <p>
      {{ getDate($page.frontmatter.published) }} &bull;
      {{ getReadTimeLabel($page.frontmatter.readTime) }}
    </p>

    <Content />

    <footer>
      <div v-if="nextPost">
        <p>Now read this next</p>
        <a :href="nextPost.path">{{ nextPost.title }}</a>
      </div>
      <ul>
        <li>
          <a href="/">← Home</a>
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
        .filter((page) => page.path.endsWith(".html"))
        .sort(
          (page, next) =>
            new Date(next.frontmatter.published).getTime() -
            new Date(page.frontmatter.published).getTime()
        );
    },
    nextPost() {
      const index = this.pages.findIndex((p) => p.title == this.$page.title);
      return index + 1 > this.pages.length ? null : this.pages[index + 1];
    },
  },
  methods: {
    getDate(dateString) {
      return new Date(dateString).toDateString().substring(4);
    },
    getReadTimeLabel(readTime) {
      return `${readTime} ${readTime == 0 ? "mins" : "min"} read`;
    },
  },
};
</script>

<style>
h1 {
  color: var(--text-primary);
  font-size: 3rem;
}

h1 + p {
  font-size: 1.4rem;
  margin-bottom: 3rem;
  margin-top: 0.4rem;
  color: var(--text-primary-light);
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

.content__default h2,
.content__default h3 {
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
}

.content__default p {
  margin-top: 1.6rem;
  font-size: 1.8rem;
}

.content__default code,
.content__default pre {
  font-size: 1.2rem;
  background: rgb(226, 235, 237);
  color: black;
  padding: 4px 10px;
  border-radius: 8px;
  font-family: consolas;
}

.content__default pre span {
  overflow-wrap: break-word;
  word-break: break-all;
}

.content__default pre {
  margin-top: 1.2rem;
  width: 100%;
  overflow-x: scroll;
  padding: 1.6rem;
}

.content__default pre code {
  background: transparent;
  padding: 0;
  border-radius: 0;
}

.content__default code .token .keyword {
  color: rgb(220, 55, 55) !important;
}

footer {
  margin-top: 6rem;
  border-top: 0.1rem solid rgb(219, 219, 219);
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p + a {
  font-family: "Fugaz One", sans-serif;
}

footer div {
  padding-bottom: 3rem;
}

footer div p {
  text-transform: uppercase;
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
  color: var(--text-primary);
}

footer div p + a {
  font-weight: bold;
  font-size: 3rem;
  color: var(--text-primary);
}

footer ul {
  margin: 0;
  display: flex;
  justify-content: space-between;
  color: var(--text-primary);
  list-style: none !important;
}

footer ul li a {
  text-decoration: none;
  color: black;
}
</style>
