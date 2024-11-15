import React, { useState, useEffect } from "react";
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

  const addProfessionalExperienceBackground = () => {
    console.log("professionalBackground");
  };
  const [saveEducationalEntries, setSaveEducationalEntries] = useState([]);
  const addEducationalBackground = () => {
    const validEntries = saveEducationalEntries.filter(
      (entry) => entry.school.trim() !== ""
    );

    if (validEntries.length > 0) {
      // Add valid entries to the main educational backgrounds array in App.jsx
      setSaveEducationalEntries((prevEducationalBackgrounds) => [
        ...prevEducationalBackgrounds,
        ...validEntries,
      ]);
    }

    // Reset the educational background form
    setEducationalBackgrounds([
      {
        school: "",
        degree: "",
        schoolCity: "",
        schoolCountry: "",
        startSchoolDate: "",
        endSchoolDate: "",
      },
    ]);
  };

  useEffect(() => {
    if (
      educationalBackgrounds.length === 1 &&
      educationalBackgrounds[0].school === ""
    ) {
      console.log(educationalBackgrounds);
    }
  }, [addEducationalBackground]);

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
      <div className="mt-4 ">
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
      </div>
      <div className="p-4">
        <Button onClick={addEducationalBackground}>&#x2795; School</Button>
      </div>
      <ExperienceForm
        professionalExperience={professionalExperience}
        setProfessionalExperience={setProfessionalExperience}
        isShown={isShown.professionalExperience}
        toggleForm={() => toggleForm("professionalExperience")}
      />
      <div className="p-4">
        <Button onClick={addProfessionalExperienceBackground}>
          Add Experience
        </Button>
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
