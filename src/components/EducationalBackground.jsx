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
      <section className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-5">
        <div className="flex justify-between items-center gap-4">
          <h2 className=" font-bold text-lg">Education</h2>
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
        {isShown && (
          <form>
            <div className=" mt-5 gap-3">
              <div className="mb-1">
                <label
                  htmlFor="school"
                  className=" flex text-sm font-medium text-gray-700"
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
                  value={educationalBackground.degree || ""}
                  onChange={handleChange}
                  placeholder="Enter Degree / Field of Study"
                  className="capitalize mt-1 block w-full p-2 border rounded-md "
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
                  value={educationalBackground.schoolCity || ""}
                  onChange={handleChange}
                  placeholder="Enter City"
                  className=" capitalize mt-1 block w-full p-2 border rounded-md "
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor="schoolCountry"
                  className=" flex text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="schoolCountry"
                  id="schoolCountry"
                  value={educationalBackground.schoolCountry || ""}
                  onChange={handleChange}
                  placeholder="Enter Country"
                  className="capitalize mt-1 block w-full p-2 rounded-md border"
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
                  value={educationalBackground.startSchoolDate || ""}
                  onChange={handleChange}
                  placeholder="mm / dd / yy"
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
                  value={educationalBackground.endSchoolDate || ""}
                  onChange={handleChange}
                  placeholder="mm / dd / yy"
                  className="mt-1 block w-full p-2 rounded-md border"
                />
              </div>
            </div>
          </form>
        )}
      </section>
    </>
  );
}
export default EducationalBackground;
