import { FC } from "react";
import style from "./sidebar.module.sass";

import SidebarLogo from "./components/sidebar-logo/sidebar-logo";
import SidebarNav from "./components/sidebar-list/components/sidebar-list-navigation/sidebar-list-navigation";
import SidebarList from "./components/sidebar-list/sidebar-list";
import { IconName } from "@/common/icons/Icon.props";
import { RoutePath } from "@/common/constants";
import cn from "classnames";
import { useAppContext } from "@/common/store/app.context";
import { SidebarOpener } from "./components/sidebar-opener/sidebar-opener";
import { SidebarAccount } from "./components/sidebar-account/sidebar-account";

type SideBarlinkProp = {
  icon: IconName;
  href: RoutePath;
  text: string;
};

const mainlinks: SideBarlinkProp[] = [
  { icon: IconName.DASHBOARD, href: RoutePath.DASHBOARD, text: "dashboard" },
  { icon: IconName.ANALYTIC, href: RoutePath.ANALYTIC, text: "analytics" },
  { icon: IconName.PAYMENT, href: RoutePath.PAYMENT, text: "payments" },
  { icon: IconName.DEPOSIT, href: RoutePath.DEPOSIT, text: "deposit" },
  { icon: IconName.MONEYBOX, href: RoutePath.MONEYBOX, text: "moneybox" },
  { icon: IconName.SECURITY, href: RoutePath.SECURITY, text: "Security" },
];

const secondlinks: SideBarlinkProp[] = [
  { icon: IconName.HELP, href: RoutePath.HELP, text: "help" },
  { icon: IconName.SETTINGS, href: RoutePath.SETTINGS, text: "settings" },
];

const Sidebar: FC = () => {
  const { isSidebarOpen } = useAppContext();
  const isSidebarClosed = !isSidebarOpen;

  return (
    <nav className={cn(style.main, { [style.collapsed]: isSidebarClosed })}>
      <SidebarOpener />
      <SidebarLogo />
      <SidebarList divider>
        {mainlinks.map((link) => (
          <SidebarNav
            key={link.href}
            href={link.href}
            iconName={link.icon}
            text={link.text}
          />
        ))}
      </SidebarList>

      <SidebarList>
        {secondlinks.map((link) => (
          <SidebarNav
            key={link.href}
            href={link.href}
            iconName={link.icon}
            text={link.text}
          />
        ))}
      </SidebarList>

      <SidebarAccount />
    </nav>
  );
};

export default Sidebar;
