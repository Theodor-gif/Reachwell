/*
export const translations = {
  en: {
    home: {
      title: "Home page",
      welcome: "Welcome",
    },
    account: {
      title: "Account",
    },
    button: "Ελληνικά",
  },
  el: {
    home: {
      title: "Αρχική σελίδα",
      welcome: "Καλώς ήρθατε",
    },
    account: {
      title: "Λογαριασμός",
    },
    button: "English",
  },
};

import { useContext } from "react";
import { dataContext } from "../context/ContextApi";
import { translations } from "../translations";

function Home() {
  const { lang, changeType } = useContext(dataContext);
  const t = translations[lang];

  return (
    <>
      <h1>{t.home.title}</h1>
      <p>{t.home.welcome}</p>
      <button onClick={changeType}>{t.button}</button>
    </>
  );
}

export default Home;

*/

/*
type car = [string, string, string];

let obj: car = ["1", "2", "3"];

console.log(obj);

type student = {
  name: string;
  age: number;
};

type orderStudent = [
  [key: string]: student;
];

const links: orderStudent = [
  { name: "Alex", age: 20 },
  { name: "Marios", age: 25 },
];
*/
