<template>
<div class="vue-image-gallery">
  <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
  <client-only placeholder="Loading...">
    <vgs :images="images" :index="index" @close="index = null" />
  </client-only>
</div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  name: "ImageGallery",
  components: {
    VueGallerySlideshow
  },
  data: {
    images: [
      'https://placekitten.com/801/800',
      'https://placekitten.com/802/800',
      'https://placekitten.com/803/800',
      'https://placekitten.com/804/800',
      'https://placekitten.com/805/800',
      'https://placekitten.com/806/800',
      'https://placekitten.com/807/800',
      'https://placekitten.com/808/800',
      'https://placekitten.com/809/800',
      'https://placekitten.com/810/800'
    ],
    index: null
  }
};
</script>

<style lang="scss">
@import "../assets/variables";
.vue-image-gallery {
  height: 100rem;
}
.image {
  width: 100px;
  height: 100px;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}
</style>
<docs>

</docs>
