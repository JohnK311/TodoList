import { createRouter, createWebHashHistory } from "vue-router";

import TaskPage from '@/components/TaskPage.vue'
import mainPage from '@/components/mainPage.vue'

const routes = [
  {path: '/', component: mainPage},
  {path: '/tasklist', component: TaskPage},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;