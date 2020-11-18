/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const apiPath = process.env.API_USER;

const state = () => ({
  pageProducts: [],
  pagination: {},
});

const actions = {
  async getPage({ commit }, page = 1) {
    console.log('fetching...');
    const { products, pagination } = await this.$axios.$get(`/api/${apiPath}/products?page=${page}`);

    await commit('SET_PAGE', { products, pagination });
    return Promise.resolve(true);
  },
  async getAll() {
    await this.$axios.$get(`/api/${apiPath}/products/all`);
  },
  async getDetail(context, { id }) {
    await this.$axios.$get(`/api/${apiPath}/product/${id}`);
  },
};

const mutations = {
  async SET_PAGE(state, { products, pagination }) {
    state.pageProducts = products;
    state.pagination = pagination;
  },
};

const getters = {
  pageProducts(state) {
    return state.pageProducts;
  },
  pagination(state) {
    return state.pagination;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
