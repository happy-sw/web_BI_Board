import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
});

export default router;
