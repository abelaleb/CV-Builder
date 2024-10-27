import React, { useState } from "react";

export default function Experience() {
  const [experienceData, setExperienceData] = useState({
    jobTitle: "",
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  const [isShown, setIsShown] = useState(false);

  const toggleForm = () => {
    setIsShown(!isShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevData) => ({
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
                placeholder="Enter Company Name"
                id="company"
                // value={company}
                // onChange={handleChange}
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
                placeholder="Enter Position Title"
                id="position"
                // value={email}
                // onChange={toggleChange}
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
                type="text"
                name="startDate"
                placeholder="mm / dd / yy"
                id="startDate"
                // value={startDate}
                // onChange={handleChange}
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
                type="text"
                name="endDate"
                placeholder="mm / dd / yy"
                id="endDate"
                // value={endDate}
                // onChange={handleChange}
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
                placeholder="Enter Location"
                id="location"
                // value={endDate}
                // onChange={handleChange}
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
                placeholder="Enter Description"
                id="description"
                // value={endDate}
                // onChange={handleChange}
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
              />
            </div>
          </form>
        )}
      </section>
    </>
  );
}
