<template>
  <header>
    <h1>
      <router-link to="/">
        EatGo
      </router-link>
    </h1>
    <div v-if="accessToken">
      <button class="btn btn-dark" @click.prevent="logout">
        Log out
      </button>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'global-navigator',
  computed: { ...mapState(['accessToken']) },
  methods: {
    ...mapActions(['clearAccessToken']),
    logout() {
      this.clearAccessToken();
    },
  },
};
</script>

<style scoped>
header {
  padding: 20px 0 40px;
}

h1 {
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: #888;
}

a:hover {
  color: #555;
}
</style>
