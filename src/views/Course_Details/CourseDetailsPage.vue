<template>
  <CourseDetails
    v-if="hasNoQuery"
    :currentCourse="currentCourse"
    :headingClasses="headingClasses"
    :courseDescriptionHeading="courseDescriptionHeading"
    :userNotEnrolled="userNotEnrolled"
    :enrolled="enrolled"
    :enrollButton="enrollButton"
    :enrollCourse="enrollCourse"
    :lecturesListText="lecturesListText"
    :courseNotEnrolled="courseNotEnrolled"
    :lectures="lectures"
    :playButton="playButton"
    :playCourse="playCourse"
  />

  <PlayVideo
    v-else
    :lectures="lectures"
    :lecture="currentLecture"
    :headingClasses="playPageHeadingClasses"
    :playButton="playButton"
    :playCourse="playCourse"
    class="play-video-page"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
import {
  ACTION_SAVE_USERS,
  ACTION_CURRENT_USER,
  ACTION_UPDATE_PUBLIC_COURSES,
} from "@/store/types.js";
import CourseDetails from "./CourseDetails.vue";
import PlayVideo from "./PlayVideo.vue";

export default {
  name: "CourseDetailsPage",
  components: {
    CourseDetails,
    PlayVideo,
  },
  computed: {
    ...mapState({
      public_courses: state => state.public_courses,
      current_user: state => state.current_user,
      users: state => state.users,
    }),
    currentCourse() {
      const currentCourseId = Number(this.$route.params.id);
      return this.public_courses.find(course => course.id === currentCourseId);
    },
    userNotEnrolled() {
      const userCourses = this.current_user.courses;
      const isUserEnrolled = userCourses.includes(this.currentCourse.id);
      return !isUserEnrolled;
    },
    lectures() {
      const currentCourse = this.public_courses.find(course => course.id === this.currentCourse.id);
      return currentCourse.lectures;
    },
    currentLecture() {
      const lectureId = this.$route.query.play;
      return this.lectures.find(lecture => lecture.id === lectureId);
    },
    hasNoQuery() {
      return Object.keys(this.$route.query).length === 0;
    }
  },
  data() {
    return {
      headingClasses: "heading-padding-x text-align-left",
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
      playPageHeadingClasses: "text-align-center",
    };
  },
  methods: {
    ...mapActions({
      action_save_users: ACTION_SAVE_USERS,
      action_current_user: ACTION_CURRENT_USER,
      action_update_public_courses: ACTION_UPDATE_PUBLIC_COURSES,
    }),
    enrollCourse() {
      const usersCopy = [...this.users];
      const userInfo = usersCopy.find(user => user.username === this.current_user.username);
      userInfo.courses.push(this.currentCourse.id);
      
      this.action_save_users(usersCopy);
      this.action_current_user({username: userInfo.username, courses: userInfo.courses});

      this.updateCourses();
    },
    updateCourses() {
      const coursesCopy = [...this.public_courses];
      const currentCourse = coursesCopy.find(course => course.title === this.currentCourse.title);
      currentCourse.usersEnrolled += 1;
      this.action_update_public_courses(coursesCopy);
    },
    playCourse(courseAndlecture) {
      const currentPath = this.$route.path;
      this.$router.push({ path: currentPath, query: { play: courseAndlecture.lecture.id } });
    }
  },
  beforeCreate() {
    const pathHasQueries = Object.keys(this.$route.query).length > 0;
    const currentPath = this.$route.path;
    if(pathHasQueries) return this.$router.push(currentPath);
  }
};
</script>
