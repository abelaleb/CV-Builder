import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import FontSelector from "./components/customize/FontSelector";
import LayoutSelector from "./components/customize/LayoutSelector";
import { PDFViewer } from "@react-pdf/renderer";
import PDFFile from "./components/customize/PDFFile";

function App() {
  const [personalDetails, setPersonalDetails] = useState([]);
  const [educationalBackgrounds, setEducationalBackgrounds] = useState([]);
  const [professionalExperiences, setProfessionalExperiences] = useState(['a']);
  const [selectedFont, setSelectedFont] = useState("san-serif");
  const [selectedLayout, setSelectedLayout] = useState("Single Column");
  const [showPDFPreview, setShowPDFPreview] = useState(false);


  const sample = () => {
    setPersonalDetails({
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      location: "New York, USA",
      aboutMe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab enim ipsum inventore sequi officia! Ad quisquam consequatur itaque temporibus odit sapiente quam, perspiciatis obcaecati vel, deserunt sunt minus soluta",
      linkedin: "linkedin.com/in/johndoe",
    });

    setEducationalBackgrounds([
      {
        school: "California University ",
        degree: "Bachelor of Science",
        schoolCity: "Los Angeles",
        schoolCountry: "USA",
        startSchoolDate: "2015-09-01",
        endSchoolDate: "2019-06-15",
      },
    ]);

    setProfessionalExperiences({
      jobTitle: "Software Engineer",
      company: "Tech Solutions Inc.",
      position: "Frontend Developer",
      startJobDate: "2020-01-01",
      endJobDate: "2023-08-31",
      jobLocation: "Remote",
      description: "Developed and maintained web applications...",
    });
  };

  const clear = () => {
    setPersonalDetails([]);
    setEducationalBackgrounds([]);
    setProfessionalExperiences([]);
  };

  return (
    <main className="grid grid-cols-4 bg-slate-100 min-h-screen">
      {/* Sidebar with Font and Layout Selectors */}
      <div className="col-span-1 m-5 bg-white p-5">
        <div className="flex flex-col ml-5">
          <FontSelector
            selectedFont={selectedFont}
            onFontSelect={setSelectedFont}
          />
          <LayoutSelector
            selectedLayout={selectedLayout}
            onLayoutSelect={setSelectedLayout}
          />
        </div>
        <Sidebar
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
          educationalBackgrounds={educationalBackgrounds}
          setEducationalBackgrounds={setEducationalBackgrounds}
          professionalExperiences={professionalExperiences}
          setProfessionalExperiences={setProfessionalExperiences}
          sample={sample}
          clear={clear}
          showPDFPreview={showPDFPreview}
          setShowPDFPreview={setShowPDFPreview}
        />
      </div>

      {/* ContentArea or PDFViewer */}
      <div className="col-span-3 p-5 flex justify-center">
        {showPDFPreview ? (
          <PDFViewer width="100%" height="600px" style={{ border: "none" }}>
            <PDFFile
              personalDetails={personalDetails}
              educationalBackgrounds={educationalBackgrounds}
              professionalExperiences={professionalExperiences}
              selectedFont={selectedFont}
              selectedLayout={selectedLayout}
            />
          </PDFViewer>
        ) : (
          <ContentArea
            personalDetails={personalDetails}
            educationalBackgrounds={educationalBackgrounds}
            professionalExperiences={professionalExperiences}
            selectedFont={selectedFont}
            selectedLayout={selectedLayout}
          />
        )}
      </div>
    </main>
  );
}

export default App;
