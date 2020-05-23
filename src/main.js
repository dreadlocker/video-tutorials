import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const allowedRoutes = ["Home", "Login", "Register"];
const userRoutes = ["Home", "AllCourses", "CourseDetails", "PlayVideo"];
const adminRoutes = ["Home", "CreateCourse", "EditCourse", "LecturePanel"];

// TODO DA PROVERQ DO KOI ROUTES MOJE DA SE STIGA KOGATO NIKOI NE E LOGNAT, KOGATO USER E LOGNAT I KOGATO ADMIN E LOGNAT
router.beforeEach((to, from, next) => {
  const isNooneLogged = 
    allowedRoutes.some(routeName => routeName === to.name)
    && !(store.state.is_user_logged_in)
    && !(store.state.is_admin_logged_In);
  if(isNooneLogged) return next();
  
  // TODO PlayVideo -	Users (logged in and enrolled in the course) 
  const isUserLogged = userRoutes.some(routeName => routeName === to.name) && store.state.is_user_logged_in;
  if(isUserLogged) return next();

  const isAdminLogged = adminRoutes.some(routeName => routeName === to.name) && store.state.is_admin_logged_In;
  if(isAdminLogged) return next();

  next(from.path);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
