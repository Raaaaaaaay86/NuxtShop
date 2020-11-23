<template>
  <div>
    <div>
      <table id="orderTable" class="w-11/12 lg:w-9/12 mx-auto mt-10 mb-4 select-none">
        <thead>
          <tr>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template>
            <tr v-for="info in orderDetail.products" :key="info.product.id">
              <td>{{ info.product.title }}</td>
              <td class="text-center">
                {{ info.qty }} {{ info.product.unit }}
              </td>
              <td class="text-right">
                NT$ {{ info.final_total | currency }}
              </td>
            </tr>
          </template>
          <tr id="orderTotal">
            <td colspan="3" class="text-right text-xl font-bold">
              總金額: NT$ {{ orderDetail.total | currency }}
            </td>
          </tr>
          <tr>
            <th class="text-left">
              付款狀態
            </th>
            <td
              colspan="2"
              :class=" orderDetail.is_paid ? 'text-green-600' : 'text-red-700'"
            >
              {{ orderDetail.is_paid ? '已付款' : '未付款' }}
            </td>
          </tr>
          <tr>
            <th class="text-left">
              訂購者姓名
            </th>
            <td colspan="2">
              {{ orderDetail.user.name }}
            </td>
          </tr>
          <tr>
            <th class="text-left">
              電子信箱
            </th>
            <td colspan="2">
              {{ orderDetail.user.email }}
            </td>
          </tr>
          <tr>
            <th class="text-left">
              收件地址
            </th>
            <td colspan="2">
              {{ orderDetail.user.address }}
            </td>
          </tr>
          <tr>
            <th class="text-left">
              連絡電話
            </th>
            <td colspan="2">
              {{ orderDetail.user.tel }}
            </td>
          </tr>
          <tr class="orderMessage">
            <th colspan="3" class="text-left">
              備註:
            </th>
          </tr>
          <tr class="orderMessage">
            <td colspan="3">
              <div class="flex justify-center">
                <textarea
                  v-model="orderDetail.message"
                  cols="30"
                  rows="10"
                  class="w-full p-2 border border-black outline-none resize-none"
                  readonly
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-center mb-4">
        <sbutton @click.native.prevent="pay">
          確認付款
        </sbutton>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, useContext } from '@nuxtjs/composition-api';
import privateInfo from '@/middleware/privateInfo';
import fetchOrderData from '@/middleware/fetchOrderData';

export default {
  async middleware(context) {
    privateInfo(context);
    await fetchOrderData(context, 'order/getDetail');
  },
  setup() {
    const { route, store, redirect } = useContext();
    const orderId = route.value.params.id;
    const orderDetail = computed(() => store.getters['order/orderDetail']);

    const pay = async () => {
      const success = await store.dispatch('order/pay', orderId);
      if (success) redirect(`/success/${orderId}`);
    };

    return {
      orderDetail,
      orderId,
      pay,
    };
  },
};
</script>

<style lang="scss" scoped>
  #orderTable {
    th {
      padding: 1rem 0.5rem 1rem 0.5rem;
      border-bottom: 1px solid rgba(209, 213, 219, 1);
    }

    td {
      padding: 1rem 0.5rem 1rem 0.5rem;
      border-bottom: 1px solid rgba(209, 213, 219, 1);
    }

    tr:hover {
      background-color: rgba(229, 231, 235, 1);;
    }

    #orderTotal td{
      border: none;
    }

    .orderMessage th, .orderMessage td{
      border: none;
    }

    .orderMessage:hover, thead tr:hover, #orderTotal:hover{
      background-color: transparent;
    }
  }
</style>
