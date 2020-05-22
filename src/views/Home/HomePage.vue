<template>
  <div>
    <Default v-if="!is_user_logged_in && !is_admin_logged_In" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Default from "./Default/Default.vue";

export default {
  name: "HomePage",
  components: {
    Default,
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
