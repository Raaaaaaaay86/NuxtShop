<template>
  <div class="flex select-none">
    <div
      class="mr-3 w-10 h-10 justify-center items-center flex border "
      :class="pagination['has_pre'] ? 'border-black cursor-pointer' : 'text-gray-500'"
      @click.prevent="goTo(pagination['current_page'] - 1)"
    >
      <i class="fas fa-caret-left" />
    </div>
    <template>
      <div
        v-for="(page, index) in pagination['total_pages']"
        :key="index"
        class="mr-3 w-10 h-10 flex justify-center items-center border border-black cursor-pointer"
        :class="pagination['current_page'] === index + 1 ? 'bg-gray-400' : ''"
        @click.prevent="goTo(index + 1)"
      >
        <span
          class="font-extrabold"
        >
          {{ index + 1 }}
        </span>
      </div>
    </template>
    <div
      class="mr-3 w-10 h-10 justify-center items-center flex border border-black "
      :class="pagination['has_next'] ? 'cursor-pointer' : 'text-gray-500'"
      @click.prevent="goTo(pagination['current_page'] + 1)"
    >
      <i class="fas fa-caret-right" />
    </div>
  </div>
</template>

<script>
import { useContext } from '@nuxtjs/composition-api';

export default {
  props: {
    pagination: {
      type: Object,
      required: false,
      default: () => ({
        total_pages: 1,
        current_page: 1,
        has_pre: false,
        has_next: false,
        category: null,
      }),
    },
  },
  setup() {
    const { redirect } = useContext();

    const goTo = (page) => {
      redirect({ path: '/products', query: { page } });
    };

    return {
      goTo,
    };
  },
};
</script>
