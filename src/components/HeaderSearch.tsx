import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";

function HeaderSearch() {
  const { lang, jobs, areas } = useContext(dataContext);

  return (
    <section className="flex justify-center mt-15 mb-40">
      <form className=" w-[50%] p-[10px_15px] flex gap-2.5 bg-amber-50  shadow-lg shadow-[#245bd9]/30">
        <label htmlFor="jobTitle">
          <select
            id="jobTitle"
            className="p-1 flex-2 border-2 border-slate-200 w-50"
          >
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {jobs.slice(1).map((item) => (
              <option key={item.id} value={item.jobEl}>
                {lang === "en" ? item.jobEn : item.jobEl}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="jobArea">
          <select
            id="jobArea"
            className="p-1 flex-2 border-2 border-slate-200 w-50"
          >
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {areas.slice(1).map((item) => (
              <option key={item.id} value={item.areaEl}>
                {lang === "en" ? item.areaEn : item.areaEl}
              </option>
            ))}
          </select>
        </label>
        <button
          className="text-center flex-1 bg-[#245bd9] text-amber-50 transition hover:translate-y-0.3 hover:bg-[#2446a8] hover:shadow-xl hover:shadow-[#245bd9]/40 cursor-pointer"
          type="submit"
        >
          {lang === "en" ? "Search" : "Αναζήτηση"}
        </button>
        <button
          className="text-center flex-1 bg-[#e04444] text-amber-50 transition hover:translate-y-0.3 hover:bg-[#d91f18] hover:shadow-xl hover:shadow-[#245bd9]/40 cursor-pointer"
          type="reset"
        >
          {lang === "en" ? "Clear" : "Καθαρισμός"}
        </button>
      </form>
    </section>
  );
}

export default HeaderSearch;
