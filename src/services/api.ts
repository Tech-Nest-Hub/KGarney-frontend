// src/api.ts
import type { LoginFormData,AuthResponse,RegisterFormData} from '@/features/auth/schema/schema';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  withCredentials: true, // enable if using cookies/sessions
  timeout: 10000, // optional timeout for requests
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

export const authAPI = {
  login: async (data: LoginFormData): Promise<AuthResponse> => {
    try {
      const response = await api.post("/auth/login", data)
      return response.data
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Login failed")
    }
  },

  register: async (data: RegisterFormData): Promise<AuthResponse> => {
    try {
      const response = await api.post("/auth/register", data)
      return response.data
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Registration failed")
    }
  },

  logout: async (): Promise<void> => {
    try {
      await api.post("/auth/logout")
      localStorage.removeItem("token")
    } catch (error) {
      console.error("Logout error:", error)
    }
  },
}

export default api;
