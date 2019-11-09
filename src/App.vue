<template>
  <v-app>
    <v-app-bar app color="primary" dark class="d-flex justify-space-around">
      <div class="d-flex align-center">
        <span class="mr-2">Vuex ORM Tutorial</span>
      </div>

      <router-link to="/basic" class="white--text">Vuex Basic</router-link>

      <router-link to="/orm" class="white--text">Vuex ORM</router-link>

      <v-btn href="http://letslearnabout.net/" target="_blank" text>
        <span class="mr-2">Let's learn about</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "App",
  methods: {
    ...mapActions(['initializeData'])
  },
  created() {
    this.initializeData()
  }
  };
</script>

<style>
.v-toolbar__content {
  width: 100%;
  justify-content: space-around;
}
</style>