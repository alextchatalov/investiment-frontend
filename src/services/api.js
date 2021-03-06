import axios from "axios";
import { getToken } from "./auth";
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://investiment-backend.herokuapp.com/api/v1"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
