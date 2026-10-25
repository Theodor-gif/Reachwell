import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";

function JobPositionSearch() {
  const { lang, jobs, areas } = useContext(dataContext);

  return (
    <form className=" w-[80%] m-[30px_auto_0_auto] flex gap-5 justify-center">
      <label htmlFor="job">
        <select className="border w-50 p-1.5" id="job">
          <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
          {jobs.map((item) => (
            <option value={item.jobEl} key={item.id}>
              {lang === "en" ? item.jobEn : item.jobEl}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="area">
        <select className="border w-50 p-1.5" id="area">
          <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
          {areas.map((item) => (
            <option value={item.areaEl} key={item.id}>
              {lang === "en" ? item.areaEn : item.areaEl}
            </option>
          ))}
        </select>
      </label>
      <button className="border w-35" type="submit">
        {lang === "en" ? "Search" : "Αναζήτηση"}
      </button>
      <button className="border w-35" type="reset">
        {lang === "en" ? "Clear" : "Καθαρισμός"}
      </button>
    </form>
  );
}

export default JobPositionSearch;
