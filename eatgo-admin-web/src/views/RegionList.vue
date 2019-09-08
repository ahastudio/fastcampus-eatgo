<template>
  <div class="region-list">
    <h1 class="display-4">Region</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="region in regions" :key="region.id">
          <td>{{ region.name }}</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <router-link class="btn btn-primary" :to="{ name: 'region-new' }">
      New Region
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'region-list',
  computed: { ...mapState(['regions']) },
  methods: { ...mapActions(['loadRegions']) },
  mounted() {
    this.loadRegions();
  },
};
</script>
