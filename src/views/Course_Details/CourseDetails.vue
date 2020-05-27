<template>
  <div class="max-width">
    <BaseHeading
      :text="`Course title : ${currentCourse.title}`"
      :classes="headingClasses"
    />

    <div class="course-details-holder max-width">
      <img :src="currentCourse.imageUrl" class="course-details-image" alt="course-image">
      <div>
        <h3>{{courseDescriptionHeading}}</h3>
        <p>Lorem Ipsum</p>
        <BaseButton
          v-if="userNotEnrolled"
          :button="enrollButton"
          :onClick="enrollCourse"
          :courseId="currentCourse.id"
        />
        <div v-else class="course-enrolled">{{enrolled}}</div>
      </div>
    </div>

    <h3 v-if="userNotEnrolled">{{courseNotEnrolled}}</h3>
    <h3 v-else>{{lecturesListText}}</h3>

    <div
      v-if="!userNotEnrolled"
      class="max-width"
    >
      <BaseLectureDetails
        v-for="lecture in lectures"
        :key="lecture.id"
        :lecture="lecture"
        :button="playButton"
        :onClick="playCourse"
      />
    </div>
  </div>
</template>

<script>
import BaseHeading from "@/components/BaseHeading.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseLectureDetails from "@/components/BaseLectureDetails.vue";

export default {
  name: "CourseDetails",
  components: {
    BaseHeading,
    BaseButton,
    BaseLectureDetails,
  },
  props: {
    currentCourse: {
      type: Object,
      required: true,
    },
    headingClasses: {
      type: String,
      required: true,
    },
    courseDescriptionHeading: {
      type: String,
      required: true,
    },
    userNotEnrolled: {
      type: Boolean,
      required: true,
    },
    enrolled: {
      type: String,
      required: true,
    },
    enrollButton: {
      type: Object,
      required: true,
    },
    enrollCourse: {
      type: Function,
      required: true,
    },
    lecturesListText: {
      type: String,
      required: true,
    },
    courseNotEnrolled: {
      type: String,
      required: true,
    },
    lectures: {
      type: Array,
      required: true,
    },
    playButton: {
      type: Object,
      required: true,
    },
    playCourse: {
      type: Function,
      required: true,
    },
  },
};
</script>
