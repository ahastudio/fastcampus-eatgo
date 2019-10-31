<template>
  <div id="app">
    <global-navigator />
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import store from './store';

import GlobalNavigator from './components/GlobalNavigator.vue';

export default {
  name: 'my-app',
  components: { GlobalNavigator },
  store,
  computed: { ...mapState(['accessToken']) },
  watch: {
    accessToken() {
      this.$router.go('/');
    },
  },
};
</script>

<style>
#app {
  padding-bottom: 40px;
}
</style>
