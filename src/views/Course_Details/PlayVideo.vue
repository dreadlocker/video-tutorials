<template>
  <div class="max-width">
    <BaseHeading
      :text="`Now playing : ${lecture.name}`"
      :classes="headingClasses"
    />

    <iframe
      :src="lecture.videoLink"
      class="lecture-video max-width"
      controls="controls"
    ></iframe>
    <h3>Lectures List</h3>
    <BaseLectureDetails
      v-for="{name, id} in lectures"
      :key="id"
      :id="id"
      :name="name"
      :button="playButton"
      :onClick="playCourse"
    />
  </div>
</template>

<script>
import BaseHeading from "@/components/BaseHeading.vue";
import BaseLectureDetails from "@/components/BaseLectureDetails.vue";

export default {
  name: "PlayVideo",
  components: {
    BaseHeading,
    BaseLectureDetails,
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
    currentCourse: {
      type: Object,
    },
  },
};
</script>
