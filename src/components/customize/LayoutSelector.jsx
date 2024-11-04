import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LayoutSelector = ({ selectedLayout, setSelectedLayout }) => {
  const layouts = ["Single Column", "Two Column", "Compact"];

  return (
    <div className="layout-selector mt-4">
      <label htmlFor="layouts" className="mr-2">
        Layout:
      </label>
      <Select
        id="layouts"
        value={selectedLayout}
        onValueChange={setSelectedLayout}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Select Layout" />
        </SelectTrigger>
        <SelectContent>
          {layouts.map((layout) => (
            <SelectItem key={layout} value={layout}>
              {layout}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LayoutSelector;
