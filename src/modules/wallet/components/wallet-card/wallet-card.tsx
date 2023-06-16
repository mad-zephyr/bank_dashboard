import { FC, useMemo } from "react";

import style from "./wallet-card.module.sass";
import Image from "next/image";

import VisaLogo from "src/common/images/visa_logo_white.png";
import MasterLogo from "src/common/images/mastercard.png";
import CardChip from "src/common/images/card_chip.svg";
import { Ptag } from "@/components/ui";
import { CardProps } from "@/common/types/types";
import CardBgOne from "src/common/images/cards_bg/card_one.png";
import CardBgTwo from "src/common/images/cards_bg/card_two.png";
import CardBgThree from "src/common/images/cards_bg/card_three.png";
import { generateRandom } from "@/common/helpers/helpers";
import cn from "classnames";

type WalletCardProps = {
  data: CardProps;
};

export const WalletCard: FC<WalletCardProps> = ({ data }) => {
  const cardNumber = data.CardNumber.toString()
    .split("")
    .map((char, index) => {
      return index % 4 === 0 ? ` ${char}` : char;
    })
    .join("");

  const cardsBg = useMemo(() => [CardBgOne, CardBgTwo, CardBgThree], []);

  const logo = useMemo(() => {
    const bgIndex = generateRandom(3);
    switch (data.IssuingNetwork) {
      case "VISA": {
        return {
          src: VisaLogo,
          bg: cardsBg[bgIndex],
        };
      }
      case "MASTERCARD": {
        return {
          src: MasterLogo,
          bg: cardsBg[bgIndex],
        };
      }
    }
  }, [data.IssuingNetwork, cardsBg]);

  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        <Image src={logo.src} alt="logo" className={style.logo} />

        {/* <div className={style.decor_item2} />
        <div className={style.decor_item1} /> */}
        <CardChip className={style.decor_card_chip} />
        <Image src={logo.bg} alt="background" className={style.decor_bg} />

        <div className={style.description}>
          <Ptag size="s" content="CardNumber" />
          <Ptag size="l" content={cardNumber} />
        </div>
      </div>
    </div>
  );
};
