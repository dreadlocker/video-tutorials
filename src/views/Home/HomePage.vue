<template>
  <div>
    <DefaultHomePage v-if="current_user.username === undefined" />
    <UserHomePage v-if="current_user.username !== 'Admin' && current_user.username !== undefined" />
    <AdminHomePage v-if="current_user.username === 'Admin'" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import DefaultHomePage from "./Default/HomePage.vue";
import UserHomePage from "./User_logged_in/HomePage.vue";
import AdminHomePage from "./Admin_logged_in/HomePage.vue";

export default {
  name: "HomePage",
  components: {
    DefaultHomePage,
    UserHomePage,
    AdminHomePage,
  },
  computed: {
    ...mapState({
      current_user: state => state.current_user,
    }),
  },
};
</script>
