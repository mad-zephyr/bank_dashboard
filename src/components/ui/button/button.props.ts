import { ReactElement } from "react";

export type ButtonProps = {
  size: "s" | "m" | "l";
  iconPosition: "left" | "right";
  variant: "primary" | "secondary" | "ghost";
  content?: string;
  icon?: ReactElement;
};
