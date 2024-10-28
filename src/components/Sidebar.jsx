import React from "react";
import PersonalDetailsForm from "./PersonalDetails";
import EducationalBackgroundForm from "./EducationalBackground";
import ExperienceForm from "./Experience";

function Sidebar({ PersonalDetails, setPersonalDetails }) {
  return (
    <>
      <aside className="text-center m-4 p-4  bg-red-300 col-span-1">
        <div className="">CV Generator</div>
        <PersonalDetailsForm
          details={PersonalDetails}
          setDetails={setPersonalDetails}
        />
        <EducationalBackgroundForm />
        <ExperienceForm />
      </aside>
    </>
  );
}
export default Sidebar;
