<template>
  <div class="admin-course-holder">
    <div>{{course.title}}</div>
    <div>
      <BaseButton
        :button="editCourseButton"
        :onClick="editCourse"
        :argument="course"
      />
      <BaseButton
        :button="addLectureButton"
        :onClick="addLecture"
        :argument="course.id"
      />
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
  },
  components: {
    BaseButton,
    // BaseCourseWindow,
  },
  computed: {
    lecturesCount() {
      return this.course.lectures.length;
    }
  }
};
</script>
