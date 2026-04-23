// src/services/api.js
import axios from "axios";

export const API = axios.create({
    baseURL: "https://deknek-backend-65ck.onrender.com/api/v1",
    withCredentials: true
});