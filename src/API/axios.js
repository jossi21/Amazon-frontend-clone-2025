import axios from "axios";

export const axiosInstant = axios.create({
  // local server of function firebase
  // baseURL: "http://127.0.0.1:5001/clone-81fd8/us-central1/api",
  // headers: {
  //   "Content-Type": "application/json",
  // },
  // deployed version of amazon server on render.com
  baseURL: "https://amazon-backend-deploy-q17r.onrender.com/",
});
