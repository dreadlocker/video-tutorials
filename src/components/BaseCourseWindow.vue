<template>
  <div>
    <div
      :class="{'course-holder-margin': button === undefined}"
      class="course-holder"
    >
      <!-- I don't have courses images, so I'll show a div instead of img tag -->
      <div class="course-image">{{course.name}} image</div>
      <div class="course-info">
        <div>{{course.name}}</div>
        <div>{{course.info}}</div>
      </div>
    </div>
    
    <div
      v-if="button !== undefined"
      class="course-button-holder course-holder-margin"
    >
      <BaseButton
        :button="button"
        :onClick="onClick"
        :courseId="course.id"
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
