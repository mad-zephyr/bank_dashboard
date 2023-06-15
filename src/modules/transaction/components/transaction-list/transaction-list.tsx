import { FC, ReactElement } from "react";

import style from "./transaction-list.module.sass";

type TransactionListProps = {
  children: ReactElement | ReactElement[];
};

export const TransactionList: FC<TransactionListProps> = ({ children }) => {
  return <ul className={style.main}>{children}</ul>;
};
