import React from "react";
import PDFFile from "./customize/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

function ContentArea({
  personalDetails,
  educationalBackground,
  professionalExperience,
  selectedFont,
  selectedLayout,
}) {
  return (
    <>
      <main
        className={`col-span-3 m-5 flex flex-col bg-white`}
        style={{ fontFamily: selectedFont }}
      >
        <PDFDownloadLink
          document={
            <PDFFile
              personalDetails={personalDetails}
              educationalBackground={educationalBackground}
              professionalExperience={professionalExperience}
              selectedFont={selectedFont}
              selectedLayout={selectedLayout}
            />
          }
          fileName="CV_Document"
          className="p-4"
        >
          {({ loading }) =>
            loading ? (
              <button>Loading document...</button>
            ) : (
              <button className="bg-black text-white p-3 rounded-md hover:bg-slate-800 focus:bg-slate-600">
                Download
              </button>
            )
          }
        </PDFDownloadLink>

        <div className="m-5  rounded-lg border-4 border-black">
          <PDFFile
            personalDetails={personalDetails}
            educationalBackground={educationalBackground}
            professionalExperience={professionalExperience}
            selectedFont={selectedFont}
            selectedLayout={selectedLayout}
          />
        </div>
      </main>
    </>
  );
}
export default ContentArea;
