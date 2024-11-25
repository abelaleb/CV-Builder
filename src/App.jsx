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

  const sample = () => {
    setPersonalDetails(initialPersonalDetails[0]);
    setEducationalBackgroundEntries(initialEducationalBackgroundEntries);
    setProfessionalExperienceEntries(initialProfessionalExperienceEntries);
  };

  const clear = () => {
    setPersonalDetails([]);
    setEducationalBackgroundEntries([]);
    setProfessionalExperienceEntries([]);
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
      <main className="grid grid-cols-4 bg-slate-100 min-h-screen">
        {/* Sidebar with Font and Layout Selectors */}
        <div className="col-span-1 m-5 bg-white p-5">
          <div className="flex flex-col ml-5">
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
            setPersonalDetails={setPersonalDetails}
          />
        </div>

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
