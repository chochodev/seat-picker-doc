import CodeBlock from '~/components/rfc/CodeBlock';

export default function InstallationPage() {
  return (
    <div className="mx-auto max-w-6xl py-12">
      <h2 className="mb-2 text-xs font-semibold tracking-widest text-sky-400 uppercase">
        Installation
      </h2>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-white">
        Get started with Seat Picker
      </h1>
      <p className="mb-8 text-lg text-slate-300">
        Seat Picker is a flexible, interactive seating arrangement component for
        React apps. Install it with your favorite package manager and start
        building!
      </p>

      <h3 className="mb-4 text-xl font-semibold text-white">Installation</h3>
      <div className='max-w-2xl'>
        <div className="mb-4">
          <CodeBlock
            code={`npm install seat-picker@latest`}
            language="bash"
            filename="Terminal"
          />
        </div>

        <div className="mb-4">
          <p className="text-slate-300">
            <strong>Quick Start</strong>
          </p>
        </div>

        <div>
          <CodeBlock
            code={`import { SeatPicker } from "seat-picker";\nimport "seat-picker/dist/index.css";\n\nfunction App() {\n  return <SeatPicker />;\n}`}
            language="typescript"
            filename="App.tsx"
          />
        </div>
      </div>
    </div>
  );
}
