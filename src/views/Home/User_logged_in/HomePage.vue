<template>
  <div>
    <BaseHeading
      :text="contentHeaderText"
      :classes="headingClasses"
    />
    <!-- TODO CoursesSearch FUNCTIONALITY NOT DONE -->
    <CoursesSearch
      :input="input"
      :button="searchButton"
      :onClick="courseSearch"
    />
    
    <div class="content">
      <BaseCourseWindow
        v-for="course in coursesSorted"
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
    coursesSorted() {
      const coursesCopy = [...this.public_courses];
      return coursesCopy.sort((a, b) => a.id - b.id);
    }
  },
  data() {
    return {
      headingClasses: "text-align-center",
      contentHeaderText: "Courses",
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
    courseSearch() {
      // console.log("courseSearch");
    },
    showCourse(courseId) {
      this.$router.push(`/course-details/${courseId}`);
    },
  }
};
</script>
