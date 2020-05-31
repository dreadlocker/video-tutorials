<template>
  <div class="nav-bar">
    <div>{{text}}</div>

    <div class="nav-bar-links-holder">
      <router-link
        v-for="{text, to, onClick} in routes"
        :key="text"
        @click.native="onClick ? onClick() : ''"
        :to="to"
        class="nav-bar-link"
      >{{text}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseNavBar",
  props: {
    text: {
      type: String,
      required: true
    },
    routes: {
      type: Array,
      required: true
    },
  }
};
</script>
