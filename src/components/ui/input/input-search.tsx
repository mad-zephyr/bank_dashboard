import { IconName } from "@/common/icons/Icon.props";
import Icon from "@/common/icons/icon";
import { FC } from "react";

import cn from "classnames";

import styles from "./input-search.module.sass";

type SearchInputProps = {
  className?: string;
};

export const SearchInput: FC<SearchInputProps> = ({ className }) => {
  return (
    <div className={cn(styles.main, className)}>
      <Icon icon={IconName.SEARCH} />
      <input type="search" placeholder="Search..." />
    </div>
  );
};
