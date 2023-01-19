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
    path: "/details/:itemId",
    name: "ItemsDetails",
    component: () => import("../components/ItemsDetails.vue"),
  },
  {
    path: "/cart",
    component: () => import("../components/UserCart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
