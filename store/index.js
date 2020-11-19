const state = () => ({

});
/* eslint-disable */
const actions = {
  async nuxtServerInit({ dispatch }) {
    dispatch('products/getAll');
  },
};

const mutations = {

};

const getters = {

};

export default {
  state,
  actions,
  mutations,
  getters,
};
