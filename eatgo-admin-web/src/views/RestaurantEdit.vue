<template>
  <div class="restaurant-edit">
    <h1 class="display-4">Restaurant</h1>
    <table class="table table-striped" v-if="restaurant.id">
      <tbody>
        <tr>
          <th>Name</th>
          <td>
            <input type="text" class="form-control" v-model="restaurant.name">
          </td>
        </tr>
        <tr>
          <th>Address</th>
          <td>
            <input type="text" class="form-control" v-model="restaurant.address">
          </td>
        </tr>
        <tr>
          <th>Category</th>
          <td>
            <select class="form-control" v-model="restaurant.categoryId">
              <option v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <th>Menu</th>
          <td>
            <ul v-if="menuItems.length">
              <li v-for="menuItem in menuItems" :key="menuItem.id">
                {{ menuItem.name }}
              </li>
            </ul>
            <hr>
            <router-link class="btn btn-dark"
              :to="{
                name: 'menu-items',
                params: {
                  restaurantId: restaurant.id,
                },
              }"
            >
              Edit Menu
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <hr>
    <div>
      <button type="button" class="btn btn-primary" @click="saveRestaurant">
        Save
      </button>
      |
      <router-link class="btn btn-secondary" :to="{ name: 'restaurant-list' }">
        List
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'restaurant-edit',
  computed: {
    ...mapState(['categories', 'restaurant', 'menuItems']),
    restaurantId() {
      const { restaurantId } = this.$route.params;
      return restaurantId;
    },
  },
  methods: {
    ...mapActions([
      'loadCategories', 'loadRestaurant', 'loadMenuItems', 'saveRestaurant',
    ]),
  },
  mounted() {
    this.loadCategories();
    this.loadRestaurant(this.restaurantId);
    this.loadMenuItems(this.restaurantId);
  },
};
</script>
