import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Card } from "../card/card";
import style from "./wallet.module.sass";
import { Htag } from "@/components/ui/htag/htag";
import { Button, Ptag, Switcher } from "@/components/ui";
import Icon from "@/common/icons/icon";
import { IconName } from "@/common/icons/Icon.props";
import { WalletSlider } from "./components";
import { SwiperClass } from "swiper/react";

import { animate } from "framer-motion";
import { useCardsContext } from "@/common/store/wallet.context";

export const Wallet: FC = () => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const { cardsData, totalCards, onDeactivateCard } = useCardsContext();

  const [slider, setSlider] = useState<SwiperClass>();

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [curentCard, setCurentCard] = useState(cardsData[activeCardIndex]);
  const [firstSlide, setFirstSlide] = useState(true);
  const [lastSlide, setLastSlide] = useState(false);

  const [animateTo, setAnimateTo] = useState({
    from: 0,
    to: 0,
  });

  useEffect(() => {
    setAnimateTo({
      from: +cardsData[0]?.MoneyRange.slice(1),
      to: +cardsData[0]?.MoneyRange.slice(1),
    });
  }, [cardsData]);

  const initSliderHandler = useCallback((initSlider: SwiperClass) => {
    setSlider(initSlider);
  }, []);

  useEffect(() => {
    slider?.on("slideChange", () => {
      const { activeIndex, previousIndex, isBeginning, isEnd } = slider;
      setActiveCardIndex(activeIndex);
      setFirstSlide(isBeginning);

      setAnimateTo(() => ({
        from: +cardsData[previousIndex]?.MoneyRange.slice(1),
        to: +cardsData[activeIndex]?.MoneyRange.slice(1),
      }));

      setLastSlide(isEnd);
      setCurentCard(cardsData[activeIndex]);
    });
  }, [cardsData, slider]);

  useEffect(() => {
    const node = nodeRef.current;

    const controls =
      node &&
      animate(animateTo.from, animateTo.to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = `$ ${value.toFixed(2)}`;
        },
      });

    return () => controls?.stop();
  }, [animateTo]);

  return (
    <div className={style.main}>
      <Card size="m">
        <div className={style.header}>
          <Htag content="Wallet" variant="h4" />
          <Ptag
            content={`Cards | ${activeCardIndex + 1} out of ${totalCards}`}
            size={"s"}
          />
          <div className={style.btn_group}>
            <Button
              variant="ghost"
              sufix={<Icon icon={IconName.ARROW_LEFT} />}
              size="m"
              onClick={() => slider?.slidePrev()}
              disabled={firstSlide}
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
            cardsData={cardsData}
          />

          <div className={style.description}>
            <div className={style.group}>
              <div className={style.group_item}>
                <Ptag size="m" content="Balance" />
                <span ref={nodeRef} />
              </div>
              <div className={style.group_item}>
                <Ptag size="m" content="Currency" />
                <span>US Dollar</span>
              </div>
            </div>
            <Switcher
              content={<Ptag content="Deactivate card" size={"m"} />}
              name={curentCard?.CardNumber}
              checked={curentCard?.active}
              onClick={() => onDeactivateCard(curentCard.CardNumber)}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
