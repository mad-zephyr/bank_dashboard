import { FC } from "react";
import { ButtonProps } from "./button.props";
import cn from "classnames";
import style from "./buttom.module.sass";

export const Button: FC<ButtonProps> = ({
  size,
  variant,
  content,
  postfix,
  sufix,
  className,
  onClick,
  disabled = false,
}) => {
  const textExist = !content;

  const clickHandler = () => {
    onClick && onClick();
  };

  return (
    <button
      onClick={clickHandler}
      className={cn(style.main, className, {
        [style.primary]: variant === "primary",
        [style.secondary]: variant === "secondary",
        [style.ghost]: variant === "ghost",
        [style.size_s]: size === "s",
        [style.size_m]: size === "m",
        [style.size_l]: size === "l",
        [style.ghost_disabled]: disabled && variant === "ghost",
        [style.secondary_disabled]: disabled && variant === "secondary",
        [style.primary_disabled]: disabled && variant === "primary",
        [style.compact]: textExist,
      })}
    >
      {sufix}
      {content && <span>{content}</span>}
      {postfix}
    </button>
  );
};
