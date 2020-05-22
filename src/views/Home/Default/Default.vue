<template>
  <div>
    <DefaultHeader
      :header="headerText"
      :info="headerInfo"
    />

    <BaseHeading :text="contentHeaderText" />

    <div class="content">
      <BaseCourseWindow
        v-for="course in coursesSorted"
        :key="course.id"
        :course="course"
        :button="coursesButtonText"
      />

      <!-- When user is logged in -->
      <!-- <div
        v-for="course in coursesSorted"
        :key="course.id"
        class="course-button-holder"
      >
        <button :type="coursesButtonText.type">{{coursesButtonText.text}}</button>
      </div> -->
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import DefaultHeader from "./DefaultHeader.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseCourseWindow from "@/components/BaseCourseWindow.vue";

export default {
  name: "Default",
  components: {
    DefaultHeader,
    BaseHeading,
    BaseCourseWindow,
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
      headerText: "Video Tutorials",
      headerInfo: "Start Self-Study Today: It'll Change Your Life",
      contentHeaderText: "Top Courses",
      coursesButtonText: {
        type: "button",
        text: "Details",
      },
    };
  },
};
</script>
