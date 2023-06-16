import { FC, useMemo, useState } from "react";

import VisaLogo from "src/common/images/visa_logo_white.png";
import MasterLogo from "src/common/images/mastercard.png";
import CheckedStar from "src/common/images/star.svg";

import style from "./transfer-card.module.sass";
import Image from "next/image";
import { Ptag } from "@/components/ui";
import { CardProps } from "@/common/types/types";
import classNames from "classnames";

type TransferCardProps = {
  data: CardProps;
  favorite?: boolean;
};

export const TransferCard: FC<TransferCardProps> = ({
  data,
  favorite = false,
}) => {
  const [favoriteCard, setFavoriteCard] = useState(favorite);
  const availableAmount = data.MoneyRange?.slice(1);
  const amount = Number.isInteger(availableAmount)
    ? `${availableAmount}.00`
    : availableAmount;

  const currency = data.MoneyRange?.at(0);
  const last4digits = data.CardNumber?.toString().slice(12);

  const logo = useMemo(() => {
    switch (data.IssuingNetwork) {
      case "MASTERCARD": {
        return {
          src: MasterLogo,
          type: "master",
        };
      }
      case "VISA": {
        return {
          src: VisaLogo,
          type: "visa",
        };
      }
    }
  }, [data.IssuingNetwork]);

  const setFavoritehandler = () => {
    setFavoriteCard((prevState) => !prevState);
  };

  return (
    <div className={style.main}>
      <div
        onClick={setFavoritehandler}
        className={classNames(style.card, {
          [style.color_visa]: logo.type === "visa",
          [style.color_master]: logo.type === "master",
        })}
      >
        {favoriteCard && (
          <div className={style.star}>
            <CheckedStar />
          </div>
        )}
        <Image src={logo.src} alt="logo" className={style.logo} />
      </div>
      <div className={style.detail}>
        <Ptag size="m" content={`${last4digits} Debit card`} />
        <Ptag size="m" content={`${amount} ${currency}`} />
      </div>
    </div>
  );
};
