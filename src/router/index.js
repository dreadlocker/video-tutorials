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
    path: "/course-details/:id",
    name: "CourseDetailsPage",
    component: () => import("@/views/Course_Details/CourseDetailsPage.vue"),
    meta: {requiresAccess: "user"},
    children: [
      {
        path: "id",
        name: "CourseDetails",
        component: () => import("@/views/Course_Details/CourseDetails.vue"),
      }
    ]
  },
  {
    path: "/create-course",
    name: "CreateCourse",
    meta: {requiresAccess: "admin"},
    component: () => import("@/views/Create_Course/CreateCoursePage.vue")
  },
  {
    path: "/edit-course",
    name: "EditCourse",
    meta: {requiresAccess: "admin"},
    component: () => import("@/views/Edit_Course/EditCoursePage.vue")
  },
  {
    path: "/lecture-panel",
    name: "LecturePanel",
    meta: {requiresAccess: "admin"},
    component: () => import("@/views/Lecture_Panel/LecturePanelPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
