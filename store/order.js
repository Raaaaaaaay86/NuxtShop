/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const apiPath = process.env.API_USER;

const state = () => ({
});

const actions = {
  async create() {
    await this.$axios.$get(`/api/${apiPath}/order`);
  },
  async getList(context, page) {
    await this.$axios.$get(`/api/${apiPath}/orders/${page}`);
  },
  async getDetail(context, id) {
    await this.$axios.$get(`/api/${apiPath}/order/${id}`);
  },
  async pay(context, orderId) {
    await this.$axios.$delete(`/api/${apiPath}/pay/${orderId}`);
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
