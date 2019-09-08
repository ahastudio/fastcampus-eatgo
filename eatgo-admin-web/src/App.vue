<template>
  <div id="app">
    <global-navigator />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import store from './store';

import GlobalNavigator from './components/GlobalNavigator.vue';

export default {
  name: 'my-app',
  components: { GlobalNavigator },
  store,
  methods: {
    ...mapActions(['loadAccessToken']),
  },
  created() {
    this.loadAccessToken();
  },
};
</script>

<style>
#app {
  padding-bottom: 40px;
}
</style>
