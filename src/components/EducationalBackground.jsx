import React, { useState } from "react";

function EducationalBackground({
  educationalBackground,
  setEducationalBackground,
}) {
  const [isShown, setIsShown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationalBackground((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleForm = () => {
    setIsShown((prevShown) => !prevShown);
  };

  return (
    <>
      <section className="p-4">
        <h3 className="text-xl font-semibold mb-4">Education</h3>
        <button onClick={toggleForm} className="text-indigo-500 underline mb-4">
          {isShown ? "Hide Form" : "Show Form"}
        </button>
        {isShown && (
          <form>
            <div className="mb-4">
              <label
                htmlFor="school"
                className="block text-sm font-medium text-gray-700"
              >
                School
              </label>
              <input
                type="text"
                name="school"
                id="school"
                value={educationalBackground.school || ""}
                onChange={handleChange}
                placeholder="Enter School / University"
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="degree"
                className="block text-sm font-medium text-gray-700"
              >
                Degree
              </label>
              <input
                type="text"
                name="degree"
                id="degree"
                value={educationalBackground.degree || ""}
                onChange={handleChange}
                placeholder="Enter Degree / Field of Study"
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={educationalBackground.city || ""}
                onChange={handleChange}
                placeholder="Enter City"
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={educationalBackground.country || ""}
                onChange={handleChange}
                placeholder="Enter Country"
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
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
                value={educationalBackground.startDate || ""}
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
                value={educationalBackground.endDate || ""}
                onChange={handleChange}
                placeholder="mm / dd / yy"
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
              />
            </div>
          </form>
        )}
      </section>
    </>
  );
}
export default EducationalBackground;
