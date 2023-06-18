import { IconName } from "@/common/icons/Icon.props";
import Icon from "@/common/icons/icon";
import { Ptag } from "@/components/ui";
import { FC } from "react";
import style from "./income-card.module.sass";

type IncomeCardProps = {
  data: {
    title: string;
    amount: number;
    period: string;
    percent: number;
    trend: boolean;
  };
};

export const IncomeCard: FC<IncomeCardProps> = ({ data }) => {
  const { title, amount, period, percent, trend } = data;
  return (
    <div className={style.main}>
      <Ptag content={title} size="m" className={style.title} />
      <Ptag content={`$${amount}`} size="l" className={style.content} />
      <div className={style.footer}>
        <Ptag size="s" content={period} />
        <Icon
          icon={trend ? IconName.POSITIVE_TREND : IconName.NEGATIVE_TREND}
          className={style.trend}
        />
        <Ptag
          size="s"
          content={`${percent.toFixed(2)}%`}
          className={trend ? style.trend_positive : style.trend_negative}
        />
      </div>
    </div>
  );
};
