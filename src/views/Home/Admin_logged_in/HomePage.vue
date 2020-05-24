<template>
  <div>
    <BaseButton
      :button="createCourseButton"
      :onClick="createCourse"
    />
      <!-- :argument="course.id" -->

    <BaseHeading
      v-if="haveCourses"
      :text="contentHeaderText"
      :classes="headingClasses"
    />
    <BaseHeading
      v-else
      :text="noCoursesText"
      :classes="headingClasses"
    />

    <div v-if="haveCourses" class="admin-courses-holder">
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
    haveCourses() {
      return this.courses.length > 0;
    }
  },
  data() {
    return {
      contentHeaderText: "Choose Course",
      headingClasses: "text-align-center",
      noCoursesText: "No courses in database. Please create one!",
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
