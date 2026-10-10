import { Check } from "lucide-react";
import Section from "./Section";

const focus = ["Safety", "Stabilization", "Emotional regulation", "Understanding patterns", "Rebuilding a sense of safety"];

export default function TraumaSection() {
  return (
    <Section className="band-calm">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="reveal">
          <p className="eyebrow">Trauma work</p>
          <h2 className="h-section mt-6">A safe place to <span className="script">begin healing</span></h2>
          <p className="mt-6">Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives, not just during sessions.</p>
        </div>
        <ul className="reveal space-y-4 self-center">
          {focus.map((f) => (
            <li key={f} className="flex items-center gap-4 rounded-2xl bg-paper/70 px-6 py-4 font-serif text-xl text-ink">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-cream"><Check className="h-4 w-4" aria-hidden /></span>{f}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
