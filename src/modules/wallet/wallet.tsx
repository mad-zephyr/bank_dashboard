import { FC } from "react";
import { Card } from "../card/card";
import style from "./wallet.module.sass";
import { Htag } from "@/components/ui/htag/htag";
import { Button, Ptag, Switcher } from "@/components/ui";
import Icon from "@/common/icons/icon";
import { IconName } from "@/common/icons/Icon.props";
import { WalletCard } from "./components/wallet-card/wallet-card";

export const Wallet: FC = () => {
  return (
    <div className={style.main}>
      <Card size="m">
        <div className={style.header}>
          <Htag content="Wallet" variant="h4" />
          <Ptag content={"Cards | 1 out of 4"} size={"s"} />
          <div className={style.btn_group}>
            <Button
              variant="ghost"
              iconPosition="left"
              size="m"
              icon={<Icon icon={IconName.ARROW_LEFT} />}
            />
            <Button
              variant="ghost"
              iconPosition="left"
              size="m"
              icon={<Icon icon={IconName.ARROW_RIGHT} />}
            />
          </div>
        </div>
        <div className={style.container}>
          <WalletCard />
          <div className={style.description}>
            <div className={style.group}>
              <div className={style.group_item}>
                <Ptag size="m" content="Balance" />
                <span>$14,528,00</span>
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
