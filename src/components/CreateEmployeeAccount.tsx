import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";

function CreateEmployeeAccount() {
  const { lang } = useContext(dataContext);
  const symbol: string = "*";

  return (
    <section className="w-[80%] m-[50px_auto_100px_auto]">
      <h3>Create Employee Account</h3>
      <form className="flex flex-col bg-blue-50">
        <label className="flex flex-col gap-1">
          {lang === "en" ? `I am a... ${symbol}` : `Είμαι... ${symbol}`}
          <select
            required
            // value={userType}
            // onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            <option value="candidate">
              {lang === "en" ? "Candidate" : "Υποψήφιος"}
            </option>
            <option value="employer">
              {lang === "en" ? "Employer" : "Εργοδότης"}
            </option>
          </select>
        </label>
        <label htmlFor="userName">
          {lang === "en" ? "First name" : "Όνομα"} <span>*</span>
        </label>
        <input
          id="userName"
          type="text"
          name="userName"
          placeholder={lang === "en" ? "John" : "Ανδρέας"}
          required
        />
        <label htmlFor="lastName">
          {lang === "en" ? "Surname" : "Επώνυμο"} <span>*</span>
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          placeholder={lang === "en" ? "Richard" : "Παππάς"}
          required
        />
        <label htmlFor="userAge">
          {lang === "en" ? "Age" : "Ηλικία"} <span>*</span>
        </label>
        <input
          id="userAge"
          type="text"
          name="userAge"
          placeholder="25"
          required
        />
        <label htmlFor="email">
          {lang === "en" ? "Email" : "Ηλεκτρονικό Ταχυδρομείο"} <span>*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@gmail.com"
          required
        />
        <label htmlFor="phone">
          Phone <span>*</span>
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="697...."
          required
        />
        <label htmlFor="city">
          City / Area <span>*</span>
        </label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="Athens"
          required
        />
        <label htmlFor="password">
          Password <span>*</span>
        </label>
        <input id="password" type="password" name="password" required />
        <div>
          <button type="submit">{lang === "en" ? "Sign Up" : "Εγγραφή"}</button>
          <button type="reset">{lang === "en" ? "Clear" : "Καθαρισμός"}</button>
        </div>
      </form>
    </section>
  );
}

export default CreateEmployeeAccount;
