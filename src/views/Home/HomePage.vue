<template>
  <div>
    <DefaultHomePage v-if="!is_user_logged_in && !is_admin_logged_In" />
    <UserHomePage v-if="is_user_logged_in && !is_admin_logged_In" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import DefaultHomePage from "./Default/HomePage.vue";
import UserHomePage from "./User_logged_in/HomePage.vue";

export default {
  name: "HomePage",
  components: {
    DefaultHomePage,
    UserHomePage,
  },
  computed: {
    ...mapState({
      is_user_logged_in: state => state.is_user_logged_in,
      is_admin_logged_In: state => state.is_admin_logged_In,
      // courses: state => state.courses,
    }),
    // coursesSorted() {
    //   // TODO
    //   // if(this.is_user_logged_in) return courses
    //   // TODO
    //   // if(this.is_admin_logged_In) return courses
    //   return this.courses.sort((a, b) => b.usersEnrolled - a.usersEnrolled).slice(0, 3)
    // }
  },
};
</script>
