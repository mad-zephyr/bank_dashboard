import { SearchInput } from "@/components/ui/input/input-search";
import style from "./header.module.sass";
import cn from "classnames";

import { HeaderUser } from "./components/header-user/header-user";
import { useAppContext } from "@/common/store/app.context";

const Header = () => {
  const { isSidebarOpen } = useAppContext();
  return (
    <div className={cn(style.main, { [style.main_open]: isSidebarOpen })}>
      <div className={style.container}>
        <SearchInput />
        <HeaderUser />
      </div>
    </div>
  );
};

export default Header;
