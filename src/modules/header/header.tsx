import { SearchInput } from "@/components/ui/input/input-search";
import style from "./header.module.sass";
import cn from "classnames";

import { HeaderUser } from "./components/header-user/header-user";
import { useAppContext } from "@/common/store/app.context";
import Icon from "@/common/icons/icon";
import { IconName } from "@/common/icons/Icon.props";
import { Button } from "@/components/ui";
import HeaderMobileLogo from "./components/header-logo/header-logo";
import { useWindowSize } from "usehooks-ts";
import { useMemo } from "react";
import { Breakpoint } from "@/common/constants";

const Header = () => {
  const { isSidebarOpen, openSidebar } = useAppContext();
  const { width } = useWindowSize();
  const isMobile = useMemo(() => width <= Breakpoint.MOBILE, [width]);

  return (
    <div className={cn(style.main, { [style.main_open]: isSidebarOpen })}>
      <div className={style.container}>
        {isMobile && <HeaderMobileLogo />}
        {!isMobile && <SearchInput className={style.searchInput} />}
        <div className={style.group}>
          {isMobile && (
            <Button
              size="m"
              variant="ghost"
              className={style.searchBtn}
              postfix={<Icon icon={IconName.SEARCH} />}
            />
          )}
          <HeaderUser />
          <Button
            size="m"
            variant="ghost"
            onClick={openSidebar}
            className={style.menuOpener}
            postfix={<Icon icon={IconName.MOBILE_MENU} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
