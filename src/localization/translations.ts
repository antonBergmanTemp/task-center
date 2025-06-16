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
    ENG: "Leaders",
    RUS: "Лидеры",
  },
  "leaders.description": {
    ENG: "This is the leaderboard page!",
    RUS: "Это страница таблицы лидеров!",
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
