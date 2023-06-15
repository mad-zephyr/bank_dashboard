import { FC } from "react";
import style from "./htag.module.sass";

type HtagProps = {
  variant: "h1" | "h2" | "h3" | "h4";
  content: string;
};

export const Htag: FC<HtagProps> = ({ variant, content }) => {
  switch (variant) {
    case "h1": {
      return <h1 className={style.h1}>{content}</h1>;
    }
    case "h2": {
      return <h2 className={style.h2}>{content}</h2>;
    }
    case "h3": {
      return <h3 className={style.h3}>{content}</h3>;
    }
    case "h4": {
      return <h4 className={style.h4}>{content}</h4>;
    }
    default: {
      return <h4 className={style.h4}>{content}</h4>;
    }
  }
};
