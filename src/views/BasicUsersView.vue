<template>
  <div class="basic-users">
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
    ...mapGetters({ items: "getUsersBasic" }),
  },
};
</script>

<style scoped>
.basic-users {
  width: 90%;
  margin: 0 auto;
  padding-top: 2em;
}
</style>