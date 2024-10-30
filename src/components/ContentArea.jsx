import React from "react";
function ContentArea({
  personalDetails,
  educationalBackground,
  professionalExperience,
}) {
  const { name, email, phoneNumber, location, aboutMe, linkedin } = personalDetails;
  const {
    school,
    degree,
    schoolCity,
    schoolCountry,
    startSchoolDate,
    endSchoolDate,
  } = educationalBackground;
  const { company, position, startJobDate, endJobDate, jobLocation, description } =
    professionalExperience;

  return (
    <main className="  col-span-3 m-4 ml-0  grid-rows-4 h-screen flex justify-center self-center">
      <div className="w-a4 bg-white border-yellow-200">
        <div className="row-span-1 flex flex-col  p-4 bg-primary">
          <div className="capitalize text-2xl font-bold text-white flex justify-center items-center ">
            {name}
          </div>
          <div className="text-white flex justify-evenly mt-4">
            <div className="flex gap-2 items-center">
              <img src="src\assets\email-icon.svg" alt="email-icon" />
              {email}
            </div>
            <div className="flex gap-2 items-center">
              <img src="/src/assets/phone-icon.svg" alt="phone-icon" />
              {phoneNumber}
            </div>
            <div className="capitalize flex items-center gap-2">
              <img src="/src/assets/location-icon.svg" alt="location icon" />
              {location}
            </div>
            <div className="flex items-center gap-2">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img src="/src/assets/linkedin.svg" alt="linkedin icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="row-span-2  p-8">
          <div className="bg-primary p-4 text-white">
            <div className="text-2xl flex bg-primary text-white mb-4">About Me</div>
            <div>
              {aboutMe}
            </div>
          </div>
          <div>
            <div className="text-2xl flex justify-center bg-primary text-white mt-4">
              Education
            </div>
            <div className="grid grid-cols-3 mt-4 ">
              <div className="col-span-1">
                <div>
                  {startSchoolDate} -{endSchoolDate}
                </div>
                <div>
                  {schoolCity}, {schoolCountry}
                </div>
              </div>
              <div className="col-span-2">
                <div className="font-bold">{school}</div>
                <div>{degree}</div>
              </div>
            </div>

            <div></div>
          </div>
          <div>
            <div className="text-2xl flex justify-center bg-primary text-white mt-4">
              Professional Experience
            </div>
            <div className="grid grid-cols-3 mt-4">
              <div className="col-span-1">
                <div>
                  {startJobDate} - {endJobDate}
                </div>
                <div> {jobLocation}</div>
              </div>

              <div className="col-span-2">
                <div className="font-bold"> {company}</div>
                <div> {position}</div>
                <div> {description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default ContentArea;
