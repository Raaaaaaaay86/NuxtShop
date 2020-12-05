<template>
  <div>
    <div class="px-4 py-2 border-b border-black bg-white select-none">
      <div class="flex items-center justify-between lg:hidden">
        <div id="hamburger" class="px-4 pb-1 pt-2 border border-gray-500 rounded">
          <i class="fas fa-2x fa-bars" />
        </div>
        <nuxt-link to="/">
          <img class="mx-auto my-4 cursor-pointer select-none" width="150" height="40" :src="require('@/assets/svgs/logo.svg')" alt="">
        </nuxt-link>
        <nuxt-link class="cursor-pointer" :to="cartList.length === 0 ? '/products' : '/cart'">
          <i class="fas fa-2x fa-shopping-cart" />
        </nuxt-link>
      </div>
      <ul id="collapse-menu" class="lg:h-auto lg:flex justify-between box-border overflow-hidden lg:overflow-visible">
        <nuxt-link to="/">
          <li class="nav-item px-4 py-2 cursor-pointer">
            首頁
          </li>
        </nuxt-link>
        <nuxt-link to="/products">
          <li class="nav-item px-4 py-2 cursor-pointer">
            所有商品
          </li>
        </nuxt-link>
        <nuxt-link to="/products/lip">
          <li class="nav-item px-4 py-2 cursor-pointer">
            唇彩
          </li>
        </nuxt-link>
        <nuxt-link to="/products/nail">
          <li class="nav-item px-4 py-2 cursor-pointer">
            指彩
          </li>
        </nuxt-link>
        <nuxt-link to="/products/blush">
          <li class="nav-item px-4 py-2 cursor-pointer">
            腮紅
          </li>
        </nuxt-link>
        <li class="nav-item px-4 py-2 cursor-pointer">
          專櫃據點
        </li>
        <nuxt-link to="/about">
          <li class="nav-item px-4 py-2 cursor-pointer">
            關於我們
          </li>
        </nuxt-link>
        <li id="cart" class="hidden lg:block px-4 py-2 relative cursor-pointer">
          <i class="fas fa-caret-down" />
          <i class="fas fa-shopping-cart" />
          <div id="dropdown-menu" class="hide dropdown-menu dropdown-menu--right bg-white border border-gray-400 shadow rounded">
            <table class="w-full product-table">
              <thead>
                <tr class="text-xl">
                  <th width="50" />
                  <th>品名</th>
                  <th>數量</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody>
                <template>
                  <tr v-for="cart in cartList" :key="cart.id">
                    <td>
                      <div
                        class="w-10 h-10 flex items-center justify-center border border-black cursor-pointer"
                        @click.prevent="remove(cart.id)"
                      >
                        <i class="fas fa-trash-alt" />
                      </div>
                    </td>
                    <td>{{ cart.product.title }}</td>
                    <td>{{ cart.qty }}{{ cart.product.unit }}</td>
                    <td>$ {{ cart.final_total | currency }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
            <nuxt-link v-if="cartList.length === 0" to="/products" class="mt-auto mx-auto py-2 w-48 bg-black text-white text-center">
              購物去
            </nuxt-link>
            <nuxt-link v-else to="/cart" class="mt-auto mx-auto py-2 w-48 bg-black text-white text-center">
              結帳去
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  computed,
  onMounted,
  useContext,
} from '@nuxtjs/composition-api';

export default {
  setup() {
    const { store } = useContext();
    const cartList = computed(() => store.getters['cart/list']);

    onMounted(() => {
      const cartIcon = document.getElementById('cart');
      const dropdownMenu = document.getElementById('dropdown-menu');
      const hamburger = document.getElementById('hamburger');
      const collapseMenu = document.getElementById('collapse-menu');

      document.addEventListener('click', (e) => {
        if (e.target.parentNode === cartIcon || e.target === cartIcon) {
          dropdownMenu.classList.toggle('hide');
        }

        if (!cartIcon.contains(e.target)) {
          dropdownMenu.classList.add('hide');
        }

        if (e.target.classList.contains('nav-item')) {
          collapseMenu.classList.remove('show');
        }

        if (collapseMenu.classList.contains('show') && !collapseMenu.contains(e.target) && !hamburger.contains(e.target)) {
          collapseMenu.classList.remove('show');
        }
      });

      hamburger.addEventListener('click', () => {
        collapseMenu.classList.toggle('show');
      });
    });

    const remove = async (id) => {
      store.commit('LOADING_TRUE');
      await store.dispatch('cart/remove', id);
      store.commit('LOADING_FALSE');
    };

    return {
      cartList,
      remove,
    };
  },
};
</script>

<style lang="scss" scoped>
  .dropdown-menu {
    position: absolute;
    overflow: auto;
    width: 25rem;
    height: 15rem;
    padding: 0.5rem;
    display: flex;;
    flex-direction: column;
    &--right {
      top: 2.5rem;
      right: 0;
      left: auto;
    }
    &.hide {
      display: none;
    }
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      margin:0px 0 5px 0;
    }
    &::-webkit-scrollbar-thumb {
      -webkit-border-radius: 4px;
      border-radius: 4px;
      background: rgb(219,219,219);
    }
  };

  .product-table {
    thead tr th {
      text-align: center;
      padding: 1rem 0 1rem 0;
    }
    tbody tr td {
      text-align: center;
      padding: 1rem 0 1rem 0;
    }
  }

  @media (max-width: 1024px) {
    #collapse-menu {
      height: 0;
      transition: all .6s ease;
      &.show {
        height: 17rem;
      }
    }
  }

</style>
