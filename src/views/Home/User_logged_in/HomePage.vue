<template>
  <div class="max-width">
    <BaseHeading
      :text="contentHeaderText"
      :classes="headingClasses"
    />
    <CoursesSearch
      :input="input"
      :button="searchButton"
      :onClick="coursesSearch"
    />
    
    <div class="content">
      <BaseCourseWindow
        v-for="course in courses"
        :key="course.id"
        :course="course"
        :button="coursesButton"
        :onClick="showCourse"
      />
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import CoursesSearch from "./CoursesSearch.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseCourseWindow from "@/components/BaseCourseWindow.vue";

export default {
  name: "HomePage",
  components: {
    CoursesSearch,
    BaseHeading,
    BaseCourseWindow,
  },
  computed: {
    ...mapState({
      public_courses: state => state.public_courses,
    }),
  },
  data() {
    return {
      headingClasses: "text-align-center",
      contentHeaderText: "Courses",
      courses: [],
      coursesButton: {
        type: "button",
        text: "Details",
      },
      input: {
        label: "Search: ",
        type: "text",
        placeholder: "",
        value: "",
      },
      searchButton: {
        type: "button",
        classes: "primary",
        text: "Search",
      },
    };
  },
  methods: {
    coursesSearch() {
      const titleRexExp = new RegExp(this.input.value, "gi");
      this.courses = this.public_courses.filter(course => titleRexExp.test(course.title));
    },
    showCourse(courseId) {
      this.$router.push(`/course-details/${courseId}`);
    },
  },
  mounted() {
    this.courses = [...this.public_courses];
  }
};
</script>
