import { FC } from "react";
import style from "./transfer.module.sass";
import { Card } from "../card/card";
import { Htag } from "@/components/ui/htag/htag";
import { Ptag } from "@/components/ui";
import { TransferCard, TransferInput, TransferList } from "./components";

export const Transfer: FC = () => {
  return (
    <div className={style.main}>
      <Card size="m">
        <div className={style.header}>
          <Htag content="Quick Transfer" variant="h4" />
          <Ptag content={"| Mobile top-up"} size={"s"} />
          <div className={style.btn_group}>
            <span role="button">See all</span>
          </div>
        </div>
        <TransferList>
          <TransferCard />
          <TransferCard />
          <TransferCard />
        </TransferList>
        <TransferInput />
        <TransferInput />
      </Card>
    </div>
  );
};
