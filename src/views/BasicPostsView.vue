<template>
  <div class="basic">
    <h1 class="text-center">Basic Posts View</h1>
    <v-data-table :headers="headers" :items="posts" class="elevation-1">
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
  name: "basic-posts-view",
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
    ...mapGetters({ posts: "getPostsBasic", users: "getUsersBasic" })
  },
  methods: {
    titleCase(text) {
      return (
        text.charAt(0).toUpperCase() + text.substr(1, 20).toLowerCase() + "..."
      );
    },
    bodyCase(text) {
      return (
        text.charAt(0).toUpperCase() + text.substr(1, 60).toLowerCase() + "..."
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