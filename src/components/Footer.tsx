import { nav, site } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="band-paper pt-20">
      <div className="wrap grid gap-12 pb-16 lg:grid-cols-[1.3fr_.7fr_1fr]">
        <div>
          <p className="font-serif text-3xl text-ink">Dr. Maya Reynolds</p>
          <p className="mt-1 text-sm font-medium tracking-wide text-primary">{site.role}</p>
          <p className="mt-6 max-w-sm">You&apos;re welcome to come into my office in Santa Monica or schedule secure telehealth sessions from anywhere in California, whatever works best for you.</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-5 space-y-1">
            <li><a href="#home" className="nav-link">Home</a></li>
            {nav.map((n) => (<li key={n.href}><a href={n.href} className="nav-link">{n.label}</a></li>))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow">Visit</p>
          <address className="mt-5 not-italic">{site.street}<br />{site.city}</address>
          <p className="mt-4 text-sm">In-person therapy in Santa Monica | Secure telehealth throughout California</p>
        </div>
      </div>
      <div className="bg-primary py-4 text-sm text-cream"><p className="wrap">© 2026 {site.name}. All rights reserved.</p></div>
    </footer>
  );
}
