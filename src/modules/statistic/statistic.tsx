import { FC } from "react";

import style from "./statistic.module.sass";
import { Card } from "../card/card";
import { Htag } from "@/components/ui/htag/htag";

export const Statistic: FC = () => {
  return (
    <div className={style.main}>
      <Card size="m">
        <Htag content="Statistic" variant="h4" />
      </Card>
    </div>
  );
};
