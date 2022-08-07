import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/list",
    component: import('@/components/LineChart.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 