import React, { useState } from "react";

export default function PersonalDetails({
  defaultName = "John Doe",
  defaultEmail = "john@example.com",
}) {
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isShown, setIsShown] = useState(false);

  const toggleForm = () => {
    setIsShown(!isShown);
  };
  return (
    <>
      <section className="p-4">
        <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
        <button onClick={toggleForm} className="text-indigo-500 underline mb-4">
          {isShown ? "Hide Form" : "Show Form"}
        </button>
        {isShown && (
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                id="name"
                // value={name}
                // onChange={handleChange}
                className="mt-1 block w-full p-2 border-green-300 rounded-md focus:outline-none focus:border-x-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                id="email"
                // value={email}
                // onChange={toggleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                id="phone"
                // value={phone}
                // onChange={toggleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="City, Country"
                id="address"
                // value={address}
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
