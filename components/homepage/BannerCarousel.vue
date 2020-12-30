<template>
  <VueSlickCarousel
    :arrows="true"
    :autoplay="true"
    :infinite="true"
    :fade="true"
  >
    <div
      style="width:100%"
      class="pb-12 pl-12 flex-important items-end lg:items-center bg-cover bg-center carousel_item  pointer-events-auto lg:pt-32 lg:pr-32"
      :style="{ backgroundImage: 'url(' + require('assets/imgs/carousel1.jpg') + ')' }"
    >
      <div class="flex justify-end lg:items-end">
        <div class="mb-2 flex flex-col items-start text-white text-4xl font-extrabold">
          <span>CLAIRE's</span>
          <span>為你的美麗增添色彩</span>
          <nuxt-link to="/products">
            <sbutton class="text-base cursor-pointer">
              最新商品
            </sbutton>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      style="width:100%"
      class="pt-12 pl-12 bg-cover bg-center carousel_item pointer-events-auto lg:pt-32 lg:pr-32"
      :style="{ backgroundImage: 'url(' + require('assets/imgs/carousel2.jpg') + ')' }"
    >
      <div class="mb-2 text-white text-4xl font-extrabold">
        <p>世界上,</p>
        <p>只有你最了解自己</p>
      </div>
      <nuxt-link to="/products">
        <sbutton class="cursor-pointer">
          了解更多
        </sbutton>
      </nuxt-link>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import '@/assets/styles/editedCarousel.scss';

export default {
  components: {
    VueSlickCarousel,
  },
};
</script>
