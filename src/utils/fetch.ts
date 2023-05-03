import axios from "axios";

const BASE_URL = "https://api.clinicaltrialskorea.com";

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
