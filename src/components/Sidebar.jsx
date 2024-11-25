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
  };
  return (
    <aside className="text-center  bg-white col-span-1 pt-4">
      <div className="flex justify-between p-3">
        <button onClick={props.clear}>Clear</button>
        <button onClick={props.sample}>Sample</button>
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
      />
      {/* <div className="mt-4 ">
        {saveEducationalEntries.length === 0 ? (
          <p className="text-gray-500 ">No education entries added yet.</p>
        ) : (
          saveEducationalEntries.map((entry, index) => (
            <div
              key={index}
              className=" border rounded shadow-md bg-primary text-secondary flex p-4 gap-4 justify-start align-middle"
            >
              <p className="font-extrabold text-sm flex">{entry.school}</p>
              <p className="text-sm flex justify-start">{entry.degree}</p>
            </div>
          ))
        )}
      </div> */}
      {/* <div className="p-4">
        <Button onClick={addEducationalBackground}>&#x2795; School</Button>
      </div> */}
      <ProfessionalExperience
        isShown={isShown.professionalExperiences}
        toggleForm={() => toggleForm("professionalExperiences")}
      />
      {/* <div className="p-4">
        <Button onClick={addProfessionalExperiences}>
          &#x2795; Experience
        </Button>
      </div> */}
      <div className="m-5 flex justify-between">
        <button
          onClick={() => {
            props.setShowPDFPreview(true);
          }}
        >
          Download PDF
        </button>
        <button
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
