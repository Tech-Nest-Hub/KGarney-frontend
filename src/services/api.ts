// src/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // <-- you can change this later if needed
  withCredentials: true, // enable if using cookies/sessions
});

// 🔐 Attach token to all requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // adjust if using cookies or a global store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ❌ Handle unauthorized errors globally (optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized — maybe redirect to login?');
    }
    return Promise.reject(error);
  }
);

export default api;
