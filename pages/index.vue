<template>
  <div>
    <BannerCarousel />
    <!--標語-->
    <div class="h-64 flex flex-col items-center justify-center">
      <p class="text-4xl">
        " 時尚易逝，風格永存。"
      </p>
      <span class="text-2xl font-extrabold italic ">
        - Gabrielle Bonheur Claire
      </span>
    </div>
    <!--Section 1-->
    <div class="mb-20">
      <div class="flex">
        <img class="w-1/2 object-cover object-center" style="height: 45vh" :src="require('@/assets/imgs/head01.jpg')" alt="">
        <div class="w-1/2 flex flex-col items-center justify-center">
          <p class="text-4xl font-bold">
            CLAIRE's代表的是...
          </p>
          <small class="mb-2 text-xl">
            一種歷久彌新的獨特風格。
          </small>
          <sobutton>
            了解更多
          </sobutton>
        </div>
      </div>
      <div class="flex flex-row-reverse">
        <img class="w-1/2 object-cover object-center" style="height: 45vh" :src="require('@/assets/imgs/head02.jpg')" alt="">
        <div class="w-1/2 flex flex-col items-center justify-center">
          <p class="text-4xl font-bold">
            CLAIRE's 的精神宗旨
          </p>
          <small class="mb-2 text-xl">
            追求美麗的權利 人人公平。
          </small>
          <sobutton>
            點我閱讀
          </sobutton>
        </div>
      </div>
    </div>
    <!--Section 2-->
    <div class="grid grid-cols-12 mb-20">
      <div class="col-span-9">
        <img class="h-88 w-full object-cover object-center" :src="require('@/assets/imgs/poster01.jpg')" alt="">
      </div>
      <div class="col-span-3 relative">
        <div
          class=" flex flex-col items-start absolute"
          style="top: 2rem;left: -4rem"
        >
          <p class="mb-2 px-3 py-1 text-4xl text-white bg-black">
            唇彩系列
          </p>
          <p>質地滑順 接觸雙唇完美融合</p>
          <p>讓人愛不釋手</p>
          <sobutton class="mt-2">
            發現更多
          </sobutton>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 mb-20">
      <div class="col-span-3 relative">
        <div
          class=" flex flex-col items-start absolute"
          style="top: 2rem;right: -4rem"
        >
          <p class="mb-2 px-3 py-1 text-4xl text-white bg-black">
            腮紅系列
          </p>
          <p>一抹瑕疵秒神隱 遠觀近看都無懈可擊</p>
          <p>重回自信光彩</p>
          <sobutton class="mt-2">
            發現更多
          </sobutton>
        </div>
      </div>
      <div class="col-span-9">
        <img class="h-88 w-full object-cover object-center" :src="require('@/assets/imgs/poster02.jpg')" alt="">
      </div>
    </div>
    <div class="grid grid-cols-12 mb-20">
      <div class="col-span-9">
        <img class="h-88 w-full object-cover object-center" :src="require('@/assets/imgs/poster03.jpg')" alt="">
      </div>
      <div class="col-span-3 relative">
        <div
          class=" flex flex-col items-start absolute"
          style="top: 2rem;left: -4rem"
        >
          <p class="mb-2 px-3 py-1 text-4xl text-white bg-black">
            指彩系列
          </p>
          <p>顏色繽紛飽滿 光亮持久</p>
          <p>展現個人魅力</p>
          <sobutton class="mt-2">
            發現更多
          </sobutton>
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
