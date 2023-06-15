import { FC } from "react";
import style from "./transaction.module.sass";
import { Card } from "../card/card";
import { Htag } from "@/components/ui/htag/htag";
import { Button, Ptag } from "@/components/ui";
import { TransactionList } from "./components/transaction-list/transaction-list";
import { TransactionCard } from "./components/transaction-card/transaction-card";

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
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </TransactionList>
      </Card>
    </div>
  );
};
