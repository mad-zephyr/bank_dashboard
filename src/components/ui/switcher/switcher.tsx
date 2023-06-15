import { FC, ReactNode, useState } from "react";
import cn from "classnames";

import style from "./switcher.module.sass";

type SwitcherProps = {
  name: string;
  onClick: (name: string, checked: boolean) => void;
  content: string | ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
};

export const Switcher: FC<SwitcherProps> = ({
  name,
  onClick,
  content,
  defaultChecked = false,
  disabled = false,
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  const unchecked = !checked;

  const checkHandler = () => {
    !disabled &&
      setChecked((prevState) => {
        const currentState = !prevState;
        onClick(name, currentState);
        return currentState;
      });
  };
  return (
    <div className={style.main}>
      <label htmlFor="switcher" onClick={checkHandler}>
        <span>{content}</span>
        <div
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
