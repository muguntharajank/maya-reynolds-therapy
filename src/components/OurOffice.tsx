import { MapPin } from "lucide-react";
import Section from "./Section";
import Photo from "./Photo";
import { images, officeTraits, site } from "@/data/siteData";

export default function OurOffice() {
  return (
    <Section id="office">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="eyebrow">Our office</p>
        <h2 className="h-section mt-6">Our <span className="script">office</span> in Santa Monica</h2>
        <p className="mt-6">My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.</p>
      </div>

      {/* two equal arches */}
      <div className="mx-auto mt-16 grid max-w-4xl gap-10 md:grid-cols-2 md:gap-14">
        <div className="frame frame-arch">
          <Photo src={images.office[0]} alt={images.alt.office1} width={1500} height={1125} sizes="(min-width: 768px) 40vw, 90vw" pos="72% 50%" soft shape="arch" className="aspect-[5/6] w-full" />
        </div>
        <div className="frame frame-arch">
          <Photo src={images.office[1]} alt={images.alt.office2} width={1500} height={1125} sizes="(min-width: 768px) 40vw, 90vw" pos="30% 50%" soft shape="arch" className="aspect-[5/6] w-full" />
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-4xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <ul className="flex flex-wrap gap-3" aria-label="Office qualities">
          {officeTraits.map((t) => (<li key={t} className="chip">{t}</li>))}
        </ul>
        <address className="card not-italic">
          <p className="flex items-start gap-3 text-ink"><MapPin className="mt-1.5 h-5 w-5 shrink-0 text-accent-deep" aria-hidden /><span>{site.street}<br />{site.city}</span></p>
          <p className="mt-1 pl-8 text-sm">In-person therapy in Santa Monica</p>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line mt-5">Get directions</a>
        </address>
      </div>
    </Section>
  );
}
