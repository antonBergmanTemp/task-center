import { useMemo, useEffect, useState } from "react";
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";
import {
  initData,
  miniApp,
  retrieveLaunchParams,
} from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";

import { routes } from "@/navigation/routes.tsx";
import { Toolbar } from "@/components/Toolbar/Toolbar.tsx";
import { PageTransition } from "@/components/PageTransition/PageTransition.tsx";
import { LanguageProvider } from "@/localization/LanguageContext.tsx";
import { apiClient } from "@/api/apiClient.ts";
import { authService } from "@/services/authService.ts";
import "./App.css";

export function App() {
  const lp = useMemo(() => retrieveLaunchParams(), []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Set app theme
  miniApp.setBackgroundColor("#000000");
  miniApp.setHeaderColor("#000000");

  // Handle login on app startup
  useEffect(() => {
    const initAuth = async () => {
      try {
        setIsLoading(true);

        const _initData = initData.raw();

        // const initData =
        //   "user=%7B%22id%22%3A246335443%2C%22first_name%22%3A%22Cesare%22%2C%22last_name%22%3A%22The%20Cat%22%2C%22username%22%3A%22coyote_a%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FD1SPEvtome4R0aGmgDohYLP-f6u0Zcu3OKlpAy7LYIk.svg%22%7D&chat_instance=-6342777270208365349&chat_type=sender&auth_date=1747410605&signature=-NilY1tSPklbCcACYT1GH-R9UoWzwp_yiK3nAVVMtAlT6mn99Lkpc6KMva8L91HbZiCYGeYEYPXjhcfth6OaBQ&hash=e5d815a1bef007c5f1faed7857b1fba250372dc92eed0714d509b2194f5bf7ee";

        if (!_initData) {
          console.warn("No Telegram initData available");
          setIsLoading(false);
          return;
        }

        const startParam = lp.tgWebAppStartParam || "";

        const authData = await apiClient.auth.login(_initData, startParam);

        console.log("Login successful:", authData);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Login failed:", error);
        setLoginError("Authentication failed. Please try again.");
        authService.clearAuthData();
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, [lp.tgWebAppStartParam]);

  if (isLoading) {
    return (
      <AppRoot
        appearance="dark"
        platform={
          ["macos", "ios"].includes(lp.tgWebAppPlatform) ? "ios" : "base"
        }
      >
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </AppRoot>
    );
  }

  return (
    <LanguageProvider>
      <AppRoot
        appearance="dark"
        platform={
          ["macos", "ios"].includes(lp.tgWebAppPlatform) ? "ios" : "base"
        }
      >
        {loginError && <div className="login-error">{loginError}</div>}

        <HashRouter>
          <div className="app-container">
            <PageTransition>
              <Routes>
                {routes.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </PageTransition>
            <Toolbar />
          </div>
        </HashRouter>
      </AppRoot>
    </LanguageProvider>
  );
}
