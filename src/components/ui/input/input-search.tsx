import { IconName } from "@/common/icons/Icon.props";
import Icon from "@/common/icons/icon";
import { FC } from "react";

import styles from "./input-search.module.sass";

export const SearchInput: FC = () => {
  return (
    <div className={styles.main}>
      <Icon icon={IconName.SEARCH} />
      <input type="search" placeholder="Search..." />
    </div>
  );
};
