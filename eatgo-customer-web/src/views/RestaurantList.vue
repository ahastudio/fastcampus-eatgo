<template>
  <div class="restaurant-list">
    <ul v-if="restaurants.length">
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        <router-link
          :to="{
            name: 'restaurant-detail',
            params: {
              restaurantId: restaurant.id,
            },
          }"
        >
          {{ restaurant.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'restaurant-list',
  computed: { ...mapState(['region', 'category', 'restaurants']) },
  methods: { ...mapActions(['loadRestaurants']) },
  async mounted() {
    const { region, category } = this.$route.query;
    this.loadRestaurants({ region, category });
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid #CCC;
}

li {
  border-bottom: 1px solid #CCC;
}

a {
  display: block;
  padding: 20px 10px;
  text-decoration: none;
  color: #555;
  font-size: 24px;
}

a:hover {
  background: #F8F8F8;
  color: #000;
}
</style>
