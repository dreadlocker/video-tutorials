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
      :argument="course"
    />

    <h2>{{lecturesInCourseText}}</h2>
    
    <BaseLectureDetails
      v-for="lecture in lectures"
      :key="lecture.id"
      :lecture="lecture"
      :button="playButton"
      :onClick="deleteLecture"
      :course="course"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
    ...mapState({
      public_courses: state => state.public_courses,
    }),
    course() {
      const courseId = this.$route.params.id;
      return this.public_courses.find(course => course.id === courseId);
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
    submit(course) {
      const publicCoursesCopy = [...this.public_courses];
      const currentCourse = publicCoursesCopy.find(courseCopy => courseCopy.id === course.id);
      const currentCourseLectures = currentCourse.lectures;
      const lastLecture = currentCourseLectures[currentCourseLectures.length - 1];
      const [name, videoLink] = this.inputs.map(input => input.value);
      const id = !lastLecture ? 1 : lastLecture.id + 1;
      const newLecture = {id, name, videoLink};

      currentCourseLectures.push(newLecture);
      this.action_update_public_courses(publicCoursesCopy);
    },
    deleteLecture(courseAndLecture) {
      const publicCoursesCopy = [...this.public_courses];
      const currentCours = publicCoursesCopy.find(courseCopy => courseCopy.id === courseAndLecture.course.id);
      const currentLecture = currentCours.lectures.find(lectureCopy => lectureCopy.id === courseAndLecture.lecture.id);
      const indexOfCuttentLecture = currentCours.lectures.indexOf(currentLecture);
      currentCours.lectures.splice(indexOfCuttentLecture, 1);

      this.action_update_public_courses(publicCoursesCopy);
    }
  }
};
</script>
