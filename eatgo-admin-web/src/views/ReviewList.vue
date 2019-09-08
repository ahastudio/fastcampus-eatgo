<template>
  <div class="review-list">
    <h1 class="display-4">Reviews</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Restaurant</th>
          <th>Name</th>
          <th>Description</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="review in reviews" :key="review.id">
          <td>{{ review.restaurantId }}</td>
          <td>{{ review.name }}</td>
          <td>{{ review.description }}</td>
          <td>{{ review.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'review-list',
  computed: { ...mapState(['reviews']) },
  methods: { ...mapActions(['loadReviews']) },
  mounted() {
    this.loadReviews();
  },
};
</script>
