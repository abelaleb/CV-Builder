/* eslint-disable react/prop-types */
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const FontSelector = ({ selectedFont, setSelectedFont }) => {
  const fonts = ["sans-serif", "calibri", "EBGaramond", "monospace"];

  return (
    <div
      className="layout-selector"
      style={{
        fontFamily: selectedFont,
        display: "flex",
        alignItems: "center",
      }}
    >
      <label htmlFor="font-select" className="mr-2">
        Fonts:
      </label>
      <Select  onValueChange={(value)=>setSelectedFont(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={selectedFont || "Select Font"}/>
          </SelectTrigger> 
          <SelectContent>
            {fonts.map((font)=>(
              <SelectItem key={font} value={font}>{font}</SelectItem>
            ))}
          </SelectContent>

      </Select>
    </div>
  );
};

export default FontSelector;
