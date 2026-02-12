import axios from "axios";

const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // no /api here
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  withCredentials: true,
});
export default apiAuth;