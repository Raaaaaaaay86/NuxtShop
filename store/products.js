/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { openDB } from 'idb';

const apiPath = process.env.API_USER;
let productDBPromise;

if (!process.server) {
  productDBPromise = openDB('products-store', 1, {
    upgrade(db) {
      db.createObjectStore('products');
      db.createObjectStore('all-products');
    },
  });
}

const state = () => ({
  pageProducts: [],
  pagination: {},
  detail: {},
  randoms: [],
});

const actions = {
  async getPage({ commit }, page = '1') {
    if (!process.server) { // 先優先以 indexedDB 渲染
      const tx = (await productDBPromise).transaction('products', 'readonly');
      const response = await tx.store.get(page);
      if (response) {
        const { products, pagination } = response;
        commit('SET_PAGE', { products, pagination });
      }
    }

    try { // 背景繼續 fetch 作業
      const response = await this.$axios.$get(`/api/${apiPath}/products?page=${page}`);
      const { products, pagination } = response;

      if (!process.server) { // 每次 fetch 即更新 indexedDB
        const tx = (await productDBPromise).transaction('products', 'readwrite');
        await tx.store.put(response, page);
        await tx.done;
      }

      await commit('SET_PAGE', { products, pagination }); // 更新 IndexedDB 後，再更新渲染畫面
      return Promise.resolve(true);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getAll({ commit }, category) {
    if (!process.server) {
      const tx = (await productDBPromise).transaction('all-products', 'readonly');
      const response = await tx.store.get('all');
      if (response) {
        commit('SET_CATEGORY', { products: response, category });
      }
    }

    try {
      const { products } = await this.$axios.$get(`/api/${apiPath}/products/all`);

      if (!process.server) {
        const tx = (await productDBPromise).transaction('all-products', 'readwrite');
        await tx.store.put(products, 'all');
        await tx.done;
      }

      commit('SET_CATEGORY', { products, category });
      return Promise.resolve(true);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getDetail({ commit }, id) {
    const { product } = await this.$axios.$get(`/api/${apiPath}/product/${id}`);

    commit('SET_DETAIL', product);
    return Promise.resolve(true);
  },
  async getRandoms({ commit }) {
    const { products } = await this.$axios.$get(`/api/${apiPath}/products/all`);
    commit('SET_RANDOMS', products);
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
