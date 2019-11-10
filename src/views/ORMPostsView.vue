<template>
  <div class="orm-posts">
    <h1 class="text-center">ORM Posts View</h1>
    <v-data-table :headers="headers" :items="items" class="elevation-1"></v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "orm-view",
  data() {
    return {
      headers: [
        {
          sortable: true,
          text: "ID",
          value: "id"
        },
        {
          sortable: true,
          text: "User ID",
          value: "userId"
        },
        {
          sortable: true,
          text: "Writer name",
          value: "user_object.name"
        },
        {
          sortable: true,
          text: "Writer username",
          value: "user_object.username"
        },
        {
          sortable: true,
          text: "Title",
          value: "title"
        },
        {
          sortable: true,
          text: "Body",
          value: "body"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({ items: 'getPostsORM'})
  }
};
</script>

<style scoped>
.orm-users {
  width: 90%;
  margin: 0 auto;
  padding-top: 2em;
}
</style>