import { FC } from "react";
import { ButtonProps } from "./button.props";
import cn from "classnames";
import style from "./buttom.module.sass";

export const Button: FC<ButtonProps> = ({
  iconPosition,
  size,
  variant,
  content,
  icon,
}) => {
  const textExist = !content;

  return (
    <button
      className={cn(style.main, {
        [style.primary]: variant === "primary",
        [style.secondary]: variant === "secondary",
        [style.ghost]: variant === "ghost",
        [style.size_s]: size === "s",
        [style.size_m]: size === "m",
        [style.size_l]: size === "l",
        [style.compact]: textExist,
      })}
    >
      {iconPosition === "left" && icon}
      {content && <span>{content}</span>}
      {iconPosition === "right" && icon}
    </button>
  );
};
