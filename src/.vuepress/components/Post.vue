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
        <p>Up next for you</p>
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
  margin-top: 0;
  color: var(--text-primary-light);
}

ul {
  margin-top: 1.6rem;
  list-style: disc !important;
  margin-left: 3.2rem;
}

li ul {
  margin-top: 0rem !important;
  margin-left: 1.6rem;
}

ol {
  font-family: "Fugaz One";
  margin-left: 1.6rem;
  margin-top: 1.6rem;
}

a.header-anchor {
  color: black;
}

.content__default h2,
.content__default h3 {
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
}

ul li,
ol li,
.content__default p,
aside {
  margin-top: 2.4rem;
  font-size: 1.6rem;
  font-family: "Inter";
  line-height: 160%;
  color: var(--text-primary);
}

ul li {
  margin-top: 1rem;
}

aside {
  background: hsl(129, 90%, 95%);
  padding: 1.6rem;
  margin-top: 0;
  border-radius: 0.8rem;
  color: hsl(129, 90%, 38%);
  font-size: 1.4rem;
}

blockquote {
  padding-left: 1.6rem;
  border-left: 3px solid black;
}

blockquote p {
  color: var(--text-primary-light);
}

hr {
  margin: 6rem auto;
}

.content__default em {
  background: rgb(234, 234, 234);
}

.content__default code,
.content__default pre {
  font-size: 1.2rem;
  background: rgb(238, 244, 246);
  color: black;
  padding: 4px 10px;
  border-radius: 8px;
  font-family: apple-system, consolas, sans-serif;
  white-space: pre-wrap;
}

.content__default pre span {
  word-wrap: break-word;
  word-break: break-all;
}

.content__default pre {
  margin-top: 1.2rem;
  width: 100%;
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

.tag,
.keyword,
.operator {
  color: #1470ad;
}

.attr-name,
.function,
.constant {
  color: #2e24e8;
}

.punctuation,
.class-name {
  color: rgb(247, 72, 72);
}

.symbol {
  color: rgb(44, 198, 27);
}
.comment {
  font-style: italic;
  color: rgba(38, 38, 38, 0.678);
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
  font-family: "Inter";
}
</style>
