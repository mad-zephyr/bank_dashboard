import { FC } from "react";
import style from "./transfer.module.sass";
import { Card } from "../card/card";
import { Htag } from "@/components/ui/htag/htag";
import { Button, Ptag } from "@/components/ui";
import { TransferCard, TransferInput, TransferList } from "./components";
import Icon from "@/common/icons/icon";
import { IconName } from "@/common/icons/Icon.props";

export const Transfer: FC = () => {
  return (
    <div className={style.main}>
      <Card size="m">
        <div className={style.header}>
          <Htag content="Quick Transfer" variant="h4" />
          <Ptag content={"| Mobile top-up"} size={"s"} />
          <div className={style.btn_group}>
            <span role="button">See all</span>
          </div>
        </div>
        <TransferList />

        <TransferInput
          sufix={<Icon icon={IconName.CARD} />}
          placeholder={"Card or phone"}
        />
        <TransferInput
          sufix={<Icon icon={IconName.DOLLAR} />}
          postfix={"USD"}
          placeholder={"Preferred ammount"}
        />

        <div className={style.form_footer}>
          <span className={style.form_badge}>
            <Icon icon={IconName.PERCENT} />
          </span>
          <Button
            variant="secondary"
            content="Get Started"
            size="m"
            postfix={<Icon icon={IconName.ARROW_RIGHT_LONG} />}
          />
        </div>
        <div className={style.text_block}>
          <Ptag content="Create a new deposit!" size="l" />
          <Ptag
            content="Choose a flexible deposit for your savings suited to your needs in InvestBank."
            size="s"
          />
        </div>
      </Card>
    </div>
  );
};
