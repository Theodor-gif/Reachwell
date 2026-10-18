import Navbar from "../components/Navbar.tsx";
import HeaderMessage from "../components/HeaderTitle.tsx";
import HeaderSearch from "../components/HeaderSearch.tsx";
import Footer from "../components/Footer.tsx";

function Home() {
  return (
    <main>
      <section className="bg-blue-50 border-b border-slate-200">
        <Navbar />
        <HeaderMessage />
        <HeaderSearch />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default Home;
