import React, { useState } from "react";

export default function PersonalDetails({ personalDetails, setPersonalDetails }) {
  const [isShown, setIsShown] = useState(false);

  const toggleForm = () => {
    setIsShown(!isShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <section className="p-4">
      <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
      <button onClick={toggleForm} className="text-indigo-500 underline mb-4">
        {isShown ? "Hide Form" : "Show Form"}
      </button>

      {isShown && (
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={personalDetails.name || ""}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
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

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
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
        </form>
      )}
    </section>
  );
}
