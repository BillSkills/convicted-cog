import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Bracket from "../views/Bracket.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bracket",
    name: "Bracket",
    component: () => import("../views/Bracket.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
