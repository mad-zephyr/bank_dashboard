import { FC } from "react";

import style from "./transaction-card.module.sass";
import Image from "next/image";

import cn from "classnames";

import Netflix from "src/common/images/netflix_logo.png";

type TransactionCardProps = {
  image: string;
  name: string;
  date: string;
  income: number;
  trend: boolean;
};

export const TransactionCard: FC = () => {
  const trend = false;
  return (
    <li className={style.main}>
      <div className={style.content}>
        <div className={style.logo_wrapper}>
          <Image src={Netflix} alt="" className={style.logo} />
        </div>

        <div className={style.description}>
          <span>Netflix</span>
          <span>Apr 05 2023 at 21:46</span>
        </div>

        <div
          className={cn(style.income, {
            [style.income_positive]: trend,
            [style.income_negative]: !trend,
          })}
        >
          -$15.49
        </div>
      </div>
    </li>
  );
};
