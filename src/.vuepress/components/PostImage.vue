<template>
  <div class="image">
    <img :src="src" :alt="alt" />
    <small>{{ caption }}</small>
  </div>
</template>

<script>
export default {
  name: "PostImage",
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    caption: { type: String, default: "" },
    align: { type: String, default: "center" },
    size: { type: String, default: "auto" },
  },
};
</script>

<style>
.image {
  width: 100%;
  text-align: center;
}

.image img {
  margin-top: 3rem;
  max-width: var(--page-width);
}

.image small {
  display: block;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 0.8rem;
}

.img-center {
  margin: auto;
  text-align: center;
}

@media screen and (max-width: 480px) {
  .image img {
    object-fit: cover;
    max-width: calc(100vw - 3.2rem);
  }
}
</style>
