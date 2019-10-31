import * as moment from 'moment';

import {
  useAccessToken,
  get, post,
  loginPost,
} from './http';

export default {
  setAccessToken({ commit }, { accessToken }) {
    commit('setAccessToken', accessToken);

    useAccessToken(accessToken);

    localStorage.setItem('accessToken', accessToken);
  },
  clearAccessToken({ commit }) {
    commit('setAccessToken', '');

    useAccessToken('');

    localStorage.removeItem('accessToken');
  },
  async createSession({ commit }, { email, password, success }) {
    const { accessToken } = await loginPost('/session', { email, password });
    commit('setAccessToken', accessToken);

    useAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken);

    success();
  },
  async loadCategories({ commit }) {
    const categories = await get('/categories');
    commit('setCategories', categories);
  },
  async loadRestaurants({ commit }, { region, category }) {
    const restaurants = await get('/restaurants', { region, category });
    commit('setRestaurants', restaurants);
  },
  async loadRestaurant({ commit }, restaurantId) {
    const restaurant = await get(`/restaurants/${restaurantId}`);
    commit('setRestaurant', restaurant);
  },
  resetReview({ commit }) {
    commit('setReview', {
      score: 3,
      description: '',
    });
  },
  async createReview({ state, dispatch }, restaurantId) {
    const { review } = state;
    try {
      await post(`/restaurants/${restaurantId}/reviews`, review);
      dispatch('resetReview');
      dispatch('loadRestaurant', restaurantId);
    } catch (e) {
      // TODO: Show error message
    }
  },
  resetReservation({ commit }) {
    const time = moment().add(1.5, 'hour');
    commit('setReservation', {
      date: time.format('YYYY-MM-DD'),
      time: time.format('HH:00'),
      partySize: 1,
    });
  },
  async createReservation({ state, dispatch }, restaurantId) {
    const { reservation } = state;
    try {
      await post(`/restaurants/${restaurantId}/reservations`, reservation);
      dispatch('resetReservation');
    } catch (e) {
      // TODO: Show error message
    }
  },
};
