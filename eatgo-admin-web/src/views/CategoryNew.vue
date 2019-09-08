<template>
  <div class="category-new">
    <h1 class="display-4">Category</h1>
    <table class="table table-striped">
      <tbody>
        <tr>
          <th>Name</th>
          <td>
            <input type="text" class="form-control" v-model="category.name">
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
      <router-link class="btn btn-secondary" :to="{ name: 'category-list' }">
        Cancel
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'category-new',
  computed: { ...mapState(['category']) },
  methods: {
    ...mapActions(['resetCategory', 'createCategory']),
    submit() {
      this.createCategory(() => {
        this.$router.push({ name: 'category-list' });
      });
    },
  },
  mounted() {
    this.resetCategory();
  },
};
</script>
