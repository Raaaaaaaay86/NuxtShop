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
  async getAll({ commit }, category) {
    console.log('fetching with Category...');
    const { products } = await this.$axios.$get(`/api/${apiPath}/products/all`);

    commit('SET_CATEGORY', { products, category });
    return Promise.resolve(true);
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
