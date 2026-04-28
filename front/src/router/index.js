import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Connection from '../views/connection.vue';
import Basket from '../views/Basket.vue';
import Printing from '../views/3dPrinting.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/connection', component: Connection },
  { path: '/basket', component: Basket },
  { path: '/3d-printing', component: Printing },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
