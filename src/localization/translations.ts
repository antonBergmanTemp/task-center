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
  "friends.subtitle": {
    ENG: "Invite your friends and earn bonus points together!",
    RUS: "Приглашайте друзей и зарабатывайте бонусные очки вместе!",
  },
  "friends.receive": {
    ENG: "Receive",
    RUS: "Получите",
  },
  "friends.ofFriendsPoints": {
    ENG: "of friends' points",
    RUS: "от очков друзей",
  },
  "friends.plus": {
    ENG: "Plus",
    RUS: "Плюс",
  },
  "friends.fromTheirReferrals": {
    ENG: "from their referrals",
    RUS: "от их рефералов",
  },
  "friends.sendLink": {
    ENG: "Send Link",
    RUS: "Отправить ссылку",
  },
  "friends.copyLink": {
    ENG: "Copy Link",
    RUS: "Копировать ссылку",
  },
  "friends.friendsCount": {
    ENG: "Friends:",
    RUS: "Друзья:",
  },
  "friends.loading": {
    ENG: "Loading friends...",
    RUS: "Загрузка друзей...",
  },
  "friends.linkCopied": {
    ENG: "Link Copied",
    RUS: "Ссылка скопирована",
  },
  "friends.copy": {
    ENG: "Copy",
    RUS: "Копировать",
  },
  "friends.description": {
    ENG: "Connect with your friends here!",
    RUS: "Подключайтесь к друзьям здесь!",
  },
  "friends.noFriendsYet": {
    ENG: "You haven't added any friends yet :(",
    RUS: "Вы еще не добавили друзей :(",
  },
  "friends.expandList": {
    ENG: "Expand your list by sending link to someone",
    RUS: "Расширьте свой список, отправив ссылку кому-нибудь",
  },
  "friends.inviteMessage": {
    ENG: "Hey! Join me in this awesome task app. We can earn points together!",
    RUS: "Привет! Присоединяйся ко мне в этом крутом приложении. Мы можем зарабатывать очки вместе!",
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
