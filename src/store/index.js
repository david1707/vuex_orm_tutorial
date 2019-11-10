import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";

import Post from "@/models/Post";
import User from "@/models/User";

import { posts, users } from "./data";

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(User);
database.register(Post);

export default new Vuex.Store({
  state: {
    postsBasic: [],
    usersBasic: []
  },
  actions: {
    initializeData({ commit }) {
      commit("INITIALIZE_POSTS_BASIC");
      commit("INITIALIZE_POSTS_ORM");
      commit("INITIALIZE_USERS_BASIC");
      commit("INITIALIZE_USERS_ORM");
    }
  },
  mutations: {
    INITIALIZE_POSTS_BASIC(state) {
      state.postsBasic = posts;
    },
    INITIALIZE_POSTS_ORM() {
      Post.insert({ data: posts });
    },
    INITIALIZE_USERS_BASIC(state) {
      state.usersBasic = users;
    },
    INITIALIZE_USERS_ORM() {
      User.insert({ data: users });
    }
  },
  getters: {
    getPostsBasic(state) {
      return state.postsBasic;
    },
    getUsersBasic(state) {
      return state.usersBasic;
    },
    getPostsORM() {
      return Post.query()
        .withAll()
        .get();
    },
    getUsersORM() {
      return User.all();
    }
  },
  plugins: [VuexORM.install(database)]
});
