import React, { useState } from "react";

function Experience({ professionalExperience, setProfessionalExperience }) {
  const [isShown, setIsShown] = useState(true);

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
      <section className="p-4">
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        <button onClick={toggleForm} className="text-indigo-500 underline mb-4">
          {isShown ? "Hide Form" : "Show Form"}
        </button>
        {isShown && (
          <form>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
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
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={professionalExperience.startJobDate || ""}
                onChange={handleChange}
                placeholder="mm / dd / yy"
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={professionalExperience.endJobDate}
                onChange={handleChange}
                placeholder="mm / dd / yy"
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
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
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
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
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
              />
            </div>
          </form>
        )}
      </section>
    </>
  );
}

export default Experience;
