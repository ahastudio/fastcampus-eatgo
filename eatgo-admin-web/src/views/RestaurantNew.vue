<template>
  <div class="restaurant-new">
    <h1 class="display-4">Restaurant</h1>
    <table class="table table-striped">
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
      </tbody>
    </table>
    <hr>
    <div>
      <button type="button" class="btn btn-primary" @click="submit">
        Create
      </button>
      |
      <router-link class="btn btn-secondary" :to="{ name: 'restaurant-list' }">
        Cancel
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'restaurant-new',
  computed: {
    ...mapState(['categories', 'restaurant']),
    restaurantId() {
      const { restaurantId } = this.$route.params;
      return restaurantId;
    },
  },
  methods: {
    ...mapActions(['resetRestaurant', 'createRestaurant', 'loadCategories']),
    submit() {
      this.createRestaurant(() => {
        this.$router.push({ name: 'restaurant-list' });
      });
    },
  },
  mounted() {
    this.resetRestaurant();
    this.loadCategories();
  },
};
</script>
