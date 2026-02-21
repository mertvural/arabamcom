import { createRouter, createWebHistory } from "vue-router";
import Lists from "@/features/lists/index.vue";
import Details from "@/features/details/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Lists,
    },
    {
      path: "/listing/:id",
      name: "listing-detail",
      component: Details,
      props: true,
    },
  ],
});

export default router;
