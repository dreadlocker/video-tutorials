<template>
  <div class="lecture-holder">
    <h6 class="lecture-name">{{name}}</h6>
    <BaseButton
      :button="button"
      :onClick="onClick"
      :argument="id"
      :courseId="course ? course.id : 0"
    />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "BaseLectureDetails",
  components: {
    BaseButton,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    button: {
      type: Object,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
    course: {
      type: Object,
    },
  }
};
</script>
