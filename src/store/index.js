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
    // TODO MAI MOGA BEZ DOLNITE 2, VMESTO TQH TRQBVA DA PROVERQVAM Object.keys(this.current_user).length > 0;
    is_user_logged_in: false,
    is_admin_logged_In: false,
    courses: [
      {
        id: 1,
        imageSrc: "",
        name: "React",
        info: "Lorem Ipsum",
        lectures: [
          {
            id: 1,
            name: "React Lecture 1",
            videoLink: "Video link 1",
          },
          {
            id: 2,
            name: "React Lecture 2",
            videoLink: "Video link 2",
          },
          {
            id: 3,
            name: "React Lecture 3",
            videoLink: "React Video link 3",
          },
        ],
        usersEnrolled: 2
      },
      {
        id: 4,
        imageSrc: "",
        name: "Angular",
        info: "Lorem Ipsum",
        lectures: [
          {
            id: 1,
            name: "Angular Lecture 1",
            videoLink: "Angular Video link 1",
          },
          {
            id: 2,
            name: "Angular Lecture 2",
            videoLink: "Angular Video link 2",
          },
          {
            id: 3,
            name: "Angular Lecture 3",
            videoLink: "Angular Video link 3",
          },
        ],
        usersEnrolled: 1
      },
      {
        id: 3,
        imageSrc: "",
        name: "Symfony",
        info: "Lorem Ipsum",
        lectures: [
          {
            id: 1,
            name: "Symfony Lecture 1",
            videoLink: "Symfony Video link 1",
          },
          {
            id: 2,
            name: "Symfony Lecture 2",
            videoLink: "Symfony Video link 2",
          },
          {
            id: 3,
            name: "Symfony Lecture 3",
            videoLink: "Symfony Video link 3",
          },
        ],
        usersEnrolled: 0
      },
      {
        id: 5,
        imageSrc: "",
        name: "Sprint MVC",
        info: "Lorem Ipsum",
        lectures: [
          {
            id: 1,
            name: "Sprint Lecture 1",
            videoLink: "Sprint Video link 1",
          },
          {
            id: 2,
            name: "Sprint Lecture 2",
            videoLink: "Sprint Video link 2",
          },
          {
            id: 3,
            name: "Sprint Lecture 3",
            videoLink: "Sprint Video link 3",
          },
        ],
        usersEnrolled: 0
      },
      {
        id: 2,
        imageSrc: "",
        name: "ASP .NET",
        info: "Lorem Ipsum",
        lectures: [
          {
            id: 1,
            nameASP : "ASP .NET Lecture 1",
            videoLink: "ASP .NET Video link 1",
          },
          {
            id: 2,
            name: "ASP .NET Lecture 2",
            videoLink: "ASP .NET Video link 2",
          },
          {
            id: 3,
            name: "ASP .NET Lecture 3",
            videoLink: "ASP .NET Video link 3",
          },
        ],
        usersEnrolled: 0
      },
      {
        id: 6,
        imageSrc: "",
        name: "Express",
        info: "Lorem Ipsum",
        lectures: [
          {
            id: 1,
            name: "Express Lecture 1",
            videoLink: "Express Video link 1",
          },
          {
            id: 2,
            name: "Express Lecture 2",
            videoLink: "Express Video link 2",
          },
          {
            id: 3,
            name: "Express Lecture 3",
            videoLink: "Express Video link 3",
          },
        ],
        usersEnrolled: 3
      },
    ],
    users: [],
    current_user: {}, // pri klik na Logout da go resetvam
  },
  mutations: {
    [types.IS_USER_LOGGED_IN]: (state, payload) => {
      state.is_user_logged_in = payload;
    },
    [types.IS_ADMIN_LOGGED_IN]: (state, payload) => {
      state.is_admin_logged_In = payload;
    },
    [types.SAVE_USERS]: (state, payload) => {
      state.users = payload;
    },
    [types.CURRENT_USER]: (state, payload) => {
      state.current_user = payload;
    },
  },
  actions: {
    [types.ACTION_IS_USER_LOGGED_IN]({ commit }, payload) {
      commit(types.IS_USER_LOGGED_IN, payload);
    },
    [types.ACTION_IS_ADMIN_LOGGED_IN]({ commit }, payload) {
      commit(types.IS_ADMIN_LOGGED_IN, payload);
    },
    [types.ACTION_SAVE_USERS]({ commit }, payload) {
      commit(types.SAVE_USERS, payload);
    },
    [types.ACTION_CURRENT_USER]({ commit }, payload) {
      commit(types.CURRENT_USER, payload);
    },
  },
});
