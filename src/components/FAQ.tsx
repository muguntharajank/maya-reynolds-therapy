"use client";
import { useState } from "react";
import Photo from "./Photo";
import { faqs, images } from "@/data/siteData";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section band-paper">
      <div className="wrap grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div className="frame frame-arch mx-auto w-full max-w-sm lg:max-w-none">
          <Photo src={images.office[0]} alt={images.alt.office1} width={1500} height={1125} sizes="(min-width: 1024px) 32vw, 80vw" pos="60% 40%" soft shape="arch" className="aspect-[4/5] w-full" />
        </div>
        <div>
          <p className="eyebrow">FAQs</p>
          <h2 className="h-section mt-6">Common <span className="script">questions</span></h2>
          <div className="mt-10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.question} className="acc">
                  <h3 className="font-sans">
                    <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-btn-${i}`} className="acc-btn">
                      {f.question}<span className="acc-ico" aria-hidden />
                    </button>
                  </h3>
                  <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className={`acc-panel ${isOpen ? "is-open" : ""}`}>
                    <div><p className="pb-6">{f.answer}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
