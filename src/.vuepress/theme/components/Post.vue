<template>
  <div class="page">
    <h1>{{$page.title}}</h1>
    <p>{{new Date($page.frontmatter.published).toLocaleDateString()}}</p>

    <Content/>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
