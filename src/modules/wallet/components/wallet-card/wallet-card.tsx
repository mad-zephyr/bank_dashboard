import { FC, useMemo } from "react";

import style from "./wallet-card.module.sass";
import Image from "next/image";

import cn from "classnames";

import VisaLogo from "src/common/images/visa_logo_white.png";
import MasterLogo from "src/common/images/mastercard.png";
import CardChip from "src/common/images/card_chip.svg";
import { Ptag } from "@/components/ui";
import { CardProps } from "@/common/types/types";
import CardBgOne from "src/common/images/cards_bg/card_one.png";
import CardBgTwo from "src/common/images/cards_bg/card_two.png";
import CardBgThree from "src/common/images/cards_bg/card_three.png";
import { generateRandom } from "@/common/helpers/helpers";

type WalletCardProps = {
  data: CardProps;
  active: boolean;
};

export const WalletCard: FC<WalletCardProps> = ({ data, active }) => {
  const activeCardStyle = useMemo<string>(() => {
    return cn(style.wrapper, { [style.disabled]: !active });
  }, [active]);

  const cardNumber = data.CardNumber.toString()
    .split("")
    .map((char, index) => (index % 4 === 0 ? ` ${char}` : char))
    .join("");

  const logo = useMemo(() => {
    const cardsBg = [CardBgOne, CardBgTwo, CardBgThree];
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
      default: {
        return {
          src: MasterLogo,
          bg: cardsBg[bgIndex],
        };
      }
    }
  }, [data.IssuingNetwork]);

  return (
    <div className={style.main}>
      <div className={activeCardStyle}>
        <Image
          loading={"eager"}
          src={logo.src}
          alt="logo"
          priority={false}
          className={style.logo}
        />

        <CardChip className={style.decor_card_chip} />
        <Image
          loading={"eager"}
          src={logo.bg}
          alt="background"
          priority={true}
          className={style.decor_bg}
        />

        <div className={style.description}>
          <Ptag size="s" content="CardNumber" />
          <Ptag size="l" content={cardNumber} />
        </div>
      </div>
    </div>
  );
};
