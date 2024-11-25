import React from "react";
import PDFFile from "./customize/PDFFile";
/* eslint-disable react/prop-types */

const ContentArea = (props) => {
  return (
    <main className="flex justify-center p-5 w-full col-span-3">
      {props.showPDFPreview ? (
        <div>Download your pdf </div>
      ) : (
        // Static PDF Preview or Editable Form Section
        <main
          className="flex flex-col bg-white"
          style={{ fontFamily: props.selectedFont }}
        >
          <div className="rounded-lg w-[800px]">
            <PDFFile
              personalDetails={props.personalDetails}
              // educationalBackgrounds={educationalBackgrounds}
              // saveEducationalEntries={saveEducationalEntries}
              // professionalExperiences={professionalExperiences}
              selectedFont={props.selectedFont}
            />
          </div>
        </main>
      )}
    </main>
  );
};
export default ContentArea;
