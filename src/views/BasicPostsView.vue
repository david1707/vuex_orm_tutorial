<template>
  <div class="basic">
    <h1 class="text-center">Basic View</h1>
    <v-data-table :headers="headers" :items="items" class="elevation-1">
      <template v-slot:item.id="{ item }">
        <td class="text-xs-right">{{ item.id}}</td>
      </template>
      <template v-slot:item.userId="{ item }">
        <td class="text-xs-right">{{ item.userId}}</td>
      </template>
      <template v-slot:item.title="{ item }">
        <td class="text-xs-right">{{ titleCase(item.title)}}</td>
      </template>
      <template v-slot:item.body="{ item }">
        <td class="text-xs-right">{{ bodyCase(item.body) }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "basic-view",
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
  methods: {
    titleCase(text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    },
    bodyCase(text) {
      return (
        text.charAt(0).toUpperCase() + text.substr(1, 120).toLowerCase() + "..."
      );
    }
  }
};
</script>

<style scoped>
.basic {
  width: 90%;
  margin: 0 auto;
  padding-top: 2em;
}
</style>