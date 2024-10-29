import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [educationalBackground, setEducationalBackground] = useState({
    school: "",
    degree: "",
    city: "",
    country: "",
    startSchoolDate: "",
    endSchoolDate: "",
  });
  const [professionalExperience, setProfessionalExperience] = useState({
    jobTitle: "",
    company: "",
    position: "",
    startJobDate: "",
    endJobDate: "",
    location: "",
    description: "",
  });

  return (
    <main className="grid grid-cols-4">
      <Sidebar
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educationalBackground={educationalBackground}
        setEducationalBackground={setEducationalBackground}
        professionalExperience={professionalExperience}
        setProfessionalExperience={setProfessionalExperience}
      />
      <ContentArea
        personalDetails={personalDetails}
        educationalBackground={educationalBackground}
        professionalExperience={professionalExperience}
      />
    </main>
  );
}

export default App;
