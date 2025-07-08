// src/services/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Example: https://api.example.com
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // if cookies or sessions are involved
});


// Add token dynamically
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
