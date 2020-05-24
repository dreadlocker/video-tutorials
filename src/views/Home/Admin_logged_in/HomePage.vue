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
        v-for="course in public_courses"
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
      public_courses: state => state.public_courses,
    }),
    haveCourses() {
      return this.public_courses.length > 0;
    }
  },
  data() {
    return {
      contentHeaderText: "Choose Course",
      noCoursesText: "No courses in database. Please create one!",
      headingClasses: "text-align-center",
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
      this.$router.push({name: "CreateCourse"});
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
