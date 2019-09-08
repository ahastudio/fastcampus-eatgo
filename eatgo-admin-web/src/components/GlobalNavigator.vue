<template>
  <nav class="navbar navbar-light bg-light">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/restaurants">
          Restaurant
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/regions">
          Region
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/categories">
          Category
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/users">
          User
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/reviews">
          Review
        </router-link>
      </li>
      <li class="nav-item" v-if="accessToken.length === 0">
        <router-link class="nav-link" to="/login">
          Log in
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'global-navigator',
  computed: { ...mapState(['accessToken']) },
};
</script>
