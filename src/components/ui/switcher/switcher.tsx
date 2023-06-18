import { FC, ReactNode, useState } from "react";
import cn from "classnames";

import style from "./switcher.module.sass";

type SwitcherProps = {
  name: string;
  onClick: (name: string, checked: boolean) => void;
  content: string | ReactNode;
  checked: boolean;
  disabled: boolean;
};

export const Switcher: FC<SwitcherProps> = ({
  name,
  content,
  checked = false,
  disabled = false,
  onClick,
}) => {
  const unchecked = !checked;

  const checkHandler = () => {
    console.log("SWITCHER CHECKED: ", checked);
    onClick(name, checked);
  };
  return (
    <div className={style.main}>
      <label htmlFor="switcher">
        <span>{content}</span>
        <div
          onClick={checkHandler}
          className={cn(style.switcher, {
            [style.disabled]: disabled,
          })}
        >
          <div
            className={cn(style.dot, {
              [style.dot_off]: unchecked,
            })}
          />
        </div>
      </label>
      <input checked={checked} type="checkbox" id="switcher" />
    </div>
  );
};
