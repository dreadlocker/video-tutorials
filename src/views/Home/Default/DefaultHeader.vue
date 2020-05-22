<template>
  <div class="home-page-header-holder">
    <h1 class="home-page-header">{{header}}</h1>
    <h4 class="home-page-header">{{info}}</h4>
  </div>
</template>

<script>
export default {
  name: "DefaultHeader",
  props: {
    header: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    },
  }
};
</script>
