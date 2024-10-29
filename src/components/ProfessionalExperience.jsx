import React, { useState } from "react";

function Experience({ professionalExperience, setProfessionalExperience }) {
  const [isShown, setIsShown] = useState(false);

  const toggleForm = () => {
    setIsShown(!isShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfessionalExperience((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-5">
        <div className="flex justify-between items-center gap-4">
        <h2 className=" font-bold text-lg ">Experience</h2>
        <button onClick={toggleForm} className="text-indigo-500 underline ">
          {isShown ? (
            <img
              src="/src/assets/dropdown-arrow-up.svg"
              alt="dropdown-arrow-up svg"
            />
          ) : (
            <img
            src="src/assets/dropdown-arrow.svg"
            alt="add-icon image"
          />
          )}
        </button>
      </div>
        {isShown && (
          <form>
            <div className="mt-5 gap-3">
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
                value={professionalExperience.company || ""}
                onChange={handleChange}
                placeholder="Enter Company Name"
                className="mt-1 block w-full p-2 border rounded-md "
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
                type="position"
                name="position"
                id="position"
                value={professionalExperience.position || ""}
                onChange={handleChange}
                placeholder="Enter Position Title"
                className="mt-1 block w-full p-2 border-gray-300 rounded-md border"
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
                value={professionalExperience.startJobDate || ""}
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
                value={professionalExperience.endJobDate}
                onChange={handleChange}
                placeholder="mm / dd / yy"
                className=" border mt-1 block w-full p-2 rounded-md "
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
                value={professionalExperience.location}
                onChange={handleChange}
                placeholder="Enter Location"
                className="mt-1 block w-full p-2 rounded-md border"
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
                type="description"
                name="description"
                id="description"
                value={professionalExperience.description}
                onChange={handleChange}
                placeholder="Enter Description"
                className=" border mt-1 block w-full p-2 rounded-md focus:outline-none "
              />
            </div>
            </div>
          </form>
        )}
      </section>
    </>
  );
}

export default Experience;
