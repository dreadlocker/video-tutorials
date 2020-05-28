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
import { mapGetters, mapActions } from "vuex";
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
    ...mapGetters(["users", "publicCourses", "currentUser"]),
    currentCourse() {
      const currentCourseId = Number(this.$route.params.id);
      return this.publicCourses.find(course => course.id === currentCourseId);
    },
    userNotEnrolled() {
      const userCourses = this.currentUser.courses;
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
      headingClasses: "heading-padding-x text-align-left",
      courseDescriptionHeading: "Course Description",
      enrollButton: {
        type: "button",
        classes: "primary",
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
      const userInfo = this.users.find(user => user.username === this.currentUser.username);
      userInfo.courses.push(this.currentCourse.id);
      
      this.action_save_users(this.users);
      this.action_current_user({username: userInfo.username, courses: userInfo.courses, access: "user"});

      this.updateCourses();
    },
    updateCourses() {
      const currentCourse = this.publicCourses.find(course => course.title === this.currentCourse.title);
      currentCourse.usersEnrolled += 1;
      this.action_update_public_courses(this.publicCourses);
    },
    playCourse(lectureId) {
      const currentPath = this.$route.path;
      this.$router.push({ path: currentPath, query: { play: lectureId } });
    }
  },
  beforeCreate() {
    const pathHasQueries = Object.keys(this.$route.query).length > 0;
    const currentPath = this.$route.path;
    if(pathHasQueries) return this.$router.push(currentPath);
  }
};
</script>
