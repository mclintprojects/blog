<template>
  <div class="toc">
    <p>Table of contents</p>
    <ul>
      <li v-for="(header, index) in headers" :key="index">
        <a :href="`#${header.slug}`">{{ header.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: { page: { type: Object, required: true } },
  computed: {
    headers() {
      return this.page.headers.filter((h) => h.level == 2);
    },
  },
};
</script>

<style scoped>
.toc {
  padding: 1.6rem;
  margin-top: 2.4rem;
  background: #292d3e;
  border-radius: 1rem;
  color: white;
}

.toc p {
  font-weight: bold;
  margin-top: 0;
}

.toc ul {
  margin-top: 0.8rem;
  list-style: disc;
  margin-left: 1.4rem;
}

.toc ul li a {
  color: white;
}
</style>
