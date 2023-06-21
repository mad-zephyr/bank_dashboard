import { useAppContext } from "@/common/store/app.context";
import style from "./sidebar-opener.module.sass";
import cn from "classnames";
import { useWindowSize } from "usehooks-ts";
import { useMemo } from "react";
import { Breakpoint } from "@/common/constants";

export const SidebarOpener = () => {
  const { isSidebarOpen, openSidebar } = useAppContext();
  const { width } = useWindowSize();

  const isMobile = useMemo(() => {
    return width <= Breakpoint.MOBILE;
  }, [width]);

  return (
    <div
      className={cn(style.content, {
        [style.sidebar_closed]: isSidebarOpen,
        [style.sidebar_hidden]: isMobile && isSidebarOpen,
      })}
    >
      <button
        className={cn(style.main, { [style.close]: !isSidebarOpen })}
        role="menubar"
        onClick={openSidebar}
      >
        <div className={style.one} />
        <div className={style.two} />
        <div className={style.three} />
      </button>
    </div>
  );
};
