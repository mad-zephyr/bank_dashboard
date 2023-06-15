import { FC, ReactNode } from "react";
import cn from "classnames";

import style from "./sidebar-list.module.sass";

type SidebarList = {
  children: ReactNode | ReactNode[];
  divider?: boolean;
};

const SidebarList: FC<SidebarList> = ({ children, divider = false }) => {
  return (
    <ul className={cn(style.main, { [style.divider]: divider })}>{children}</ul>
  );
};

export default SidebarList;
