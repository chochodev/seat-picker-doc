import React, { useState } from "react";
import { SeatPicker } from "seat-picker";
import type { CanvasObject } from "seat-picker";
import "seat-picker/dist/index.css";

const Playground: React.FC = () => {
  const [tab, setTab] = useState<"edit" | "view">("edit");
  const [layout, setLayout] = useState<CanvasObject | null>(null);

  // Handler for layout changes
  const handleLayoutChange = (json: CanvasObject) => {
    console.log("Layout changed!");
    setLayout(json);
  };

  // Handler for save action
  const handleSave = (json: CanvasObject) => {
    console.log("Save requested:", json);
    // Here you can implement your save logic
    // For example: API call, local storage, etc.
  };

  // Handler for click event
  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const json = JSON.parse(e.target?.result as string);
          setLayout(json);
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="h-screen w-full">
      {!layout ? (
        <div>
          <div
            role="button"
            tabIndex={0}
            className="mx-auto my-10 h-[12rem] max-w-3xl cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-4 text-center"
            onClick={handleClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleClick();
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();

              const file = e.dataTransfer.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  try {
                    const json = JSON.parse(e.target?.result as string);
                    setLayout(json);
                    console.log("Layout dropped: ", json);
                  } catch (err) {
                    console.error("Error parsing JSON file:", err);
                  }
                };
                reader.readAsText(file);
              }
            }}
          >
            <p className="text-gray-500">
              Drag and drop a JSON layout file here
            </p>
          </div>
        </div>
      ) : (
        <SeatPicker layout={layout} readOnly />
      )}
      {/* Tab Switcher */}
      <div className="mb-6 flex gap-2">
        <button
          className={`rounded-t-md px-4 py-2 font-semibold ${
            tab === "edit"
              ? "border-b-2 border-gray-700 bg-gray-200 text-gray-900"
              : "bg-gray-100 text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setTab("edit")}
        >
          Edit Seats
        </button>
        <button
          className={`rounded-t-md px-4 py-2 font-semibold ${
            tab === "view"
              ? "border-b-2 border-gray-700 bg-gray-200 text-gray-900"
              : "bg-gray-100 text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setTab("view")}
        >
          View & Simulate Purchase
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {tab === "edit" ? (
          <SeatPicker onChange={handleLayoutChange} onSave={handleSave} />
        ) : layout ? (
          <SeatPicker layout={layout} readOnly />
        ) : (
          <div className="text-center text-gray-500">
            Please export a layout from the editor first.
          </div>
        )}
      </div>
    </div>
  );
};

export default Playground;
