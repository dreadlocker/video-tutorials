import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  // modules: {
  // }
  state: {
    isUserLoggedIn: false,
    isAdminLoggedIn: false,
  },
  mutations: {
    [types.IS_USER_LOGGED_IN]: (state, payload) => {
      state.isUserLoggedIn = payload;
    },
    [types.IS_ADMIN_LOGGED_IN]: (state, payload) => {
      state.isAdminLoggedIn = payload;
    },
  },
  actions: {
    [types.ACTION_IS_USER_LOGGED_IN]({ commit }, payload) {
      commit(types.IS_USER_LOGGED_IN, payload);
    },
    [types.ACTION_IS_ADMIN_LOGGED_IN]({ commit }, payload) {
      commit(types.IS_ADMIN_LOGGED_IN, payload);
    },
  },
});
