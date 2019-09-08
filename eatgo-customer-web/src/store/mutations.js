export default {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setRestaurants(state, restaurants) {
    state.restaurants = restaurants;
  },
  setRestaurant(state, restaurant) {
    state.restaurant = restaurant;
  },
  setReview(state, review) {
    state.review = review;
  },
  setReservation(state, reservation) {
    state.reservation = reservation;
  },
};
