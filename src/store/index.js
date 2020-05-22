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
    is_user_logged_in: false,
    is_admin_logged_In: false,
    courses: [
      {
        id: 1,
        imageSrc: "",
        name: "React",
        info: "Lorem Ipsum",
        usersEnrolled: 2
      },
      {
        id: 4,
        imageSrc: "",
        name: "Angular",
        info: "Lorem Ipsum",
        usersEnrolled: 1
      },
      {
        id: 3,
        imageSrc: "",
        name: "Symfony",
        info: "Lorem Ipsum",
        usersEnrolled: 0
      },
      {
        id: 5,
        imageSrc: "",
        name: "Sprint MVC",
        info: "Lorem Ipsum",
        usersEnrolled: 0
      },
      {
        id: 2,
        imageSrc: "",
        name: "ASP .NET",
        info: "Lorem Ipsum",
        usersEnrolled: 0
      },
      {
        id: 6,
        imageSrc: "",
        name: "Express",
        info: "Lorem Ipsum",
        usersEnrolled: 3
      },
    ],
    users: []
  },
  mutations: {
    [types.IS_USER_LOGGED_IN]: (state, payload) => {
      state.is_user_logged_in = payload;
    },
    [types.IS_ADMIN_LOGGED_IN]: (state, payload) => {
      state.is_admin_logged_In = payload;
    },
    [types.ADD_USER]: (state, payload) => {
      state.users.push(payload);
    },
  },
  actions: {
    [types.ACTION_IS_USER_LOGGED_IN]({ commit }, payload) {
      commit(types.IS_USER_LOGGED_IN, payload);
    },
    [types.ACTION_IS_ADMIN_LOGGED_IN]({ commit }, payload) {
      commit(types.IS_ADMIN_LOGGED_IN, payload);
    },
    [types.ACTION_ADD_USER]({ commit }, payload) {
      commit(types.ADD_USER, payload);
    },
  },
});
