import { useAccessToken, get, loginPost } from './http';

export default {
  loadAccessToken({ commit }) {
    const accessToken = localStorage.getItem('accessToken') || '';
    commit('setAccessToken', accessToken);

    useAccessToken(accessToken);
  },
  async createSession({ commit }, { email, password, success }) {
    const { accessToken } = await loginPost('/session', { email, password });
    commit('setAccessToken', accessToken);

    useAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken);

    success();
  },
  async loadReservations({ commit }) {
    const reservations = await get('/reservations');
    commit('setReservations', reservations);
  },
};
