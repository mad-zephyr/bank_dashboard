import { FC, ReactElement } from "react";

import style from "./transfer-list.module.sass";

type TransferList = {
  children: ReactElement | ReactElement[];
};

export const TransferList: FC<TransferList> = ({ children }) => {
  return (
    <div className={style.main}>
      <ul className={style.wrapper}>{children}</ul>
    </div>
  );
};
