import CodeBlock from "~/components/rfc/CodeBlock";

const EventPropActionsSection = () => {
  return (
    <div className="mx-auto max-w-6xl py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-white">
        Advanced Usage
      </h1>
      <p className="mb-8 text-lg text-slate-300">
        Take Seat Picker further with advanced features and real-world
        integrations.
      </p>
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        1. Import/Export Layouts
      </h2>
      <p className="mb-4 text-slate-300">
        Save and load seat layouts as JSON for backup or sharing.
      </p>
      <CodeBlock
        code={`// Export\nconst handleExport = (layout) => {\n  const json = JSON.stringify(layout);\n  // Download or send to backend\n};\n\n// Import\nconst handleImport = (json) => {\n  const layout = JSON.parse(json);\n  // Load into SeatPicker\n};`}
        language="javascript"
        filename="import-export.js"
      />
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        2. Bulk Editing
      </h2>
      <p className="mb-4 text-slate-300">
        Edit properties for multiple selected seats at once.
      </p>
      <CodeBlock
        code={`// Use SeatPicker's built-in multi-select and bulk edit UI\n// No extra code needed!`}
        language="javascript"
        filename="bulk-edit.js"
      />
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        3. Zone Management
      </h2>
      <p className="mb-4 text-slate-300">
        Group seats into zones for pricing or sectioning.
      </p>
      <CodeBlock
        code={`<SeatPicker\n  onZoneChange={(zones) => {\n    // Handle zone updates\n  }}\n/>`}
        language="tsx"
        filename="App.tsx"
      />
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        4. Backend Integration
      </h2>
      <p className="mb-4 text-slate-300">
        Save and load layouts from your backend or database.
      </p>
      <CodeBlock
        code={`const handleSave = async (layout) => {\n  await fetch('/api/save-layout', {\n    method: 'POST',\n    body: JSON.stringify(layout),\n  });\n};`}
        language="javascript"
        filename="backend.js"
      />
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        5. Custom Seat Actions
      </h2>
      <p className="mb-4 text-slate-300">
        Handle custom actions like buy, reserve, etc.
      </p>
      <CodeBlock
        code={`<SeatPicker\n  onSeatAction={(action, seat) => {\n    if (action === 'buy') {\n      // Handle purchase\n    }\n  }}\n/>`}
        language="tsx"
        filename="App.tsx"
      />
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        6. Keyboard Shortcuts
      </h2>
      <p className="mb-4 text-slate-300">
        Use built-in shortcuts for undo, redo, delete, multi-select, and command
        palette.
      </p>
      <CodeBlock
        code={`// Ctrl+Z: Undo\n// Ctrl+Y: Redo\n// Del: Delete selected\n// Shift+Click: Multi-select\n// Ctrl+K: Open command palette`}
        language="text"
        filename="shortcuts.txt"
      />
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        7. Composing with Other UI
      </h2>
      <p className="mb-4 text-slate-300">
        Combine SeatPicker with modals, notifications, or other UI libraries.
      </p>
      <CodeBlock
        code={`<Modal open={showSeatPicker}>\n  <SeatPicker ... />\n</Modal>`}
        language="tsx"
        filename="ModalExample.tsx"
      />
    </div>
  );
};

export default EventPropActionsSection;
