import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API, // Use the environment variable
});

export default api;