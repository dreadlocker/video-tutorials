<template>
  <div id="app">
    <BaseNavBar
      :text="navBarHeader"
      :routes="navBarRoutes"
    />

    <router-view/>
    
    <BaseFooter
      :text="footerText"
      :link="footerLink"
    />
  </div>
</template>

<script>
import BaseNavBar from "@/components/BaseNavBar.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "App",
  components: {
    BaseNavBar,
    BaseFooter,
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
      footerText: "© 2019 ",
      footerLink: "Express Fundamentals",
    };
  }
};
</script>

<style lang="sass">
@import "@/assets/styles/main.sass"
</style>
