import { FC } from "react";

import VisaLogo from "src/common/images/visa_logo_white.png";
import CheckedStar from "src/common/images/star.svg";

import style from "./transfer-card.module.sass";
import Image from "next/image";
import { Ptag } from "@/components/ui";

export const TransferCard: FC = () => {
  return (
    <li className={style.main}>
      <div className={style.card}>
        <div className={style.star}>
          <CheckedStar />
        </div>
        <Image src={VisaLogo} alt="logo" className={style.logo} />
      </div>
      <div className={style.detail}>
        <Ptag size="m" content="3149 Debit card" />
        <Ptag size="m" content="2895.15 USD" />
      </div>
    </li>
  );
};
