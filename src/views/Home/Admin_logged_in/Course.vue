<template>
  <div class="admin-course-holder">
    <div class="admin-course-title">{{course.title}}</div>
    <div class="admin-course-buttons-info-holder">
      <div class="admin-course-buttons-holder">
        <BaseButton
          :button="editCourseButton"
          :onClick="editCourse"
          :argument="course"
        />
        <BaseButton
          :button="addLectureButton"
          :onClick="addLecture"
          :argument="course"
        />
      </div>
      <span class="lectures-in-course">{{lecturesInCourse}}</span>
      <span class="lectures-count primary">{{lecturesCount}}</span>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "Course",
  props: {
    course: {
      type: Object,
      required: true,
    },
    editCourseButton: {
      type: Object,
      required: true,
    },
    editCourse: {
      type: Function,
      required: true,
    },
    addLectureButton: {
      type: Object,
      required: true,
    },
    addLecture: {
      type: Function,
      required: true,
    },
    lecturesInCourse: {
      type: String,
      required: true,
    },
    lecturesCount: {
      type: Number,
      required: true,
    },
  },
  components: {
    BaseButton,
  },
};
</script>
