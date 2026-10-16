// import axios from "axios";
import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type Lang = "en" | "el";

type DataContextProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
  changeType: () => void;
};

const defaultValue: DataContextProps = {
  count: 0,
  setCount: () => {},
  lang: "en",
  setLang: () => {},
  changeType: () => {},
};

export const dataContext = createContext<DataContextProps>(defaultValue);

type ProviderProps = {
  children: ReactNode;
};

export function DataContextProvider({ children }: ProviderProps) {
  const [count, setCount] = useState(0);
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  function changeType() {
    if (lang === "en") {
      setLang("el");
    } else {
      setLang("en");
    }
  }

  return (
    <dataContext.Provider
      value={{ count, setCount, lang, setLang, changeType }}
    >
      {children}
    </dataContext.Provider>
  );
}
