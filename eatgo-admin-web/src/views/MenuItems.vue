<template>
  <div class="menu-items">
    <h1 class="display-4">Menu Items</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(menuItem, index) in menuItems" :key="menuItem.id">
          <td>
            <input type="text" class="form-control" v-model="menuItem.name"
              :disabled="menuItem.destroy"
            >
          </td>
          <td>
            <input type="checkbox" class="form-check-input"
              :id="`checkbox-destroy-item-${index}`"
              v-model="menuItem.destroy"
            >
            <label class="form-check-label"
              :for="`checkbox-destroy-item-${index}`"
            >
              Delete
            </label>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button type="button" class="btn btn-dark" @click="addMenuItem">
              Add Item
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <hr>
    <div>
      <button type="button" class="btn btn-primary" @click="submit">
        Save
      </button>
      |
      <router-link class="btn btn-secondary"
        :to="{
          name: 'restaurant-edit',
          params: { restaurantId },
        }"
      >
        Back
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'restaurant-edit',
  computed: {
    ...mapState(['restaurant', 'menuItems']),
    restaurantId() {
      const { restaurantId } = this.$route.params;
      return restaurantId;
    },
  },
  methods: {
    ...mapActions(['loadMenuItems', 'addMenuItem', 'saveMenuItems']),
    submit() {
      this.saveMenuItems(this.restaurantId);
    },
  },
  mounted() {
    this.loadMenuItems(this.restaurantId);
  },
};
</script>
