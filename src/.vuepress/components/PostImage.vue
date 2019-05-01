<template>
  <div class="image">
    <img :src="src" :alt="alt">
    <small>{{caption}}</small>
  </div>
</template>

<script>
export default {
  name: "PostImage",
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    caption: { type: String },
    align: { type: String, default: "center" },
    size: { type: String, default: "auto" }
  },
  mounted() {
    console.log("image mounted");
  }
};
</script>

<style lang="scss">
.image {
  width: 100%;
  text-align: center;

  img {
    margin-top: 3rem;
  }

  small {
    display: block;
    font-size: 1.4rem;
    text-align: center;
  }
}

.img-center {
  margin: auto;
  text-align: center;
}
</style>
