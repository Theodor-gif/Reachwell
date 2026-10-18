import { NavLink } from "react-router";
import Logo from "../assets/reachwell-icon.svg";
import LogoName from "../assets/reachwell-wordmark.svg";

function FooterHeaderLine() {
  return (
    <section className="mb-5">
      <div className="flex justify-center items-center relative h-10">
        <div className="border border-[#03b8cd] ] h-0.5 w-[80%]"></div>
        <NavLink to="/" className="absolute flex h-10 w-15 left-60">
          <img src={Logo} alt="logo-icon" className="bg-amber-50 pl-2.5" />
          <img src={LogoName} alt="logo-name" className="bg-amber-50 pr-2.5" />
        </NavLink>
      </div>
    </section>
  );
}

export default FooterHeaderLine;
