// import axios from "axios";
import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import jobsData from "../data/jobs.ts";
import areasData from "../data/areas.ts";

type Lang = "en" | "el";

type areaData = {
  id: string;
  areaEl: string;
  areaEn: string;
};

type jobsData = {
  id: string;
  jobEl: string;
  jobEn: string;
};

type DataContextProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
  areas: areaData[];
  changeType: () => void;
  jobs: jobsData[];
};

const defaultValue: DataContextProps = {
  count: 0,
  setCount: () => {},
  lang: "el",
  setLang: () => {},
  areas: [],
  changeType: () => {},
  jobs: [],
};

export const dataContext = createContext<DataContextProps>(defaultValue);

type ProviderProps = {
  children: ReactNode;
};

export function DataContextProvider({ children }: ProviderProps) {
  const [count, setCount] = useState(0);
  const [lang, setLang] = useState<Lang>("el");
  const areas = areasData;
  const jobs = jobsData;

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
      value={{ count, setCount, lang, setLang, areas, changeType, jobs }}
    >
      {children}
    </dataContext.Provider>
  );
}
