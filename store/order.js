/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const state = () => ({
  orderDetail: {},
});

const actions = {
  async create(context, data) {
    const { orderId, success } = await this.$axios.$post('/order', { data });
    if (!success) return Promise.resolve(success);
    return Promise.resolve({ orderId, success });
  },
  async getList(context, page) {
    await this.$axios.$get(`/orders/${page}`);
  },
  async getDetail({ commit }, id) {
    const response = await this.$axios.$get(`/order/${id}`);
    const { order } = response;
    if (order === null) return Promise.resolve(false);
    commit('SET_DETAIL', order);
    return Promise.resolve(true);
  },
  async pay(context, orderId) {
    const { success } = await this.$axios.$post(`/pay/${orderId}`);
    if (!success) return Promise.resolve(success);
    return Promise.resolve(success);
  },
};

const mutations = {
  SET_DETAIL(state, orderDetail) {
    state.orderDetail = orderDetail;
  },
};

const getters = {
  orderDetail(state) {
    return state.orderDetail;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
