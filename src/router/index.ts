import { createRouter, createWebHistory } from "vue-router";
import { asyncRouter } from "./asyncRouter";
import Login from "/@/views/login/index.vue";
const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "登录",
    },
  },
  {
    path: "",
    name: "index",
    // redirect: "/home",
    component: () => import("/@/components/Layout/index.vue"),
    meta: {
      title: "首页",
    },
    children: [...asyncRouter],
  },

  {
    path: "/setting",
    name: "Setting",
    component: () => import("/@/views/Setting.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from, next) => {
  if (sessionStorage.token) {
    next();
  } else {
    if (to.name !== "Login") {
      next({ name: "Login" });
    } else {
      next();
    }
  }
});

export default router;
