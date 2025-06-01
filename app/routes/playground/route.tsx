import React from "react";
import { SeatPicker } from "seat-picker";
import type { CanvasObject } from "seat-picker";
import "seat-picker/dist/index.css";

const Playground: React.FC = () => {
  // Handler for layout changes
  const handleLayoutChange = () => {
    console.log("Layout changed!");
  };

  // Handler for save action
  const handleSave = (json: CanvasObject) => {
    console.log("Save requested:", json);
    // Here you can implement your save logic
    // For example: API call, local storage, etc.
  };

  return (
    <div className="h-screen w-full text-black">
      <SeatPicker onChange={handleLayoutChange} onSave={handleSave} />
    </div>
  );
};

export default Playground;
