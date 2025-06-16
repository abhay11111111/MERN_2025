import axios from "axios";

// in production, there's no localhost so we have to make this dynamic
const BASE_URL = "http://localhost:8000/api/v1"

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;