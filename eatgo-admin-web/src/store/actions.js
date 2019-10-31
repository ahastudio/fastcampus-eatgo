import {
  useAccessToken,
  get, post, patch,
  loginPost,
} from './http';

const { log: print } = console;

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
  async loadRestaurants({ commit }) {
    const restaurants = await get('/restaurants');
    commit('setRestaurants', restaurants);
  },
  async loadRestaurant({ commit }, restaurantId) {
    const restaurant = await get(`/restaurants/${restaurantId}`);
    commit('setRestaurant', restaurant);
  },
  async saveRestaurant({ state }) {
    const { restaurant } = state;
    await patch(`/restaurants/${restaurant.id}`, restaurant);
    // TODO: Show message.
    print('saveRestaurant - Success!');
  },
  resetRestaurant({ commit }) {
    commit('setRestaurant', {
      name: '',
      address: '',
      categoryId: null,
    });
  },
  async createRestaurant({ state }, callback) {
    const { restaurant } = state;
    await post('/restaurants', restaurant);
    // TODO: Show message.
    print('createRestaurant - Success!');
    callback();
  },
  async loadMenuItems({ commit }, restaurantId) {
    const menuItems = await get(`/restaurants/${restaurantId}/menuitems`);
    commit('setMenuItems', menuItems);
  },
  async saveMenuItems({ state }, restaurantId) {
    const { menuItems } = state;
    await patch(`/restaurants/${restaurantId}/menuitems`, menuItems);
    // TODO: Show message.
    print('saveMenuItems - Success!');
  },
  addMenuItem({ commit, state }) {
    const { menuItems } = state;
    commit('setMenuItems', [
      ...menuItems,
      { name: '' },
    ]);
  },
  async loadCategories({ commit }) {
    const categories = await get('/categories');
    commit('setCategories', categories);
  },
  async createCategory({ state }, callback) {
    const { category } = state;
    await post('/categories', category);
    // TODO: Show message.
    print('createCategory - Success!');
    callback();
  },
  resetCategory({ commit }) {
    commit('setCategory', { name: '' });
  },
  async loadRegions({ commit }) {
    const regions = await get('/regions');
    commit('setRegions', regions);
  },
  async createRegion({ state }, callback) {
    const { region } = state;
    await post('/regions', region);
    // TODO: Show message.
    print('createRegion - Success!');
    callback();
  },
  resetRegion({ commit }) {
    commit('setRegion', { name: '' });
  },
  async loadReviews({ commit }) {
    const reviews = await get('/reviews');
    commit('setReviews', reviews);
  },
  async loadUsers({ commit, dispatch }) {
    const users = await get('/users');
    commit('setUsers', users);
    users
      .filter(user => user.restaurantId)
      .forEach(user => dispatch('loadUserRestaurant', user));
  },
  async loadUserRestaurant({ state, commit }, user) {
    const { id, restaurantId } = user;
    const restaurant = await get(`/restaurants/${restaurantId}`);
    const users = state.users
      .map(u => ((u.id === id) ? { ...u, restaurant } : u));
    commit('setUsers', users);
  },
};
