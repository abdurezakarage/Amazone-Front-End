import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/abduproject-2/us-central1/api",
});