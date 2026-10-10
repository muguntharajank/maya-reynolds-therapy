import Photo from "./Photo";
import { images, site } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="section band-paper">
      <div className="wrap grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="reveal">
          <p className="eyebrow">About</p>
          <h2 className="h-section mt-6">About <span className="script">Dr. Maya</span></h2>
          <p className="mt-3 font-medium text-primary">{site.role}</p>
          <div className="mt-8 space-y-5">
            <p>I&apos;m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware, but internally feel exhausted, stuck in overthinking, or emotionally on edge.</p>
            <p>I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they&apos;re experiencing.</p>
            <p>I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.</p>
          </div>
          <a href="#approach" className="link-arrow mt-10">More about my approach</a>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="frame frame-arch ml-auto w-[84%]">
            <Photo src={images.maya} alt={images.alt.maya} width={1024} height={1536} sizes="(min-width: 1024px) 40vw, 85vw" pos="50% 20%" shape="arch" className="aspect-[4/5] w-full" />
          </div>
          <Photo src={images.office[0]} alt={images.alt.office1} width={1500} height={1125} sizes="20vw" pos="75% 60%" shape="circle" className="ring float absolute -bottom-8 left-0 aspect-square w-[36%]" />
        </div>
      </div>
    </section>
  );
}
