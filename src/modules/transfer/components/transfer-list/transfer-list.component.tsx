import { FC, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";

import style from "./transfer-list.module.sass";
import { TransferCard } from "../transfer-card/transfer-card.component";

import cardsMock from "src/mock/cardsMock.json";
import { CardProps } from "@/common/types/types";
import Icon from "@/common/icons/icon";
import { IconName } from "@/common/icons/Icon.props";
import { Button } from "@/components/ui";

export const TransferList: FC = () => {
  const [slider, setSlider] = useState<SwiperClass>();
  return (
    <div className={style.main}>
      <div className={style.group}>
        <Button
          size="s"
          className={style.group_trigger}
          variant="ghost"
          postfix={<Icon icon={IconName.ARROW_LEFT} />}
          onClick={() => slider?.slideNext()}
        />
        <Button
          size="s"
          className={style.group_trigger}
          variant="ghost"
          postfix={<Icon icon={IconName.ARROW_RIGHT} />}
          onClick={() => slider?.slidePrev()}
        />
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={8}
        className={style.main}
        onInit={(ev) => setSlider(ev)}
      >
        {(cardsMock as unknown as CardProps[]).map((data) => {
          return (
            <SwiperSlide key={data.CardNumber} style={{ width: "auto" }}>
              <TransferCard data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
