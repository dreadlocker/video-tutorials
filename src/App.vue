<template>
  <div id="app">
    <BaseNavBar
      :text="navBarHeader"
      :routes="navBarRoutes"
    />
    <router-view/>
  </div>
</template>

<script>
import BaseNavBar from "@/components/BaseNavBar.vue";

export default {
  name: "App",
  components: {
    BaseNavBar
  },
  data() {
    return {
      navBarHeader: "Video Tutorials",
      navBarRoutes: [
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
      ],
    };
  }
};
</script>

<style lang="sass">
@import "@/assets/styles/main.sass"
</style>
