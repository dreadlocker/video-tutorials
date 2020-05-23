<template>
  <div>
    <BaseInput
      :input="input"
      :button="button"
      :onClick="onClick"
    />
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "CoursesSearch",
  components: {
    BaseInput,
  },
  props: {
    input: {
      type: Object,
      required: true
    },
    button: {
      type: Object,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
  }
};
</script>
