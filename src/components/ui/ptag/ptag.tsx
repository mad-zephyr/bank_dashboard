import { FC } from "react";
import style from "./ptag.module.sass";
import { PtagProps } from "./ptag.props";
import cn from "classnames";

export const Ptag: FC<PtagProps> = ({ content, size, className }) => {
  return (
    <p
      className={cn(style.p, className, {
        [style.size_s]: size === "s",
        [style.size_m]: size === "m",
        [style.size_l]: size === "l",
      })}
    >
      {content}
    </p>
  );
};
