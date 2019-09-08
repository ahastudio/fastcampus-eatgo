<template>
  <div class="restaurant-list">
    <h1 class="display-4">Restaurants</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Category</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
          <td>{{ restaurant.name }}</td>
          <td>{{ restaurant.address }}</td>
          <td>{{ getCategoryName(restaurant.categoryId) }}</td>
          <td>
            <router-link class="btn btn-dark"
              :to="{
                name: 'restaurant-edit',
                params: { restaurantId: restaurant.id },
              }"
            >
              Edit
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <router-link class="btn btn-primary" :to="{ name: 'restaurant-new' }">
      New Restaurant
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'restaurant-list',
  computed: mapState(['categories', 'restaurants']),
  methods: {
    ...mapActions(['loadCategories', 'loadRestaurants']),
    getCategoryName(categoryId) {
      const category = this.categories.find(i => i.id === categoryId);
      return category && category.name;
    },
  },
  mounted() {
    this.loadCategories();
    this.loadRestaurants();
  },
};
</script>
