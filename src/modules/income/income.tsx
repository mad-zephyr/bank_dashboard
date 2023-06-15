import { FC } from "react";
import style from "./income.module.sass";
import { Card } from "../card/card";
import { Htag } from "@/components/ui/htag/htag";

export const Income: FC = () => {
  return (
    <div className={style.main}>
      <Card size="s">
        <>Income</>
      </Card>
      <Card size="s">
        <>Income</>
      </Card>
      <Card size="s">
        <>Income</>
      </Card>
    </div>
  );
};
