import Section from "./Section";
import { therapyOptions } from "@/data/siteData";

export default function TherapyOptions() {
  return (
    <Section className="band-mist">
      <h2 className="h-section reveal text-center">Meet in person or <span className="script">online</span></h2>
      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {therapyOptions.map(({ icon: Icon, title, description }) => (
          <div key={title} className="card reveal">
            <Icon className="h-8 w-8 text-primary" aria-hidden />
            <h3 className="mt-5 text-2xl">{title}</h3>
            <p className="mt-3">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
