import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

store.dispatch('setAccessToken', {
  accessToken: localStorage.getItem('accessToken') || '',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
