import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "http://127.0.0.1:5001/abduproject-2/us-central1/api",
// });
//local back end base url
// export const axiosInstance = axios.create({
//   baseURL: "http://localhost:5055",
// });

//deployed on render base url
 export const axiosInstance = axios.create({
   baseURL: "https:amazone-api-backend-deploy-xuqo.onrender.com",
 });