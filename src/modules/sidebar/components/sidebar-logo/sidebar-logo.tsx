import { IconName } from "@/common/icons/Icon.props";
import Icon from "@/common/icons/icon";
import Link from "next/link";
import cn from "classnames";

import style from "./sidebar-logo.module.sass";
import { useAppContext } from "@/common/store/app.context";

const SidebarLogo = () => {
  const { isSidebarOpen } = useAppContext();
  const isSidebarClosed = !isSidebarOpen;

  return (
    <Link
      href={"/"}
      className={cn(style.main, { [style.main_collapsed]: isSidebarClosed })}
    >
      <Icon icon={IconName.LOGO} />
      <div
        className={cn(style.title, { [style.title_hidden]: isSidebarClosed })}
      >
        InvestBank
      </div>
    </Link>
  );
};

export default SidebarLogo;
