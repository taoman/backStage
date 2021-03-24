/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-03-02 11:05:38
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-03 10:05:28
 */
export const asyncRouter = [
  {
    path: "/home",
    name: "home",
    component: () => import("/@/views/Home.vue"),
    meta: {
      title: "主页",
    },
  },
  {
    path: "/article",
    name: "article",
    component: () => import("/@/views/BlankPage.vue"),
    meta: {
      title: "工作台",
    },
    children: [
      {
        path: "index",
        name: "articleIndex",
        component: () => import("/@/views/article/index.vue"),
        meta: {
          title: "文章管理",
        },
      },
      {
        path: "/article/store",
        name: "articleStore",
        component: () => import("/@/views/article/store.vue"),
        meta: {
          title: "文章新增",
          hidden: true,
        },
      },
    ],
  },
  {
    path: "/role",
    name: "role",
    component: () => import("/@/views/BlankPage.vue"),
    meta: {
      title: "权限模块",
    },
    children: [
      {
        path: "/user/index",
        name: "userIndex",
        component: () => import("/@/views/role/user/index.vue"),
        meta: {
          title: "用户管理",
        },
      },
      {
        path: "/user/store",
        name: "userStore",
        component: () => import("/@/views/role/user/store.vue"),
        meta: {
          title: "用户新增",
          hidden: true,
        },
      },
    ],
  },
];
