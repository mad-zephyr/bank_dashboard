import { IconName } from "@/common/icons/Icon.props";
import Icon from "@/common/icons/icon";
import Link from "next/link";
import cn from "classnames";

import style from "./sidebar-logo.module.sass";
import { useAppContext } from "@/common/store/app.context";

const SidebarLogo = () => {
  const { isSidebarOpen } = useAppContext();

  return (
    <Link
      href={"/"}
      className={cn(style.main, { [style.main_collapsed]: isSidebarOpen })}
    >
      <Icon icon={IconName.LOGO} />
      <div className={cn(style.title, { [style.title_hidden]: isSidebarOpen })}>
        InvestBank
      </div>
    </Link>
  );
};

export default SidebarLogo;
