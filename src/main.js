import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const allowedRoutes = ["Home", "Login", "Register"];
const userRoutes = ["Home", "CourseDetails", "PlayVideo"];
const adminRoutes = ["Home", "CreateCourse", "EditCourse", "LecturePanel"];

// TODO DA PROVERQ DO KOI ROUTES MOJE DA SE STIGA KOGATO NIKOI NE E LOGNAT, KOGATO USER E LOGNAT I KOGATO ADMIN E LOGNAT
router.beforeEach((to, from, next) => {
  const state = store.state;
  const userName = state.current_user.username;
  const isNooneLogged = 
    allowedRoutes.some(routeName => routeName === to.name)
    && userName === undefined;
  if(isNooneLogged) return next();
  
  // TODO PlayVideo -	Users (logged in and enrolled in the course) 
  const isUserLogged = userRoutes.some(routeName => routeName === to.name) && userName !== "Admin";
  if (to.path.includes("/course-details/")) {
    const courseId = Number(to.params.id);
    const courses = state.public_courses;
    const course = courses.find(course => course.id === courseId);
    if (course === undefined) return next(from.path);
  }
  if(isUserLogged) return next();
  
  const isAdminLogged = adminRoutes.some(routeName => routeName === to.name) && userName === "Admin";
  if(isAdminLogged) return next();

  next(from.path);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
