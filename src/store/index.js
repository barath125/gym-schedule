import Vue from "vue";
import Vuex from "vuex";
import schedule from "@/data/schedule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schedule,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
