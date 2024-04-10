import Axios from "axios";
import { storage } from "./storage";

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

axios.interceptors.request.use((config) => {
  const token = storage().getItem("token");
  config.headers["Content-Type"] = "application/json";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (401 === error.response.status) {
//       const user = {
//         name: "",
//         id: "",
//         roles: [],
//         permissions: [],
//       };
//     }
//   }
// );
