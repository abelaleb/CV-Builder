import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PDFFile from "./customize/PDFFile";

const ContentArea = ({
  personalDetails,
  educationalBackgrounds,
  saveEducationalEntries,
  professionalExperiences,
  selectedFont,
  showPDFPreview,
}) => {
  return (
    <div className="flex justify-center p-5 w-full col-span-3">
      {showPDFPreview ? (
        // PDF Viewer Component
        <PDFViewer width="100%" height="600px" style={{ border: "none" }}>
          <PDFFile
            personalDetails={personalDetails}
            educationalBackgrounds={educationalBackgrounds}
            saveEducationalEntries={saveEducationalEntries}
            professionalExperiences={professionalExperiences}
            selectedFont={selectedFont}
          />
        </PDFViewer>
      ) : (
        // Static PDF Preview or Editable Form Section
        <main className="flex flex-col bg-white" style={{ fontFamily: selectedFont }}>
          <div className="rounded-lg w-[800px]">
            <PDFFile
              personalDetails={personalDetails}
              educationalBackgrounds={educationalBackgrounds}
              saveEducationalEntries={saveEducationalEntries}
              professionalExperiences={professionalExperiences}
              selectedFont={selectedFont}
            />
          </div>
        </main>
      )}
    </div>
  );
};

export default ContentArea;
