import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api/',
});

export default api;
