import React, { useState } from "react";

export default function PersonalDetails({
  personalDetails,
  setPersonalDetails,
}) {
  const [isShown, setIsShown] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const toggleForm = () => {
    setIsShown(!isShown);
  };

  return (
    <section className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className=" font-bold text-lg mb-4">Personal Details</h2>
      <button onClick={toggleForm} className="text-indigo-500 underline mb-4">
        {isShown ? "Hide Form" : "Show Form"}
      </button>

      {isShown && (
        <form>
          <div className="grid grid-cols-2 mt-5 gap-3">
            <div>
              <label htmlFor="name" className="text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={personalDetails.name || ""}
                onChange={handleChange}
                placeholder="Enter your Name"


className="mt-1 block w-full p-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={personalDetails.email || ""}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className=" text-sm ">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={personalDetails.phoneNumber || ""}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={personalDetails.address || ""}
                onChange={handleChange}
                placeholder="City, Country"
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </form>
      )}
    </section>
  );
}
