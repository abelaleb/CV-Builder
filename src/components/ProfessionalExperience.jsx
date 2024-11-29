import React, { useContext } from "react";
import { Context } from "@/App";

function professionalExperience({ isShown, toggleForm }) {
  const { professionalExperienceEntries, setProfessionalExperienceEntries } =
    useContext(Context);
  const handleChange = (index, e) => {
    const { name, value } = e.target;

    const updatedExperiences = [...professionalExperienceEntries];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [name]: value,
    };
    setProfessionalExperienceEntries(updatedExperiences);
  };
 

  return (
    <>
      <section className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-5">
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-2 items-center">
            <img src="/src/assets/briefcase-icon.svg" alt="briefcase icon" />
            <h2 className=" font-bold text-lg ">Experience</h2>
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
          {professionalExperienceEntries.map((experience, index) => (
            <form key={index}>
              <div className="mt-5 gap-3">
                <div className="mb-1">
                  <label
                    htmlFor={`company-${index}`}
                    className="text-sm flex font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    id={`company-${index}`}
                    value={experience.company || ""}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter Company Name"
                    className=" capitalize mt-1 block w-full p-2 border rounded-md "
                  />
                </div>

                <div className="mb-1">
                  <label
                    htmlFor={`position-${index}`}
                    className="flex text-sm font-medium text-gray-700"
                  >
                    Position Title
                  </label>
                  <input
                    type="position"
                    name="position"
                    id={`position-${index}`}
                    value={experience.position || ""}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter Position Title"
                    className=" capitalize mt-1 block w-full p-2 border-gray-300 rounded-md border"
                  />
                </div>

                <div className="mb-1">
                  <label
                    htmlFor={`startJobDate-${index}`}
                    className="flex text-sm font-medium text-gray-700"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startJobDate"
                    id={`startJobDate-${index}`}
                    value={experience.startJobDate || ""}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="mm / dd / yy"
                    className="border mt-1 block w-full p-2 rounded-md "
                  />
                </div>

                <div className="mb-1">
                  <label
                    htmlFor={`endJobDate-${index}`}
                    className="flex text-sm font-medium text-gray-700"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endJobDate"
                    id={`endJobDate-${index}`}
                    value={experience.endJobDate}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="mm / dd / yy"
                    className=" border mt-1 block w-full p-2 rounded-md "
                  />
                </div>

                <div className="mb-1">
                  <label
                    htmlFor={`jobLocation-${index}`}
                    className="flex text-sm font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="jobLocation"
                    id={`jobLocation-${index}`}
                    value={experience.jobLocation}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter Location"
                    className="capitalize mt-1 block w-full p-2 rounded-md border"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor={`description-${index}`}
                    className="flex text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    type="description"
                    name="description"
                    id={`description-${index}`}
                    value={experience.description}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter Description"
                    className="capitalize border mt-1 block w-full p-2 rounded-md focus:outline-none "
                  />
                </div>
              </div>
            </form>
          ))}
        </div>
      </section>
    </>
  );
}

export default professionalExperience;
