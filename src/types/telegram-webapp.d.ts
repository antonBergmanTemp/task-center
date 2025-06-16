interface TelegramWebApp {
  ready(): void;
  expand(): void;
  close(): void;
  setBackgroundColor(color: string): void;
  setHeaderColor(color: "bg_color" | "secondary_bg_color"): void;
  enableClosingConfirmation(): void;
  disableClosingConfirmation(): void;
  MainButton: any;
  BackButton: any;
  // Add other WebApp properties as needed
}

interface Window {
  Telegram?: {
    WebApp?: TelegramWebApp;
  };
}
