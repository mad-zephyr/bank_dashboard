import { FC } from "react";

import style from "./header-user.module.sass";
import Icon from "@/common/icons/icon";
import { IconName } from "@/common/icons/Icon.props";
import Image from "next/image";
import UserPhoto from "src/common/images/user-photo.png";

export const HeaderUser: FC = () => {
  return (
    <div className={style.group}>
      <div className={style.notification}>
        <Icon icon={IconName.NOTIFICATION} />
      </div>
      <div className={style.user}>
        <Image src={UserPhoto} alt={"user"} />
        <Icon icon={IconName.ARROW_DOWN} />
      </div>
    </div>
  );
};
