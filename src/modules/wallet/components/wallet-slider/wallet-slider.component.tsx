import { EffectCreative, Navigation } from "swiper";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { WalletCard } from "../wallet-card/wallet-card";

import style from "./wallet-slider.module.sass";
import { FC } from "react";
import { CardProps } from "@/common/types/types";

type WalletSliderProps = {
  onInitSlider: (initSlider: SwiperClass) => void;
  cardsData: CardProps[];
};

export const WalletSlider: FC<WalletSliderProps> = ({
  onInitSlider,
  cardsData,
}) => {
  return (
    <div className={style.slider}>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        onChange={() => console.log("CHANGED")}
        spaceBetween={24}
        slidesPerView={"auto"}
        creativeEffect={{
          shadowPerProgress: true,
          limitProgress: 2,
          prev: {
            shadow: true,
            translate: ["22%", 0, -380],
          },
          next: {
            shadow: true,
            translate: ["-98%", 0, 0],
          },
        }}
        onInit={(event) => onInitSlider(event)}
        dir="rtl"
        modules={[EffectCreative, Navigation]}
        className={style.slider_wrapper}
      >
        {cardsData.map((card) => (
          <SwiperSlide key={card.CardNumber}>
            <WalletCard data={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
