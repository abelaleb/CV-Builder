import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
/* eslint-disable react/prop-types */

const FontSelector = ({ selectedFont, setSelectedFont }) => {
  const fonts = ["sans-serif", "calibri", "EBGaramond", "monospace"];
  return (
    <div className="layout-selector" style={{ fontFamily: selectedFont }}>
      <label htmlFor="font-select" className="mr-2">
        Fonts:
      </label>
      <Select
        id="font-select"
        value={selectedFont}
        onValueChange={setSelectedFont}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Font" />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((font) => (
            <SelectItem key={font} value={font}>
              {font}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};


export default FontSelector;
