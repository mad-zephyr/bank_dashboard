import Image from "next/image";
import { FC } from "react";
import UserImage from "src/common/images/user-photo.png";

import style from "./sidebar-account.module.sass";
import cn from "classnames";
import { useAppContext } from "@/common/store/app.context";

export const SidebarAccount: FC = () => {
  const { isSidebarOpen } = useAppContext();
  const isSidebarCollapsed = !isSidebarOpen;

  return (
    <div
      className={cn(style.main, { [style.main_collapsed]: isSidebarCollapsed })}
    >
      <Image src={UserImage} alt="avatar" />
      <div
        className={cn(style.content, {
          [style.content_collapsed]: isSidebarCollapsed,
        })}
      >
        <div className={style.name}>
          {isSidebarCollapsed ? "Profile" : "Anna Karin"}
        </div>
        <div className={style.mail}>annakarin@gmail.com</div>
      </div>
    </div>
  );
};
