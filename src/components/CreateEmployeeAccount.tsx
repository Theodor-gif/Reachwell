import { useContext, useState } from "react";
import { dataContext } from "../context/ContextApi.tsx";
import CorrectIcon from "../assets/correct.png";
import WrongIcon from "../assets/wrong.png";
import SeePasswordIcon from "../assets/seePassword.png";
import SeeNotPasswordIcon from "../assets/seeNotPassword.png";

function CreateEmployeeAccount() {
  const { lang, areas } = useContext(dataContext);
  const symbol: string = "*";
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordType = showPassword ? "text" : "password";
  const iconPassword = showPassword ? SeePasswordIcon : SeeNotPasswordIcon;

  return (
    <section className="flex w-[80%] m-[50px_auto_100px_auto] gap-10">
      <form className="flex flex-1 flex-col  p-10 bg-blue-50">
        <label className="flex flex-col gap-1">
          {lang === "en" ? `I am a... ${symbol}` : `Είμαι... ${symbol}`}
          <div>
            <select
              className="w-50 border-b mb-5 bg-blue-50"
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
            <span className="hidden">
              <img className="w-3.5" src={CorrectIcon} alt="correct-icon" />
            </span>
            <span className="hidden">
              <img className="w-3.5" src={WrongIcon} alt="wrong-icon" />
            </span>
          </div>
        </label>
        <label htmlFor="userName">
          {lang === "en" ? "First name" : "Όνομα"} <span>*</span>
        </label>
        <div className="flex items-center gap-5 mb-5">
          <input
            className="border-b w-50 bg-blue-50"
            id="userName"
            type="text"
            name="userName"
            placeholder={lang === "en" ? "John" : "Ανδρέας"}
            required
          />
          <span className="hidden">
            <img className="w-3.5" src={CorrectIcon} alt="correct-icon" />
          </span>
          <span className="hidden">
            <img className="w-3.5" src={WrongIcon} alt="wrong-icon" />
          </span>
        </div>
        <label htmlFor="lastName">
          {lang === "en" ? "Surname" : "Επώνυμο"} <span>*</span>
        </label>
        <div className="flex items-center gap-5 mb-5">
          <input
            className="border-b w-50 bg-blue-50"
            id="lastName"
            type="text"
            name="lastName"
            placeholder={lang === "en" ? "Richard" : "Παππάς"}
            required
          />
          <span className="hidden">
            <img className="w-3.5" src={CorrectIcon} alt="correct-icon" />
          </span>
          <span className="hidden">
            <img className="w-3.5" src={WrongIcon} alt="wrong-icon" />
          </span>
        </div>
        <label htmlFor="userAge">
          {lang === "en" ? "Age" : "Ηλικία"} <span>*</span>
        </label>
        <div className="flex items-center gap-5 mb-5">
          <input
            className="border-b w-50 bg-blue-50"
            id="userAge"
            type="text"
            name="userAge"
            placeholder="25"
            required
          />
          <span className="hidden">
            <img className="w-3.5" src={CorrectIcon} alt="correct-icon" />
          </span>
          <span className="hidden">
            <img className="w-3.5" src={WrongIcon} alt="wrong-icon" />
          </span>
        </div>
        <label htmlFor="email">
          {lang === "en" ? "Email" : "Ηλεκτρονικό Ταχυδρομείο"} <span>*</span>
        </label>
        <div className="flex items-center gap-5 mb-5">
          <input
            className="border-b w-50 bg-blue-50"
            id="email"
            type="email"
            name="email"
            placeholder="email@gmail.com"
            required
          />
          <span className="hidden">
            <img className="w-3.5" src={CorrectIcon} alt="correct-icon" />
          </span>
          <span className="hidden">
            <img className="w-3.5" src={WrongIcon} alt="wrong-icon" />
          </span>
        </div>
        <label htmlFor="phone">
          {lang === "en" ? "Phone number " : "Τηλέφωνο "}
          <span>*</span>
        </label>
        <div className="flex items-center gap-5 mb-5">
          <input
            className="border-b w-50 bg-blue-50"
            id="phone"
            type="tel"
            name="phone"
            placeholder="697...."
            required
          />
          <span className="hidden">
            <img className="w-3.5" src={CorrectIcon} alt="correct-icon" />
          </span>
          <span className="hidden">
            <img className="w-3.5" src={WrongIcon} alt="wrong-icon" />
          </span>
        </div>
        <label htmlFor="city">
          {lang === "en" ? "City / Area " : "Πόλη / Περιοχή "}
          <span>*</span>
          <div className="flex gap-5">
            <select className="w-50 border-b mb-5 bg-blue-50" required>
              {areas.map((item) => (
                <option key={item.id} value={item.areaEl}>
                  {lang === "en" ? item.areaEn : item.areaEl}
                </option>
              ))}
            </select>
            <span className="hidden">
              <img className="w-3.5" src={CorrectIcon} alt="correct-icon" />
            </span>
            <span className="hidden">
              <img className="w-3.5" src={WrongIcon} alt="wrong-icon" />
            </span>
          </div>
        </label>
        <label htmlFor="password">
          {lang === "en" ? "Password" : "Κωδικός"} <span>*</span>
        </label>
        <div className="flex items-center gap-5 mb-20">
          <input
            className="border-b w-50 bg-blue-50"
            id="password"
            type={passwordType}
            name="password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <img className="w-3.5" src={iconPassword} alt="" />
          </button>
          <div className="flex">
            <span className="hidden">
              <img className="w-3.5" src={CorrectIcon} alt="correct-icon" />
            </span>
            <span className="hidden">
              <img className="w-3.5" src={WrongIcon} alt="wrong-icon" />
            </span>
          </div>
        </div>
        <div className="flex gap-5 mb-15">
          <button
            className="bg-[#245bd9] text-amber-50 w-30 p-1.5"
            type="submit"
          >
            {lang === "en" ? "Sign Up" : "Εγγραφή"}
          </button>
          <button
            className="bg-slate-200 text-slate-700 w-30 p-1.5"
            type="reset"
          >
            {lang === "en" ? "Clear" : "Καθαρισμός"}
          </button>
        </div>
      </form>
      <section className="flex-1 p-10 flex justify-center items-center bg-blue-50">
        <div className="flex flex-col gap-5">
          <p>
            <span>X </span>{" "}
            {lang === "en"
              ? "Length between 10 and 40 characters."
              : "Μήκος μεταξύ 10 και 40 χαρακτήρων"}
          </p>
          <p>
            <span>X </span>
            {lang === "en"
              ? `At least one lowercase letter (az).`
              : "Τουλάχιστον ένα πεζό γράμμα (a-z)"}
          </p>
          <p>
            <span>X </span>{" "}
            {lang === "en"
              ? `At least one capital letter (AZ).`
              : "Τουλάχιστον ένα κεφαλαίο γράμμα (A-Z)"}
          </p>
          <p>
            <span>X </span>{" "}
            {lang === "en"
              ? `At least one digit (0-9).`
              : "Τουλάχιστον ένα ψηφίο (0-9)"}
          </p>
          <p>
            <span>X </span>{" "}
            {lang === "en"
              ? `At least one special character: -./',;&@#*)(_+:"~`
              : `Τουλάχιστον ένας ειδικός χαρακτήρας: -./',;&@#*)(_+:"~`}
          </p>
        </div>
      </section>
    </section>
  );
}

export default CreateEmployeeAccount;
