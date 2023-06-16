import { FC, useMemo, useState } from "react";
import { Card } from "../card/card";
import style from "./wallet.module.sass";
import { Htag } from "@/components/ui/htag/htag";
import { Button, Ptag, Switcher } from "@/components/ui";
import Icon from "@/common/icons/icon";
import { IconName } from "@/common/icons/Icon.props";
import { WalletSlider } from "./components";
import { SwiperClass } from "swiper/react";

import mockCardsData from "src/mock/cardsMock.json";
import { CardProps } from "@/common/types/types";

export const Wallet: FC = () => {
  const [slider, setSlider] = useState<SwiperClass>();
  const [curentCard, setCurentCard] = useState(mockCardsData[0]);
  const [cardIndex, setCardIndex] = useState(0);
  const [firstSlide, setFirstSlide] = useState(true);
  const [lastSlide, setLastSlide] = useState(false);

  const initSliderHandler = (initSlider: SwiperClass) => {
    setSlider(initSlider);
  };

  slider?.on("slideChange", () => {
    setCardIndex(slider?.activeIndex);
    setFirstSlide(slider.isBeginning);
    setLastSlide(slider.isEnd);
    setCurentCard(mockCardsData[slider?.activeIndex]);
  });

  const totalCard = mockCardsData.length;

  return (
    <div className={style.main}>
      <Card size="m">
        <div className={style.header}>
          <Htag content="Wallet" variant="h4" />
          <Ptag
            content={`Cards | ${cardIndex + 1} out of ${totalCard}`}
            size={"s"}
          />
          <div className={style.btn_group}>
            <Button
              variant="ghost"
              sufix={<Icon icon={IconName.ARROW_LEFT} />}
              size="m"
              onClick={() => slider?.slidePrev()}
              disabled={cardIndex === 0}
            />
            <Button
              variant="ghost"
              sufix={<Icon icon={IconName.ARROW_RIGHT} />}
              size="m"
              onClick={() => slider?.slideNext()}
              disabled={lastSlide}
            />
          </div>
        </div>
        <div className={style.container}>
          <WalletSlider
            onInitSlider={initSliderHandler}
            cardsData={mockCardsData as unknown as CardProps[]}
          />

          <div className={style.description}>
            <div className={style.group}>
              <div className={style.group_item}>
                <Ptag size="m" content="Balance" />
                <span>{curentCard?.MoneyRange}.00</span>
              </div>
              <div className={style.group_item}>
                <Ptag size="m" content="Currency" />
                <span>US Dollar</span>
              </div>
            </div>
            <Switcher
              content={<Ptag content="Deactivate card" size={"m"} />}
              name="active"
              onClick={() => {}}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
