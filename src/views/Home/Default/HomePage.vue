<template>
  <div>
    <HomePageHeader
      :header="headerText"
      :info="headerInfo"
    />

    <BaseHeading
      :text="contentHeaderText"
      :classes="headingClasses"
    />

    <div class="content">
      <BaseCourseWindow
        v-for="course in coursesSorted"
        :key="course.id"
        :course="course"
      />
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import HomePageHeader from "./HomePageHeader.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseCourseWindow from "@/components/BaseCourseWindow.vue";

export default {
  name: "HomePage",
  components: {
    HomePageHeader,
    BaseHeading,
    BaseCourseWindow,
  },
  computed: {
    ...mapState({
      public_courses: state => state.public_courses,
    }),
    coursesSorted() {
      const coursesCopy = [...this.public_courses];
      return coursesCopy.sort((a, b) => b.usersEnrolled - a.usersEnrolled).slice(0, 3);
    }
  },
  data() {
    return {
      headingClasses: "text-align-center",
      headerText: "Video Tutorials",
      headerInfo: "Start Self-Study Today: It'll Change Your Life",
      contentHeaderText: "Top Courses",
    };
  },
};
</script>
