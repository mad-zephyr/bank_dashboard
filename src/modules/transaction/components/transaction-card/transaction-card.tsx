import { FC, useMemo } from "react";

import style from "./transaction-card.module.sass";
import Image from "next/image";

import cn from "classnames";

import Netflix from "src/common/images/netflix_logo.png";
import Spotify from "src/common/images/spotify_logo.png";
import Figma from "src/common/images/figma_logo.png";
import Shopify from "src/common/images/shopify_logo.png";
import { compareAsc, format } from "date-fns";
import { enGB } from "date-fns/locale";

type TransactionCardProps = {
  data: {
    image: string;
    name: string;
    date: number;
    income: number;
    trend: boolean;
  };
};

export const TransactionCard: FC<TransactionCardProps> = ({ data }) => {
  const { date, image, income, name, trend } = data;

  const transactionDate = format(new Date(date), "MMM dd, yyyy", {
    locale: enGB,
  });
  const transactionTime = format(new Date(date), " kk:mm", {
    locale: enGB,
  });

  const logoImage = useMemo(() => {
    switch (name) {
      case "Netflix":
        return Netflix;
      case "Spotify":
        return Spotify;
      case "Figma":
        return Figma;
      case "Shopify":
        return Shopify;
      default:
        return Shopify;
    }
  }, [name]);

  return (
    <li className={style.main}>
      <div className={style.content}>
        <div className={style.logo_wrapper}>
          <Image src={logoImage} alt={name} className={style.logo} />
        </div>

        <div className={style.description}>
          <span>{name}</span>
          <span>
            {transactionDate} at {transactionTime}
          </span>
        </div>

        <div
          className={cn(style.income, {
            [style.income_positive]: trend,
            [style.income_negative]: !trend,
          })}
        >
          {trend ? "+" : "-"}${income}
        </div>
      </div>
    </li>
  );
};
