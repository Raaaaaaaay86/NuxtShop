/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const state = () => ({
  list: [],
  origin_total: 0,
  final_total: 0,
});

const actions = {
  async add({ dispatch }, data) {
    await this.$axios.$post('/cart', { data });
    dispatch('getList');
  },
  async remove({ dispatch }, id) {
    await this.$axios.$delete(`/cart/${id}`);
    dispatch('getList');
  },
  async getList({ commit }) {
    const { origin_total, final_total, data: { carts } } = await this.$axios.$get('/cart');
    commit('SET_LIST', carts);
    commit('SET_BILL', { origin_total, final_total });
  },
};

const mutations = {
  SET_LIST(state, cartList) {
    state.list = cartList;
  },
  SET_BILL(state, { origin_total, final_total }) {
    state.origin_total = origin_total;
    state.final_total = final_total;
  },
};

const getters = {
  list(state) {
    return state.list;
  },
  finalTotal(state) {
    return state.final_total;
  },
  originTotal(state) {
    return state.origin_total;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
