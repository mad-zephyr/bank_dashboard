import Icon from "@/common/icons/icon";

import style from "./sidebar-list-navigation.module.sass";
import { SideBarProps } from "./sidebar-list-navigation.props";
import { FC, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { useAppContext } from "@/common/store/app.context";
import { useWindowSize } from "usehooks-ts";
import { Breakpoint } from "@/common/constants";

const SidebarNav: FC<SideBarProps> = ({ href, iconName, text }) => {
  const { isSidebarOpen, openSidebar } = useAppContext();
  const { width } = useWindowSize();
  const isMobile = useMemo(() => width <= Breakpoint.MOBILE, [width]);

  const router = useRouter();

  const isCurrentPage = useMemo(
    () => router.pathname === `/${href}`,
    [router.pathname, href]
  );

  return (
    <li role="button" onClick={() => isMobile && openSidebar()}>
      <Link
        href={href}
        className={cn(style.main, {
          [style.main_active]: isCurrentPage,
          [style.main_collapsed]: isSidebarOpen,
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
        <div className={cn(style.title, { [style.title_hide]: isSidebarOpen })}>
          {text}
        </div>
      </Link>
    </li>
  );
};

export default SidebarNav;
