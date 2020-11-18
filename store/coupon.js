/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const apiPath = process.env.API_USER;

const state = () => ({
});

const actions = {
  async use(context, code) {
    await this.$axios.$post(`/api/${apiPath}/cart`, { code });
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
