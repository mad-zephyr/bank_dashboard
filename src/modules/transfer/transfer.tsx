import { FC } from "react";
import style from "./transfer.module.sass";
import { Card } from "../card/card";
import { Htag } from "@/components/ui/htag/htag";

export const Transfer: FC = () => {
  return (
    <div className={style.main}>
      <Card size="m">
        <Htag content="Quick Transfer" variant="h4" />
      </Card>
    </div>
  );
};
