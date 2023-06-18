import { FC } from "react";
import { IconName, IconsProps } from "./Icon.props";

import Payment from "../images/payment.svg";
import Logo from "../images/Logo.svg";
import Dashboard from "../images/dashboard.svg";
import Analytics from "../images/analytic.svg";
import Deposit from "../images/deposit.svg";
import Piggy from "../images/piggy.svg";
import Security from "../images/security.svg";
import Help from "../images/help.svg";
import Settings from "../images/settings.svg";
import Burger from "../images/burger.svg";
import Search from "../images/search.svg";
import Notification from "../images/notification.svg";
import ArrowDown from "../images/arrow.svg";
import ArrowRight from "../images/arrow_right.svg";
import ArrowLeft from "../images/arrow_left.svg";
import Plus16 from "../images/plus_16.svg";
import Dots from "../images/dots.svg";
import Card from "../images/payment.svg";
import Dollar from "../images/dollarcircle.svg";
import Percent from "../images/percentage-filled.svg";
import ArrowRightLong from "../images/arrow-right-linear.svg";
import PositiveTrendIcon from "../images/positive_trend.svg";
import NegativeTrendIcon from "../images/negative_trend.svg";

const Icon: FC<IconsProps> = ({ icon, className }) => {
  switch (icon) {
    case IconName.LOGO: {
      return <Logo className={className} />;
    }
    case IconName.DASHBOARD: {
      return <Dashboard className={className} />;
    }
    case IconName.ANALYTIC: {
      return <Analytics className={className} />;
    }
    case IconName.PAYMENT: {
      return <Payment className={className} />;
    }
    case IconName.DEPOSIT: {
      return <Deposit className={className} />;
    }
    case IconName.MONEYBOX: {
      return <Piggy className={className} />;
    }
    case IconName.SECURITY: {
      return <Security className={className} />;
    }
    case IconName.SETTINGS: {
      return <Settings className={className} />;
    }
    case IconName.HELP: {
      return <Help className={className} />;
    }
    case IconName.BURGER: {
      return <Burger className={className} />;
    }
    case IconName.SEARCH: {
      return <Search className={className} />;
    }
    case IconName.NOTIFICATION: {
      return <Notification className={className} />;
    }
    case IconName.ARROW_DOWN: {
      return <ArrowDown className={className} />;
    }
    case IconName.ARROW_RIGHT: {
      return <ArrowRight className={className} />;
    }
    case IconName.ARROW_LEFT: {
      return <ArrowLeft className={className} />;
    }
    case IconName.PLUS_16: {
      return <Plus16 className={className} />;
    }
    case IconName.DOTS: {
      return <Dots className={className} />;
    }
    case IconName.CARD: {
      return <Card className={className} />;
    }
    case IconName.DOLLAR: {
      return <Dollar className={className} />;
    }
    case IconName.PERCENT: {
      return <Percent className={className} />;
    }
    case IconName.ARROW_RIGHT_LONG: {
      return <ArrowRightLong className={className} />;
    }
    case IconName.NEGATIVE_TREND: {
      return <NegativeTrendIcon className={className} />;
    }
    case IconName.POSITIVE_TREND: {
      return <PositiveTrendIcon className={className} />;
    }
    default: {
      return <></>;
    }
  }
};

export default Icon;
