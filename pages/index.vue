<template>
  <div>
    <BannerCarousel />
    <!--標語-->
    <div class="h-64 flex flex-col items-center justify-center">
      <p class="text-3xl lg:text-4xl">
        " 時尚易逝，風格永存。"
      </p>
      <span class="text-xl lg:text-2xl font-extrabold italic ">
        - Gabrielle Bonheur Claire
      </span>
    </div>
    <!--Section 1-->
    <div class="mb-20">
      <div class="flex flex-wrap">
        <img class="w-full lg:w-1/2 object-cover object-center" style="height: 20rem" :src="require('@/assets/imgs/head01.jpg')" alt="">
        <div class="my-8 lg:my-0 w-full lg:w-1/2 flex flex-col items-center justify-center">
          <p class="text-4xl font-bold">
            CLAIRE's代表的是...
          </p>
          <small class="mb-2 text-xl">
            一種歷久彌新的獨特風格。
          </small>
          <nuxt-link to="/products">
            <sobutton>
              了解更多
            </sobutton>
          </nuxt-link>
        </div>
      </div>
      <div class="flex lg:flex-row-reverse flex-wrap">
        <img class="w-full lg:w-1/2 object-cover object-center" style="height: 20rem" :src="require('@/assets/imgs/head02.jpg')" alt="">
        <div class="my-8 lg:my-0 w-full lg:w-1/2 flex flex-col items-center justify-center">
          <p class="text-4xl font-bold">
            CLAIRE's 的精神宗旨
          </p>
          <small class="mb-2 text-xl">
            追求美麗的權利 人人公平。
          </small>
          <nuxt-link to="/products">
            <sobutton>
              點我閱讀
            </sobutton>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!--Section 2-->
    <div class="mb-8 mx-auto w-9/12 text-3xl border-b-4 border-black text-center lg:w-4/12">
      <p>
        為您量身打造的產品
      </p>
    </div>
    <div class="grid grid-cols-12 mb-20">
      <div class="col-span-full lg:col-span-9">
        <img class="h-88 w-full object-cover object-center" :src="require('@/assets/imgs/poster01.jpg')" alt="">
      </div>
      <div class="px-3 col-span-full lg:col-span-3 relative lg:px-0">
        <div
          class="flex flex-col items-start lg:absolute"
          style="top: 2rem;left: -4rem"
        >
          <p class="w-full my-2 text-4xl lg:w-auto lg:mb-2 lg:px-3 lg:py-1 lg:text-white lg:bg-black">
            唇彩系列
          </p>
          <p>質地滑順 接觸雙唇完美融合</p>
          <p>讓人愛不釋手</p>
          <nuxt-link to="/products">
            <sobutton class="mt-2 w-full text-center lg:w-auto">
              發現更多
            </sobutton>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 mb-20">
      <div class="px-3 row-start-2 col-span-12 relative lg:px-0 lg:row-auto lg:col-span-3">
        <div
          class="flex flex-col items-start lg:absolute"
          style="top: 2rem;right: -4rem"
        >
          <p class="w-full my-2 text-4xl lg:mb-2 lg:px-3 lg:py-1 lg:w-auto lg:text-white lg:bg-black">
            腮紅系列
          </p>
          <p>一抹瑕疵秒神隱 遠觀近看都無懈可擊</p>
          <p>重回自信光彩</p>
          <nuxt-link to="/products">
            <sobutton class="mt-2 w-full text-center lg:w-auto">
              發現更多
            </sobutton>
          </nuxt-link>
        </div>
      </div>
      <div class="col-span-full lg:col-span-9">
        <img class="h-88 w-full object-cover object-center" :src="require('@/assets/imgs/poster02.jpg')" alt="">
      </div>
    </div>
    <div class="grid grid-cols-12 mb-20">
      <div class="col-span-full lg:col-span-9">
        <img class="h-88 w-full object-cover object-center" :src="require('@/assets/imgs/poster03.jpg')" alt="">
      </div>
      <div class="px-3 col-span-12 relative lg:col-span-3 lg:px-0">
        <div
          class="flex flex-col items-start lg:absolute"
          style="top: 2rem;left: -4rem"
        >
          <p class="w-full my-2 text-4xl lg:w-auto lg:mb-2 lg:px-3 lg:py-1 lg:text-white lg:bg-black">
            指彩系列
          </p>
          <p>顏色繽紛飽滿 光亮持久</p>
          <p>展現個人魅力</p>
          <nuxt-link to="/products">
            <sobutton class="mt-2 text-center w-full lg:w-auto">
              發現更多
            </sobutton>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- End -->
  </div>
</template>

<script>
import BannerCarousel from '@/components/homepage/BannerCarousel';

export default {
  components: {
    BannerCarousel,
  },
};
</script>

<style lang="scss" scoped>

</style>
