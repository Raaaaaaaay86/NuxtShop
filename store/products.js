/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const apiPath = process.env.API_USER;

const state = () => ({
  pageProducts: [],
  pagination: {},
  all: [],
  detail: {},
});

const actions = {
  async getPage({ commit }, page = 1) {
    console.log('fetching...');
    const { products, pagination } = await this.$axios.$get(`/api/${apiPath}/products?page=${page}`);

    await commit('SET_PAGE', { products, pagination });
    return Promise.resolve(true);
  },
  async getAll({ commit }, category) {
    console.log('fetching with Category...');
    const { products } = await this.$axios.$get(`/api/${apiPath}/products/all`);

    commit('SET_CATEGORY', { products, category });
    return Promise.resolve(true);
  },
  async getDetail({ commit }, id) {
    console.log('fetching detail...', id);
    const { product } = await this.$axios.$get(`/api/${apiPath}/product/${id}`);

    commit('SET_DETAIL', product);
    return Promise.resolve(true);
  },
};

const mutations = {
  SET_PAGE(state, { products, pagination }) {
    state.pageProducts = products;
    state.pagination = pagination;
  },
  SET_CATEGORY(state, { products, category }) {
    const filtered = products.filter((el) => el.category === category);
    state.pageProducts = filtered;
    state.pagination = {
      total_pages: 1,
      current_page: 1,
      has_pre: false,
      has_next: false,
      category: null,
    };
  },
  SET_DETAIL(state, product) {
    state.detail = product;
  },
  RESET_DETAIL(state) {
    state.detail = {};
  },
  SET_ALL(state, products) {
    state.all = products;
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
};

export default {
  state,
  actions,
  mutations,
  getters,
};
