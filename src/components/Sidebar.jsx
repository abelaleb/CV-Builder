import React from "react";
import PersonalDetailsForm from "./PersonalDetails";
import EducationalBackgroundForm from "./EducationalBackground";
import ExperienceForm from "./Experience";

function Sidebar({ personalDetails, setPersonalDetails }) {
  return (
    <aside className="text-center m-4 p-4 bg-red-300 col-span-1">
      <div>CV Generator</div>
      <PersonalDetailsForm
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <EducationalBackgroundForm />
      <ExperienceForm />
    </aside>
  );
}

export default Sidebar;
