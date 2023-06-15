import { FC, ReactElement } from "react";
import cn from "classnames";
import style from "./card.module.sass";

type CardProps = {
  children: ReactElement[] | ReactElement;
  size: "s" | "m";
};

export const Card: FC<CardProps> = ({ children, size }) => {
  return (
    <div
      className={cn(style.main, {
        [style.size_m]: size === "m",
        [style.size_s]: size === "s",
      })}
    >
      {children}
    </div>
  );
};
