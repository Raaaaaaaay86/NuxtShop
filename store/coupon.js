/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const apiPath = process.env.API_USER;

const state = () => ({
});

const actions = {
  async use(context, code) {
    const data = {
      code,
    };
    const { success } = await this.$axios.$post(`/api/${apiPath}/coupon`, { data });
    if (!success) return Promise.resolve(success);
    return Promise.resolve(success);
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
