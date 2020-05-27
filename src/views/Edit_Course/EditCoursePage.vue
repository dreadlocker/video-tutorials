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

export default {
  name: "EditCoursePage",
  components: {
    BaseHeading,
    BaseInput,
    BaseButton,
  },
  computed: {
    ...mapState({
      public_courses: state => state.public_courses,
    }),
    course() {
      return this.$route.params;
    },
    inputValues() {
      return [this.course.title, this.course.description, this.course.imageUrl];
    },
  },
  data() {
    return {
      headingText: "Edit Course",
      headingClasses: "text-align-center",
      inputs: [
        {
          label: "Course Title",
          type: "text",
          placeholder: "Course name",
        },
        {
          label: "Course Description",
          type: "text",
          placeholder: "Description",
          tag: "textarea",
        },
        {
          label: "Image url",
          type: "url",
          placeholder: "Image Url",
        },
      ],
      labelClasses: "label",
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
    }),
    submit() {
      const inputValues = this.inputs.map(input => input.value.trim());
      const hasEmptyFields = inputValues.some(value => value === "");
      if(hasEmptyFields) return;
      
      const publicCoursesCopy = [...this.public_courses];
      const currentCourse = publicCoursesCopy.find(course => course.id === this.course.id);
      currentCourse.title = this.inputs[0].value;
      currentCourse.description = this.inputs[1].value;
      currentCourse.imageUrl = this.inputs[2].value;
      
      this.action_update_public_courses(publicCoursesCopy);
      this.$router.push({name: "Home"});
    }
  },
  beforeMount() {
    this.inputs.forEach((input, index) => {
      input.value = this.inputValues[index];
    });
  }
};
</script>
