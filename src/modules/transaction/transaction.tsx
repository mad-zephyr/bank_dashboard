import { FC } from "react";
import style from "./transaction.module.sass";
import { Card } from "../card/card";

import { Htag, Ptag } from "@/components/ui";
import { TransactionCard, TransactionList } from "./components";
import transaction from "src/mock/transactions.json";

export const Transaction: FC = () => {
  return (
    <div className={style.main}>
      <Card size="m">
        <div className={style.header}>
          <Htag content="Transaction" variant="h4" />
          <Ptag content={"| Upcoming Bills"} size={"s"} />
          <div className={style.btn_group}>
            <span role="button">View all</span>
          </div>
        </div>
        <TransactionList>
          {transaction.map((data) => {
            return <TransactionCard key={data.name + data.date} data={data} />;
          })}
        </TransactionList>
      </Card>
    </div>
  );
};
