<template>
  <div class="py-4">
    <div class="px-3 grid grid-cols-1 gap-x-8 lg:px-8 lg:grid-cols-2">
      <div class="mb-8 lg:mb-0">
        <client-only>
          <table class="cart-table w-full p-4 border border-black">
            <thead>
              <tr>
                <th width="60" />
                <th width="200" style="max-width: 200px">
                  品名
                </th>
                <th>數量</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody>
              <template>
                <tr v-for="cart in cartList" :key="cart.id">
                  <td class="pl-4">
                    <div
                      class="w-10 h-10 flex items-center justify-center border border-black cursor-pointer hover:bg-black hover:text-white"
                      @click.prevent="remove(cart.id)"
                    >
                      <i class="fas fa-trash-alt" />
                    </div>
                  </td>
                  <td class="truncate" width="200" style="max-width: 200px">
                    {{ cart.product.title }}
                  </td>
                  <td>
                    <div class="flex justify-center items-baseline">
                      <div
                        class="calcu-btn mr-4 w-6 h-6 font-bold flex items-center justify-center border border-black select-none cursor-pointer"
                        @click.prevent="addCart(cart.product_id, -1)"
                      >
                        -
                      </div>
                      {{ cart.qty }}
                      <div
                        class="calcu-btn ml-4 w-6 h-6 font-bold flex items-center justify-center border border-black select-none cursor-pointer"
                        @click.prevent="addCart(cart.product_id, 1)"
                      >
                        +
                      </div>
                    </div>
                  </td>
                  <td :class=" cart.coupon ? 'text-green-700 font-bold' : '' ">
                    {{ cart['final_total'] }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" class="text-right">
                  總金額:
                  <span class="font-bold text-xl">
                    {{ totalPrice }}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </client-only>
        <div class="mt-4 h-8 flex border border-black rounded relative">
          <input
            v-model="couponCode"
            type="text"
            class="flex-grow outline-none pl-4"
            placeholder="請輸入優惠碼"
            @keyup.enter.prevent="useCoupon"
          >
          <div
            class="w-32 h-full flex justify-center items-center bg-black text-white select-none cursor-pointer"
            @click.prevent="useCoupon"
          >
            套用優惠碼
          </div>
        </div>
        <small :class="couponStatus ? 'text-green-600' : 'text-red-600'">
          {{ couponMsg }}
        </small>
      </div>
      <div class="pt-2 px-4 lg:px-8 pb-4 border border-black">
        <h1 class="text-4xl font-bold text-center">
          訂單資料
        </h1>
        <client-only>
          <ValidationObserver v-slot="{ invalid }" @submit.prevent="createOrder">
            <form class="grid grid-cols-12 lg:gap-x-8">
              <ValidationProvider
                v-slot="{ errors }"
                class="col-span-12 flex flex-col mb-4"
                rules="required"
              >
                <label for="email" class="mb-2">電子信箱*</label>
                <input v-model="form.email" type="email" name="email" class="border border-black h-12">
                <span v-if="errors[0]" class="text-red-700">
                  {{ '電子信箱' + errors[0] }}
                </span>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                class="mr-1 mb-4 col-span-6 flex flex-col lg:mr-0"
                rules="required"
              >
                <label for="name" class="mb-2">收件人姓名*</label>
                <input v-model="form.name" type="text" name="name" class="border border-black h-12">
                <span v-if="errors[0]" class="text-red-700">
                  {{ '姓名' + errors[0] }}
                </span>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                class="ml-1 mb-4 col-span-6 flex flex-col lg:ml-0"
                rules="required"
              >
                <label for="tel" class="mb-2">收件人電話*</label>
                <input v-model="form.tel" type="tel" name="tel" class="border border-black h-12">
                <span v-if="errors[0]" class="text-red-700">
                  {{ '電話' + errors[0] }}
                </span>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                class="col-span-12 flex flex-col mb-4"
                rules="required"
              >
                <label for="address" class="mb-2">收件地址*</label>
                <input v-model="form.address" type="text" name="address" class="border border-black h-12">
                <span v-if="errors[0]" class="text-red-700">
                  {{ '地址' + errors[0] }}
                </span>
              </ValidationProvider>
              <div class="col-span-12 flex flex-col mb-4">
                <label for="ps" class="mb-2">備註</label>
                <textarea v-model="message" name="ps" cols="30" rows="6" class="border border-black" />
              </div>
              <button
                class="col-span-12 py-2 outline-none"
                :class="invalid ? ' bg-gray-500 text-white' : 'bg-black text-white'"
                @create.prevent="createOrder"
              >
                送出訂單
              </button>
            </form>
          </ValidationObserver>
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
import {
  reactive,
  computed,
  useContext,
  ref,
} from '@nuxtjs/composition-api';

export default {
  setup() {
    const { store, redirect } = useContext();
    const form = reactive({});
    const message = ref('');
    const couponCode = ref('');
    const cartList = computed(() => store.getters['cart/list']);
    const totalPrice = computed(() => store.getters['cart/totalPrice']);
    const isLoading = computed(() => store.getters.isLoading);

    const addCart = async (id, qty) => {
      if (isLoading.value) return;
      const data = {
        product_id: id,
        qty,
      };

      store.commit('LOADING_TRUE');
      await store.dispatch('cart/add', data);
      store.commit('LOADING_FALSE');
    };

    const remove = async (id) => {
      store.commit('LOADING_TRUE');
      await store.dispatch('cart/remove', id);
      store.commit('LOADING_FALSE');
    };

    const couponMsg = ref('');
    const couponStatus = ref(true);
    const useCoupon = async () => {
      const success = await store.dispatch('coupon/use', couponCode.value);
      if (success) {
        couponStatus.value = true;
        couponMsg.value = '成功套用優惠券';
      } else {
        couponStatus.value = false;
        couponMsg.value = '優惠券代碼不存在或已過期';
      }
      store.dispatch('cart/getList');
    };

    const createOrder = async () => {
      const data = {
        user: {
          ...form,
        },
        message: message.value,
      };
      const response = await store.dispatch('order/create', data);
      if (!response) return false;
      return redirect(`/order/${response.orderId}`);
    };

    return {
      couponStatus,
      createOrder,
      totalPrice,
      couponCode,
      couponMsg,
      useCoupon,
      cartList,
      message,
      addCart,
      remove,
      form,
    };
  },
};
</script>
<style lang="scss" scoped>
  .cart-table {
    thead tr th {
      text-align: center;
      padding: 1rem 1rem 1rem 1rem;
    }
    tbody tr td {
      text-align: center;
      padding: 1rem 1rem 1rem 1rem;
      &:last-of-type {
        text-align: right;
      }
      @media (max-width: 640px) {
        padding: 0.5rem;
      }
    }
    tfoot tr td {
      padding: 1rem 1rem 1rem;
    }
  }

  .calcu-btn {
    &:hover {
      transform: scale(1.10);
    }
    &:active {
      transform: scale(0.9);
    }
  }
</style>
