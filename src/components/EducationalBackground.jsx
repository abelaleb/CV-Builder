import React, { useState } from "react";
import { Button } from "./UI/button";
function EducationalBackground({
  educationalBackgrounds,
  setEducationalBackgrounds,
  isShown,
  toggleForm,
}) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedBackgrounds = [...educationalBackgrounds];
    updatedBackgrounds[index] = {
      ...updatedBackgrounds[index],
      [name]: value,
    };
    setEducationalBackgrounds(updatedBackgrounds);
  };

  const addEducationalBackground = () => {
    setEducationalBackgrounds((prev) => [
      ...prev,
      {
        school: "",
        degree: "",
        schoolCity: "",
        schoolCountry: "",
        startSchoolDate: "",
        endSchoolDate: "",
      },
    ]);
  };

  return (
    <>
      <section className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-5">
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-2 items-center">
            <img src="/src/assets/education-icon.svg" alt="education icon" />
            <h2 className=" font-bold text-lg">Education</h2>
          </div>
          <button onClick={toggleForm} className="text-indigo-500 underline ">
            {isShown ? (
              <img
                src="/src/assets/dropdown-arrow-up.svg"
                alt="dropdown-arrow-up svg"
              />
            ) : (
              <img src="src/assets/dropdown-arrow.svg" alt="add-icon image" />
            )}
          </button>
        </div>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            isShown ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {educationalBackgrounds.map((background, index) => (
            <form key={index} className="mt-5 gap-3">
              <div className="mb-1">
                <label
                  htmlFor={`school-${index}`}
                  className="flex text-sm font-medium text-gray-700"
                >
                  School
                </label>
                <input
                  type="text"
                  name="school"
                  id={`school-${index}`}
                  value={background.school || ""}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter School / University"
                  className="capitalize mt-1 block w-full p-2 rounded-md border"
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor={`degree-${index}`}
                  className="flex text-sm font-medium text-gray-700"
                >
                  Degree
                </label>
                <input
                  type="text"
                  name="degree"
                  id={`degree-${index}`}
                  value={background.degree || ""}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter Degree / Field of Study"
                  className="capitalize mt-1 block w-full p-2 border rounded-md"
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor={`startSchoolDate-${index}`}
                  className="flex text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name="startSchoolDate"
                  id={`startSchoolDate-${index}`}
                  value={background.startSchoolDate || ""}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 block w-full p-2 rounded-md border"
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor={`endSchoolDate-${index}`}
                  className="flex text-sm font-medium text-gray-700"
                >
                  End Date
                </label>
                <input
                  type="date"
                  name="endSchoolDate"
                  id={`endSchoolDate-${index}`}
                  value={background.endSchoolDate || ""}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 block w-full p-2 rounded-md border"
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor={`schoolCity-${index}`}
                  className="flex text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="schoolCity"
                  id={`schoolCity-${index}`}
                  value={background.schoolCity || ""}
                  onChange={(e) => handleChange(index, e)}
                  className=" capitalize mt-1 block w-full p-2 rounded-md border"
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor={`schoolCountry-${index}`}
                  className="flex text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="schoolCountry"
                  id={`schoolCountry-${index}`}
                  value={background.schoolCountry || ""}
                  onChange={(e) => handleChange(index, e)}
                  className="capitalize mt-1 block w-full p-2 rounded-md border"
                />
              </div>
            </form>
          ))}
        </div>
        <div className="flex justify-between p-4 pb-0">
          <Button>Save</Button>
          <Button onClick={addEducationalBackground}>&#x2795; School</Button>
        </div>
      </section>
    </>
  );
}
export default EducationalBackground;
