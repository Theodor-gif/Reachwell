import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";

function Home() {
  const { lang, changeType } = useContext(dataContext);

  return (
    <>
      <h1>{lang === "en" ? "Home page" : "Κεντρική Σελιδα"}</h1>
      <p>{lang}</p>
      <button onClick={() => changeType()}>Click</button>
    </>
  );
}

export default Home;
