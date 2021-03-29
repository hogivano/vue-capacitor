import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import transaction from './transaction';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/main',
    component: () => import('@/layouts/main/Main.vue'),
    children: [
      ...transaction,
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/errors/error-404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL) || true,
  routes,
});

console.log(routes);

export default router;
