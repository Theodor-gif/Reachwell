import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";
import { NavLink } from "react-router";
import logo from "../assets/screen.png";
import logoName from "../assets/screen2.png";
import userIcon from "../assets/user-icon.png";
import favIcon from "../assets/fav-icon.png";
import earthIcon from "../assets/earth-icon.png";

function Home() {
  const { lang, changeType } = useContext(dataContext);

  return (
    <div>
      <div className="border-2 flex items-center justify-evenly">
        <NavLink to="/" className="flex flex-1 justify-center">
          <img src={logo} alt="logo" className="h-20 w-20 object-cover" />
          <img
            src={logoName}
            alt="logo-name"
            className="h-20 w-40 object-cover"
          />
        </NavLink>
        <div className="flex flex-4 gap-10 pl-5">
          <NavLink to="/Account">
            {lang === "en" ? "Home" : "Αρχική Σελίδα"}
          </NavLink>
          <NavLink to="/jobPosition">
            {lang === "en" ? "Jobs" : "Αγγελίες"}
          </NavLink>
          <NavLink to="/">
            {lang === "en" ? "Post an add" : "Καταχώρηση αγγελίας"}
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
      </div>
      <main></main>
    </div>
  );
}

export default Home;
