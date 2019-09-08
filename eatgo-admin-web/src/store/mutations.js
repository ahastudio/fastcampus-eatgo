export default {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
  },
  setRestaurants(state, restaurants) {
    state.restaurants = restaurants;
  },
  setRestaurant(state, restaurant) {
    state.restaurant = restaurant;
  },
  setMenuItems(state, menuItems) {
    state.menuItems = menuItems;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setCategory(state, category) {
    state.category = category;
  },
  setRegions(state, regions) {
    state.regions = regions;
  },
  setRegion(state, region) {
    state.region = region;
  },
  setReviews(state, reviews) {
    state.reviews = reviews;
  },
  setUsers(state, users) {
    state.users = users;
  },
};
