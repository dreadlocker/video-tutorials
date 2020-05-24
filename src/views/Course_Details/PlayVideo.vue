<template>
  <div>
    <BaseHeading
      :text="`Now playing : ${lecture.name}`"
      :classes="headingClasses"
    />

    <div class="lecture-video">{{lecture.videoLink}}</div>
    <h3>Lectures List</h3>
    <LectureDetails
      v-for="lecture in lectures"
      :key="lecture.id"
      :lecture="lecture"
      :button="playButton"
      :onClick="playCourse"
    />
  </div>
</template>

<script>
import BaseHeading from "@/components/BaseHeading.vue";
import LectureDetails from "./LectureDetails.vue";

export default {
  name: "PlayVideo",
  components: {
    BaseHeading,
    LectureDetails,
  },
  props: {
    lectures: {
      type: Array,
      required: true,
    },
    lecture: {
      type: Object,
      required: true,
    },
    headingClasses: {
      type: String,
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
