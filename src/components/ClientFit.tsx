import Section from "./Section";
import { clientFit } from "@/data/siteData";

export default function ClientFit() {
  return (
    <Section>
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="eyebrow">Who I work with</p>
        <h2 className="h-section mt-6">If you recognize yourself here, <span className="script">you are welcome</span></h2>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {clientFit.map((c) => (<li key={c} className="chip">{c}</li>))}
        </ul>
      </div>
    </Section>
  );
}
