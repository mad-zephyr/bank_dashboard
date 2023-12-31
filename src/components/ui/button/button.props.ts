import { ReactElement } from "react";

export type ButtonProps = {
  size: "s" | "m" | "l";
  postfix?: ReactElement | string;
  sufix?: ReactElement | string;
  variant: "primary" | "secondary" | "ghost";
  content?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};
