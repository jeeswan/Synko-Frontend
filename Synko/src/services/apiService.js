import api from "./api";

export const loginUser = (data) => {
  return api.post("/login", data);
};

export const signupUser = (data) => {
  return api.post("/signup", data);
};