<template>
  <div class="max-width">
    <h1 :class="classes">{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: "BaseHeading",
  props: {
    text: {
      type: String,
      required: true
    },
    classes: {
      type: String,
      required: true
    },
  }
};
</script>
