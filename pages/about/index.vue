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
            我們不僅將經典法式美學傳遞至全世界，更致力於與所有女性分享正面價值觀，包括快樂、主宰自我人生的力量⋯鼓勵世界各地女性，享受美麗、享受人生，每一天都能擁有發自內心的燦爛笑容，散發屬於自己的耀眼風采。
          </p>
        </div>
        <div style="background-color: #292f33" class="flex-grow p-6 lg:p-12">
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
    <div class="w-full mt-8 px-4 grid grid-cols-2 grid-rows-60-2 gap-4 lg:grid-cols-4 lg:grid-rows-81-2 lg:gap-8">
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
    <!-- Section 3 -->
    <div class="mt-8 px-4 lg:h-120 grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2 lg:gap-x-8">
      <div style="background-color: #e8c1a2" class="p-4 lg:p-12 flex flex-col items-start lg:justify-end lg:items-end">
        <div>
          <h5 style="font-family: 'Playfair Display', serif;" class="text-6xl lg:text-8xl font-extrabold">
            01
          </h5>
          <div class="font-semibold">
            <p class="text-2xl lg:text-4xl">
              什麼都可以忘，<br>但要永遠記得美麗。
            </p>
          </div>
        </div>
      </div>
      <div class="flex p-4 md:p-6 lg:p-12 lg:items-end">
        <p class="font-semibold">
          為滿足妳追求多樣貌美麗的靈感來源！Claire's 是最貼近亞洲肌膚的時尚彩妝品牌專為亞洲女性膚質、膚色、輪廓所設計的彩妝品，能展現肌膚與生俱來的質感與特色！讓妳能藉由 Claire's 品味自己，對自我風格充滿自信！
        </p>
      </div>
    </div>
    <!-- Section 4 -->
    <div class="w-full mt-4 px-4 grid grid-cols-2 grid-rows-60-2 gap-4 lg:grid-cols-4 lg:grid-rows-81-2 lg:gap-8">
      <div class="col-start-1 col-end-3 row-start-1 row-span-2">
        <img class="h-full w-full object-cover object-top" :src="require('@/assets/imgs/aboutWall5.jpg')" alt="">
      </div>
      <div>
        <img class="h-full w-full object-cover object-top" :src="require('@/assets/imgs/aboutWall6.jpg')" alt="">
      </div>
      <div>
        <img class="h-full w-full object-cover object-top" :src="require('@/assets/imgs/aboutWall7.jpg')" alt="">
      </div>
      <div class="col-span-2 lg:col-span-1 lg:col-satrt-4 lg:col-end-5 lg:row-start-2 lg:row-end-3">
        <p class="font-semibold">
          - 能照顧好自己的，才是最美的女人。
        </p>
      </div>
    </div>
    <!-- Section 5 -->
    <div class="w-full mt-4 px-4 grid grid-cols-1 grid-rows-60-2 gap-4 lg:grid-cols-2 lg:grid-rows-81-2 lg:gap-8">
      <div class="p-4 md:p-6 lg:row-span-2 lg:p-12 lg:flex lg:items-center">
        <p class="font-semibold">
          近年來消費者對於化妝品與保養品的要求不只是要追求功能性，同時也可以追求用的安心健康。因此，創辦人起心動念致力開發開發國際最優質的美妝保養等產品，並且層層為消費者把關。藉由全球合作夥伴網路，審視各國當地最真實的口碑推薦，來提供真正優質的美妝保養品牌。
        </p>
      </div>
      <div class="row-start-1 lg:row-start-auto row-span-2">
        <img class="w-full h-full object-cover object-top" :src="require('@/assets/imgs/aboutWall8.jpg')" alt="">
      </div>
    </div>
    <!-- Section 6 -->
    <div class="mt-8 px-4 lg:h-120 grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2 lg:gap-x-8">
      <div style="background-color: #305470" class="p-4 lg:p-12 flex flex-col items-start lg:justify-end lg:items-end">
        <div>
          <h5 style="font-family: 'Playfair Display', serif;" class="text-6xl lg:text-8xl font-extrabold">
            02
          </h5>
          <div class="font-semibold">
            <p class="text-2xl lg:text-4xl">
              愛護自然，<br>是我們的責任。
            </p>
          </div>
        </div>
      </div>
      <div class="flex p-4 md:p-6 lg:p-12 lg:items-end">
        <p class="font-semibold">
          多年來堅持絕不採用動物實驗，台灣方面更經過長達六年的努力終於在2016年通過立法院反動物實驗立案。也不用華麗行銷手法及包裝剝削消費者，而是將利潤真實回饋會員，務求給會員最寵愛的尊榮體驗。我們深信企業能創造美好的世界，不為追求利潤而放棄原則，打破框架勇敢竭力推行道德企業理念。
        </p>
      </div>
    </div>
    <!-- Section 7 -->
    <div class="w-full mt-8 px-4 grid grid-cols-1 grid-rows-60-5 gap-4 lg:grid-cols-2 lg:grid-rows-81-3 lg:gap-8">
      <div style="background-color: #292f33" class="p-6 col-start-1 col-end-2 lg:row-start-2 row-span-2 lg:p-12">
        <div class="h-full p-4 lg:p-16 flex flex-col items-center justify-center border border-gray-300 text-yellow-200">
          <h5 class="text-4xl font-semibold mb-4 text-center">
            不受束縛
          </h5>
          <div class="text-xl text-center">
            大量的色彩，建構了 Claire's 的彩妝專業形象與氣勢。不論眼影、口紅與指甲油，都可以找到完全吻合，可以互相搭配的顏色。
          </div>
        </div>
      </div>
      <div class="row-span-2">
        <img class="w-full h-full object-cover object-top " :src="require('@/assets/imgs/aboutWall9.jpg')" alt="">
      </div>
      <div class="grid grid-cols-2 gap-x-4 lg:gap-x-8">
        <img class="w-full h-full object-cover object-top" :src="require('@/assets/imgs/aboutWall10.jpg')" alt="">
        <img class="w-full h-full object-cover object-top" :src="require('@/assets/imgs/aboutWall11.png')" alt="">
      </div>
    </div>
    <!-- Section 8 -->
    <div class="mt-8 px-4 lg:h-120 grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2 lg:gap-x-8">
      <div class="p-4 lg:p-12 flex flex-col items-start lg:justify-end lg:items-end">
        <div>
          <h5 style="font-family: 'Playfair Display', serif;" class="text-6xl lg:text-8xl font-extrabold">
            03
          </h5>
          <div class="font-semibold">
            <p class="text-2xl lg:text-4xl">
              專業本質，<br>打造獨一無二風格。
            </p>
          </div>
        </div>
      </div>
      <div class="flex p-4 md:p-6 lg:p-12 lg:items-end">
        <p class="font-semibold">
          Claire's 於各大百貨均有設櫃，我們的服務人員皆經過專業考核，才可以到第一線為每位客人服務。如果有任何關於美妝或保養上的問題，我們的服務人員都會竭盡所能幫助每位客人，確保能提供最高品質的服務。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
