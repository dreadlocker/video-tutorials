<template>
  <div class="nav-bar">
    <div>{{text}}</div>

    <div>
      <router-link
        v-for="route in routes"
        :key="route.text"
        @click.native="route.onClick ? route.onClick() : ''"
        :to="route.to"
        class="nav-bar-link"
      >{{route.text}}</router-link>
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
