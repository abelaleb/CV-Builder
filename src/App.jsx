import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";

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
  const sample = () => {
    setPersonalDetails({
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      location: "New York ,USA",
      aboutMe:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nostrum illo in commodi beatae rerum, inventore consequatur porro laborum ipsum quidem, qui tempore ab quibusdam quo? Sint eligendi optio adipisci.",
      linkedin: "linkedin.com/in/johndoe",
    });
    setEducationalBackground({
      school: "University of Example",
      degree: "Bachelor of Science",
      schoolCity: "Example City",
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
