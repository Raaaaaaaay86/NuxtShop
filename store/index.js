const state = () => ({
  loading: false,
});
/* eslint-disable */
const actions = {
  async nuxtServerInit({ dispatch }) {
    dispatch('products/getAll');
  },
};

const mutations = {
  LOADING_TRUE(state) {
    state.loading = true
  },
  LOADING_FALSE(state) {
    state.loading = false;
  },
};

const getters = {
  loading(state) {
    return state.loading;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
