import { FC } from "react";
import style from "./transfer-input.module.sass";

export const TransferInput: FC = () => {
  return (
    <div className={style.main}>
      <input type="text" />
    </div>
  );
};
