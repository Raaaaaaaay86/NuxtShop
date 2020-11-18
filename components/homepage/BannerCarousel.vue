<template>
  <VueSlickCarousel
    :arrows="true"
    :autoplay="true"
    :infinite="true"
    :fade="true"
  >
    <div
      style="width:100%"
      class="bg-cover bg-center carousel_item--550"
      :style="{ backgroundImage: 'url(' + require('assets/imgs/carousel1.jpg') + ')' }"
    />
    <div
      style="width:100%"
      class="bg-cover bg-center carousel_item--550"
      :style="{ backgroundImage: 'url(' + require('assets/imgs/carousel2.jpg') + ')' }"
    />
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  components: {
    VueSlickCarousel,
  },
};
</script>
