"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-cream/85 backdrop-blur-md">
      <nav aria-label="Main" className="wrap flex items-center justify-between py-4">
        <a href="#home" className="font-serif text-2xl text-ink">Dr. Maya Reynolds</a>
        <ul className="hidden items-center gap-9 xl:flex">
          {nav.filter((n) => n.label !== "Contact").map((n) => (
            <li key={n.href}><a href={n.href} className="nav-link">{n.label}</a></li>
          ))}
          <li><a href="#contact" className="btn btn-solid !py-2.5">Contact</a></li>
        </ul>
        <button onClick={() => setOpen(!open)} className="xl:hidden" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-cream px-6 py-6 xl:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block font-serif text-xl text-ink">{n.label}</a></li>
            ))}
            <li className="pt-2"><a href="#contact" onClick={() => setOpen(false)} className="btn btn-solid">Schedule a Consultation</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
