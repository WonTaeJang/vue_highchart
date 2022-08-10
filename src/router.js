import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import('@/components/Home.vue'),
  },
  {
    path: "/concepts",
    component: () => import('@/components/LineChart.vue'),
  },
  {
    path: "/stock",
    component: () => import('@/components/StockChart.vue'),
  },
  {
    path: "/map",
    component: () => import('@/components/MapChart.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 