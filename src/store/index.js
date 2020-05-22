import Vue from "vue";
import Vuex from "vuex";
// import * as types from "./types";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  // modules: {
  // }
  state: {
  // modules: {
  // }
    // beers_array: 1
  },
  mutations: {
    // [types.BEERS_ARRAY]: (state, payload) => {
    //   state.berrsArray = payload;
    // }
  },
  actions: {
    // [types.ACTION_BEERS_ARRAY]({ commit }, payload) {
    //   commit(types.BEERS_ARRAY, payload);
    // }
  },
});
