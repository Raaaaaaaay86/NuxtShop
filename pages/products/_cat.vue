<template>
  <div>
    <!-- Banner -->
    <div
      class="p-20 carousel_item--550 bg-center bg-cover"
      :style="{ 'background-image': 'url(' + require('@/assets/imgs/banner1.jpg') + ')' }"
    >
      <div class="flex flex-col items-start">
        <h6 class="text-4xl font-bold mb-1">
          2020 秋冬全新感受
        </h6>
        <p class="mb-2">
          CLAIRE'S團隊打造的新色彩美學
        </p>
        <sbutton>
          查看購物車
        </sbutton>
      </div>
    </div>
    <!-- Prodcts Area -->
    <div class="my-4 grid grid-cols-3 gap-x-20 gap-y-20">
      <template>
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </template>
    </div>
    <div class="flex justify-center my-2">
      <Pagination :pagination="pagination" />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/UI/client/ProductCard';
import Pagination from '@/components/UI/client/Pagination';
import {
  computed,
  useContext,
  useFetch,
  watch,
  onUpdated,
} from '@nuxtjs/composition-api';

export default {
  components: {
    ProductCard,
    Pagination,
  },
  setup() {
    const { store, route } = useContext();
    const { page } = route.value.query;
    const products = computed(() => store.getters['products/pageProducts']);
    const pagination = computed(() => store.getters['products/pagination']);

    useFetch(async () => {
      if (route.value.params.cat) {
        await store.dispatch('products/getAll', route.value.params.cat);
        return;
      }
      await store.dispatch('products/getPage', page);
    });

    watch(route, (newRoute) => {
      store.dispatch('products/getPage', newRoute.query.page);
    });

    onUpdated(() => {
      window.scrollTo(0, 562);
    });

    return {
      products,
      pagination,
    };
  },
};
</script>
