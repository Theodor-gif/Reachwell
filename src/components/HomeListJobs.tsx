import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";
import { Link } from "react-router";

function HomeListJobs() {
  const { lang, jobs } = useContext(dataContext);

  return (
    <section className="w-[80%] m-[0_auto]">
      <h2 className="text-xl">
        {lang === "en"
          ? "Search for jobs by profession"
          : "Αναζήτησε θέσεις εργασίας ανά κλάδο"}
      </h2>
      <div className="bg-blue-50 border-b-2 border-[#03b8cd]"></div>
      <section className=" m-[30px_0_30px_0]">
        <div>
          <h3 className="text-lg">
            {lang === "en"
              ? "Jobs in Health, Welfare and Education"
              : "Εργασία σε Υγεία, Πρόνοια και Εκπαίδευση"}
          </h3>
          <ul className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            {jobs.slice(1, 25).map((item) => (
              <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                <Link to="/JobPosition">
                  {lang === "en" ? item.jobEn : item.jobEl}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg">
            {lang === "en"
              ? "Jobs in Transport and Services"
              : "Εργασία σε Μεταφορές και Υπηρεσίες"}
          </h3>
          <ul className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            {jobs.slice(25, 41).map((item) => (
              <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                <Link to="/JobPosition">
                  {lang === "en" ? item.jobEn : item.jobEl}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg">
            {lang === "en" ? "Hotels" : "Εργασία σε ξενοδοχεία"}
          </h3>
          <ul className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            {jobs.slice(41, 53).map((item) => (
              <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                <Link to="/JobPosition">
                  {lang === "en" ? item.jobEn : item.jobEl}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg">
            {lang === "en"
              ? "Office, Administration & Sales"
              : "Εργασία σε Γραφείο, Διοίκηση και Πωλήσεις"}
          </h3>
          <ul className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            {jobs.slice(53, 65).map((item) => (
              <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                <Link to="/JobPosition">
                  {lang === "en" ? item.jobEn : item.jobEl}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg">
            {lang === "en"
              ? "Technical Professions, Sciences and Engineering"
              : "Εργασία σε Τεχνικά Επαγγέλματα, Επιστήμες και Μηχανική"}
          </h3>
          <ul className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            {jobs.slice(65).map((item) => (
              <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                <Link to="/JobPosition">
                  {lang === "en" ? item.jobEn : item.jobEl}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default HomeListJobs;
