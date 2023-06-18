import Vue from "vue";
import VueRouter from "vue-router";
import TasksPage from "../views/TasksPage.vue";
import MainPage from "../views/MainPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
