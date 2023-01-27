import Vue from "vue";
import Vuex from "vuex";
import schedule from "@/data/schedule";
import chest from "@/data/chest";
import lat from "@/data/lat";
import leg from "@/data/leg";
import shoulder from "@/data/shoulder";
import bi_tri from "@/data/bi_tri";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schedule,
    chest,
    lat,
    leg,
    shoulder,
    bi_tri,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
