<template>
  <div class="courses-holder">
    <div class="course-holder">
      <img :src="course.imageUrl" class="course-image" alt="course-image">
      <div class="course-info">
        <div>{{course.title}}</div>
        <div>{{course.description}}</div>
      </div>
    </div>
    
    <div
      v-if="button"
      class="course-button-holder course-holder-margin"
    >
      <BaseButton
        :button="button"
        :onClick="onClick"
        :argument="course.id"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "BaseCourseWindow",
  components: {
    BaseButton,
  },
  props: {
    course: {
      type: Object,
      required: true
    },
    button: {
      type: Object,
    },
    onClick: {
      type: Function,
    },
  }
};
</script>
