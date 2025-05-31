import CodeBlock from "~/components/rfc/CodeBlock";

export default function CustomerViewerPage() {
  return (
    <div className="mx-auto max-w-6xl py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-white">
        Customer Viewer
      </h1>
      <p className="mb-8 text-lg text-slate-300">
        Show a seat map for customers to view and purchase, but not edit. Upload
        a layout, show seat details, and handle purchase actions.
      </p>
      <h2 className="mb-2 text-xl font-semibold text-white">
        Read-Only Viewer Example
      </h2>
      <CodeBlock
        code={`import { SeatPicker } from 'seat-picker';\n\nfunction CustomerView() {\n  const [layout, setLayout] = useState(null);\n\n  const handleSeatAction = (action, seat) => {\n    // Implement your buy functionality here\n  };\n\n  return (\n    <div>\n      {/* Upload area for layout JSON */}\n      <input type='file' accept='.json' onChange={e => {\n        // Load file and setLayout\n      }} />\n      {layout ? (\n        <SeatPicker\n          layout={layout}\n          readOnly\n          onSeatAction={handleSeatAction}\n        />\n      ) : (\n        <div>Please upload a seat layout file</div>\n      )}\n    </div>\n  );\n}`}
        language="tsx"
        filename="CustomerView.tsx"
      />
    </div>
  );
}
