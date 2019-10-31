<template>
  <div class="login-page">
    <div class="form-group">
      E-mail
      <input type="email" class="form-control" v-model="email">
    </div>
    <div class="form-group">
      Password
      <input type="password" class="form-control" v-model="password">
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-primary" @click.prevent="submit">
        로그인
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['createSession']),
    async submit() {
      const { email, password } = this;
      this.createSession({
        email,
        password,
        success: () => {
          this.$router.push('/');
        },
      });
    },
  },
};
</script>

<style scoped>
.login-page {
  padding: 40px;
}
</style>
