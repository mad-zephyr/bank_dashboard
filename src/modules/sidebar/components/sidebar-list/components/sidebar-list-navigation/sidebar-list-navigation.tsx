import Icon from "@/common/icons/icon";

import style from "./sidebar-list-navigation.module.sass";
import { SideBarProps } from "./sidebar-list-navigation.props";
import { FC, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { useAppContext } from "@/common/store/app.context";

const SidebarNav: FC<SideBarProps> = ({ href, iconName, text }) => {
  const { isSidebarOpen } = useAppContext();
  const isSidebarClosed = !isSidebarOpen;
  const router = useRouter();

  const isCurrentPage = useMemo(
    () => router.pathname === `/${href}`,
    [router.pathname, href]
  );

  return (
    <li>
      <Link
        href={href}
        className={cn(style.main, {
          [style.main_active]: isCurrentPage,
          [style.main_collapsed]: isSidebarClosed,
        })}
      >
        <div
          className={cn(style.selector, {
            [style.selector_active]: isCurrentPage,
          })}
        />
        <Icon
          icon={iconName}
          className={cn({ [style.icon_active]: isCurrentPage })}
        />
        <div
          className={cn(style.title, { [style.title_hide]: isSidebarClosed })}
        >
          {text}
        </div>
      </Link>
    </li>
  );
};

export default SidebarNav;
