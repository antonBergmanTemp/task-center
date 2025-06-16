import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Base URL for all API requests
const BASE_URL = "https://facadeservice.cryptodev.gifthorse.store";

// Interface for login request
interface LoginRequest {
  inputData: string;
  referralData?: string;
}

// Create axios instance with default configuration
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// General request methods
export const apiClient = {
  // GET request method
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await api.get(url, config);
      return response.data;
    } catch (error) {
      console.error("API GET Error:", error);
      throw error;
    }
  },

  // POST request method
  async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await api.post(url, data, config);
      return response.data;
    } catch (error) {
      console.error("API POST Error:", error);
      throw error;
    }
  },

  // Specific endpoints
  auth: {
    // Login endpoint
    async login(inputData: string, referralData?: string): Promise<any> {
      const data: LoginRequest = {
        inputData,
        referralData: referralData || "",
      };

      return apiClient.post("/api/login", data);
    },
  },
};
