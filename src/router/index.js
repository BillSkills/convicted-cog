import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Bracket from "../views/Bracket.vue";

const routes = [
  {
    path: "/convicted-cog/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/convicted-cog/bracket",
    name: "Bracket",
    component: () => import("../views/Bracket.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
