import React from "react";
import PersonalDetailsForm from "./PersonalDetails";
import EducationalBackground from "./EducationalBackground";
import ExperienceForm from "./ProfessionalExperience";
import { Button } from "./UI/button";

function Sidebar({
  personalDetails,
  setPersonalDetails,
  educationalBackground,
  setEducationalBackground,
  professionalExperience,
  setProfessionalExperience,
}) {
  return (
    <aside className="text-center m-4 p-4 bg-slate-100 col-span-1">
      <div>CV Generator</div>
      <Button onClick="submit" className="bg-blue-500 text-white px-4 py-2 rounded">hi</Button>
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
