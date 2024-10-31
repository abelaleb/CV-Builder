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
    <>
      <div className="font-selector ">
        <Select value={selectedFont} onValueChange={setSelectedFont} >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Fonts" />
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
    </>
  );
};
export default FontSelector;
