import axios from 'axios';

// Same-origin in production (Vercel) and proxied to the Express server by Vite in dev.
const api = axios.create({ baseURL: '/api' });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getErrorMessage = (err) =>
  err?.response?.data?.message ||
  err?.response?.data?.error ||
  (err?.request && !err?.response ? 'Unable to reach the server. Please try again.' : err?.message) ||
  'Something went wrong';

export default api;
