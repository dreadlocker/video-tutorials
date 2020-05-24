<template>
  <div id="app">
    <BaseNavBar
      :text="navBarHeader"
      :routes="navBarRoutes"
    />

    <div class="page-content">
      <router-view/>
    </div>
    
    <BaseFooter
      :text="footerText"
      :link="footerLink"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import {
  ACTION_CURRENT_USER,
} from "@/store/types.js";
import BaseNavBar from "@/components/BaseNavBar.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "App",
  components: {
    BaseNavBar,
    BaseFooter,
  },
  computed: {
    ...mapState({
      current_user: state => state.current_user,
    }),
    navBarRoutes() {
      const noCurrentUser = Object.keys(this.current_user).length === 0;
      if (noCurrentUser) {
        return [
          {
            text: "Home",
            to: "/",
          },
          {
            text: "Login",
            to: "/login",
          },
          {
            text: "Register",
            to: "/register",
          },
        ];
      }
      
      return [
        {
          text: "Home",
          to: "/",
        },
        {
          text: `Welcome, ${this.current_user.username}`,
          to: "/",
        },
        {
          text: "Logout",
          to: "/",
          onClick: this.logout,
        },
      ];
    }
  },
  data() {
    return {
      navBarHeader: "Video Tutorials",
      footerText: "© 2019 ",
      footerLink: "Express Fundamentals",
    };
  },
  methods: {
    ...mapActions({
      action_current_user: ACTION_CURRENT_USER,
    }),
    logout() {
      this.action_current_user({});
    }
  }
};
</script>

<style lang="sass">
@import "@/assets/styles/main.sass"
</style>
