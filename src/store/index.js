import Vue from "vue";
import Vuex from "vuex";
import schedule from "@/data/schedule";
import chest from "@/data/chest";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schedule,
    chest,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
