<template>
  <div class="py-8 flex flex-col items-center justify-center">
    <div class="mb-4 w-32 h-32 flex items-center justify-center bg-green-500 text-white rounded-full">
      <i class="fas fa-5x fa-check" />
    </div>
    <h1 class="mb-4">
      已成功付款
    </h1>
    <p class="mb-4">
      感謝您在CLAIRE's消費，以下是訂單明細<br>( 編號: {{ orderId }} )
    </p>
    <table class="w-10/12 lg:w-7/12 mb-8">
      <thead>
        <th>產品名稱</th>
        <th>數量</th>
        <th>小計</th>
      </thead>
      <tbody>
        <template>
          <tr v-for="info in orderDetail.products" :key="info.product.id">
            <td>
              {{ info.product.title }}
            </td>
            <td class="text-center">
              {{ info.qty }} {{ info.product.unit }}
            </td>
            <td class="text-right">
              {{ info.final_total }}
            </td>
          </tr>
        </template>
        <tr id="orderTotal">
          <td colspan="3">
            總金額: {{ orderDetail.total }}
          </td>
        </tr>
        <tr>
          <th>收件人</th>
          <td colspan="2">
            {{ orderDetail.user.name }}
          </td>
        </tr>
        <tr>
          <th>電子信箱</th>
          <td colspan="2">
            {{ orderDetail.user.email }}
          </td>
        </tr>
        <tr>
          <th>收件地址</th>
          <td colspan="2">
            {{ orderDetail.user.address }}
          </td>
        </tr>
        <tr>
          <th>連絡電話</th>
          <td colspan="2">
            {{ orderDetail.user.tel }}
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <nuxt-link to="/">
        <sbutton>
          繼續購物
        </sbutton>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { computed, useContext } from '@nuxtjs/composition-api';

export default {
  async middleware({ store, route, redirect }) {
    const orderId = route.params.id;
    const success = await store.dispatch('order/getDetail', orderId);
    if (!success) return redirect('/');
    return true;
  },
  setup() {
    const { route, store } = useContext();
    const orderId = route.value.params.id;
    const orderDetail = computed(() => store.getters['order/orderDetail']);

    return {
      orderDetail,
      orderId,
    };
  },
};
</script>

<style lang="scss" scoped>
  table {
    tbody > tr > th {
      text-align: left;
    }
    tbody > tr#orderTotal > td {
      text-align: right;
    }
    td , th {
      padding: 0.5rem 0 0.5rem 0;
      border-bottom: 1px solid rgba(209, 213, 219, 1);
    }
  }
</style>
