import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { useContext, useState } from "react";
import { dataContext } from "../context/ContextApi.tsx";

function CreatePost() {
  const { lang, jobs, areas, skill, salary, employeeAmount, timeRange } =
    useContext(dataContext);
  const [show, setShow] = useState<boolean>(false);

  type typesData = {
    id: string;
    employmentEl: string;
    employmentEn: string;
  };

  type locationData = {
    id: string;
    locationTypeEl: string;
    locationTypeEn: string;
  };

  type educationType = {
    id: string;
    educationEl: string;
    educationEn: string;
  };

  type experienceType = {
    id: string;
    experienceEl: string;
    experienceEn: string;
  };

  const employmentTypesData: typesData[] = [
    { id: "1", employmentEl: "Πλήρης απασχόληση", employmentEn: "Full-time" },
    { id: "2", employmentEl: "Ημιαπασχόληση", employmentEn: "Part-time" },
    { id: "3", employmentEl: "Προσωρινή εργασία", employmentEn: "Temporary" },
    { id: "4", employmentEl: "Εποχιακή εργασία", employmentEn: "Seasonal" },
    { id: "5", employmentEl: "Ορισμένου χρόνου", employmentEn: "Fixed-term" },
    {
      id: "6",
      employmentEl: "Ελεύθερος επαγγελματίας",
      employmentEn: "Freelance",
    },
    { id: "7", employmentEl: "Πρακτική άσκηση", employmentEn: "Internship" },
  ];

  const locationType: locationData[] = [
    { id: "1", locationTypeEl: "Εξ αποστάσεως", locationTypeEn: "remote" },
    { id: "2", locationTypeEl: "Υβριδική εργασία", locationTypeEn: "hybrid" },
    { id: "3", locationTypeEl: "Δια Ζώσης", locationTypeEn: "on-site" },
  ];

  const educationLevel: educationType[] = [
    {
      id: "1",
      educationEl: "Χωρίς προτίμηση",
      educationEn: "No preference",
    },
    {
      id: "2",
      educationEl: "Απολυτήριο Δημοτικού",
      educationEn: "Primary School Certificate",
    },
    {
      id: "3",
      educationEl: "Απολυτήριο Λυκείου",
      educationEn: "High School Diploma",
    },
    {
      id: "4",
      educationEl: "Πτυχίο",
      educationEn: "Undergraduate degree",
    },
    {
      id: "5",
      educationEl: "Μεταπτυχιακό",
      educationEn: "Master's degree",
    },
    {
      id: "6",
      educationEl: "Διδακτορικό",
      educationEn: "Doctorate ( PhD )",
    },
  ];

  const workExperience: experienceType[] = [
    {
      id: "1",
      experienceEl: "Χωρίς προϋπηρεσία",
      experienceEn: "No experience required",
    },
    {
      id: "2",
      experienceEl: "Λιγότερο από 1 έτος",
      experienceEn: "Less than 1 year",
    },
    { id: "3", experienceEl: "1-2 έτη", experienceEn: "1-2 years" },
    { id: "4", experienceEl: "2-3 έτη", experienceEn: "2-3 years" },
    { id: "5", experienceEl: "3-5 έτη", experienceEn: "3-5 years" },
    { id: "6", experienceEl: "5-10 έτη", experienceEn: "5-10 years" },
    { id: "7", experienceEl: "Πάνω από 10 έτη", experienceEn: "10+ years" },
  ];

  return (
    <section>
      <Navbar />
      <h1>Employeer create job position form:</h1>
      <form className="flex flex-col w-[80%] m-auto">
        <h2 className="text-lg mb-7.5">
          {lang === "en" ? "Basic information" : "Βασικές πληροφορίες"}
        </h2>
        <label className="flex flex-col text-sm mb-5" htmlFor="jobPosition">
          {lang === "en" ? "Job position" : "Θέση απασχόλησης"}
          <select id="jobPosition" className="border-b w-50">
            {jobs.map((item) => (
              <option key={item.id}>
                {lang === "en" ? item.jobEn : item.jobEl}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="companyName" className="text-sm">
          {lang === "en" ? "Company Name" : "Επωνυμία εταιρείας"}
        </label>
        <input
          className="border-b w-50 mb-5"
          id="companyName"
          type="text"
          name="companyName"
        />
        <label className="flex flex-col mb-5 text-sm" htmlFor="employmentType">
          {lang === "en" ? "Type of employment" : "Τύπος απασχόλησης"}
          <select id="employmentType" className="border-b w-50">
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {employmentTypesData.map((item) => (
              <option key={item.id} value={item.employmentEl}>
                {lang === "en" ? item.employmentEn : item.employmentEl}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col mb-5 text-sm" htmlFor="locationType">
          {lang === "en" ? "Job Location Type" : "Τρόπος εργασίας"}
          <select id="locationType" className="border-b w-50">
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {locationType.map((item) => (
              <option key={item.id}>
                {lang === "en" ? item.locationTypeEn : item.locationTypeEl}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col mb-7.5 text-sm" htmlFor="jobArea">
          {lang === "en" ? "Area" : "Περιοχή"}
          <select id="jobArea" className="border-b w-50">
            {areas.map((item) => (
              <option key={item.id} value={item.areaEl}>
                {lang === "en" ? item.areaEn : item.areaEl}
              </option>
            ))}
          </select>
        </label>
        <h2 className="text-lg mb-7.5">
          {lang === "en" ? "Required qualifications" : "Απαιτούμενα προσόντα"}
        </h2>
        <label htmlFor="jobDescription" className="text-sm">
          {lang === "en" ? "Job description" : "Περιγραφή θέσης"}
        </label>
        <textarea
          id="jobDescription"
          className="border mb-5 w-100"
          cols={5}
          rows={5}
        ></textarea>
        <label htmlFor="educationLevel" className="flex flex-col text-sm mb-5">
          {lang === "en" ? "Education level" : "Επίπεδο εκπαίδευσης"}
          <select id="educationLevel" className="border-b w-50">
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {educationLevel.map((item) => (
              <option key={item.id} value={item.educationEl}>
                {lang === "en" ? item.educationEn : item.educationEl}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="workExperience" className="flex flex-col mb-5 text-sm">
          {lang === "en" ? "Relevant work experience" : "Σχετική προϋπηρεσία"}
          <select id="workExperience" className="border-b w-50">
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {workExperience.map((item) => (
              <option key={item.id} value={item.experienceEl}>
                {lang === "en" ? item.experienceEn : item.experienceEl}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="jobSkillScreen" className="text-sm">
          {lang === "en" ? "Skills" : "Δεξιότητες"}
        </label>
        <div className="border flex">
          <input
            id="jobSkillScreen"
            className="border w-50"
            type="text"
            readOnly
          />
          <div>
            <button type="button" onClick={() => setShow((e) => !e)}>
              Arrow
            </button>
          </div>
        </div>
        <label htmlFor="Skills"></label>
        {show && (
          <ul className="overflow-auto h-20">
            {skill.map((item) => (
              <li key={item.id}>
                {lang === "en" ? item.skillEn : item.skillEl}
                <input type="checkbox" value={item.skillEl} />
              </li>
            ))}
          </ul>
        )}
        <h2 className="mb-7.5 mt-7.5 text-lg">
          {lang === "en" ? "Salary" : "Μισθός"}
        </h2>
        <label htmlFor="grossAmount" className="text-sm">
          {lang === "en" ? "Gross amount in \u20AC" : "Μικτό ποσό σε \u20AC"}
        </label>
        <input
          id="grossAmount"
          className="border-b w-50 mb-5"
          type="number"
          name="grossAmount"
        />
        <label htmlFor="salaryPer" className="flex flex-col text-sm">
          {lang === "en" ? "Salary per" : "Μισθός ανά"}
          <select id="salaryPer" className="border-b w-50 mb-7.5">
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {salary.map((item) => (
              <option key={item.id} value={item.salaryPerEl}>
                {lang === "en" ? item.salaryPerEn : item.salaryPerEl}
              </option>
            ))}
          </select>
        </label>
        <h2 className="text-lg mb-7.5">
          {lang === "en" ? "Recruitment needs" : "Ανάγκες πρόσληψης"}
        </h2>
        <label htmlFor="employeeAmount" className="flex flex-col text-sm">
          {lang === "en"
            ? "How many employees do you need for this position"
            : "Πόσους εργαζόμενους χρειάζεστε για αυτή τη θέση"}
          <select
            id="employeeAmount"
            className="border-b w-50 mb-5"
            name="employeeAmount"
          >
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {employeeAmount.map((item) => (
              <option key={item.id} value={item.employeesEl}>
                {lang === "en" ? item.employeesEn : item.employeesEl}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="daysRange" className="flex flex-col text-sm">
          {lang === "en"
            ? "How soon do you want to fill the position"
            : "Πόσο σύντομα θέλετε να καλυφθεί η θέση"}
          <select id="daysRange" className="border-b w-50 mb-5">
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {timeRange.map((item) => (
              <option key={item.id} value={item.daysEl}>
                {lang === "en" ? item.daysEn : item.daysEl}
              </option>
            ))}
          </select>
        </label>
        <div className="flex mt-15">
          <button className="border w-50 p-2" type="submit">
            {lang === "en" ? "Post job" : "Δημοσίευση αγγελίας"}
          </button>
          <button className="border w-50 p-2" type="reset">
            {lang === "en" ? "Clear" : "Καθαρισμός"}
          </button>
        </div>
      </form>
      <Footer />
    </section>
  );
}

export default CreatePost;
