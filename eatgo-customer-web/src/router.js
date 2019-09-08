import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RestaurantList from './views/RestaurantList.vue';
import RestaurantDetail from './views/RestaurantDetail.vue';
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
      path: '/restaurants',
      name: 'restaurant-list',
      component: RestaurantList,
    },
    {
      path: '/restaurants/:restaurantId',
      name: 'restaurant-detail',
      component: RestaurantDetail,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
