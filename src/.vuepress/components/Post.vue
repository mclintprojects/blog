<template>
  <div class="page">
    <h1>{{$page.title}}</h1>
    <p>{{getDate($page.frontmatter.published)}}</p>

    <Content/>
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
    console.log(this.$page);
  }
};
</script>

<style>
h1 {
  color: var(--text-primary);
}
</style>
