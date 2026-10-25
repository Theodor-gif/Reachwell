import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import JobPostionSearch from "../components/JobPositionSearch.tsx";
import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";

function JobPosition() {
  const { lang, jobs, areas } = useContext(dataContext);

  return (
    <section>
      <Navbar />
      <JobPostionSearch />
      <section className="border border-b-orange-500 flex flex-row w-[80%] m-auto">
        <aside className="border flex-1">
          <h2>List</h2>
        </aside>
        <div className="border flex-2">
          <h2>Main</h2>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default JobPosition;
