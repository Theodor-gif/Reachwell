import FooterHeaderLine from "../components/FooterHeaderLine.tsx";
import FooterMain from "../components/FooterMain.tsx";
import FooterSocial from "../components/FooterSocial.tsx";

function Footer() {
  return (
    <section className="flex flex-col">
      <FooterHeaderLine />
      <FooterMain />
      <FooterSocial />
      <div className="border border-[#03b8cd] ] h-0.5 w-[80%] m-[0_auto]"></div>
      <small className="text-center m-[15px_0]">
        Copyright &copy; 2026 Reacwell | CREATED BY Theodoros Mitropoulos
      </small>
    </section>
  );
}

export default Footer;
