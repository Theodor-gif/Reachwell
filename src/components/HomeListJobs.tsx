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
          <div className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            <ul className="flex-1">
              {jobs.slice(1, 7).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(7, 13).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(13, 19).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(19, 25).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-lg">
            {lang === "en"
              ? "Jobs in Transport and Services"
              : "Εργασία σε Μεταφορές και Υπηρεσίες"}
          </h3>
          <div className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            <ul className="flex-1">
              {jobs.slice(25, 29).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(29, 33).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(33, 37).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(37, 41).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-lg">
            {lang === "en" ? "Hotels" : "Εργασία σε ξενοδοχεία"}
          </h3>
          <div className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            <ul className="flex-1">
              {jobs.slice(41, 44).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(44, 47).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(47, 50).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(50, 53).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-lg">
            {lang === "en"
              ? "Office, Administration & Sales"
              : "Εργασία σε Γραφείο, Διοίκηση και Πωλήσεις"}
          </h3>
          <div className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            <ul className="flex-1">
              {jobs.slice(53, 56).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(56, 59).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(59, 62).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(62, 65).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-lg">
            {lang === "en"
              ? "Technical Professions, Sciences and Engineering"
              : "Εργασία σε Τεχνικά Επαγγέλματα, Επιστήμες και Μηχανική"}
          </h3>
          <div className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            <ul className="flex-1">
              {jobs.slice(65, 68).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(68, 71).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(71, 74).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              {jobs.slice(74).map((item) => (
                <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                  <Link to="/JobPosition">
                    {lang === "en" ? item.jobEn : item.jobEl}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HomeListJobs;
