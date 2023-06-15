import { IconName } from "@/common/icons/Icon.props";

import { RoutePath } from "@/common/constants";

export type SideBarProps = {
  iconName: IconName;
  href: RoutePath;
  text: string;
};
