import Icon from "@/common/icons/icon";
import { Button } from "../ui/button/button";
import { Htag } from "../ui/htag/htag";
import { Ptag } from "../ui/ptag/ptag";
import { IconName } from "@/common/icons/Icon.props";
import style from "./heading.module.sass";

export const Heading = () => {
  return (
    <div className={style.main}>
      <div>
        <Htag variant="h1" content="Hello, Anna" />
        <Ptag content="Send and receive funds with pleasure." size="m" />
      </div>
      <div className={style.right}>
        <Button
          content="Add Payment"
          size="s"
          variant="secondary"
          postfix={<Icon icon={IconName.PLUS_16} />}
        />
        <Button
          size="s"
          variant="ghost"
          postfix={<Icon icon={IconName.DOTS} />}
        />
      </div>
    </div>
  );
};
