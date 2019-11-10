<template>
  <div class="basic">
    <h1 class="text-center">Basic Users View</h1>
    <v-data-table :headers="headers" :items="items" class="elevation-1" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "basic-users-view",
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
          text: "Name",
          value: "name"
        },
        {
          sortable: true,
          text: "Username",
          value: "username"
        },
        {
          sortable: true,
          text: "Email",
          value: "email"
        },
        {
          sortable: true,
          text: "Website",
          value: "website"
        },
        {
          sortable: true,
          text: "Total Posts",
          value: "total_posts"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({ posts: "getPostsBasic", users: "getUsersBasic" }),
    items() {
      this.users.map(user => {
        user.total_posts = this.posts.filter(post => post.userId === user.id).length;
      });
      return this.users
    }
  },
};
</script>

<style scoped>
.basic {
  width: 90%;
  margin: 0 auto;
  padding-top: 2em;
}
</style>