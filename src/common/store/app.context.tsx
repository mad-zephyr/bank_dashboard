import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type AppContextProps = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
};

const AppContextDefault: AppContextProps = {
  isSidebarOpen: false,
  openSidebar: () => {},
};

const AppContext = createContext(AppContextDefault);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarOpenHandler = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

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
