import React from "react";
export default function ContentArea(
  { personalDetails },
  { educationalDetails }
) {
  const { name, email, phoneNumber, address } = personalDetails;
  

  return (
    <>
      <main className="bg-green-300 col-span-3 m-4 p-4 text-center ">
        <div className="">Resume builder</div>
        <div>
          <div className="text-2xl font-bold m-4">Personal Details</div>
          <div>Name: {name}</div>
          <div>
            <div>email: {email}</div>
            <div>Phone Number: {phoneNumber}</div>
            <div>Address: {address}</div>
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold mb-4">Education</div>
          <div>
            <div>School</div>
            <div>Degree</div>
            <div>City</div>
            <div>Country</div>
            <div>Startdate</div>
            <div>EndDate</div>
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold mb-4">Professional Experience</div>
          <div>jobTitle</div>
          <div>Company</div>
          <div>Position</div>
          <div>Start Date</div>
          <div>End date</div>
          <div>Location</div>
          <div>Description</div>
        </div>
      </main>
    </>
  );
}
