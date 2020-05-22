import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/Home/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/LoginPage.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register/RegisterPage.vue")
  },
  {
    path: "/all-courses",
    name: "AllCourses",
    component: () => import("@/views/All_Courses/AllCoursesPage.vue")
  },
  {
    path: "/course-details",
    name: "CourseDetails",
    component: () => import("@/views/Course_Details/CourseDetailsPage.vue")
  },
  {
    path: "/play-video",
    name: "PlayVideo",
    component: () => import("@/views/Play_Video/PlayVideoPage.vue")
  },
  {
    path: "/create-course",
    name: "CreateCourse",
    component: () => import("@/views/Create_Course/CreateCoursePage.vue")
  },
  {
    path: "/edit-course",
    name: "EditCourse",
    component: () => import("@/views/Edit_Course/EditCoursePage.vue")
  },
  {
    path: "/lecture-panel",
    name: "LecturePanel",
    component: () => import("@/views/Lecture_Panel/LecturePanelPage.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
