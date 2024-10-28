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

  return (
    <main className="grid grid-cols-4 bg-gray-400">
      <Sidebar
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <ContentArea personalDetails={personalDetails} />
    </main>
  );
}

export default App;
