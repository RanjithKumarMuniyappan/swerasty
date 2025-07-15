import axios from 'axios';


const apiClient = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
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
