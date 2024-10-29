import React from "react";
function ContentArea({
  personalDetails,
  educationalBackground,
  professionalExperience,
}) {
  const { name, email, phoneNumber, city, country, linkedin } = personalDetails;
  const { school, degree, schoolCity, schoolCountry, startSchoolDate, endSchoolDate } =
    educationalBackground;
  const { company, position, startJobDate, endJobDate, location, description } =
    professionalExperience;

  return (
    <main className="  col-span-3 m-4 ml-0  grid-rows-4 h-screen flex justify-center self-center">
      <div className="w-a4 bg-white">
        <div className="row-span-1 flex flex-col border-4 p-4 bg-primary">
        <div className="capitalize text-2xl font-bold text-white flex justify-center">{name}</div>
          <div className="text-white flex justify-evenly">
            <div> {email}</div>
            <div> {phoneNumber}</div>
            <div className="capitalize">{city}</div>
            <div className="capitalize">{country}</div>
            <div >{linkedin}</div>
          </div>
        </div>

        <div className="row-span-2 border-4 p-4">
          <div className="bg-red-800 text-white">
            
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
            <div>City: {schoolCity}</div>
            <div>Country: {schoolCountry}</div>
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
      </div>
    </main>
  );
}
export default ContentArea;
