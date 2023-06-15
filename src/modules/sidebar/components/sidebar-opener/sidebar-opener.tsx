import { useAppContext } from "@/common/store/app.context";
import style from "./sidebar-opener.module.sass";
import cn from "classnames";

export const SidebarOpener = () => {
  const { isSidebarOpen, openSidebar } = useAppContext();

  return (
    <button
      className={cn(style.main, { [style.close]: isSidebarOpen })}
      role="menubar"
      onClick={openSidebar}
    >
      <div className={style.one} />
      <div className={style.two} />
      <div className={style.three} />
    </button>
  );
};
