import { createRouter, createWebHistory } from "vue-router";
import Lists from "@/features/lists/index.vue";
import ListingDetail from "@/features/details/components/ListingDetail.vue";

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
      component: ListingDetail,
      props: true,
    },
  ],
});

export default router;
