<template>
  <div class="home">
    <ul>
      <li v-for="category in categories" :key="category.id">
        <router-link
          :to="{
            name: 'restaurant-list',
            query: {
              region: '',
              category: category.id,
            },
          }"
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'home',
  computed: { ...mapState(['categories']) },
  methods: { ...mapActions(['loadCategories']) },
  mounted() {
    this.loadCategories();
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  width: 25%;
  padding: 5px;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  border: 1px solid #CCC;
  border-radius: 4px;
  text-decoration: none;
  color: #555;
  font-size: 24px;
}

a:hover {
  color: #000;
}
</style>
