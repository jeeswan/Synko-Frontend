// auth.js
import apiAuth from "./apiAuth";

export const login = async (data) => {
  await apiAuth.get("/sanctum/csrf-cookie", { withCredentials: true });
  return apiAuth.post("/api/login", data, { withCredentials: true });
};

export const signup = (data) => apiAuth.post("/api/signup", data, { withCredentials: true });
export const logout = () => apiAuth.post("/api/logout", {}, { withCredentials: true });
export const fetchUser = () => apiAuth.get("/api/user", { withCredentials: true });
