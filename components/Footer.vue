<template>
  <div class="h-64 grid grid-cols-2 border-t border-black">
    <div class="flex justify-evenly items-center">
      <div>
        <img width="150" :src="require('@/assets/svgs/logo.svg')" alt="">
        <p class="text-xs font-bold text-center select-none">
          since 1997
        </p>
      </div>
      <div class="text-xs">
        <p>越來越美是因為越來越了解自己</p>
        <p>讓Claire's簡約的設計和色彩，襯出妳的個性</p>
        <p>產品之間靈活搭配，勾劃出妳獨特的另一面</p>
        <p>用最懂妳的彩粧，畫出最自在的粧感</p>
        <p>展現出最自然的你 為你的魅力應援</p>
      </div>
    </div>
    <div class="flex items-center">
      <div class="w-full flex justify-evenly">
        <ul>
          <li class="font-extrabold mb-2">
            線上服務
          </li>
          <li class="text-xs mb-1">
            工作機會
          </li>
          <li class="text-xs mb-1">
            隱私政策
          </li>
          <li class="text-xs mb-1">
            法律聲明
          </li>
          <li class="text-xs mb-1">
            常見問題
          </li>
          <li class="text-xs mb-1">
            保養與服務
          </li>
        </ul>
        <ul>
          <li class="font-extrabold mb-2">
            營業據點
          </li>
          <li class="text-xs mb-1">
            全台營業據點查詢
          </li>
        </ul>
        <ul>
          <li class="font-extrabold mb-2">
            社群媒體
          </li>
          <li class="text-xs mb-1">
            <i class="fab fa-facebook-square" />
            Facebook
          </li>
          <li class="text-xs mb-1">
            <i class="fab fa-instagram-square" />
            Instagram
          </li>
          <li class="text-xs mb-1">
            <i class="fab fa-twitter-square" />
            Twiiter
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
