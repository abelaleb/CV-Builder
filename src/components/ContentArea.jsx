import React from "react";
function ContentArea({
  personalDetails,
  educationalBackground,
  professionalExperience,
}) {
  const { name, email, phoneNumber, address } = personalDetails;
  const { school, degree, city, country, startSchoolDate, endSchoolDate } =
    educationalBackground;
  const {
    company,
    position,
    startJobDate,
    endJobDate,
    location,
    description,
  } = professionalExperience;
  
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
            <div>School: {school}</div>
            <div>Degree:{degree}</div>
            <div>City:{city}</div>
            <div>Country:{country}</div>
            <div>Startdate:{startSchoolDate}</div>
            <div>EndDate:{endSchoolDate}</div>
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold mb-4">Professional Experience</div>
          <div>Company:{company}</div>
          <div>Position:{position}</div>
          <div>Start Date:{startJobDate}</div>
          <div>End date:{endJobDate}</div>
          <div>Location:{location}</div>
          <div>Description:{description}</div>
        </div>
      </main>
    </>
  );
}
export default ContentArea;
