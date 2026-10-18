import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";

function HeaderMessage() {
  const { lang } = useContext(dataContext);

  return (
    <section className="flex flex-col justify-center items-center mt-20">
      <h1>
        {lang === "en"
          ? "Your next job is just one click away"
          : "Η επόμενη δουλεία σου είναι μόλις ένα κλίκ μακριά"}
      </h1>
      <p>
        {lang === "en"
          ? "Connecting employers and employees has never been faster or easier."
          : "Η σύνδεση εργοδοτών και εργαζομένων δεν ήταν ποτέ πιο γρήγορη και εύκολη."}
      </p>
    </section>
  );
}

export default HeaderMessage;
