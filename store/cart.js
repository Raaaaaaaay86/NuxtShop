/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const apiPath = process.env.API_USER;

const state = () => ({
  list: [],
});

const actions = {
  async add({ dispatch, state }, data) {
    let needRemove = false;
    let removeId = '';

    for (let i = 0; i < state.list.length; i += 1) {
      const cart = state.list[i];
      if (cart.product_id === data.product_id) {
        const a = parseInt(data.qty, 10);
        const b = parseInt(cart.qty, 10);

        data.qty = a + b;

        needRemove = true;
        removeId = cart.id;
        break;
      }
    }

    if (needRemove) await dispatch('remove', removeId);

    await this.$axios.$post(`/api/${apiPath}/cart`, { data });
    dispatch('getList');
  },
  async remove({ dispatch }, id) {
    await this.$axios.$delete(`/api/${apiPath}/cart/${id}`);
    dispatch('getList');
  },
  async getList({ commit }) {
    const { data: { carts } } = await this.$axios.$get(`/api/${apiPath}/cart`);
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
