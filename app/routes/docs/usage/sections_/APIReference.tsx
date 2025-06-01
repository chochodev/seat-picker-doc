import CodeBlock from "~/components/rfc/CodeBlock";

export default function APIReferencePage() {
  return (
    <div className="mx-auto max-w-6xl py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-white">
        API Reference
      </h1>
      <p className="mb-8 text-lg text-slate-300">
        All available props for <code>SeatPicker</code> and how to use them.
      </p>
      <table className="mb-8 w-full overflow-x-auto rounded-lg border border-slate-700 text-sm text-slate-300">
        <thead className="bg-slate-800 text-slate-200">
          <tr>
            <th className="p-2 text-left">Prop</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Default</th>
            <th className="p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">width</td>
            <td className="p-2">number</td>
            <td className="p-2">800</td>
            <td className="p-2">Canvas width in pixels</td>
          </tr>
          <tr>
            <td className="p-2">height</td>
            <td className="p-2">number</td>
            <td className="p-2">600</td>
            <td className="p-2">Canvas height in pixels</td>
          </tr>
          <tr>
            <td className="p-2">layout</td>
            <td className="p-2">object</td>
            <td className="p-2">—</td>
            <td className="p-2">
              (Optional) Layout JSON to load (for editing an existing layout)
            </td>
          </tr>
          <tr>
            <td className="p-2">onChange</td>
            <td className="p-2">(layout: object) =&gt; void</td>
            <td className="p-2">—</td>
            <td className="p-2">
              Callback when the layout changes (add, move, edit, delete, etc.)
            </td>
          </tr>
          <tr>
            <td className="p-2">onSave</td>
            <td className="p-2">(layout: object) =&gt; void</td>
            <td className="p-2">—</td>
            <td className="p-2">
              Callback when the user clicks the Save button
            </td>
          </tr>
          <tr>
            <td className="p-2">onZoneChange</td>
            <td className="p-2">(zones: Zone[]) =&gt; void</td>
            <td className="p-2">—</td>
            <td className="p-2">Callback when zones change</td>
          </tr>
          <tr>
            <td className="p-2">className</td>
            <td className="p-2">string</td>
            <td className="p-2">—</td>
            <td className="p-2">
              Additional CSS class name for the root container
            </td>
          </tr>
          <tr>
            <td className="p-2">style</td>
            <td className="p-2">object</td>
            <td className="p-2">—</td>
            <td className="p-2">Additional inline styles or style overrides</td>
          </tr>
          <tr>
            <td className="p-2">labels</td>
            <td className="p-2">object</td>
            <td className="p-2">—</td>
            <td className="p-2">Override default button/label text</td>
          </tr>
          <tr>
            <td className="p-2">readOnly</td>
            <td className="p-2">boolean</td>
            <td className="p-2">false</td>
            <td className="p-2">
              If true, disables all editing and only allows viewing
            </td>
          </tr>
          <tr>
            <td className="p-2">renderToolbar</td>
            <td className="p-2">(props) =&gt; ReactNode</td>
            <td className="p-2">—</td>
            <td className="p-2">Custom render function for the toolbar</td>
          </tr>
          <tr>
            <td className="p-2">renderSidebar</td>
            <td className="p-2">() =&gt; ReactNode</td>
            <td className="p-2">—</td>
            <td className="p-2">Custom render function for the sidebar</td>
          </tr>
          <tr>
            <td className="p-2">renderSeatDetails</td>
            <td className="p-2">
              {"({(seat, onClose, onAction)})"} =&gt; ReactNode
            </td>
            <td className="p-2">—</td>
            <td className="p-2">
              Custom render function for the seat details modal
            </td>
          </tr>
          <tr>
            <td className="p-2">onSeatClick</td>
            <td className="p-2">(seat: SeatData) =&gt; void</td>
            <td className="p-2">—</td>
            <td className="p-2">
              Callback when a seat is clicked (read-only mode)
            </td>
          </tr>
          <tr>
            <td className="p-2">onSeatAction</td>
            <td className="p-2">(action: string, seat: SeatData) =&gt; void</td>
            <td className="p-2">—</td>
            <td className="p-2">
              Callback for seat actions (e.g., buy, reserve)
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="mb-2 text-xl font-semibold text-white">
        Advanced Prop Usage
      </h2>
      <CodeBlock
        code={`<SeatPicker\n  renderToolbar={({ onSave }) => (\n    <button onClick={onSave}>Save</button>\n  )}\n  onSeatAction={(action, seat) => {\n    if (action === 'buy') {\n      // handle buy\n    }\n  }}\n/>`}
        language="tsx"
        filename="App.tsx"
      />
    </div>
  );
}
