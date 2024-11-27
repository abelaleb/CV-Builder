import React from "react";
import PDFFile from "./customize/PDFFile";
/* eslint-disable react/prop-types */

const ContentArea = (props) => {
  return (
    <main className="flex flex-col items-center p-4 w-full col-span-3">
    {props.showPDFPreview ? (
      <div className="text-center text-lg">Download your PDF</div>
    ) : (
      <div
        className="flex flex-col bg-white p-4 rounded-lg w-full md:w-[800px]"
        style={{ fontFamily: props.selectedFont }}
      >
        <PDFFile
          personalDetails={props.personalDetails}
          selectedFont={props.selectedFont}
        />
      </div>
    )}
  </main>
  
  );
};
export default ContentArea;
