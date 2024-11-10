import React, { useState } from "react";
import PersonalDetailsForm from "./PersonalDetails";
import EducationalBackground from "./EducationalBackground";
import ExperienceForm from "./ProfessionalExperience";
import { Button } from "./UI/button";

function Sidebar({
  personalDetails,
  setPersonalDetails,
  educationalBackgrounds,
  setEducationalBackgrounds,
  professionalExperience,
  setProfessionalExperience,
  sample,
  clear,
  showPDFPreview,
  setShowPDFPreview,
}) {

  const [isShown, setIsShown] = useState({
    personalDetails: false,
    educationalBackground: false,
    professionalExperience: false,
  });

  const toggleForm = (formName) => {
    setIsShown((prevIsShown) => ({
      ...{
        personalDetails: false,
        educationalBackgrounds: false,
        professionalExperience: false,
      },
      [formName]: !prevIsShown[formName], // Toggle the selected form
    }));
  };


  const addProfessionalExperienceBackground =()=>{
    console.log("professionalBackground");
    
  }

  return (
    <aside className="text-center  bg-white col-span-1 pt-4">
      <div className="flex justify-between p-3">
        <Button onClick={clear}>Clear</Button>
        <Button onClick={sample}>Sample</Button>
      </div>
      <PersonalDetailsForm
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        isShown={isShown.personalDetails}
        toggleForm={() => toggleForm("personalDetails")}
      />
      <EducationalBackground
        educationalBackgrounds={educationalBackgrounds}
        setEducationalBackgrounds={setEducationalBackgrounds}
        isShown={isShown.educationalBackground}
        toggleForm={() => toggleForm("educationalBackground")}
      />
   
      <ExperienceForm
        professionalExperience={professionalExperience}
        setProfessionalExperience={setProfessionalExperience}
        isShown={isShown.professionalExperience}
        toggleForm={() => toggleForm("professionalExperience")}
      />
      <div className="p-4">
        <Button onClick={addProfessionalExperienceBackground}>Add Experience</Button>
      </div>
      <div className="m-5 flex justify-between">
        <Button
          onClick={() => {
            setShowPDFPreview(true);
          }}
        >
          Save
        </Button>
        <Button
          onClick={() => {
            setShowPDFPreview(false);
          }}
        >
          Edit
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;
