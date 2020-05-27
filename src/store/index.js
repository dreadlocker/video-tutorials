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
    public_courses: [
      {
        id: 1,
        imageUrl: "https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg",
        title: "React",
        description: "Lorem Ipsum",
        usersEnrolled: 2,
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
          {
            id: 4,
            name: "React Lecture 4",
            videoLink: "React Video link 4",
          },
        ],
      },
      {
        id: 4,
        imageUrl: "data:image/png;base64,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",
        title: "Angular",
        description: "Lorem Ipsum",
        usersEnrolled: 1,
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
      },
      {
        id: 3,
        imageUrl: "https://i.pinimg.com/originals/25/9b/ee/259beeb9275f3ea219cf5fef37a2766a.png",
        title: "Symfony",
        description: "Lorem Ipsum",
        usersEnrolled: 0,
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
      },
      {
        id: 5,
        imageUrl: "https://5.imimg.com/data5/CO/RG/WK/GLADMIN-14526645/selection-036-500x500.png",
        title: "Sprint MVC",
        description: "Lorem Ipsum",
        usersEnrolled: 0,
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
          {
            id: 4,
            name: "Sprint Lecture 4",
            videoLink: "Sprint Video link 4",
          },
          {
            id: 5,
            name: "Sprint Lecture 5",
            videoLink: "Sprint Video link 5",
          },
        ],
      },
      {
        id: 2,
        imageUrl: "https://geeks.ms/clanderas/wp-content/uploads/sites/275/2016/10/asp_net.png",
        title: "ASP .NET",
        description: "Lorem Ipsum",
        usersEnrolled: 0,
        lectures: [
          {
            id: 1,
            name : "ASP .NET Lecture 1",
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
      },
      {
        id: 6,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUuln1g--PI8ji-vEw8qXV4Gm22bJw_oNogMFHad3DHYiLKSOy&usqp=CAU",
        title: "Express",
        description: "Lorem Ipsum",
        usersEnrolled: 3,
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
      },
    ],
    private_courses:[],
    users: [
      {
        username: "Admin",
        password: "a",
      }
    ],
    current_user: {},
  },
  mutations: {
    [types.UPDATE_PUBLIC_COURSES]: (state, payload) => {
      state.public_courses = payload;
    },
    [types.UPDATE_PRIVATE_COURSES]: (state, payload) => {
      state.private_courses = payload;
    },
    [types.SAVE_USERS]: (state, payload) => {
      state.users = payload;
    },
    [types.CURRENT_USER]: (state, payload) => {
      state.current_user = payload;
    },
  },
  actions: {
    [types.ACTION_UPDATE_PUBLIC_COURSES]({ commit }, payload) {
      commit(types.UPDATE_PUBLIC_COURSES, payload);
    },
    [types.ACTION_UPDATE_PRIVATE_COURSES]({ commit }, payload) {
      commit(types.UPDATE_PRIVATE_COURSES, payload);
    },
    [types.ACTION_SAVE_USERS]({ commit }, payload) {
      commit(types.SAVE_USERS, payload);
    },
    [types.ACTION_CURRENT_USER]({ commit }, payload) {
      commit(types.CURRENT_USER, payload);
    },
  },
});
