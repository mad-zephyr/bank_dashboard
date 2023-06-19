import { SearchInput } from "@/components/ui/input/input-search";
import style from "./header.module.sass";
import cn from "classnames";

import { HeaderUser } from "./components/header-user/header-user";
import { useAppContext } from "@/common/store/app.context";
import Icon from "@/common/icons/icon";
import { IconName } from "@/common/icons/Icon.props";
import { Button } from "@/components/ui";

const Header = () => {
  const { isSidebarOpen, openSidebar } = useAppContext();
  return (
    <div className={cn(style.main, { [style.main_open]: isSidebarOpen })}>
      <div className={style.container}>
        <SearchInput />
        <div className={style.group}>
          <HeaderUser />
          <Button
            size="m"
            variant="ghost"
            onClick={openSidebar}
            className={style.meneOpener}
            postfix={<Icon icon={IconName.MOBILE_MENU} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
