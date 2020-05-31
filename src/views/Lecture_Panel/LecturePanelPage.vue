<template>
  <div class="max-width">
    <BaseHeading
      :text="headingText"
      :classes="headingClasses"
    />
    
    <BaseInput
      v-for="input in inputs"
      :key="input.label"
      :input="input"
      :labelClasses="labelClasses"
    />
    
    <BaseButton
      :button="submitButton"
      :onClick="submit"
      :argument="course.id"
    />

    <h2>{{lecturesInCourseText}}</h2>
    
    <BaseLectureDetails
      v-for="{name, id} in lectures"
      :key="id"
      :id="id"
      :name="name"
      :button="playButton"
      :onClick="deleteLecture"
      :course="course"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  ACTION_UPDATE_PUBLIC_COURSES,
} from "@/store/types.js";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseLectureDetails from "@/components/BaseLectureDetails.vue";

export default {
  name: "LecturePanelPage",
  components: {
    BaseHeading,
    BaseInput,
    BaseButton,
    BaseLectureDetails,
  },
  computed: {
    ...mapGetters(["publicCourses"]),
    course() {
      const courseId = this.$route.params.id;
      return this.publicCourses.find(course => course.id === courseId);
    },
    headingText() {
      return `Add lectures to course ${this.course.title}`;
    },
    lectures() {
      return this.course.lectures;
    },
    lecturesInCourseText() {
      return `There are ${this.lectures.length} lectures in this course`;
    },
  },
  data() {
    return {
      headingClasses: "text-align-center",
      inputs: [
        {
          label: "Lecture Title",
          type: "text",
          placeholder: "Lecture title",
          value: "",
        },
        {
          label: "Video Url",
          type: "url",
          placeholder: "Video Url",
          value: "",
        },
      ],
      labelClasses: "label",
      submitButton: {
        type: "submit",
        classes: "primary",
        text: "Submit",
      },
      playButton: {
        type: "button",
        classes: "danger align-self-end",
        text: "Delete",
      },
    };
  },
  methods: {
    ...mapActions({
      action_update_public_courses: ACTION_UPDATE_PUBLIC_COURSES,
    }),
    submit(courseId) {
      const currentCourse = this.publicCourses.find(courseCheck => courseCheck.id === courseId);
      const currentCourseLectures = currentCourse.lectures;
      const lastLecture = currentCourseLectures[currentCourseLectures.length - 1];
      const [name, videoLink] = this.inputs.map(input => input.value.trim());
      const id = !lastLecture ? 1 : lastLecture.id + 1;
      const newLecture = {id, name, videoLink};

      currentCourseLectures.push(newLecture);
      this.action_update_public_courses(this.publicCourses);
    },
    deleteLecture(lectureId, courseId) {
      const currentCours = this.publicCourses.find(course => course.id === courseId);
      const currentLecture = currentCours.lectures.find(lecture => lecture.id === lectureId);
      const indexOfCuttentLecture = currentCours.lectures.indexOf(currentLecture);
      currentCours.lectures.splice(indexOfCuttentLecture, 1);

      this.action_update_public_courses(this.publicCourses);
    }
  }
};
</script>
