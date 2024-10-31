import React, { useState } from "react";
import PersonalDetailsForm from "./PersonalDetails";
import EducationalBackground from "./EducationalBackground";
import ExperienceForm from "./ProfessionalExperience";
import { Button } from "./UI/button";

import FontSelector from "./customize/FontSelector";
const Save = () => {
  alert("Save");
};

function Sidebar({
  personalDetails,
  setPersonalDetails,
  educationalBackground,
  setEducationalBackground,
  professionalExperience,
  setProfessionalExperience,
  sample,
  clear,
  selectedFont,
  setSelectedFont,
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
        educationalBackground: false,
        professionalExperience: false,
      },
      [formName]: !prevIsShown[formName], // Toggle the selected form
    }));
  };

  return (
    <aside className="text-center  bg-white col-span-1 mt-5 ml-5 p-4">
      <div>
        <FontSelector
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
        />
      </div>

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
        educationalBackground={educationalBackground}
        setEducationalBackground={setEducationalBackground}
        isShown={isShown.educationalBackground}
        toggleForm={() => toggleForm("educationalBackground")}
      />
      <ExperienceForm
        professionalExperience={professionalExperience}
        setProfessionalExperience={setProfessionalExperience}
        isShown={isShown.professionalExperience}
        toggleForm={() => toggleForm("professionalExperience")}
      />
      <div className="m-5">
        <Button onClick={Save}>Save</Button>
      </div>
    </aside>
  );
}

export default Sidebar;
