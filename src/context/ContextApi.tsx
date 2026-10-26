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
import { type skillsData, skills } from "../data/skills.ts";
import { type salaryPerType, salaryPer } from "../data/salaryPer.ts";
import { type employeesType, employeesNum } from "../data/employeesNumber.ts";
import { type daysType, daysRange } from "../data/time.ts";

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
  skill: skillsData[];
  salary: salaryPerType[];
  employeeAmount: employeesType[];
  timeRange: daysType[];
};

const defaultValue: DataContextProps = {
  count: 0,
  setCount: () => {},
  lang: "el",
  setLang: () => {},
  areas: [],
  changeType: () => {},
  jobs: [],
  skill: [],
  salary: [],
  employeeAmount: [],
  timeRange: [],
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
  const skill = skills;
  const salary = salaryPer;
  const employeeAmount = employeesNum;
  const timeRange = daysRange;

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
      value={{
        count,
        setCount,
        lang,
        setLang,
        areas,
        changeType,
        jobs,
        skill,
        salary,
        employeeAmount,
        timeRange,
      }}
    >
      {children}
    </dataContext.Provider>
  );
}
