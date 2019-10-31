import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import RestaurantList from './views/RestaurantList.vue';
import RestaurantDetail from './views/RestaurantDetail.vue';
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
      path: '/restaurants',
      name: 'restaurant-list',
      component: RestaurantList,
      beforeEnter: authenticated,
    },
    {
      path: '/restaurants/:restaurantId',
      name: 'restaurant-detail',
      component: RestaurantDetail,
      beforeEnter: authenticated,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
