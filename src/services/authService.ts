export interface AuthResponse {
  AccessToken: string;
  RefCode: string;
  Streak: string;
}

export const authService = {
  setAuthData(data: AuthResponse): void {
    localStorage.setItem("accessToken", data.AccessToken);
    localStorage.setItem("refCode", data.RefCode);
    localStorage.setItem("streak", data.Streak);
  },

  getToken(): string | null {
    return localStorage.getItem("accessToken");
  },

  getRefCode(): string | null {
    return localStorage.getItem("refCode");
  },

  getStreak(): string | null {
    return localStorage.getItem("streak");
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },

  clearAuthData(): void {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refCode");
    localStorage.removeItem("streak");
  },
};
