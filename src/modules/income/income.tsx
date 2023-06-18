import { FC } from "react";
import { Card } from "../card/card";
import incomeMock from "src/mock/incomeMock.json";
import { IncomeCard } from "./components";

import style from "./income.module.sass";

export const Income: FC = () => {
  return (
    <div className={style.main}>
      {incomeMock.map((data) => (
        <Card size="s" key={data.title}>
          <IncomeCard data={data} />
        </Card>
      ))}
    </div>
  );
};
