import { FC, ReactNode, createContext, useContext, useState } from "react";

type AppContextProps = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
};

const AppContextDefault: AppContextProps = {
  isSidebarOpen: true,
  openSidebar: () => {},
};

const AppContext = createContext(AppContextDefault);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarOpenHandler = () => {
    setIsOpen((prevState) => !prevState);
    console.log(isOpen);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen: isOpen,
        openSidebar: sidebarOpenHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
