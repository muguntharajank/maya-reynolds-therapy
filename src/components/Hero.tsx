import Image from "next/image";
import { ArrowRight, MapPin, Video } from "lucide-react";
import Photo from "./Photo";
import { images } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="pb-16 pt-24 lg:pb-24 lg:pt-32">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[2rem] bg-paper lg:min-h-[620px]">
          {/* photo: stacked on mobile, full-bleed behind the text on desktop */}
          <div className="relative aspect-[4/3] lg:absolute lg:inset-0 lg:aspect-auto">
            <Image src={images.office[0]} alt={images.alt.office1} fill priority sizes="(min-width: 1280px) 1180px, 100vw" className="object-cover object-[70%_50%]" />
          </div>
          <div aria-hidden className="hero-fade absolute inset-0 hidden lg:block" />

          {/* text */}
          <div className="relative z-10 px-6 pb-8 pt-8 sm:px-10 lg:flex lg:min-h-[620px] lg:max-w-[44rem] lg:flex-col lg:justify-center lg:p-16">
            <p className="eyebrow rise">Licensed clinical psychologist</p>
            <h1 className="h-hero rise rise-2 mt-5">
              Anxiety &amp; trauma therapy in <span className="script">Santa Monica</span>, CA
            </h1>
            <p className="rise rise-3 mt-5 max-w-lg text-base md:text-[1.05rem]">
              For when life looks fine, but you don&apos;t feel fine. Dr. Maya Reynolds, PsyD helps adults in Santa Monica and throughout California work through anxiety, panic, trauma, burnout, and the pressure of always having to keep going.
            </p>
            <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-solid !px-6 !py-3">Schedule a Consultation <ArrowRight className="h-4 w-4" aria-hidden /></a>
              <a href="#approach" className="btn btn-line !px-6 !py-3">My approach</a>
            </div>
            <p className="rise rise-4 mt-8 text-sm text-ink">CBT &nbsp;·&nbsp; EMDR &nbsp;·&nbsp; Mindfulness &nbsp;·&nbsp; Body-oriented techniques</p>
          </div>

          {/* info card: below the text on mobile, floating bottom-right on desktop */}
          <div className="relative z-10 mx-6 mb-8 flex items-center gap-4 rounded-2xl bg-cream p-4 shadow-[0_20px_40px_-24px_rgb(42_42_38/0.5)] sm:mx-10 lg:absolute lg:bottom-8 lg:right-8 lg:m-0 lg:max-w-xs">
            <Photo src={images.maya} alt={images.alt.maya} width={1024} height={1536} sizes="56px" pos="50% 18%" shape="circle" className="h-14 w-14 shrink-0" />
            <div>
              <p className="font-serif text-lg leading-tight text-ink">Dr. Maya Reynolds, PsyD</p>
              <p className="mt-1 flex items-center gap-2 text-xs"><MapPin className="h-3.5 w-3.5 text-accent-deep" aria-hidden />In-person in Santa Monica</p>
              <p className="flex items-center gap-2 text-xs"><Video className="h-3.5 w-3.5 text-accent-deep" aria-hidden />Secure telehealth in California</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}