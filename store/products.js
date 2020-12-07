/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const state = () => ({
  pageProducts: [],
  pagination: {},
  detail: {},
  randoms: [],
});

const actions = {
  async getPage({ commit }, { page, cat }) {
    const { products, pagination } = await this.$axios.$get(`/products?cat=${cat}&page=${page}`);
    await commit('SET_PAGE', { products, pagination });
    return Promise.resolve(true);
  },
  async getDetail({ commit }, id) {
    const { product } = await this.$axios.$get(`/products/${id}`);
    commit('SET_DETAIL', product);
    return Promise.resolve(true);
  },
  async getRandoms({ commit }) {
    const { products } = await this.$axios.$get('/products/all');
    commit('SET_RANDOMS', products);
  },
};

const mutations = {
  SET_PAGE(state, { products, pagination }) {
    state.pageProducts = products;
    state.pagination = pagination;
  },
  SET_DETAIL(state, product) {
    state.detail = product;
  },
  RESET_DETAIL(state) {
    state.detail = {};
  },
  TEMPORARY_DETAIL(state, id) {
    const product = state.pageProducts.filter((el) => el.id === id);
    if (!product[0]) return;
    [state.detail] = product;
  },
  SET_RANDOMS(state, products) {
    products.sort(() => Math.random() - 0.5);
    state.randoms = products.slice(0, 4);
  },
};

const getters = {
  pageProducts(state) {
    return state.pageProducts;
  },
  pagination(state) {
    return state.pagination;
  },
  detail(state) {
    return state.detail;
  },
  randoms(state) {
    return state.randoms;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
