import FooterHeaderLine from "../components/FooterHeaderLine.tsx";
import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";
import { Link } from "react-router";

function Footer() {
  const { lang } = useContext(dataContext);

  return (
    <section className="flex flex-col">
      <FooterHeaderLine />
      <div className="border">
        <h3>{lang === "en" ? "For Candidates" : "Για Υποψήφιους"}</h3>
        <ul>
          <li>
            <Link to="/">
              {lang === "en" ? "Finding a Job" : "Εύρεση Εργασίας"}
            </Link>
          </li>
          <li>
            <Link to="/">
              {lang === "en"
                ? "Create a Candidate Profile"
                : "Δημιουργία Προφίλ Υποψηφίου"}
            </Link>
          </li>
          <li>
            <Link to="/">
              {lang === "en" ? "All Job Positions" : "Όλες οι θέσεις Εργασίας"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="border">
        <h3>{lang === "en" ? "For Employers" : "Για Εργοδότες"}</h3>
        <ul>
          <li>
            <Link to="/">
              {lang === "en" ? "Finding Staff" : "Εύρεση Προσωπικού"}
            </Link>
          </li>
          <li>
            <Link to="/">
              {lang === "en" ? "Job Posting" : "Καταχώρηση Αγγελίας Εργασίας"}
            </Link>
          </li>
        </ul>
      </div>
      <small className="border text-center">
        Copyright &copy; 2026 Reacwell | CREATED BY Theodoros Mitropoulos
      </small>
    </section>
  );
}

export default Footer;
