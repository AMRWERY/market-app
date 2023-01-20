import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "/",
    redirect: "/items-list",
  },
  {
    path: "/items-list",
    component: () => import("../views/ItemList.vue"),
  },
  {
    path: "/details/:storeId",
    name: "ItemsDetails",
    component: () => import("../components/ItemsDetails.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
