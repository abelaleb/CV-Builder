import React from "react";
function ContentArea({
  personalDetails,
  educationalBackground,
  professionalExperience,
}) {
  const { name, email, phoneNumber, city, country, linkedin } = personalDetails;
  const {
    school,
    degree,
    schoolCity,
    schoolCountry,
    startSchoolDate,
    endSchoolDate,
  } = educationalBackground;
  const { company, position, startJobDate, endJobDate, location, description } =
    professionalExperience;

  return (
    <main className="  col-span-3 m-4 ml-0  grid-rows-4 h-screen flex justify-center self-center">
      <div className="w-a4 bg-white border-yellow-200">
        <div className="row-span-1 flex flex-col  p-4 bg-primary">
          <div className="capitalize text-2xl font-bold text-white flex justify-center">
            {name}
          </div>
          <div className="text-white flex justify-evenly">
            <div> {email}</div>
            <div> {phoneNumber}</div>
            <div className="capitalize">
              {city}, {country}
            </div>
            <div>{linkedin}</div>
          </div>
        </div>

        <div className="row-span-2  p-8">
          <div className="bg-primary p-4 text-white">
            <div>summary</div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              aliquam dolores vel fuga eius nisi repellat officia facilis iusto
              voluptas ex repellendus minima nostrum sit numquam, impedit
              laboriosam iure. Doloremque!
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
                <div> {location}</div>
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
