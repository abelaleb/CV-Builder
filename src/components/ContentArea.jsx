import React from "react";
import PDFFile from "./customize/PDFFile";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

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
        className={" flex flex-col  bg-white"}
        style={{ fontFamily: selectedFont }}
      >
        {/* <PDFDownloadLink
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
        </PDFDownloadLink> */}

        {/* PDF Viewer Section */}
        <div className=" rounded-lg  w-[800px]">
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
