/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const state = () => ({
});

const actions = {
  async use(context, code) {
    const data = {
      code,
    };
    const { success } = await this.$axios.$post('/coupon', { data });
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
