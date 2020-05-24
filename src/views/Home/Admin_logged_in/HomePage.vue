<template>
  <div>
    <BaseButton
      :button="createCourseButton"
      :onClick="createCourse"
    />
      <!-- :argument="course.id" -->

    <BaseHeading
      :text="contentHeaderText"
      :classes="headingClasses"
    />

    <div class="admin-courses-holder">
      <Course
        v-for="course in courses"
        :key="course.id"
        :course="course"
        :editCourseButton="editCourseButton"
        :editCourse="editCourse"
        :addLectureButton="addLectureButton"
        :addLecture="addLecture"
        :lecturesInCourse="lecturesInCourse"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseButton from "@/components/BaseButton.vue";
import Course from "./Course.vue";

export default {
  name: "HomePage",
  components: {
    BaseHeading,
    BaseButton,
    Course,
  },
  computed: {
    ...mapState({
      courses: state => state.courses,
    }),
    coursesSorted() {
      const coursesCopy = [...this.courses];
      return coursesCopy.sort((a, b) => b.usersEnrolled - a.usersEnrolled).slice(0, 3);
    }
  },
  data() {
    return {
      headingClasses: "text-align-center",
      contentHeaderText: "Choose Course",
      createCourseButton: {
        type: "button",
        classes: "primary",
        text: "Create Course",
      },
      editCourseButton: {
        type: "button",
        classes: "warning",
        text: "Edit Course",
      },
      addLectureButton: {
        type: "button",
        classes: "success",
        text: "Add lecture",
      },
      lecturesInCourse: "Lectures in course"
    };
  },
  methods: {
    createCourse() {
      console.log("createCourse() {");
    },
    editCourse() {
      console.log("editCourse() {");
    },
    addLecture() {
      console.log("addLecture() {");
    },
  }
};
</script>
