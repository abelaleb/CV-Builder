import React, { useState } from "react";
// import { Button } from "../components/ui/button";
import PersonalDetails from "./PersonalDetails";
import EducationalBackground from "./EducationalBackground";
import ProfessionalExperience from "./ProfessionalExperience";
//eslint no-unused-vars
const sidebar = (props) => {
  const [isShown, setIsShown] = useState({
    personalDetails: false,
    educationalBackground: false,
    professionalExperiences: false,
  });
  const toggleForm = (formName) => {
    setIsShown((prevIsShown) => ({
      ...prevIsShown,
      [formName]: !prevIsShown[formName],
    }));
    props.clear();

  };
  return (
    <aside className="text-center bg-white p-4 md:col-span-1">
      <div className="flex flex-wrap justify-between p-2">
        <button
          className="m-1 px-2 py-1 bg-red-500 text-white rounded"
          onClick={props.clear}
        >
          Clear
        </button>
        <button
          className="m-1 px-2 py-1 bg-green-500 text-white rounded"
          onClick={props.sample}
        >
          Sample
        </button>
      </div>
      <PersonalDetails
        personalDetails={props.personalDetails}
        setPersonalDetails={props.setPersonalDetails}
        isShown={isShown.personalDetails}
        toggleForm={() => toggleForm("personalDetails")}
      />
      <EducationalBackground
        isShown={isShown.educationalBackground}
        toggleForm={() => toggleForm("educationalBackground")}
        addEducationalEntry={props.addEducationalEntry}
      />
      <ProfessionalExperience
        isShown={isShown.professionalExperiences}
        toggleForm={() => toggleForm("professionalExperiences")}
      />
      <div className="m-5 flex flex-wrap justify-center md:justify-between">
        <button
          className="m-1 px-2 py-1 bg-blue-500 text-white rounded"
          onClick={() => {
            props.setShowPDFPreview(true);
          }}
        >
          Download PDF
        </button>
        <button
          className="m-1 px-2 py-1 bg-gray-500 text-white rounded"
          onClick={() => {
            props.setShowPDFPreview(false);
          }}
        >
          Edit
        </button>
      </div>
    </aside>
  );
};
export default sidebar;
