import APIReferenceSection from "./sections_/APIReference";
import CustomerViewerSection from './sections_/CustomerViewer';
import EventPropActionsSection from "./sections_/EventPropActions";
import UsageSection from "./sections_/Usage";

export default function UsagePage() {
  return (
    <div className="mx-auto max-w-6xl py-12">
      <section id="usage">
        <UsageSection />
      </section>
      
      {/* Horizontal Rule */}
      <hr className="my-12 mb-0 h-[1px] w-full bg-slate-700" />

      <section id="event-prop-actions">
        <EventPropActionsSection />
      </section>

      {/* Horizontal Rule */}
      <hr className="my-12 mb-0 h-[1px] w-full bg-slate-700" />

      <section id="customer-viewer">
        <CustomerViewerSection />
      </section>
      
      {/* Horizontal Rule */}
      <hr className="my-12 mb-0 h-[1px] w-full bg-slate-700" />

      <section id="api-reference">
        <APIReferenceSection />
      </section>
    </div>
  );
}
