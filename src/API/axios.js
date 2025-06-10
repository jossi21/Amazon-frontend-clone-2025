import axios from "axios";

export const axiosInstant = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-81fd8/us-central1/api",
  headers: {
    "Content-Type": "application/json",
  },
});
