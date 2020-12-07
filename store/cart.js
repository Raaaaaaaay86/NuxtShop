/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const state = () => ({
  list: [],
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
    const ress = await this.$axios.$get('/cart');
    console.log(ress);
    const { data: { carts } } = ress;
    commit('SET_LIST', carts);
  },
};

const mutations = {
  SET_LIST(state, cartList) {
    state.list = cartList;
  },
};

const getters = {
  list(state) {
    return state.list;
  },
  totalPrice(state) {
    let total = 0;
    state.list.forEach((cart) => {
      total += cart.final_total;
    });
    return total;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
