import Navbar from "../components/Navbar.tsx";
import HeaderMessage from "../components/HeaderTitle.tsx";
import HeaderSearch from "../components/HeaderSearch.tsx";
import Footer from "../components/Footer.tsx";
import HomeListJobs from "../components/HomeListJobs.tsx";
import HomeListAreas from "../components/HomeListAreas.tsx";
import HomeAccountInfo from "../components/HomeAccountInfo.tsx";

function Home() {
  return (
    <main>
      <section className="bg-blue-50 border-b border-slate-200">
        <Navbar />
        <HeaderMessage />
        <HeaderSearch />
      </section>
      <HomeAccountInfo />
      <HomeListAreas />
      <HomeListJobs />
      <Footer />
    </main>
  );
}

export default Home;
