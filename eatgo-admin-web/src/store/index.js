import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  accessToken: '',
  restaurants: [],
  restaurant: {},
  menuItems: [],
  categories: [],
  category: {},
  regions: [],
  region: {},
  reviews: [],
  users: [],
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
