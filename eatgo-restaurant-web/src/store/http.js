import axios from 'axios';

const LOGIN_API_BASE_URL = process.env.VUE_APP_LOGIN_API_BASE_URL;
const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

let http = axios.create({
  baseURL: API_BASE_URL || 'http://localhost:8080',
});

export const useAccessToken = (accessToken) => {
  http = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:8080',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
};

export const get = async (path) => {
  const { data } = await http.get(path);
  return data;
};

export const loginPost = async (path, payload) => {
  const url = `${LOGIN_API_BASE_URL || 'http://localhost:8080'}${path}`;
  const { data } = await axios.post(url, payload);
  return data;
};

export default {
};
