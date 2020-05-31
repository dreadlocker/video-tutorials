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

    <div class="content max-width">
      <BaseCourseWindow
        v-for="{id, imageUrl, title, description} in topThreePublicCourses"
        :key="id"
        :id="id"
        :imageUrl="imageUrl"
        :title="title"
        :description="description"
      />
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    ...mapGetters(["topThreePublicCourses"]),
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
