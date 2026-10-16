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
