<template>
  <div class="page">
    <h1>{{$page.title}}</h1>
    <p>{{getDate($page.frontmatter.published)}}</p>

    <Content/>

    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "Post",
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
}
</style>
