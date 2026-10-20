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

type areaData = {
  id: string;
  areaEl: string;
  areaEn: string;
};

const location: areaData[] = [
  { id: "0", areaEl: "Επιλέξτε", areaEn: "Select" },
  { id: "1", areaEl: "Αθήνα", areaEn: "Athens" },
  { id: "2", areaEl: "Περιστέρι", areaEn: "Peristeri" },
  { id: "3", areaEl: "Πειραιός", areaEn: "Piraeus" },
  { id: "4", areaEl: "Ίλιον", areaEn: "Ilion" },
  { id: "5", areaEl: "Αιγάλεω", areaEn: "Egaleo" },
  { id: "6", areaEl: "Ελευσίνα", areaEn: "Elefsina" },
  { id: "7", areaEl: "Καλλιθέα", areaEn: "Kallithea" },
  { id: "8", areaEl: "Κερατσίνι", areaEn: "Keratsini" },
  { id: "9", areaEl: "Ηλιούπολη", areaEn: "Ilioupoli" },
  { id: "10", areaEl: "Γαλάτσι", areaEn: "Galatsi" },
  { id: "11", areaEl: "Γλυφάδα", areaEn: "Glyfada" },
  { id: "12", areaEl: "Πετρούπολη", areaEn: "Petroupoli" },
  { id: "13", areaEl: "Παλλήνη", areaEn: "Pallini" },
  { id: "14", areaEl: "Μαρούσι", areaEn: "Marousi" },
  { id: "15", areaEl: "Χαλάνδρι", areaEn: "Chalandri" },
  { id: "16", areaEl: "Κορυδαλλός", areaEn: "Korydallos" },
  { id: "17", areaEl: "Νέα Σμύρνη", areaEn: "Nea Smurni" },
  { id: "18", areaEl: "Μαρκόπουλο", areaEn: "Markopoulo" },
  { id: "19", areaEl: "Αχαρνές", areaEn: "Acharnes" },
  { id: "20", areaEl: "Κηφισιά", areaEn: "Kifisia" },
  { id: "21", areaEl: "Χολαργός", areaEn: "Cholargos" },
  { id: "22", areaEl: "Νέα Ιωνία", areaEn: "Nea Ionia" },
  { id: "23", areaEl: "Αργυρούπολη", areaEn: "Argyroupoli" },
  { id: "24", areaEl: "Γέρακας", areaEn: "Geraka" },
  { id: "25", areaEl: "Νέος Κόσμος", areaEn: "Neos Kosmos" },
  { id: "26", areaEl: "Κουκάκι", areaEn: "Koukaki" },
  { id: "27", areaEl: "Ακρόπολι", areaEn: "Acropolis" },
  { id: "28", areaEl: "Σεπόλια", areaEn: "Sepolia" },
  { id: "29", areaEl: "Θεσσαλονίκη", areaEn: "Thessaloniki" },
  { id: "30", areaEl: "Λάρισα", areaEn: "Larissa" },
  { id: "31", areaEl: "Βόλος", areaEn: "Volos" },
  { id: "32", areaEl: "Καβάλα", areaEn: "Kavala" },
  { id: "33", areaEl: "Σέρρες", areaEn: "Serres" },
  { id: "34", areaEl: "Κατερίνη", areaEn: "Katerini" },
  { id: "35", areaEl: "Ξάνθη", areaEn: "Xanthi" },
  { id: "36", areaEl: "Κοζάνη", areaEn: "Kozani" },
  { id: "37", areaEl: "Δράμα", areaEn: "Drama" },
  { id: "38", areaEl: "Κομοτηνή", areaEn: "Komotini" },
  { id: "39", areaEl: "Βεροία", areaEn: "Veria" },
  { id: "40", areaEl: "Αλεξανδρούπολη", areaEn: "Alexandroupoli" },
  { id: "41", areaEl: "Κιλκίς", areaEn: "Kilkis" },
  { id: "42", areaEl: "Γιαννιτσά", areaEn: "Giannitsa" },
  { id: "43", areaEl: "Πτολεμαΐδα", areaEn: "Ptolemaida" },
  { id: "44", areaEl: "Χαλκιδική", areaEn: "Halkidiki" },
  { id: "45", areaEl: "Καστοριά", areaEn: "Kastoria" },
  { id: "46", areaEl: "Νάουσα", areaEn: "naousa" },
  { id: "47", areaEl: "Φλώρινα", areaEn: "Florina" },
  { id: "48", areaEl: "Εύοσμος", areaEn: "Evosmos" },
  { id: "49", areaEl: "Καλαμαριά", areaEn: "Kalamaria" },
  { id: "50", areaEl: "Πολίχνη", areaEn: "Polichni" },
  { id: "51", areaEl: "Ορεστιάδα", areaEn: "Orestiada" },
  { id: "52", areaEl: "Νεάπολη", areaEn: "Neapoli" },
  { id: "53", areaEl: "Πάτρα", areaEn: "Patras" },
  { id: "54", areaEl: "Ιώννινα", areaEn: "Ioannina" },
  { id: "55", areaEl: "Άρτα", areaEn: "Arta" },
  { id: "56", areaEl: "Τρίκαλα", areaEn: "Trikala" },
  { id: "57", areaEl: "Χαλκίδα", areaEn: "Chalkida" },
  { id: "58", areaEl: "Αγρίνιο", areaEn: "Agrinio" },
  { id: "59", areaEl: "Κόρινθος", areaEn: "Corinth" },
  { id: "60", areaEl: "Καρδίτσα", areaEn: "Karditsa" },
  { id: "61", areaEl: "Τρίπολη", areaEn: "Tripoli" },
  { id: "62", areaEl: "Αργολίδα", areaEn: "Argolida" },
  { id: "63", areaEl: "Ναύπλιο", areaEn: "Nafplio" },
  { id: "64", areaEl: "Λαμία", areaEn: "Lamia" },
  { id: "65", areaEl: "Θήβα", areaEn: "Thebes" },
  { id: "66", areaEl: "Πρέβεζα", areaEn: "Preveza" },
  { id: "67", areaEl: "Λευκάδα", areaEn: "Lefkada" },
  { id: "68", areaEl: "Πύργος", areaEn: "Pyrgos" },
  { id: "69", areaEl: "Μεσσολόγγι", areaEn: "Messolonghi" },
  { id: "70", areaEl: "Ναύπακτος", areaEn: "Nafpaktos" },
  { id: "71", areaEl: "Χανιά", areaEn: "Chania" },
  { id: "72", areaEl: "Ηράκλειο", areaEn: "Heraklion" },
  { id: "73", areaEl: "Ρόδος", areaEn: "Rhodes" },
  { id: "74", areaEl: "Κρήτη", areaEn: "Crete" },
  { id: "75", areaEl: "Ρέθημνο", areaEn: "Rethymno" },
  { id: "76", areaEl: "Κέρκηρα", areaEn: "Corfu" },
  { id: "77", areaEl: "Χίος", areaEn: "Chios" },
  { id: "78", areaEl: "Μυτιλήνη", areaEn: "Mytilene" },
  { id: "79", areaEl: "Μύκονος", areaEn: "Mykonos" },
  { id: "80", areaEl: "Σαντορίνη", areaEn: "Santorini" },
  { id: "81", areaEl: "Κώς", areaEn: "Kos" },
  { id: "82", areaEl: "Ζάκυνθος", areaEn: "Zakynthos" },
  { id: "83", areaEl: "Κεφαλονία", areaEn: "Kefalonia" },
  { id: "84", areaEl: "Νάξος", areaEn: "Naxos" },
  { id: "85", areaEl: "Σάμος", areaEn: "Samos" },
  { id: "86", areaEl: "Πάρος", areaEn: "Paros" },
  { id: "87", areaEl: "Θάσος", areaEn: "Thasos" },
  { id: "88", areaEl: "Σύρος", areaEn: "Syros" },
];
type DataContextProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
  areas: areaData[];
  changeType: () => void;
};

const defaultValue: DataContextProps = {
  count: 0,
  setCount: () => {},
  lang: "el",
  setLang: () => {},
  areas: [],
  changeType: () => {},
};

export const dataContext = createContext<DataContextProps>(defaultValue);

type ProviderProps = {
  children: ReactNode;
};

export function DataContextProvider({ children }: ProviderProps) {
  const [count, setCount] = useState(0);
  const [lang, setLang] = useState<Lang>("el");
  const areas = location;

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
      value={{ count, setCount, lang, setLang, areas, changeType }}
    >
      {children}
    </dataContext.Provider>
  );
}
