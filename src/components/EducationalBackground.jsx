import React, { useState } from "react";

export default function EducationalBackground() {
  const [educationalFormData, setEducationalFormData] = useState({
    school: "",
    degree: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
  });
  const [isShown, setIsShown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationalFormData((prevData) => ({
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
                placeholder="Enter School / University"
                id="school"
                // value={degree}
                // onChange={handleChange}
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
                placeholder="Enter Degree / Field of Study"
                id="degree"
                // value={degree}
                // onChange={handleChange}
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
                placeholder="Enter City"
                id="city"
                // value={city}
                // onChange={handleChange}
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
                placeholder="Enter Country"
                id="country"
                // value={startDate}
                // onChange={handleChange}
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
          </form>
        )}
      </section>
    </>
  );
}
