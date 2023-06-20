import { IconName } from "@/common/icons/Icon.props";
import Icon from "@/common/icons/icon";
import Link from "next/link";
import cn from "classnames";

import style from "./header-logo.module.sass";

const HeaderMobileLogo = () => {
  return (
    <Link href={"/"} className={cn(style.main)}>
      <Icon icon={IconName.LOGO} />
      <div className={cn(style.title)}>InvestBank</div>
    </Link>
  );
};

export default HeaderMobileLogo;
