import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import FontSelector from "./components/customize/FontSelector";
import {
  initialPersonalDetails,
  initialEducationalBackgroundEntries,
  initialProfessionalExperienceEntries,
} from "./components/example-data";
export const Context = React.createContext();

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    initialPersonalDetails[0]
  );
  const [educationalBackgroundEntries, setEducationalBackgroundEntries] =
    useState(initialEducationalBackgroundEntries);
  const [professionalExperienceEntries, setProfessionalExperienceEntries] =
    useState(initialProfessionalExperienceEntries);

  const [selectedFont, setSelectedFont] = useState("sans-serif");
  const [showPDFPreview, setShowPDFPreview] = useState(false);
  const [isSample, setIsSample] = useState(true);

  const sample = () => {
    setPersonalDetails(initialPersonalDetails[0]);
    setEducationalBackgroundEntries(initialEducationalBackgroundEntries);
    setProfessionalExperienceEntries(initialProfessionalExperienceEntries);
    setIsSample(true);
  };

  const clear = () => {
    setPersonalDetails([]);
    setEducationalBackgroundEntries([
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        schoolCity: "",
        schoolCountry: "",
        startSchoolDate: "",
        endSchoolDate: "",
      },
    ]);
    setProfessionalExperienceEntries([
      {
        id: crypto.randomUUID(),
        jobTitle: "",
        company: "",
        position: "",
        startJobDate: "",
        endJobDate: "",
        jobLocation: "",
        description: "",
      },
    ]);
    setIsSample(false);
  };

  const handleEdit = () => {
    if (isSample) {
      clear();
    }
  };

  return (
    <Context.Provider
      value={{
        educationalBackgroundEntries,
        setEducationalBackgroundEntries,
        professionalExperienceEntries,
        setProfessionalExperienceEntries,
      }}
    >
      <main className="grid grid-cols-1 md:grid-cols-6 bg-slate-100 min-h-screen">
        <div className="col-span-2 m-2 md:m-5 bg-white p-5">
          {/* Sidebar */}
          <div className="flex flex-col ml-2 md:ml-5">
            <FontSelector
              selectedFont={selectedFont}
              setSelectedFont={setSelectedFont}
            />
          </div>
          <Sidebar
            sample={sample}
            clear={clear}
            setShowPDFPreview={setShowPDFPreview}
            personalDetails={personalDetails}
            setPersonalDetails={(details) => {
              handleEdit();
              setPersonalDetails(details);
            }}
            isSample={isSample}
          />
        </div>
        {/* Content Area */}
        <ContentArea
          sample={sample}
          clear={clear}
          showPDFPreview={showPDFPreview}
          selectedFont={selectedFont}
          personalDetails={personalDetails}
        />
      </main>
    </Context.Provider>
  );
}

export default App;
