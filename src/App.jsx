import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  // const [name, setName] = useState("John Doe");
  // const [email, setEmail] = useState("john@example.com");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [address, setAddress] = useState("");

  // useEffect(() => {
  //   s
  // }, [name, email, phoneNumber, address]);
  return (
    <>
      <main className="grid grid-cols-4  bg-gray-400">
        <Sidebar
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <ContentArea personalDetails={personalDetails} />
      </main>
    </>
  );
}

export default App;
