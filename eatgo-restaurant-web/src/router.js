import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ReservationList from './views/ReservationList.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/reservations',
      name: 'reservation-list',
      component: ReservationList,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
