"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";
type Errors = { name?: string; email?: string; message?: string };

export default function FinalCTA() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const payload = {
      name: String(d.get("name") || "").trim(),
      email: String(d.get("email") || "").trim(),
      message: String(d.get("message") || "").trim(),
      website: String(d.get("website") || ""), // honeypot
    };

    const next: Errors = {};
    if (payload.name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) next.email = "Please enter a valid email address.";
    if (payload.message.length < 10) next.message = "Please write at least a short message (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    setServerMsg("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setServerMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMsg("We couldn't reach the server. Please check your connection and try again.");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="cta-panel grid lg:grid-cols-2">
          <div className="relative z-10 p-8 text-cream md:p-14">
            <p className="eyebrow !text-[#f0d9c8]">Schedule a consultation</p>
            <h2 className="h-section mt-6 !text-cream">You don&apos;t have to figure it all out <span className="script !text-[#f0b58f]">alone</span></h2>
            <p className="mt-6 text-cream/90">If you&apos;re looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit. I offer in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.</p>
          </div>
          <form id="contact-form" onSubmit={onSubmit} noValidate className="relative z-10 m-4 rounded-[1.5rem] bg-paper p-8 md:m-6 md:p-10">
            <h3 className="text-2xl">Contact Dr. Maya</h3>
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            {(["name", "email", "message"] as const).map((k) => (
              <div key={k} className="mt-6">
                <label htmlFor={k} className="label-sm">{k}</label>
                {k === "message" ? (
                  <textarea id={k} name={k} rows={4} maxLength={2000} required className="field" aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
                ) : (
                  <input id={k} name={k} type={k === "email" ? "email" : "text"} autoComplete={k} maxLength={k === "email" ? 254 : 100} required className="field" aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
                )}
                {errors[k] && <p id={`${k}-err`} className="text-sm text-accent-deep">{errors[k]}</p>}
              </div>
            ))}
            <p className="mt-6 text-sm">Please avoid sharing detailed health information in this form. If you are in crisis or need urgent help, call 911 or 988 (U.S. Suicide &amp; Crisis Lifeline).</p>
            <button type="submit" disabled={status === "sending"} className="btn btn-solid mt-8 w-full justify-center disabled:opacity-60 sm:w-auto">
              {status === "sending" ? "Sending\u2026" : "Schedule a Consultation"}
            </button>
            <div aria-live="polite" className="mt-4 min-h-6">
              {status === "success" && <p role="status" className="text-primary">Thank you. Your message was sent, and Dr. Maya will reply to the email you provided.</p>}
              {status === "error" && <p role="alert" className="text-accent-deep">{serverMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
