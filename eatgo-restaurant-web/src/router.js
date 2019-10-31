import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import ReservationList from './views/ReservationList.vue';
import Login from './views/Login.vue';

import store from './store';

Vue.use(Router);

const authenticated = (_to, _from, next) => {
  if (!store.state.accessToken) {
    next('/login');
    return;
  }

  next();
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: authenticated,
    },
    {
      path: '/reservations',
      name: 'reservation-list',
      component: ReservationList,
      beforeEnter: authenticated,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
