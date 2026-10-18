import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";

function HeaderSearch() {
  const { lang } = useContext(dataContext);

  return (
    <section className="flex justify-center mt-15 mb-40">
      <form className=" w-[50%] p-[10px_15px] flex gap-2.5 bg-amber-50  shadow-lg shadow-[#245bd9]/30">
        <label htmlFor="jobTitle"></label>
        <input
          id="jobTitle"
          className="pl-2 flex-2 border-2 border-slate-200"
          type="text"
          name="job-title"
          placeholder={lang === "en" ? "Job title" : "Τίτλος εργασίας"}
        />
        <label htmlFor="jobArea"></label>
        <input
          id="jobArea"
          className="pl-2 flex-2 border-2 border-slate-200"
          type="text"
          name="job-area"
          placeholder={lang === "en" ? "City, area" : "Πόλη, περιοχή"}
        />
        <button
          className="text-center flex-1 bg-[#245bd9] text-amber-50 transition hover:translate-y-0.3 hover:bg-[#2446a8] hover:shadow-xl hover:shadow-[#245bd9]/40 cursor-pointer"
          type="submit"
        >
          {lang === "en" ? "Search" : "Αναζήτηση"}
        </button>
      </form>
    </section>
  );
}

export default HeaderSearch;
