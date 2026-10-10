import { ArrowRight, MapPin, Video } from "lucide-react";
import Photo from "./Photo";
import { images } from "@/data/siteData";

const methods = ["CBT", "EMDR", "Mindfulness-based practices", "Body-oriented techniques"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div aria-hidden className="absolute -left-40 top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-mist" />
      <div className="wrap grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="frame frame-arch w-[86%]">
            <Photo src={images.office[0]} alt={images.alt.office1} width={1500} height={1125} priority sizes="(min-width: 1024px) 40vw, 85vw" pos="68% 50%" soft shape="arch" className="aspect-[4/5] w-full" />
          </div>
          <Photo src={images.office[1]} alt={images.alt.office2} width={1500} height={1125} sizes="20vw" pos="28% 55%" shape="circle" className="ring float absolute -bottom-8 right-0 aspect-square w-[38%]" />
        </div>

        <div>
          <p className="eyebrow rise">Licensed clinical psychologist</p>
          <h1 className="h-display rise rise-2 mt-6">
            Anxiety &amp; trauma therapy in <span className="script">Santa Monica</span>, CA
          </h1>
          <p className="lead rise rise-3 mt-8">
            For when life looks fine, but you don&apos;t feel fine. Dr. Maya Reynolds, PsyD helps adults in Santa Monica and throughout California work through anxiety, panic, trauma, burnout, and the pressure of always having to keep going.
          </p>
          <div className="rise rise-4 mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-solid">Schedule a Consultation <ArrowRight className="h-4 w-4" aria-hidden /></a>
            <a href="#approach" className="btn btn-line">My approach</a>
          </div>
          <ul className="rise rise-4 mt-12 flex flex-wrap gap-3" aria-label="Therapy methods">
            {methods.map((m) => (<li key={m} className="chip">{m}</li>))}
          </ul>
        </div>
      </div>
    </section>
  );
}
