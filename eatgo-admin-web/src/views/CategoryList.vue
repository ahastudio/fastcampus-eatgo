<template>
  <div class="category-list">
    <h1 class="display-4">Category</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.name }}</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <router-link class="btn btn-primary" :to="{ name: 'category-new' }">
      New Category
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'category-list',
  computed: { ...mapState(['categories']) },
  methods: { ...mapActions(['loadCategories']) },
  mounted() {
    this.loadCategories();
  },
};
</script>
