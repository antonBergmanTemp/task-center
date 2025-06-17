export type Language = "ENG" | "RUS";

export const translations = {
  // Header and common elements
  "common.about": {
    ENG: "About",
    RUS: "О приложении",
  },
  "common.language": {
    ENG: "ENG",
    RUS: "RUS",
  },

  // Home page
  "home.title": {
    ENG: "Home",
    RUS: "Главная",
  },
  "home.description": {
    ENG: "Welcome to the home page!",
    RUS: "Добро пожаловать на главную страницу!",
  },

  // Leaders page
  "leaders.title": {
    ENG: "Gifthorse",
    RUS: "Gifthorse",
  },
  "leaders.subtitle": {
    ENG: "Leaderboard",
    RUS: "Таблица лидеров",
  },
  "leaders.users": {
    ENG: "Users:",
    RUS: "Пользователей:",
  },
  "leaders.ap": {
    ENG: "AP",
    RUS: "АП",
  },
  "leaders.loading": {
    ENG: "Loading leaderboard data...",
    RUS: "Загрузка данных...",
  },
  "leaders.league.platinum": {
    ENG: "PLATINUM",
    RUS: "ПЛАТИНА",
  },
  "leaders.anonymousUser": {
    ENG: "Anonymous User",
    RUS: "Анонимный пользователь",
  },

  // Friends page
  "friends.title": {
    ENG: "Friends",
    RUS: "Друзья",
  },
  "friends.description": {
    ENG: "Connect with your friends here!",
    RUS: "Подключайтесь к друзьям здесь!",
  },

  // About modal
  "about.title": {
    ENG: "About This App",
    RUS: "О Приложении",
  },
  "about.description": {
    ENG: "This is a Telegram Mini App for task management and productivity.",
    RUS: "Это Telegram Мини-Приложение для управления задачами и повышения продуктивности.",
  },
  "about.version": {
    ENG: "Version: 1.0.0",
    RUS: "Версия: 1.0.0",
  },
  "about.creator": {
    ENG: "Created by: Your Name",
    RUS: "Создатель: Ваше Имя",
  },

  // Toolbar
  "toolbar.home": {
    ENG: "Home",
    RUS: "Главная",
  },
  "toolbar.leaders": {
    ENG: "Leaders",
    RUS: "Лидеры",
  },
  "toolbar.friends": {
    ENG: "Friends",
    RUS: "Друзья",
  },
};

export type TranslationKey = keyof typeof translations;
