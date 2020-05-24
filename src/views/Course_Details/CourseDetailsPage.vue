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
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
import {
  ACTION_SAVE_USERS,
  ACTION_CURRENT_USER,
  ACTION_UPDATE_COURSES,
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
      playPageHeadingClasses: "text-align-center",
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
      const currentCourse = coursesCopy.find(course => course.title === this.currentCourse.title);
      currentCourse.usersEnrolled += 1;
      this.action_update_courses(coursesCopy);
    },
    playCourse(lecture) {
      const currentPath = this.$route.path;
      this.$router.push({ path: currentPath, query: { play: lecture.id } });
    }
  },
  beforeCreate() {
    const pathHasQueries = Object.keys(this.$route.query).length > 0;
    const currentPath = this.$route.path;
    if(pathHasQueries) return this.$router.push(currentPath);
  }
};
</script>
