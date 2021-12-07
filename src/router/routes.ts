import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'signin',
        alias: ['/signin'],
        component: () => import('components/AdminPages/SignIn.vue') },
      { 
        path: '/sign-up',
        name: 'signup',
        component: () => import('src/components/AdminPages/SignUp.vue') }
    ],
  },
  {
    path: '/user',
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
