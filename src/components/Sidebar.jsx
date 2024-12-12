import React, { useState } from "react";
// import { Button } from "../components/ui/button";
import PersonalDetails from "./PersonalDetails";
import EducationalBackground from "./EducationalBackground";
import ProfessionalExperience from "./ProfessionalExperience";
import { Button } from "@/components/ui/button"

//eslint no-unused-vars
const sidebar = (props) => {
  const [isShown, setIsShown] = useState({
    personalDetails: false,
    educationalBackground: false,
    professionalExperiences: false,
  });
  const toggleForm = (formName) => {
    setIsShown((prevState) => ({
      ...prevState,
      [formName]: !prevState[formName],
    }));
  };
  return (
    <aside className="text-center bg-white p-4 md:col-span-1 ">
      <div className="flex flex-wrap justify-between p-2">
        <Button
          className="m-1 px-4 py-1 bg-secondary text-white rounded"
          onClick={props.clear}
        >
          Clear
        </Button>
        <Button
          className="m-1 px-4 py-1 bg-secondary text-white rounded"
          onClick={props.sample}
        >
          Sample
        </Button>
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
        isSample={props.isSample}
        clear={props.clear}
      />
      <ProfessionalExperience
        isShown={isShown.professionalExperiences}
        toggleForm={() => toggleForm("professionalExperiences")}
        isSample={props.isSample}
        clear={props.clear}
      />
      <div className="m-2 flex flex-wrap justify-center md:justify-between">
        <Button
          className="m-1 px-4 py-1 bg-primary text-white rounded"
          onClick={() => {
            props.setShowPDFPreview(true);
          }}
        >
          Download PDF
        </Button>
        <Button
          className="m-1 px-4 py-1 bg-secondary text-white rounded"
          onClick={() => {
            props.setShowPDFPreview(false);
          }}
        >
          Edit
        </Button>
      </div>
    </aside>
  );
};
export default sidebar;
