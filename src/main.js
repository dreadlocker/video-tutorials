import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const requiresAccess = to.meta.requiresAccess;
  const userAccess = store.state.current_user.access;

  if (requiresAccess) {
    if (requiresAccess === userAccess) {
      next();
    } else {
      next({name: "Login"});
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
