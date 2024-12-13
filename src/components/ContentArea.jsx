import React from "react";
import PDFFile from "./customize/PDFFile";
import { PDFViewer } from "@react-pdf/renderer";

/* eslint-disable react/prop-types */

const ContentArea = (props) => {
  return (
    <main className="flex flex-col items-center p-4 w-full col-span-4">
      {props.showPDFPreview ? (
        <div className="text-center text-lg">
          <PDFViewer width="850px" height="600px">
            <PDFFile
              personalDetails={props.personalDetails}
              selectedFont={props.selectedFont}
              professionalExperiences={props.professionalExperienceEntries} // Changed from professionalExperienceEntries
              educationalBackground={props.educationalBackgroundEntries} // Changed from educationalBackgroundEntries
              sample={props.sample}
            />
          </PDFViewer>
        </div>
      ) : (
        <div
          className="flex flex-col bg-white p-4 rounded-lg w-full md:w-[800px]"
          style={{ fontFamily: props.selectedFont }}
        >
          <PDFFile
            personalDetails={props.personalDetails}
            selectedFont={props.selectedFont}
            professionalExperiences={props.professionalExperienceEntries} // Changed from professionalExperienceEntries
            educationalBackground={props.educationalBackgroundEntries} // Changed from educationalBackgroundEntries
            sample={props.sample}
          />
        </div>
      )}
    </main>
  );
};

export default ContentArea;
