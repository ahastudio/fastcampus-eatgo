<template>
  <header>
    <h1>
      <router-link to="/">
        EatGo
      </router-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'global-navigator',
};
</script>

<style scoped>
header {
  padding: 20px 0;
}

a {
  text-decoration: none;
  color: #888;
}

a:hover {
  color: #555;
}
</style>
