import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { useContext, useState } from "react";
import { dataContext } from "../context/ContextApi.tsx";

function CreatePost() {
  const { lang, jobs, areas } = useContext(dataContext);
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
    { id: "7", employmentEl: "Πρακτική άσκηση", employmentEn: "Intership" },
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
      <form className="flex flex-col border">
        <label htmlFor="jobPosition">
          Position name
          <select id="jobPosition">
            {jobs.map((item) => (
              <option key={item.id}>
                {lang === "en" ? item.jobEn : item.jobEl}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="companyName">Company Name</label>
        <input id="companyName" type="text" name="companyName" />
        <label htmlFor="employmentType">
          Type of employment
          <select id="employmentType">
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {employmentTypesData.map((item) => (
              <option key={item.id} value={item.employmentEl}>
                {lang === "en" ? item.employmentEn : item.employmentEl}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="locationType">
          Job Location Type
          <select id="locationType">
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {locationType.map((item) => (
              <option key={item.id}>
                {lang === "en" ? item.locationTypeEn : item.locationTypeEl}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="jobArea">
          Area
          <select id="jobArea">
            {areas.map((item) => (
              <option key={item.id} value={item.areaEl}>
                {lang === "en" ? item.areaEn : item.areaEl}
              </option>
            ))}
          </select>
        </label>
        <h3>Required qualifications</h3>
        <label htmlFor="jobDescription">Job description</label>
        <textarea
          id="jobDescription"
          className="border"
          cols={5}
          rows={5}
        ></textarea>
        <label htmlFor="educationLevel">
          Education level
          <select>
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {educationLevel.map((item) => (
              <option key={item.id} value={item.educationEl}>
                {lang === "en" ? item.educationEn : item.educationEl}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="workExperience">
          Relevant work experience
          <select id="workExperience">
            <option value="">{lang === "en" ? "Select" : "Επιλέξτε"}</option>
            {workExperience.map((item) => (
              <option value={item.experienceEl}>
                {lang === "en" ? item.experienceEn : item.experienceEl}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="jobSkillScreen">Skills</label>
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
            {educationLevel.map((item) => (
              <li>
                {item.educationEl}
                <input type="checkbox" value={item.educationEl} />
              </li>
            ))}
          </ul>
        )}
      </form>
      <Footer />
    </section>
  );
}

export default CreatePost;
