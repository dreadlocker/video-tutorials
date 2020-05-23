<template>
  <button
    @click="onClick(courseId)"
    :type="button.type"
    :class="button.classes"
    class="btn"
  >{{button.text}}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    button: {
      type: Object,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
    courseId: {
      type: Number,
    },
  },
};
</script>
