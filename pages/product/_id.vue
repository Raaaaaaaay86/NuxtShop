<template>
  <div>
    <div class="my-8 px-3 grid grid-cols-2">
      <div class="col-span-full lg:col-span-1">
        <img
          class="mx-auto w-64 h-64 object-cover object-center lg:w-120 lg:h-120"
          :src="product.imageUrl"
          :alt="`${product.title}${product.category}`"
        >
      </div>
      <div class="flex flex-col justify-center col-span-full lg:col-span-1">
        <div>
          <div class="flex items-baseline border-b-4 border-black">
            <h1 class="text-4xl lg:text-5xl xl:text-6xl mr-2">
              {{ product.title }}
            </h1>
            <span class="py-1 px-3 text-xs text-white bg-black rounded">
              {{ product.category }}
            </span>
          </div>
          <p class="mt-2 mb-4">
            {{ product.description }}
          </p>
          <div class="mb-4">
            <p class="mb-2 font-bold">
              產品介紹:
            </p>
            <p>
              {{ product.content }}
            </p>
          </div>
          <div class="mb-4 flex items-baseline justify-between">
            <span class="text-xl line-through">
              原價: {{ product.originPrice | currency }}
            </span>
            <span class="text-3xl">
              售價:
              <span class="font-bold">
                {{ product.price | currency }}
              </span>
            </span>
          </div>
          <div class="grid grid-cols-2">
            <div>
              <p class="mb-2">
                選購商品數量
              </p>
              <select v-model="qty" class="w-full py-2 border border-black">
                <option value="1">
                  1 支
                </option>
                <option value="2">
                  2 支
                </option>
                <option value="3">
                  3 支
                </option>
                <option value="4">
                  4 支
                </option>
                <option value="5">
                  5 支
                </option>
              </select>
            </div>
            <div class="flex items-end justify-end">
              <sbutton @click.native.prevent="addCart">
                <i v-if="isLoading" class="fas fa-spinner fa-spin" />
                加入購物車
              </sbutton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-center text-3xl border-b border-black">
        產品評論
      </p>
      <div class="mb-4 mt-10 grid grid-cols-2">
        <div class="flex items-center justify-center col-span-full lg:col-span-1">
          <div class="w-32 mr-4 h-32 p-4 flex flex-col justify-center items-center border-4 border-black">
            <p class="text-4xl font-bold">
              4.5
            </p>
            <p class="text-xl">
              商品評價
            </p>
          </div>
          <div>
            <p class="text-xl">
              2 個商品評論
            </p>
            <div class="text-warning">
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
        <div class="hidden lg:flex flex-col justify-center items-center select-none">
          <div class="flex items-center">
            5<i class="fas fa-star text-warning ml-1 mr-4" />
            <div class="bg-gray-600" style="width: 150px; height: 14px">
              <div class="bg-warning h-full" style="width: 50%;" />
            </div>
          </div>
          <div class="flex items-center">
            4<i class="fas fa-star text-warning ml-1 mr-4" />
            <div class="bg-gray-600" style="width: 150px; height: 14px">
              <div class="bg-warning h-full" style="width: 50%;" />
            </div>
          </div>
          <div class="flex items-center">
            3<i class="fas fa-star text-warning ml-1 mr-4" />
            <div class="bg-gray-600" style="width: 150px; height: 14px">
              <div class="bg-warning h-full" style="width: 0%;" />
            </div>
          </div>
          <div class="flex items-center">
            2<i class="fas fa-star text-warning ml-1 mr-4" />
            <div class="bg-gray-600" style="width: 150px; height: 14px">
              <div class="bg-warning h-full" style="width: 0%;" />
            </div>
          </div>
          <div class="flex items-center">
            1<i class="fas fa-star text-warning ml-1 mr-4" />
            <div class="bg-gray-600" style="width: 150px; height: 14px">
              <div class="bg-warning h-full" style="width: 0%;" />
            </div>
          </div>
        </div>
      </div>
      <div class="py-4 px-4 border-b border-black">
        <div class="flex justify-between">
          <p class="mb-1">
            陳**
          </p>
          <p>2020-12-25</p>
        </div>
        <div class="mb-2 flex text-warning">
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star" />
        </div>
        <p>
          好評！ 性價比高 品質很好 很滿意，發貨時間快
        </p>
      </div>
      <div class="py-4 px-4">
        <div class="flex justify-between">
          <p class="mb-1">
            楊**
          </p>
          <p>2020-12-31</p>
        </div>
        <div class="mb-2 flex text-warning">
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star-half-alt" />
        </div>
        <p>
          讚! 十分有質感 ! 使用之後經常有人和我詢問是哪個品牌 !
        </p>
      </div>
    </div>
    <div class="pt-8">
      <h6 class="mb-4 text-3xl text-center">
        您可能會喜歡這些...
      </h6>
      <div class="px-3 grid grid-cols-2 gap-4 lg:gap-x-20 lg:grid-cols-4">
        <template>
          <ProductCard v-for="product in randoms" :key="product.id" :product="product" small-mode />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/UI/client/ProductCard';
import {
  useContext,
  computed,
  ref,
} from '@nuxtjs/composition-api';

export default {
  components: {
    ProductCard,
  },
  async middleware({ store, route }) {
    const { id } = route.params;

    store.commit('products/TEMPORARY_DETAIL', id);
    await store.dispatch('products/getRandoms');
    await store.dispatch('products/getDetail', id);
  },
  setup() {
    const { store } = useContext();
    const product = computed(() => store.getters['products/detail']);
    const randoms = computed(() => store.getters['products/randoms']);
    const isLoading = computed(() => store.getters.loading);
    const qty = ref('1');

    const addCart = async () => {
      if (isLoading.value) return;
      const data = {
        product_id: product.value.id,
        qty: qty.value,
      };

      store.commit('LOADING_TRUE');
      await store.dispatch('cart/add', data);
      store.commit('LOADING_FALSE');
    };

    return {
      product,
      randoms,
      qty,
      addCart,
      isLoading,
    };
  },
};
</script>
