<template>
  <div class="reservation-list">
    <h1 class="display-4">Reservations</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Party Size</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reservation in reservations" :key="reservation.id">
          <td>{{ reservation.name }}</td>
          <td>{{ reservation.date }}</td>
          <td>{{ reservation.time }}</td>
          <td>{{ reservation.partySize }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'reservation-list',
  computed: { ...mapState(['accessToken', 'reservations']) },
  methods: { ...mapActions(['loadReservations']) },
  mounted() {
    if (!this.accessToken) {
      this.$router.push('/login');
      return;
    }
    this.loadReservations();
  },
};
</script>
