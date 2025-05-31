import CodeBlock from "~/components/rfc/CodeBlock";

const UsageSection = () => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-white">
        Usage
      </h1>
      <p className="mb-8 text-lg text-slate-300">
        Seat Picker is flexible and can be used out-of-the-box or fully
        customized. Here are the most common usage scenarios:
      </p>
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        1. Basic Usage (No Customization)
      </h2>
      <p className="mb-4 text-slate-300">
        Just import and use <code>SeatPicker</code> for a fully interactive
        editor with default styles and labels.
      </p>
      <CodeBlock
        code={`import { SeatPicker } from 'seat-picker';\n\nexport default function App() {\n  return <SeatPicker />;\n}`}
        language="typescript"
        filename="App.tsx"
      />
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        2. Customizing Styles
      </h2>
      <p className="mb-4 text-slate-300">
        Override canvas, seat, and label styles using the <code>style</code>{" "}
        prop.
      </p>
      <CodeBlock
        code={`<SeatPicker\n  style={{\n    width: 1000,\n    height: 700,\n    backgroundColor: '#fffbe6',\n    seatNumberStyle: { fontSize: 16, fill: '#333' },\n    seatStyle: { fill: '#e0e7ff', stroke: '#6366f1', radius: 12 },\n  }}\n/>`}
        language="tsx"
        filename="App.tsx"
      />
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        3. Customizing Labels
      </h2>
      <p className="mb-4 text-slate-300">
        Override any button or field text for localization or branding.
      </p>
      <CodeBlock
        code={`<SeatPicker\n  labels={{\n    buyButton: 'Purchase',\n    cancelButton: 'Back',\n    seatNumber: 'No.',\n    category: 'Section',\n    price: 'Cost',\n    status: 'Availability',\n  }}\n/>`}
        language="tsx"
        filename="App.tsx"
      />
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        4. Custom Toolbar, Sidebar, or Modal
      </h2>
      <p className="mb-4 text-slate-300">
        You can fully replace the toolbar, sidebar, or seat details modal with
        your own React components.
      </p>
      <CodeBlock
        code={`<SeatPicker\n  renderToolbar={({ onSave, onBgLayout }) => (\n    <div>\n      <button onClick={onSave}>Custom Save</button>\n      <button onClick={onBgLayout}>Background</button>\n    </div>\n  )}\n  renderSidebar={() => (\n    <div>\n      <h3>Custom Sidebar</h3>\n      {/* Add your own controls or info */}\n    </div>\n  )}\n  renderSeatDetails={({ seat, onClose, onAction }) => (\n    <div>\n      <h2>Seat {seat.number}</h2>\n      <p>Price: {seat.price}</p>\n      <button onClick={() => onAction('buy', seat)}>Buy</button>\n      <button onClick={onClose}>Close</button>\n    </div>\n  )}\n/>`}
        language="tsx"
        filename="App.tsx"
      />
      <h2 className="mb-2 mt-8 text-xl font-semibold text-white">
        5. Read-Only Customer Viewer
      </h2>
      <p className="mb-4 text-slate-300">
        Show a seat map for customers to view and purchase, but not edit.
      </p>
      <CodeBlock
        code={`<SeatPicker\n  layout={seatLayoutJson}\n  readOnly\n  onSeatAction={(action, seat) => {\n    // handle buy, reserve, etc.\n  }}\n/>`}
        language="tsx"
        filename="CustomerView.tsx"
      />
    </>
  );
};

export default UsageSection;
