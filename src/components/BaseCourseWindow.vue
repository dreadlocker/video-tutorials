<template>
  <div class="courses-holder">
    <div class="course-holder">
      <img :src="imageUrl" class="course-image" alt="course-image">
      <div class="course-info">
        <div>{{title}}</div>
        <div>{{description}}</div>
      </div>
    </div>
    
    <div
      v-if="button"
      class="course-button-holder course-holder-margin"
    >
      <BaseButton
        :button="button"
        :onClick="onClick"
        :argument="id"
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
    id: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
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
