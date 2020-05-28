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

    <div>
      <input
        v-model="checkboxBool"
        :name="checkboxText"
        type="checkbox"
      >
      <span>{{checkboxText}}</span>
    </div>
    
    <BaseButton
      :button="submitButton"
      :onClick="submit"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  ACTION_UPDATE_PUBLIC_COURSES,
  ACTION_UPDATE_PRIVATE_COURSES,
} from "@/store/types.js";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "CreateCoursePage",
  components: {
    BaseHeading,
    BaseInput,
    BaseButton,
  },
  computed: {
    ...mapGetters(["publicCourses", "privateCourses"]),
  },
  data() {
    return {
      headingText: "Create Course",
      headingClasses: "text-align-center",
      inputs: [
        {
          label: "Course Title",
          type: "text",
          placeholder: "Course name",
          value: "",
        },
        {
          label: "Course Description",
          type: "text",
          placeholder: "Description",
          tag: "textarea",
          value: "",
        },
        {
          label: "Image url",
          type: "url",
          placeholder: "Image Url",
          value: "",
        },
      ],
      labelClasses: "label",
      checkboxBool: false,
      checkboxText: "Public",
      submitButton: {
        type: "submit",
        classes: "primary",
        text: "Submit",
      },
    };
  },
  methods: {
    ...mapActions({
      action_update_public_courses: ACTION_UPDATE_PUBLIC_COURSES,
      action_update_private_courses: ACTION_UPDATE_PRIVATE_COURSES,
    }),
    submit() {
      const isCoursePublic = this.checkboxBool;
      if (isCoursePublic) {
        const publicCoursesSorted = this.publicCourses.sort((a, b) => a.id - b.id);
        this.addCourse(publicCoursesSorted, "public");
      } else {
        const privateCoursesSorted = this.privateCourses.sort((a, b) => a.id - b.id);
        this.addCourse(privateCoursesSorted, "private");
      }
    },
    addCourse(coursesSorted, type) {
      const lastCourse = coursesSorted[coursesSorted.length - 1];
      const id = !lastCourse ? 1 : lastCourse.id + 1;
      const [title, description, imageUrl] = this.inputs.map(input => input.value);
      const lectures = [];
      const usersEnrolled = 0;

      coursesSorted.push({id, title, description, imageUrl, usersEnrolled, lectures});

      if(type === "public") this.action_update_public_courses(coursesSorted);
      if(type === "private") this.action_update_private_courses(coursesSorted);

      this.$router.push("/");
    }
  }
};
</script>
