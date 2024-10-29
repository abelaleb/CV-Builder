import React from "react";
function ContentArea({
  personalDetails,
  educationalBackground,
  professionalExperience,
}) {
  const { name, email, phoneNumber, address } = personalDetails;
  const { school, degree, city, country, startSchoolDate, endSchoolDate } =
    educationalBackground;
  const { company, position, startJobDate, endJobDate, location, description } =
    professionalExperience;

  return (
    <>
      <main className=" col-span-3 m-4 ml-0 grid grid-cols-3 bg-slate-100 ">
        <div className="col-span-1 bg-red-50 flex flex-col border-4 p-4">
          <div>
            <div> {email}</div>
            <div> {phoneNumber}</div>
            <div className="capitalize">{address}</div>
            <div>linkedin</div>
          </div>
        </div>

        <div className="col-span-2 bg-red-50 border-4 p-4">
          <div className="bg-red-800 text-white">
            <div className="capitalize">{name}</div>
            <div>summary</div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              aliquam dolores vel fuga eius nisi repellat officia facilis iusto
              voluptas ex repellendus minima nostrum sit numquam, impedit
              laboriosam iure. Doloremque!
            </div>
          </div>
          <div>
            <div className="text-2xl">Education</div>
            <div>School: {school}</div>
            <div>Degree: {degree}</div>
            <div>City: {city}</div>
            <div>Country: {country}</div>
            <div>Startdate: {startSchoolDate}</div>
            <div>EndDate: {endSchoolDate}</div>
            <div></div>
          </div>
          <div>
            <div className="text-2xl">Professional Experience</div>
            <div>Company: {company}</div>
            <div>Position: {position}</div>
            <div>Start Date: {startJobDate}</div>
            <div>End date: {endJobDate}</div>
            <div>Location: {location}</div>
            <div>Description: {description}</div>
          </div>
        </div>
      </main>
    </>
  );
}
export default ContentArea;
