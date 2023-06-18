export enum IconName {
  DASHBOARD = "dashboard",
  ANALYTIC = "analytic",
  LOGO = "logo",
  PAYMENT = "payment",
  DEPOSIT = "deposit",
  MONEYBOX = "moneybox",
  SECURITY = "security",
  HELP = "help",
  SETTINGS = "settigns",
  BURGER = "burger",
  SEARCH = "search",
  NOTIFICATION = "notification",
  ARROW_DOWN = "arrow_down",
  ARROW_RIGHT = "arrow_ight",
  ARROW_LEFT = "arrow_left",
  PLUS_16 = "plus_16",
  DOTS = "dots",
  CARD = "card",
  DOLLAR = "dollar",
  PERCENT = "percent",
  ARROW_RIGHT_LONG = "arrow right long",
  POSITIVE_TREND = "positive trend",
  NEGATIVE_TREND = "negative trend",
}

export type IconsProps = {
  icon: IconName;
  className?: string;
};
