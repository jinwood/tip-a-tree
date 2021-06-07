import { createRouter, createWebHistory } from "vue-router";
import Tip from "../components/Tip";

const routes = [
  {
    path: "/",
    component: Tip,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
