import React from "react";
import PersonalDetailsForm from "./PersonalDetails";
import EducationalBackground from "./EducationalBackground";
import ExperienceForm from "./ProfessionalExperience";
import { Button } from "./UI/button";

const Save = () => {
  console.log("Save");
};

const Clear = () => {
  console.log("Clear");
};

function Sidebar({
  personalDetails,
  setPersonalDetails,
  educationalBackground,
  setEducationalBackground,
  professionalExperience,
  setProfessionalExperience,
}) {
  return (
    <aside className="text-center  bg-white col-span-1 mt-5 ml-5 p-4 ">
      <div className="flex justify-between p-3">
        <Button onClick={Clear}>Clear</Button>
        <Button onClick={Save}>Save</Button>
      </div>
      <PersonalDetailsForm
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <EducationalBackground
        educationalBackground={educationalBackground}
        setEducationalBackground={setEducationalBackground}
      />
      <ExperienceForm
        professionalExperience={professionalExperience}
        setProfessionalExperience={setProfessionalExperience}
      />
    </aside>
  );
}

export default Sidebar;
