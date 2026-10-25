import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";
import { Link } from "react-router";

function HomeListAreas() {
  const { lang, areas } = useContext(dataContext);
  return (
    <section className="w-[80%] m-[0_auto]">
      <h2 className="text-xl">
        {lang === "en"
          ? "Search for jobs by location"
          : "Αναζήτησε Θέσεις εργασίας ανά τοποθεσία"}
      </h2>
      <div className="bg-blue-50 border-b-2 border-[#03b8cd]"></div>
      <section className=" m-[30px_0_30px_0]">
        <div>
          <h3 className="text-lg">
            {lang === "en"
              ? "Jobs in Attica and Suburbs"
              : "Εργασία σε Αττική και Προάστια"}
          </h3>
          <ul className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            {areas.slice(1, 29).map((item) => (
              <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                <Link to="/JobPosition">
                  {lang === "en" ? item.areaEn : item.areaEl}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg">
            {lang === "en"
              ? "Jobs in Northern Greece and Thessaly"
              : "Εργασία σε Βόρεια Ελλάδα και Θεσσαλία"}
          </h3>
          <ul className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
            {areas.slice(29, 53).map((item) => (
              <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
                <Link to="/JobPosition">
                  {lang === "en" ? item.areaEn : item.areaEl}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="text-lg">
          {lang === "el"
            ? "Εργασία σε Κεντρική Ελλάδα, Ήπειρο και Πελοπόννησο "
            : "Jobs in Central Greece, Epirus and the Peloponnese"}
        </h3>
        <ul className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
          {areas.slice(53, 71).map((item) => (
            <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
              <Link to="/JobPosition">
                {lang === "en" ? item.areaEn : item.areaEl}
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="text-lg">
          {lang === "en"
            ? "Jobs in Crete and the Islands"
            : "Εργασία σε Κρήτη και νησιά"}
        </h3>
        <ul className="flex flex-wrap justify-evenly items-center gap-5 pt-10 pb-5">
          {areas.slice(71).map((item) => (
            <li className="mb-2.5 text-gray-400 text-sm" key={item.id}>
              <Link to="/JobPosition">
                {lang === "en" ? item.areaEn : item.areaEl}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default HomeListAreas;
