<template>
  <div class="image">
    <img :src="src" :alt="alt">
    <caption>{{caption}}</caption>
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    caption: { type: String },
    align: { type: String, default: "center" },
    size: { type: String, default: "auto" }
  }
};
</script>

<style>
.image {
  width: 100%;
}
</style>
