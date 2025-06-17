import axios, { AxiosRequestConfig } from "axios";
import { authService, AuthResponse } from "@/services/authService";
import { extractUserIdFromInitData } from "@/utils/telegramUtils";

const BASE_URL = "https://facadeservice.cryptodev.gifthorse.store";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = authService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Store userId after login for future use
let currentUserId: string | null = null;

export const apiClient = {
  // GET request
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await api.get(url, config);
      return response.data;
    } catch (error) {
      console.error("API GET Error:", error);
      throw error;
    }
  },

  // POST request
  async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await api.post(url, data, config);
      return response.data;
    } catch (error) {
      console.error("API POST Error:", error);
      throw error;
    }
  },

  // Auth endpoints
  auth: {
    async login(
      inputData: string,
      referralData?: string
    ): Promise<AuthResponse> {
      try {
        // Store user ID for future use
        currentUserId = extractUserIdFromInitData(inputData);
        console.log("Extracted user ID:", currentUserId);

        const data = {
          inputData: decodeURIComponent(inputData),
          referralData: referralData || "",
        };

        const response = await apiClient.post<{
          result: string;
          ok: boolean;
        }>("/api/login", data);

        // Parse the result string to get the auth data
        const authData: AuthResponse = JSON.parse(response.result);

        // Store the auth data
        authService.setAuthData(authData);

        // Also store user ID for convenience
        if (currentUserId) {
          localStorage.setItem("userId", currentUserId);
        }

        return authData;
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    },
  },

  // Leaderboard endpoints
  leaderboard: {
    async getLeaderboard(userId?: string): Promise<any> {
      // Use provided userId, or stored userId, or fallback to localStorage
      const id = userId || currentUserId || localStorage.getItem("userId");

      if (!id) {
        throw new Error("User ID not available. Please login first.");
      }

      return apiClient.get(`/api/get-leaderboard/${id}`);
    },
  },

  // Add other API endpoints here
  lootBox: {
    async getLootBox(): Promise<any> {
      return apiClient.get("/api/get-loot-box");
    },
  },
};
