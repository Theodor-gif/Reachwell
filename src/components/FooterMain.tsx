import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";
import { Link } from "react-router";

function FooterMain() {
  const { lang } = useContext(dataContext);

  type inside = {
    to: string;
    en: string;
    el: string;
  };

  const data: inside[] = [
    { to: "/", en: "Post a Job Search", el: "Καταχώρηση Αναζήτησης Εργασίας" },
    {
      to: "/",
      en: "Create a Candidate Profile",
      el: "Δημιουργία Προφίλ Υποψηφίου",
    },
    {
      to: "/",
      en: "All Job Positions",
      el: "Όλες οι θέσεις Εργασίας",
    },
  ];

  const data2: inside[] = [
    { to: "/", en: "Finding Staff", el: "Εύρεση Προσωπικού" },
    {
      to: "/",
      en: "Job Posting",
      el: "Καταχώρηση Αγγελίας Εργασίας",
    },
    {
      to: "/",
      en: "Create a Employer Profile",
      el: "Δημιουργία Προφίλ Εργοδότη",
    },
  ];

  const data3: inside[] = [
    { to: "/", en: "Home", el: "Αρχική Εργασίας" },
    {
      to: "/",
      en: "Term of Use",
      el: "Όροι Χρήσης",
    },
    {
      to: "/",
      en: "Data Policy",
      el: "Πολιτική Δεδομένων",
    },
    {
      to: "/",
      en: "Communication",
      el: "Επικοινωνία",
    },
  ];

  return (
    <section className="flex justify-center m-[0_auto_30px_auto] w-[80%]">
      <div className="flex-1">
        <h3 className="w-[70%] m-[0_auto_20px_auto]">
          {lang === "en" ? "For Candidates" : "Για Υποψήφιους"}
        </h3>
        <ul>
          {data.map((item, index) => (
            <li className="w-[70%] m-[5px_auto_5px_auto]" key={index}>
              <Link to={item.to}>{lang === "en" ? item.en : item.el}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="w-[70%] m-[0_auto_20px_auto]">
          {lang === "en" ? "For Employers" : "Για Εργοδότες"}
        </h3>
        <ul>
          {data2.map((item, index) => (
            <li className="w-[70%] m-[5px_auto_5px_auto]" key={index}>
              <Link to={item.to}>{lang === "en" ? item.en : item.el}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="w-[70%] m-[0_auto_20px_auto]">
          {lang === "en" ? "Quick Links" : "Γρήγοροι Σύνδεσμοι"}
        </h3>
        <ul>
          {data3.map((item, index) => (
            <li className="w-[70%] m-[5px_auto_5px_auto]" key={index}>
              <Link to={item.to}>{lang === "en" ? item.en : item.el}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FooterMain;
