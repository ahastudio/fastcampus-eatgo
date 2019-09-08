<template>
  <div class="restaurant-list">
    <h1 class="display-4">Users</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>E-mail</th>
          <th>Name</th>
          <th>Level</th>
          <th>Restaurant</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.email }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.level }}</td>
          <td>
            <router-link v-if="user.restaurant"
              class="btn btn-secondary"
              :to="{
                name: 'restaurant-edit',
                params: { restaurantId: user.restaurant.id },
              }"
            >
              {{ user.restaurant.name }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'user-list',
  computed: { ...mapState(['users']) },
  methods: { ...mapActions(['loadUsers']) },
  mounted() {
    this.loadUsers();
  },
};
</script>
