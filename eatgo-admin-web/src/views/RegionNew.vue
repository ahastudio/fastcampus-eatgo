<template>
  <div class="region-new">
    <h1 class="display-4">Region</h1>
    <table class="table table-striped">
      <tbody>
        <tr>
          <th>Name</th>
          <td>
            <input type="text" class="form-control" v-model="region.name">
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
      <router-link class="btn btn-secondary" :to="{ name: 'region-list' }">
        Cancel
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'region-new',
  computed: { ...mapState(['region']) },
  methods: {
    ...mapActions(['resetRegion', 'createRegion']),
    submit() {
      this.createRegion(() => {
        this.$router.push({ name: 'region-list' });
      });
    },
  },
  mounted() {
    this.resetRegion();
  },
};
</script>
