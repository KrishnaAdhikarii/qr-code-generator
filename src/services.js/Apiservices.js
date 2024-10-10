// src/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:10000"||process.env.REACT_APP_BACKEND_URL, // Change this to point to your backend
});

export const generateQRCode = async (data) => {
  const response = await api.post("/api/generate-qr", data);
  return response.data;
};
