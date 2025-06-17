import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { bem } from "@/css/bem.ts";
import { useTranslation } from "@/localization/LanguageContext.tsx";

// Import icons
import leadersActive from "@/assets/icons/leaders_active.png";
import leadersInactive from "@/assets/icons/leaders_inactive.png";
import homeActive from "@/assets/icons/home_active.png";
import homeInactive from "@/assets/icons/home_inactive.png";
import friendsActive from "@/assets/icons/friends_active.png";
import friendsInactive from "@/assets/icons/friends_inactive.png";

import "./Toolbar.css";

const [b, e] = bem("toolbar");

export const Toolbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const currentPath = location.pathname;

  return (
    <div className={b()}>
      <div className="toolbar-blur-background"></div>

      <div
        className={e("item", { active: currentPath === "/leaders" })}
        onClick={() => navigate("/leaders")}
      >
        <img
          src={currentPath === "/leaders" ? leadersActive : leadersInactive}
          alt="Leaders"
          className={e("icon")}
        />
        <span className={e("label")}>{t("toolbar.leaders").toUpperCase()}</span>
      </div>

      <div
        className={e("item", { active: currentPath === "/home" })}
        onClick={() => navigate("/home")}
      >
        <img
          src={currentPath === "/home" ? homeActive : homeInactive}
          alt="Home"
          className={e("icon")}
        />
        <span className={e("label")}>{t("toolbar.home").toUpperCase()}</span>
      </div>

      <div
        className={e("item", { active: currentPath === "/friends" })}
        onClick={() => navigate("/friends")}
      >
        <img
          src={currentPath === "/friends" ? friendsActive : friendsInactive}
          alt="Friends"
          className={e("icon")}
        />
        <span className={e("label")}>{t("toolbar.friends").toUpperCase()}</span>
      </div>
    </div>
  );
};
