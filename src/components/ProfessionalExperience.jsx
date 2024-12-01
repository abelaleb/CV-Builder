import React, { useState, useContext } from "react";
import { Context } from "@/App";
import { Button } from "@/components/ui/button";
import dropdownArrowUp from "../assets/dropdown-arrow-up.svg";
import dropdownArrow from "../assets/dropdown-arrow.svg";
import briefcaseIcon from "../assets/briefcase-icon.svg";
/* eslint-disable no-unused-vars */
function professionalExperience({ isShown, toggleForm, isSample, clear }) {
  const { professionalExperienceEntries, setProfessionalExperienceEntries } =
    useContext(Context);
  const [newEntry, setNewEntry] = useState({
    id: crypto.randomUUID(),
    company: "",
    position: "",
    startJobDate: "",
    endJobDate: "",
    jobLocation: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
    handleEdit();
  };

  const validateEntry = (entry) => {
    return (
      entry.position.trim() !== "" &&
      entry.company.trim() !== "" &&
      entry.startJobDate !== "" &&
      entry.endJobDate !== "" &&
      entry.jobLocation.trim() !== "" &&
      entry.description.trim() !== ""
    );
  };

  const handleSave = () => {
    if (!validateEntry(newEntry)) {
      alert("Please fill out all required Experience fields.");
      return;
    }
    setProfessionalExperienceEntries((prevEntries) => [
      ...prevEntries,
      newEntry,
    ]);
    setNewEntry({
      id: crypto.randomUUID(),
      company: "",
      position: "",
      startJobDate: "",
      endJobDate: "",
      jobLocation: "",
      description: "",
    });
  };

  const handleEdit = () => {
    if (isSample) {
      clear();
    }
  };

  return (
    <section className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-5">
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-2 items-center">
          <img src={briefcaseIcon} alt="briefcase icon" />
          <h2 className=" font-bold text-lg ">Experience</h2>
        </div>
        <button onClick={toggleForm} className="text-indigo-500 underline ">
          {isShown ? (
            <img
              src={dropdownArrowUp}
              alt="dropdown-arrow-up svg"
            />
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
        <form className="mt-5 gap-3">
          <div className="mb-1">
            <label
              htmlFor="company"
              className="text-sm flex font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={newEntry.company}
              onChange={handleChange}
              placeholder="Enter Company Name"
              className=" capitalize mt-1 block w-full p-2 border rounded-md "
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="position"
              className="flex text-sm font-medium text-gray-700"
            >
              Position Title
            </label>
            <input
              type="text"
              name="position"
              id="position"
              value={newEntry.position}
              onChange={handleChange}
              placeholder="Enter Position Title"
              className=" capitalize mt-1 block w-full p-2 border-gray-300 rounded-md border"
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="startJobDate"
              className="flex text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              type="date"
              name="startJobDate"
              id="startJobDate"
              value={newEntry.startJobDate}
              onChange={handleChange}
              placeholder="mm / dd / yy"
              className="border mt-1 block w-full p-2 rounded-md "
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="endJobDate"
              className="flex text-sm font-medium text-gray-700"
            >
              End Date
            </label>
            <input
              type="date"
              name="endJobDate"
              id="endJobDate"
              value={newEntry.endJobDate}
              onChange={handleChange}
              placeholder="mm / dd / yy"
              className=" border mt-1 block w-full p-2 rounded-md "
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="jobLocation"
              className="flex text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              name="jobLocation"
              id="jobLocation"
              value={newEntry.jobLocation}
              onChange={handleChange}
              placeholder="Enter Location"
              className="capitalize mt-1 block w-full p-2 rounded-md border"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="flex text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={newEntry.description}
              onChange={handleChange}
              placeholder="Enter Description"
              className="capitalize border mt-1 block w-full p-2 rounded-md focus:outline-none "
            />
          </div>
          <Button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Experience
          </Button>
        </form>
      </div>
    </section>
  );
}

export default professionalExperience;
