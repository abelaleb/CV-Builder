import React from "react";
import PDFFile from "./customize/PDFFile";
import {  PDFDownloadLink } from "@react-pdf/renderer";

/* eslint-disable react/prop-types */

const ContentArea = (props) => {
  return (
    <main className="flex flex-col items-center p-4 w-full col-span-4">
      {props.showPDFPreview ? (
        <div className="text-center text-lg">
          <PDFDownloadLink
            document={
              <PDFFile
                personalDetails={props.personalDetails}
                selectedFont={props.selectedFont}
              />
            }
            fileName="Resume.pdf"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            {({ loading }) =>
              loading ? "Preparing document..." : "Download PDF"
            }
          </PDFDownloadLink>
        </div>
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
