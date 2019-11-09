import Vue from "vue";
import Vuex from "vuex";

import { posts, users } from "./data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postsBasic: [],
    usersBasic: [],
  },
  actions: {
    initializeData({ commit }) {
      commit("INITIALIZE_POSTS_BASIC");
      commit("INITIALIZE_USERS_BASIC");
    }
  },
  mutations: {
    INITIALIZE_POSTS_BASIC(state) {
      state.postsBasic = posts;
    },
    INITIALIZE_USERS_BASIC(state) {
      state.usersBasic = users;
    }
  },
  getters: {
    getPostsBasic(state) {
      return state.postsBasic
    },
    getUsersBasic(state) {
      return state.usersBasic
    }
  }
  
});
