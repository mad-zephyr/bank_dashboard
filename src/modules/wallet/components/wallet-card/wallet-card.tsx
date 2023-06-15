import { FC } from "react";

import style from "./wallet-card.module.sass";
import Image from "next/image";

import VisaLogo from "src/common/images/visa_logo_white.png";
import CardChip from "src/common/images/card_chip.svg";
import { Ptag } from "@/components/ui";

export const WalletCard: FC = () => {
  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        <Image src={VisaLogo} alt="visa" className={style.logo} />

        <div className={style.decor_item2} />
        <div className={style.decor_item1} />
        <CardChip className={style.decor_card_chip} />

        <div className={style.description}>
          <Ptag size="s" content="CardNumber" />
          <Ptag size="l" content="5783 4160 8526 3149" />
        </div>
      </div>
    </div>
  );
};
