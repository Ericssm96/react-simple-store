import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
  headers: {
    "Accept": "application/json"
  }
});