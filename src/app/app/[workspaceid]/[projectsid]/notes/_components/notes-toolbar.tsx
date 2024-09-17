import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const NotesToolbar: React.FC = () => {
  return (
    <div className="h-10 border-b-[1px] ">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          B
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          I
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          U
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
export default NotesToolbar;
