import axios, { AxiosError } from "axios";
import { handleAxiosError } from "./errorHandling";

const BASE_URL = "https://api.rawg.io/api";
// const BASE_URL = "http://localhost:3001";
const API_KEY = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      Accept: "application/json",
   },
   params: {
      key: API_KEY,
   },
});

// Intercept the error and send it to our errors handler to personalize the message
axiosInstance.interceptors.response.use(
   (response) => response,
   (error: AxiosError) => {
      const customError = handleAxiosError(error);
      return Promise.reject(customError);
   }
);

export default axiosInstance;
