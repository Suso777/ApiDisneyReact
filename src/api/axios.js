import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL de tu API
  timeout: 5000,
});

export default api;