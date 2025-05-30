import { Tabs, TabsList, TabsTrigger, TabsContent } from '~/components/ui/tabs';
import { CodeBlock } from '~/components/rfc/CodeBlock';

export default function InstallationPage() {
  return (
    <div className="mx-auto max-w-3xl py-12">
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
      <Tabs defaultValue="vite" className="mb-8">
        <TabsList>
          <TabsTrigger value="vite">Using Vite</TabsTrigger>
          <TabsTrigger value="postcss">Using PostCSS</TabsTrigger>
          <TabsTrigger value="cli">Tailwind CLI</TabsTrigger>
        </TabsList>
        <TabsContent value="vite">
          <div className="mb-4">
            <CodeBlock code={`npm install seat-picker`} language="bash" />
          </div>
          <div>
            <CodeBlock
              code={`import { SeatPicker } from "seat-picker";\n\nfunction App() {\n  return <SeatPicker />;\n}`}
              language="tsx"
            />
          </div>
        </TabsContent>
        <TabsContent value="postcss">
          <CodeBlock code={`npm install seat-picker postcss`} language="bash" />
        </TabsContent>
        <TabsContent value="cli">
          <CodeBlock code={`npx seat-picker-cli`} language="bash" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
