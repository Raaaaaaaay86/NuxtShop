<template>
  <div class="py-4">
    <!--Section 1-->
    <div class="px-4 grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <div class="flex flex-col items-center">
        <img class="h-120 lg:h-162 w-full object-cover" :src="require('@/assets/imgs/about0.jpg')" alt="">
        <img class="w-full my-8 lg:my-16 object-fill transform -rotate-12" :src="require('@/assets/imgs/aboutSig0.png')" alt="">
      </div>
      <div class="flex flex-col justify-center items-center">
        <div style="border-color: #D0CEBF;" class="my-8 lg:my-16 py-10 px-8 border-l-8">
          <p class="text-xl font-semibold">
            我們不僅將經典法式美學傳遞至全世界，更致力於與所有女性分享正面價值觀，包括Happiness快樂、Empowerment主宰自我人生的力量⋯鼓勵世界各地女性，享受美麗、享受人生，每一天都能擁有發自內心的燦爛笑容，散發屬於自己的耀眼風采。
          </p>
        </div>
        <div style="background-color: #292f33" class="flex-grow bg-black p-6 lg:p-12">
          <div class="h-full p-4 lg:p-16 flex flex-col items-center justify-center border border-gray-300 text-yellow-200">
            <h5 class="text-4xl font-semibold mb-4 text-center">
              深懂你心
            </h5>
            <div class="text-xl text-center">
              越來越美，是因為越來越了解自己。
              讓簡約的設計和色彩，襯出妳的個性。
              產品之間靈活搭配，勾劃出妳獨特的另一面。
              用最懂妳的彩妝，畫出最自在的妝感吧。
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Section 2-->
    <div class="grid-imageWall mt-8 w-full">
      <div class="col-start-1 col-end-3 row-start-1 row-span-2">
        <img class="h-full w-full object-cover object-top" :src="require('@/assets/imgs/aboutWall0.jpg')" alt="">
      </div>
      <div class="">
        <img class="h-full w-full object-cover" :src="require('@/assets/imgs/aboutWall1.jpg')" alt="">
      </div>
      <div class="">
        <img class="h-full w-full object-cover" :src="require('@/assets/imgs/aboutWall2.jpg')" alt="">
      </div>
      <div class="">
        <img class="h-full w-full object-cover" :src="require('@/assets/imgs/aboutWall3.jpg')" alt="">
      </div>
      <div class="">
        <img class="h-full w-full object-cover" :src="require('@/assets/imgs/aboutWall4.jpg')" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .grid-imageWall {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 20rem));
    grid-gap: 2rem;
    padding: 0 1rem 0 1rem;
    @media (max-width: 1280px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(0, 15rem));
      grid-gap: 1rem;
    }
  }
</style>
