import React from "react";
import dropdownArrowUp from "../assets/dropdown-arrow-up.svg";
import dropdownArrow from "../assets/dropdown-arrow.svg";
import userIcon from "../assets/user-icon.svg";
/* eslint-disable react/prop-types */

export default function PersonalDetails({
  personalDetails,
  setPersonalDetails,
  isShown,
  toggleForm,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <section className="p-5 shadow-lg rounded-lg border-t-primary border-t-4">
      <div onClick={toggleForm} className="flex justify-between items-center gap-4 cursor-pointer">
        <div className="flex gap-2 items-center">
          <img src={userIcon} alt="user icon" />
          <h2 className=" font-bold text-lg ">Personal Details</h2>
        </div>
        <button
        //  onClick={toggleForm}
         className=" underline duration-500">
          {isShown ? (
            <img src={dropdownArrowUp} alt="dropdown-arrow-up svg" />
          ) : (
            <img src={dropdownArrow} alt="dropdown-arrow svg" />
          )}
        </button>
      </div>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          isShown ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form>
          <div className=" mt-5 gap-3 ">
            <div className="mb-1">
              <label
                htmlFor="name"
                className="text-sm flex font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={personalDetails.name || ""}
                onChange={handleChange}
                placeholder="Enter your Name"
                className=" border capitalize mt-1 block w-full p-2 border-gray-300 rounded-md 
                "
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="email"
                className="flex text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={personalDetails.email || ""}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="border mt-1 block w-full p-2 border-gray-300 rounded-md 
                "
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="phoneNumber"
                className="text-sm flex font-medium text-gray-700 "
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={personalDetails.phoneNumber || ""}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className=" border mt-1 block w-full p-2 border-gray-300 rounded-md 
                "
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="location"
                className="flex text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={personalDetails.location || ""}
                onChange={handleChange}
                placeholder="Enter City, Country"
                className=" capitalize mt-1 block w-full p-2 border rounded-md "
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="aboutMe"
                className=" flex text-sm font-medium text-gray-700"
              >
                About Me
              </label>
              <input
                type=""
                name="aboutMe"
                id="aboutMe"
                value={personalDetails.aboutMe || ""}
                onChange={handleChange}
                placeholder="About me"
                className=" mt-1 block w-full p-2 rounded-md border"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="linkedin"
                className=" flex text-sm font-medium text-gray-700"
              >
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                id="linkedin"
                value={personalDetails.linkedin || ""}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/username"
                className="capitalize mt-1 block w-full p-2 rounded-md border"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
