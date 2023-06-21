import { ReactNode } from "react";
import style from "./layout.module.sass";
import Header from "@/modules/header/header";
import Sidebar from "@/modules/sidebar/sidebar";
import { useAppContext } from "@/common/store/app.context";

import cn from "classnames";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { isSidebarOpen } = useAppContext();
  return (
    <div className={cn(style.main)}>
      <Sidebar />
      <div className={style.content}>
        <Header />
        <main
          className={cn(style.wrapper, {
            [style.wrapper_open]: !isSidebarOpen,
          })}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
