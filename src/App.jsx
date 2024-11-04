import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import { PDFViewer } from "@react-pdf/renderer";
import PDFFile from "./components/customize/PDFFile";

function App() {
  const initialPersonalDetails = {
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    aboutMe: "",
    linkedin: "",
  };
  const initialEducationalBackground = {
    school: "",
    degree: "",
    schoolCity: "",
    schoolCountry: "",
    startSchoolDate: "",
    endSchoolDate: "",
  };
  const initialProfessionalExperience = {
    jobTitle: "",
    company: "",
    position: "",
    startJobDate: "",
    endJobDate: "",
    jobLocation: "",
    description: "",
  };
  const [personalDetails, setPersonalDetails] = useState(
    initialPersonalDetails
  );
  const [educationalBackground, setEducationalBackground] = useState(
    initialEducationalBackground
  );
  const [professionalExperience, setProfessionalExperience] = useState(
    initialProfessionalExperience
  );
  const [selectedFont, setSelectedFont] = useState("sans");
  const [selectedLayout, setSelectedLayout] = useState("Single Column");
  const [showPDFPreview, setShowPDFPreview] = useState(false);

  const sample = () => {
    setPersonalDetails({
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      location: "New York ,USA",
      aboutMe:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis blanditiis sit, velit incidunt quam sed quo autem itaque corporis cum deleniti quas aspernatur ipsam facilis necessitatibus quis nam accusamus fugiat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis blanditiis sit, velit incidunt quam sed quo autem itaque corporis cum deleniti quas aspernatur ipsam facilis necessitatibus quis nam accusamus fugiat?",
      linkedin: "linkedin.com/in/johndoe",
    });
    setEducationalBackground({
      school: "University of Example",
      degree: "Bachelor of Science",
      schoolCity: "Los Angeles",
      schoolCountry: "USA",
      startSchoolDate: "2015-09-01",
      endSchoolDate: "2019-06-15",
    });
    setProfessionalExperience({
      jobTitle: "Software Engineer",
      company: "Tech Solutions Inc.",
      position: "Frontend Developer",
      startJobDate: "2020-01-01",
      endJobDate: "2023-08-31",
      jobLocation: "Remote",
      description:
        "Developed and maintained web applications using React and JavaScript.",
    });
  };

  const clear = () => {
    setPersonalDetails(initialPersonalDetails);
    setEducationalBackground(initialEducationalBackground);
    setProfessionalExperience(initialProfessionalExperience);
  };

  return (
    <main className="grid grid-cols-4  bg-slate-100">
      <Sidebar
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educationalBackground={educationalBackground}
        setEducationalBackground={setEducationalBackground}
        professionalExperience={professionalExperience}
        setProfessionalExperience={setProfessionalExperience}
        sample={sample}
        clear={clear}
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
        selectedLayout={selectedLayout}
        setSelectedLayout={setSelectedLayout}
        showPDFPreview={showPDFPreview}
        setShowPDFPreview={setShowPDFPreview}
      />
      {showPDFPreview ? (
        <PDFViewer width="100%" height="600px" style={{ border: "none" }} className="col-span-3 p-5">
          <PDFFile
            personalDetails={personalDetails}
            educationalBackground={educationalBackground}
            professionalExperience={professionalExperience}
            selectedFont={selectedFont}
            selectedLayout={selectedLayout}
          />
        </PDFViewer>
      ) : (
        <ContentArea
          personalDetails={personalDetails}
          educationalBackground={educationalBackground}
          professionalExperience={professionalExperience}
          selectedFont={selectedFont}
          selectedLayout={selectedLayout}
        />
      )}
    </main>
  );
}

export default App;
