import Photo from "./Photo";
import { images } from "@/data/siteData";

const signs = ["Constant worry and overthinking", "Tension in the body", "Difficulty sleeping", "Feeling emotionally on edge", "Feeling disconnected from yourself"];

export default function Together() {
  return (
    <section className="grid lg:grid-cols-2">
      <Photo src={images.office[1]} alt={images.alt.office2} width={1500} height={1125} sizes="(min-width: 1024px) 50vw, 100vw" pos="30% 50%" tint className="min-h-[24rem] lg:min-h-[640px]" />
      <div className="band-mist flex items-center px-6 py-16 md:px-14 lg:px-20">
        <div className="reveal max-w-lg">
          <h2 className="h-section">You don&apos;t have to do this all <span className="script">alone</span>.</h2>
          <p className="mt-6 font-medium text-ink">If you are facing any of these, there&apos;s hope:</p>
          <ul className="mt-6 space-y-3">
            {signs.map((s) => (
              <li key={s} className="flex items-center gap-3"><span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-accent" />{s}</li>
            ))}
          </ul>
          <p className="mt-8">Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.</p>
          <a href="#contact" className="link-arrow mt-8">Begin therapy</a>
        </div>
      </div>
    </section>
  );
}
