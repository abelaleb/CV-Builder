import React from "react";
import PersonalDetailsForm from "./PersonalDetails";
import EducationalBackground from "./EducationalBackground";
import ExperienceForm from "./ProfessionalExperience";
import { Button } from "./UI/button";

const Save = () => {
  alert("Save");
};

const Clear = () => {
  console.log("Clear");
};
// const sample = () => {
//   console.log("Sample");
// };

function Sidebar({
  personalDetails,
  setPersonalDetails,
  educationalBackground,
  setEducationalBackground,
  professionalExperience,
  setProfessionalExperience,
  sample,
  clear
}) {
  return (
    <aside className="text-center  bg-white col-span-1 mt-5 ml-5 p-4 ">
      <div className="flex justify-between p-3">
        <Button
          onClick={clear}
        >
          Clear
        </Button>
        <Button onClick={sample}>Sample</Button>
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
      <div className="m-5">
        <Button onClick={Save}>Save</Button>
      </div>
    </aside>
  );
}

export default Sidebar;
