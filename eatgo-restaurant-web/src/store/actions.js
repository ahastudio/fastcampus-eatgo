import { useAccessToken, get, loginPost } from './http';

export default {
  setAccessToken({ commit }, { accessToken }) {
    commit('setAccessToken', accessToken);

    useAccessToken(accessToken);

    localStorage.setItem('accessToken', accessToken);
  },
  clearAccessToken({ commit }) {
    commit('setAccessToken', '');

    useAccessToken('');

    localStorage.removeItem('accessToken');
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
