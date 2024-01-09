import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Tab } from "../utils/types";

type AppContextType = {
  history: Tab[];
  onSave: (tab: Tab) => void;
  onRemove: (tab: Tab) => void;
};
const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [history, setHistory] = useState<Tab[]>(
    (JSON.parse(localStorage.getItem("history")!) as Tab[]) || []
  );

  const onSave = (tab: Tab) => {
    const tabDuplicate = history.find((item) => item.url === tab.url);
    if (tabDuplicate) {
      return;
    }
    setHistory((prev) => [tab, ...prev]);
  };

  const onRemove = (tab: Tab) => {
    setHistory((prev) => prev.filter((item) => item.url !== tab.url));
  };

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <AppContext.Provider value={{ onSave, history, onRemove }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext) as AppContextType;

export default AppProvider;
