import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";
import { NavLink } from "react-router";
import logo from "../assets/reachwell-icon.svg";
import logoName from "../assets/reachwell-wordmark.svg";
import userIcon from "../assets/user-icon.png";
import favIcon from "../assets/fav-icon.png";
import earthIcon from "../assets/earth-icon.png";

function Navbar() {
  const { lang, changeType } = useContext(dataContext);

  return (
    <nav className="flex items-center justify-evenly">
      <NavLink to="/" className="flex flex-1 justify-center gap-2.5">
        <img src={logo} alt="logo" className="h-20 w-20" />
        <img src={logoName} alt="logo-name" className="h-20 w-40" />
      </NavLink>

      <div className="flex flex-3 gap-10 pl-5">
        <NavLink to="/">{lang === "en" ? "Home" : "Αρχική Σελίδα"}</NavLink>
        <NavLink to="/jobPosition">
          {lang === "en" ? "Jobs" : "Αγγελίες"}
        </NavLink>
        <NavLink to="/CreatePost">
          {lang === "en" ? "Post an ad" : "Καταχώρηση αγγελίας"}
        </NavLink>
      </div>

      <div className="flex flex-1 gap-5">
        <NavLink to="/">
          <img className="w-6.5" src={favIcon} alt="fav-icon" />
        </NavLink>
        <NavLink to="/Account">
          <img className="w-6.5" src={userIcon} alt="user-icon" />
        </NavLink>
        <button className="flex gap-2.5" onClick={() => changeType()}>
          <img className="w-6" src={earthIcon} alt="earth-icon" />
          <p>{lang.toUpperCase()}</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
