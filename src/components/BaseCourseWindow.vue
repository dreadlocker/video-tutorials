<template>
  <div>
    <div
      :class="{'course-holder-margin': button === undefined}"
      class="course-holder"
    >
      <!-- I don't have courses images, so I'll show a div instead of img tag -->
      <div class="course-image">{{course.title}} image</div>
      <div class="course-info">
        <div>{{course.title}}</div>
        <div>{{course.description}}</div>
      </div>
    </div>
    
    <div
      v-if="button !== undefined"
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
