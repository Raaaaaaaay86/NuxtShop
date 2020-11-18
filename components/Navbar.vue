<template>
  <div>
    <img class="mx-auto my-4 cursor-pointer" width="150" height="40" :src="require('@/assets/svgs/logo.svg')" alt="">
    <div class="px-4 py-2 border-b border-black select-none">
      <ul class="flex justify-between box-border">
        <nuxt-link to="/">
          <li class="px-4 py-2 cursor-pointer">
            首頁
          </li>
        </nuxt-link>
        <nuxt-link to="/products">
          <li class="px-4 py-2 cursor-pointer">
            所有商品
          </li>
        </nuxt-link>
        <nuxt-link to="/products/lip">
          <li class="px-4 py-2 cursor-pointer">
            唇彩
          </li>
        </nuxt-link>
        <nuxt-link to="/products/nail">
          <li class="px-4 py-2 cursor-pointer">
            指彩
          </li>
        </nuxt-link>
        <nuxt-link to="/products/blush">
          <li class="px-4 py-2 cursor-pointer">
            腮紅
          </li>
        </nuxt-link>
        <li class="px-4 py-2 cursor-pointer">
          專櫃據點
        </li>
        <li class="px-4 py-2 cursor-pointer">
          關於我們
        </li>
        <li class="px-4 py-2">
          <i class="fas fa-caret-down" />
          <i class="fas fa-shopping-cart" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@nuxtjs/composition-api';

export default {
  setup() {
    onMounted(() => {});
  },
};
</script>
