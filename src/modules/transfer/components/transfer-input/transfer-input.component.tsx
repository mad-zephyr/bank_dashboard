import { FC, ReactElement } from "react";
import cn from "classnames";
import style from "./transfer-input.module.sass";
import { Ptag } from "@/components/ui";

type TransferInputProps = {
  value: string;
  name: string;
  onChange: (name: string, value: string) => {};
  placeholder?: string;
  sufix?: ReactElement;
  postfix?: ReactElement | string;
  error: boolean | string;
};

export const TransferInput: FC<TransferInputProps> = ({
  onChange,
  value,
  name,
  placeholder = "placeholder",
  sufix,
  postfix,
  error,
}) => {
  const changeHandler = () => {
    onChange(name, value);
  };

  const hasError = !!error;

  return (
    <div className={style.main}>
      <span className={style.sufix}>{sufix}</span>
      <input
        className={cn(style.input, { [style.input_sufix]: !!sufix })}
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
      />
      {hasError && <Ptag content="Error" size="s" className={style.error} />}
      <div className={cn(style.border, { [style.error_border]: hasError })} />
      {postfix}
    </div>
  );
};
