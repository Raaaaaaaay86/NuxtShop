<template>
  <div>
    <nuxt-link :to="`/product/${product.id}`" class="card__header select-none cursor-pointer">
      <div
        class="p-4 flex justify-end bg-cover bg-center bg-no-repeat"
        :class="smallMode ? 'h-64' : 'h-88'"
        :style="{ 'background-image': 'url(' + product.imageUrl + ')' }"
      >
        <i
          v-if="selected"
          class="fas fa-star card__star"
          :class="selected ? 'block-i' : ''"
          @click.prevent="toggleSelect"
        />
        <i v-else class="far fa-star card__star" @click.prevent="toggleSelect" />
      </div>
      <div class="pt-2 flex flex-col items-center">
        <span class="card__bottomLine" />
        <h5 class="mt-2 text-xl font-bold">
          {{ product.title }}
        </h5>
        <small class="text-xs my-2">
          {{ product.intro }}
        </small>
      </div>
    </nuxt-link>
    <div class="mb-8 flex flex-col items-center">
      <h6 class="font-bold mb-2">
        NT$ {{ product.originPrice }}
      </h6>
      <nuxt-link :to="`/product/${product.id}`" class="cursor-pointer">
        查看詳情
        <i class="fas fa-chevron-right" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    select: {
      type: Boolean,
      default: false,
    },
    smallMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  computed: {
    isSelected: {
      get() {
        return this.selected;
      },
      set(value) {
        this.selected = value;
      },
    },
  },
  methods: {
    toggleSelect() {
      this.isSelected = !this.isSelected;
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    &__header {
      &:hover {
        .card__bottomLine {
          border-bottom: 3px solid black;
        }
        .card__star {
          display: block;
        }
      }
    }
    &__bottomLine {
      width: 100%;
      border-bottom: 3px solid transparent;
      transition: all 0.3s;
    }
    &__star {
      display: none;
    }
  }

  .block-i {
    display: block !important;
  }
</style>
