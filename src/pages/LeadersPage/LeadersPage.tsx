import React, { useEffect, useState } from "react";
import { Page } from "@/components/Page.tsx";
import { apiClient } from "@/api/apiClient";
import { useTranslation } from "@/localization/LanguageContext.tsx";
import goldMedal from "@/assets/medals/gold.png";
import silverMedal from "@/assets/medals/silver.png";
import bronzeMedal from "@/assets/medals/bronze.png";
import { formatNumber } from "@/utils/formatters";
import "./LeadersPage.css";
import { extractUsernameFromInitData } from "@/utils/telegramUtils";
import { initData } from "@telegram-apps/sdk-react";

interface LeaderboardData {
  WebappUserKey: string;
  TopSize: number;
  UserRank: number;
  Name: string | null;
  logoUrl: string | null;
  LeaderboardList: LeaderboardUser[];
}

interface LeaderboardUser {
  WebappUserKey: string;
  Ap: number;
  Rank: number;
  Name: string | null;
  logoUrl: string | null;
}

export const LeadersPage: React.FC = () => {
  const { t } = useTranslation();
  const [leaderboardData, setLeaderboardData] =
    useState<LeaderboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const username = extractUsernameFromInitData(initData.raw());

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.leaderboard.getLeaderboard();
        console.log("Leaderboard response:", response);

        // Parse the JSON string in the result field
        if (response?.result) {
          const parsedData = JSON.parse(response.result);
          console.log("Parsed leaderboard data:", parsedData);
          setLeaderboardData(parsedData);
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  // Function to get medal image based on rank
  const getMedalImage = (rank: number) => {
    switch (rank) {
      case 1:
        return goldMedal;
      case 2:
        return silverMedal;
      case 3:
        return bronzeMedal;
      default:
        return null;
    }
  };

  return (
    <Page>
      <div className="leaders-page">
        {/* Header */}
        <header className="leaders-header">
          <h1>
            {t("leaders.title")}
            <br />
            {t("leaders.subtitle")}
          </h1>
        </header>

        {isLoading ? (
          <div className="leaders-loading">{t("leaders.loading")}</div>
        ) : (
          <>
            {/* User Profile Section */}
            <section className="user-profile-section">
              <div className="user-avatar-wrapper">
                <div className="user-avatar">
                  {leaderboardData?.logoUrl ? (
                    <img src={leaderboardData.logoUrl} alt="User" />
                  ) : (
                    <div className="avatar-placeholder">
                      {leaderboardData?.Name?.charAt(0) || "?"}
                    </div>
                  )}
                </div>
                <div className="league-badge">
                  {t("leaders.league.platinum")}
                </div>
              </div>

              <h2 className="user-display-name">
                {username || "Anonymous User"}
              </h2>

              <div className="user-rank-container">
                <div className="user-rank-box">
                  #{leaderboardData?.UserRank || 0}
                </div>
              </div>

              <div className="total-users-count">
                {t("leaders.users")}{" "}
                {formatNumber(leaderboardData?.TopSize || 0)}
              </div>
            </section>

            {/* Leaderboard List */}
            <section className="leaderboard-section">
              <div className="leaderboard-list">
                {/* Display actual leaderboard users */}
                {leaderboardData?.LeaderboardList &&
                  leaderboardData.LeaderboardList.map((user) => {
                    const medalImage = getMedalImage(user.Rank);

                    return (
                      <div
                        key={user.WebappUserKey}
                        className="leaderboard-item"
                      >
                        <div className="leaderboard-user-avatar">
                          {user.logoUrl ? (
                            <img
                              src={user.logoUrl}
                              alt={user.Name || "User"}
                              className="user-avatar-image"
                            />
                          ) : (
                            <div className="avatar-placeholder">
                              {user.Name?.charAt(0) || "?"}
                            </div>
                          )}
                        </div>

                        <div className="leaderboard-user-info">
                          <div className="leaderboard-user-name">
                            {user.Name || t("leaders.anonymousUser")}
                          </div>
                          <div className="leaderboard-user-score">
                            {formatNumber(user.Ap)} {t("leaders.ap")}
                          </div>
                        </div>

                        <div className="leaderboard-rank">
                          {medalImage ? (
                            <img
                              src={medalImage}
                              alt={`Rank ${user.Rank}`}
                              className="medal-icon"
                            />
                          ) : (
                            <span>#{user.Rank}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          </>
        )}
      </div>
    </Page>
  );
};
