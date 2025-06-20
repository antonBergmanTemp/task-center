import React, { useState, useEffect } from "react";
import { Page } from "@/components/Page.tsx";
import { useTranslation } from "@/localization/LanguageContext.tsx";
import "./FriendsPage.css";
import { formatNumber } from "@/utils/formatters";
import refreshIcon from "@/assets/icons/refresh.png";
import { apiClient } from "@/api/apiClient";

// Set to true to use mockup data, false to use real API
const DEBUG_MODE = false;

interface Friend {
  id: string;
  name: string;
  avatarUrl: string | null;
  ap: number;
  bonusAp: number;
}

// Mockup friends data for debug mode
const MOCKUP_FRIENDS: Friend[] = [
  { id: "1", name: "John Doe", avatarUrl: null, ap: 1250, bonusAp: 50 },
  { id: "2", name: "Alice Smith", avatarUrl: null, ap: 980, bonusAp: 35 },
  { id: "3", name: "Bob Johnson", avatarUrl: null, ap: 1560, bonusAp: 75 },
  { id: "4", name: "Emma Wilson", avatarUrl: null, ap: 2100, bonusAp: 90 },
  { id: "5", name: "Michael Brown", avatarUrl: null, ap: 1340, bonusAp: 45 },
  { id: "6", name: "Olivia Davis", avatarUrl: null, ap: 1890, bonusAp: 65 },
];

export const FriendsPage: React.FC = () => {
  const { t } = useTranslation();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const referralLink = `https://t.me/taskcetner_test_bot?startapp=${localStorage.getItem(
    "refCode"
  )}`;

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    setIsRefreshing(true);
    setIsLoading(true);

    try {
      if (DEBUG_MODE) {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Use mockup data in debug mode
        console.log("DEBUG MODE: Using mockup friends data");
        setFriends(MOCKUP_FRIENDS);
      } else {
        // Call the real friends API endpoint
        const response = await apiClient.friends.getFriends();
        console.log("Friends API Response:", response);

        // In a real implementation, you would parse the response
        // For now, we'll just set empty array
        setFriends([]);
      }
    } catch (error) {
      console.error("Error fetching friends:", error);
      setFriends([]);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const sendLink = () => {
    // Get localized message from translations
    const message = t("friends.inviteMessage");

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);

    // Create the Telegram share URL
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      referralLink
    )}&text=${encodedMessage}`;

    // Open the share URL
    window.location.href = shareUrl;
  };

  const copyLink = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => setShowPopup(true))
      .catch((err) => console.error("Failed to copy link:", err));
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Page>
      <div className="friends-page">
        {/* Header */}
        <header className="friends-header">
          <h1>{t("friends.title")}</h1>
          <div className="friends-subheader">{t("friends.subtitle")}</div>
        </header>

        {/* Rewards Section */}
        <section className="rewards-section">
          <div className="rewards-boxes">
            <div className="reward-box">
              <div className="reward-label">{t("friends.receive")}</div>
              <div className="reward-value">10%</div>
              <div className="reward-description">
                {t("friends.ofFriendsPoints")}
              </div>
            </div>

            <div className="reward-box">
              <div className="reward-label">{t("friends.plus")}</div>
              <div className="reward-value">5%</div>
              <div className="reward-description">
                {t("friends.fromTheirReferrals")}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="action-button send-link" onClick={sendLink}>
              {t("friends.sendLink")}
            </button>

            <button className="action-button copy-link" onClick={copyLink}>
              {t("friends.copyLink")}
            </button>
          </div>
        </section>

        {/* Friends List Section */}
        <section className="friends-list-section">
          <div className="friends-list-header">
            <h2>
              {t("friends.friendsCount")} {friends.length || 0}
            </h2>
            <button
              className={`refresh-button ${isRefreshing ? "refreshing" : ""}`}
              onClick={fetchFriends}
              disabled={isRefreshing}
            >
              <img src={refreshIcon} alt="Refresh" />
            </button>
          </div>

          {isLoading ? (
            <div className="friends-loading">{t("friends.loading")}</div>
          ) : friends.length > 0 ? (
            <div className="friends-list">
              {friends.map((friend) => (
                <div key={friend.id} className="friend-item">
                  <div className="friend-avatar">
                    {friend.avatarUrl ? (
                      <img
                        src={friend.avatarUrl}
                        alt={friend.name}
                        className="avatar-image"
                      />
                    ) : (
                      <div className="avatar-placeholder">
                        {friend.name?.charAt(0) || "?"}
                      </div>
                    )}
                  </div>

                  <div className="friend-info">
                    <div className="friend-name">{friend.name}</div>
                    <div className="friend-ap">
                      {formatNumber(friend.ap)} AP
                    </div>
                  </div>

                  <div className="friend-bonus">+{friend.bonusAp} AP</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="friends-empty-state">
              <div className="empty-state-title">
                {t("friends.noFriendsYet")}
              </div>
              <div className="empty-state-subtitle">
                {t("friends.expandList")}
              </div>
            </div>
          )}
        </section>

        {/* Copy Link Popup */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <button className="popup-close" onClick={closePopup}>
                ✕
              </button>
              <h2>{t("friends.linkCopied")}</h2>
              <div className="popup-link">{referralLink}</div>
              <button className="popup-copy" onClick={copyLink}>
                {t("friends.copy")}
              </button>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};
