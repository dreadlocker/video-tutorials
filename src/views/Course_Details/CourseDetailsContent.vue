<template>
  <div>
    <BaseHeading
      :text="`Course title : ${currentCourse.name}`"
      :classes="headingClasses"
    />

    <div class="course-details-holder">
      <div class="course-details-image">{{currentCourse.name}} image</div>
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

    <div v-if="!userNotEnrolled">
      <LectureDetails
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
import { mapState, mapActions } from "vuex";
import {
  ACTION_SAVE_USERS,
  ACTION_CURRENT_USER,
  ACTION_UPDATE_COURSES,
} from "@/store/types.js";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseButton from "@/components/BaseButton.vue";
import LectureDetails from "./LectureDetails.vue";

export default {
  name: "CourseDetailsContent",
  components: {
    BaseHeading,
    BaseButton,
    LectureDetails,
  },
  computed: {
    ...mapState({
      courses: state => state.courses,
      current_user: state => state.current_user,
      users: state => state.users,
    }),
    currentCourse() {
      const currentCourseId = Number(this.$route.params.id);
      return this.courses.find(course => course.id === currentCourseId);
    },
    userNotEnrolled() {
      const userCourses = this.current_user.courses;
      const isUserEnrolled = userCourses.includes(this.currentCourse.id);
      return !isUserEnrolled;
    },
    lectures() {
      return this.currentCourse.lectures;
    }
  },
  data() {
    return {
      headingClasses: "text-align-left",
      courseDescriptionHeading: "Course Description",
      enrollButton: {
        type: "button",
        classes: "",
        text: "Enroll",
      },
      courseNotEnrolled: "To get full access please enroll the course",
      enrolled: "enrolled",
      lecturesListText: "Lectures List",
      playButton: {
        type: "button",
        classes: "lecture-button",
        text: "Play",
      },
    };
  },
  methods: {
    ...mapActions({
      action_save_users: ACTION_SAVE_USERS,
      action_current_user: ACTION_CURRENT_USER,
      action_update_courses: ACTION_UPDATE_COURSES,
    }),
    enrollCourse() {
      const usersCopy = this.users.map(user => user);
      const userInfo = usersCopy.find(user => user.username === this.current_user.username);
      userInfo.courses.push(this.currentCourse.id);
      
      this.action_save_users(usersCopy);
      this.action_current_user({username: userInfo.username, courses: userInfo.courses});

      this.updateCourses();
    },
    updateCourses() {
      const coursesCopy = [...this.courses];
      const currentCourse = coursesCopy.find(course => course.name === this.currentCourse.name);
      currentCourse.usersEnrolled += 1;
      this.action_update_courses(coursesCopy);
    },
    playCourse(lecture) {
      console.log(lecture);
    }
  },
};
</script>
