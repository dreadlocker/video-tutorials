import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const allowedRoutes = ["Home", "Login", "Register"];
const userRoutes = ["AllCourses", "CourseDetails", "PlayVideo"];
const adminRoutes = ["CreateCourse", "EditCourse", "LecturePanel"];

router.beforeEach((to, from, next) => {
  const isAllowed = allowedRoutes.some(routeName => routeName === to.name);
  if(isAllowed) return next();
  
  // TODO PlayVideo -	Users (logged in and enrolled in the course) 
  const user = userRoutes.some(routeName => routeName === to.name) && store.state.isUserLoggedIn;
  if(user) return next();

  const admin = adminRoutes.some(routeName => routeName === to.name) && store.state.isAdminLoggedIn;
  if(admin) return next();

  next(from.path);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
