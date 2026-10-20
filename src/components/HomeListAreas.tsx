import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";
import { Link } from "react-router";

function HomeListAreas() {
  const { lang, areas } = useContext(dataContext);
  return (
    <section className="w-[80%] m-[0_auto]">
      <h1>Home List Areas</h1>
      <div className="bg-blue-50 border-b-2 border-slate-200"></div>
      <section className="flex justify-evenly m-[30px_0_30px_0]">
        <ul>
          {areas.slice(1, 22).map((item) => (
            <li className="mb-2.5" key={item.id}>
              <Link to="/JobPosition">
                {lang === "en" ? item.areaEn : item.areaEl}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {areas.slice(23, 45).map((item) => (
            <li className="mb-2.5" key={item.id}>
              <Link to="/JobPosition">
                {lang === "en" ? item.areaEn : item.areaEl}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {areas.slice(45, 67).map((item) => (
            <li className="mb-2.5" key={item.id}>
              <Link to="/JobPosition">
                {lang === "en" ? item.areaEn : item.areaEl}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {areas.slice(68).map((item) => (
            <li className="mb-2.5" key={item.id}>
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
