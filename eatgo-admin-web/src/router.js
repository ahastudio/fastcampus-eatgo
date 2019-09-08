import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RestaurantList from './views/RestaurantList.vue';
import RestaurantNew from './views/RestaurantNew.vue';
import RestaurantEdit from './views/RestaurantEdit.vue';
import MenuItems from './views/MenuItems.vue';
import CategoryList from './views/CategoryList.vue';
import CategoryNew from './views/CategoryNew.vue';
import RegionList from './views/RegionList.vue';
import RegionNew from './views/RegionNew.vue';
import UserList from './views/UserList.vue';
import ReviewList from './views/ReviewList.vue';
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
      path: '/restaurants/new',
      name: 'restaurant-new',
      component: RestaurantNew,
    },
    {
      path: '/restaurants/:restaurantId',
      name: 'restaurant-edit',
      component: RestaurantEdit,
    },
    {
      path: '/restaurants/:restaurantId/menuitems',
      name: 'menu-items',
      component: MenuItems,
    },
    {
      path: '/categories',
      name: 'category-list',
      component: CategoryList,
    },
    {
      path: '/categories/new',
      name: 'category-new',
      component: CategoryNew,
    },
    {
      path: '/regions',
      name: 'region-list',
      component: RegionList,
    },
    {
      path: '/regions/new',
      name: 'region-new',
      component: RegionNew,
    },
    {
      path: '/users',
      name: 'user-list',
      component: UserList,
    },
    {
      path: '/reviews',
      name: 'review-list',
      component: ReviewList,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
