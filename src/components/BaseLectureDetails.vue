<template>
  <div class="lecture-holder">
    <h6 class="lecture-name">{{lecture.name}}</h6>
    <BaseButton
      :button="button"
      :onClick="onClick"
      :argument="{course, lecture}"
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
    lecture: {
      type: Object,
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
