<template>
  <div class="course-holder">
    <!-- I don't have courses images, so I'll show a div instead of img tag -->
    <div class="course-image">{{course.name}} image</div>
    <div class="course-info">
      <div>{{course.name}}</div>
      <div>{{course.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCourseWindow",
  props: {
    course: {
      type: Object,
      required: true
    },
  }
};
</script>
