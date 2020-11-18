/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

const apiPath = process.env.API_USER;

const state = () => ({
});

const actions = {
  async add(context, product) { // 如果已存在該物品，先刪除在相加之前數量
    await this.$axios.$get(`/api/${apiPath}/cart`, product);
  },
  async delete(context, id) {
    await this.$axios.$delete(`/api/${apiPath}/cart/${id}`);
  },
  async getList() {
    await this.$axios.$get(`/api/${apiPath}/cart`);
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
