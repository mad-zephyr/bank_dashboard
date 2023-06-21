import Image from "next/image";
import { FC } from "react";
import UserImage from "src/common/images/user-photo.png";

import style from "./sidebar-account.module.sass";
import cn from "classnames";
import { useAppContext } from "@/common/store/app.context";

export const SidebarAccount: FC = () => {
  const { isSidebarOpen } = useAppContext();

  return (
    <div className={cn(style.main, { [style.main_collapsed]: isSidebarOpen })}>
      <Image src={UserImage} alt="avatar" />
      <div
        className={cn(style.content, {
          [style.content_collapsed]: isSidebarOpen,
        })}
      >
        <div className={style.name}>
          {isSidebarOpen ? "Profile" : "Anna Karin"}
        </div>
        <div className={style.mail}>annakarin@gmail.com</div>
      </div>
    </div>
  );
};
