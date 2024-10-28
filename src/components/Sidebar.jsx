import React from "react";
import PersonalDetailsForm from "./PersonalDetails";
import EducationalBackground from "./EducationalBackground";
import ExperienceForm from "./ProfessionalExperience";

function Sidebar({
  personalDetails,
  setPersonalDetails,
  educationalBackground,
  setEducationalBackground,
  professionalExperience,
  setProfessionalExperience,
}) {
  return (
    <aside className="text-center m-4 p-4 bg-red-300 col-span-1">
      <div>CV Generator</div>
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
