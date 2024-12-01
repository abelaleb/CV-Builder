import React, { useContext, useState } from "react";
import { Context } from "@/App";
import { Button } from "@/components/ui/button";
import dropdownArrowUp from "../assets/dropdown-arrow-up.svg";
import dropdownArrow from "../assets/dropdown-arrow.svg";
import educationIcon from "../assets/education-icon.svg";
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function EducationalBackground({
  isShown,
  toggleForm,
  isSample,
  clear,
}) {
  const { educationalBackgroundEntries, setEducationalBackgroundEntries } =
    useContext(Context);
  const [newEntry, setNewEntry] = useState({
    id: crypto.randomUUID(),
    school: "",
    degree: "",
    schoolCity: "",
    schoolCountry: "",
    startSchoolDate: "",
    endSchoolDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const validateEntry = (entry) => {
    return (
      entry.school.trim() !== "" &&
      entry.degree.trim() !== "" &&
      entry.startSchoolDate !== "" &&
      entry.endSchoolDate !== "" &&
      entry.schoolCity.trim() !== "" &&
      entry.schoolCountry.trim() !== ""
    );
  };

  const handleSave = () => {
    if (!validateEntry(newEntry)) {
      alert("Please fill out all required Education fields.");
      return;
    }
    setEducationalBackgroundEntries((prevEntries) => [
      ...prevEntries,
      newEntry,
    ]);
    setNewEntry({
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      schoolCity: "",
      schoolCountry: "",
      startSchoolDate: "",
      endSchoolDate: "",
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
          <img src={educationIcon} alt="education icon" />
          <h2 className="font-bold text-lg">Education</h2>
        </div>
        <button onClick={toggleForm} className="text-indigo-500 underline">
          {isShown ? (
            <img src={dropdownArrowUp} alt="dropdown-arrow-up svg" />
          ) : (
            <img src={dropdownArrow} alt="dropdown-arrow" />
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
              htmlFor="school"
              className="flex text-sm font-medium text-gray-700"
            >
              School
            </label>
            <input
              type="text"
              name="school"
              id="school"
              value={newEntry.school}
              onChange={handleChange}
              placeholder="Enter School / University"
              className="capitalize mt-1 block w-full p-2 rounded-md border"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="degree"
              className="flex text-sm font-medium text-gray-700"
            >
              Degree
            </label>
            <input
              type="text"
              name="degree"
              id="degree"
              value={newEntry.degree}
              onChange={handleChange}
              placeholder="Enter Degree / Field of Study"
              className="capitalize mt-1 block w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="startSchoolDate"
              className="flex text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              type="date"
              name="startSchoolDate"
              id="startSchoolDate"
              value={newEntry.startSchoolDate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 rounded-md border"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="endSchoolDate"
              className="flex text-sm font-medium text-gray-700"
            >
              End Date
            </label>
            <input
              type="date"
              name="endSchoolDate"
              id="endSchoolDate"
              value={newEntry.endSchoolDate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 rounded-md border"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="schoolCity"
              className="flex text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              name="schoolCity"
              id="schoolCity"
              value={newEntry.schoolCity}
              onChange={handleChange}
              className="capitalize mt-1 block w-full p-2 rounded-md border"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="schoolCountry"
              className="flex text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              name="schoolCountry"
              id="schoolCountry"
              value={newEntry.schoolCountry}
              onChange={handleChange}
              className="capitalize mt-1 block w-full p-2 rounded-md border"
            />
          </div>
          <Button
            type="button"
            onClick={handleSave}
            className="px-4 my-2 bg-blue-500 text-white rounded"
          >
            Add Education
          </Button>
        </form>
      </div>
    </section>
  );
}
