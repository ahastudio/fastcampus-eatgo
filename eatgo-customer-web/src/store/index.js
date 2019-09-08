import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  accessToken: '',
  categories: [],
  restaurants: [],
  restaurant: {},
  review: {},
  reservation: {},
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
