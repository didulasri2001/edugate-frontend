// src/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", // Replace with your backend URL
  // You can add more default configurations here, like headers
});

export default axiosInstance;
