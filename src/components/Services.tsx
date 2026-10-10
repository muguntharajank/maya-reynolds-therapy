import { ArrowRight } from "lucide-react";
import Section from "./Section";
import Photo from "./Photo";
import { images, services } from "@/data/siteData";

// each card gets its own circular crop of the real photos
const crops = [
  { src: images.office[0], pos: "22% 45%" },
  { src: images.office[1], pos: "22% 50%" },
  { src: images.office[0], pos: "92% 85%" },
];

export default function Services() {
  return (
    <Section id="services">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="eyebrow">Specialties</p>
        <h2 className="h-section mt-6">Santa Monica therapy <span className="script">specialties</span></h2>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {services.map(({ title, description }, i) => (
          <article key={title} className="card reveal flex flex-col">
            <h3 className="text-2xl">{title}</h3>
            <p className="mt-4 flex-1">{description}</p>
            <Photo src={crops[i].src} alt="" width={1500} height={1125} sizes="(min-width: 768px) 25vw, 70vw" pos={crops[i].pos} shape="circle" soft className="mx-auto mt-8 aspect-square w-3/5" />
            <a href="#approach" className="link-arrow mt-8 self-start">Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden /><span className="sr-only"> about {title}</span></a>
          </article>
        ))}
      </div>
    </Section>
  );
}
