import Section from "./Section";
import { methods } from "@/data/siteData";

export default function Approach() {
  return (
    <Section id="approach">
      <div className="reveal max-w-3xl">
        <p className="eyebrow">Approach</p>
        <h2 className="h-section mt-6">Therapy that makes space for the <span className="script">whole you</span></h2>
        <p className="lead mt-6">I integrate evidence-based methods to help you understand both the emotional and physiological sides of what you are experiencing, combining practical tools with depth-oriented work.</p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {methods.map(({ icon: Icon, title, description }) => (
          <div key={title} className="card reveal">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary"><Icon className="h-6 w-6" aria-hidden /></span>
            <h3 className="mt-6 text-2xl">{title}</h3>
            <p className="mt-3 text-[.95rem]">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
