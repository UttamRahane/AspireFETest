import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'cards',
        alias: ['/cards'],
        component: () => import('components/Cards/Cards.vue') },
      { 
        path: '/Home',
        name: 'home',
        component: () => import('components/Home/Home.vue') }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
