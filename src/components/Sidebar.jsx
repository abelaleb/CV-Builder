import React, { useState, useEffect } from "react";
import PersonalDetailsForm from "./PersonalDetails";
import EducationalBackground from "./EducationalBackground";
import ProfessionalExperience from "./ProfessionalExperience";
import { Button } from "./UI/button";

function Sidebar({
  personalDetails,
  setPersonalDetails,
  educationalBackgrounds,
  setEducationalBackgrounds,
  saveEducationalEntries,
  setSaveEducationalEntries,
  professionalExperiences,
  setProfessionalExperiences,
  sample,
  clear,
  showPDFPreview,
  setShowPDFPreview,
}) {
  const [isShown, setIsShown] = useState({
    personalDetails: false,
    educationalBackground: false,
    professionalExperiences: false,
  });

  const toggleForm = (formName) => {
    setIsShown((prevIsShown) => ({
      ...{
        personalDetails: false,
        educationalBackgrounds: false,
        professionalExperiences: false,
      },
      [formName]: !prevIsShown[formName], // Toggle the selected form
    }));
  };

  // const addProfessionalExperiences = () => {
  //   const validEntries = saveProfessionalExperiences.filter(
  //     (entry) => entry.school.trim() !== ""
  //   );
  //   if (validEntries.length > 0) {
  //     setSaveProfessionalExperiences((prevProfessionalExperience) => [
  //       ...prevProfessionalExperience,
  //       ...validEntries,
  //     ]);
  //   }
  //   setProfessionalExperiences([
  //     {
  //       company: "",
  //       position: "",
  //       jobLocation: "",
  //       startJobDate: "",
  //       endJobDate: "",
  //       description: "",
  //     },
  //   ]);
  // };
  const addEducationalBackground = () => {
    const validEntries = educationalBackgrounds.filter(
      (entry) => entry.school.trim() !== "" && entry.degree.trim() !== ""
    );
    if (validEntries.length > 0) {
      setSaveEducationalEntries((prevEntries) => [
        ...prevEntries,
        ...validEntries,
      ]);
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
    } else {
      alert("Please fill out the form before adding another entry.");
    }
  };

  useEffect(() => {
    if (
      educationalBackgrounds.length > 0 &&
      educationalBackgrounds[0].school !== ""
    ) {
      console.log("saveEducationalEntries: ", saveEducationalEntries);
      console.log("educationalBackgrounds: ", educationalBackgrounds);
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
      {/* <ProfessionalExperience
        professionalExperiences={professionalExperiences}
        setProfessionalExperiences={setProfessionalExperiences}
        isShown={isShown.professionalExperiences}
        toggleForm={() => toggleForm("professionalExperiences")}
      />
      <div className="p-4">
        <Button onClick={addProfessionalExperiences}>
          &#x2795; Experience
        </Button>
      </div> */}
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
