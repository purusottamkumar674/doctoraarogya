import Link from "next/link";
import { clinic } from "@/lib/data";

const quickLinks = [
  { href: "/about", label: "About Doctor" },
  { href: "/services", label: "Services" },
  { href: "/conditions", label: "Conditions We Treat" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/appointment", label: "Book Appointment" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-navyDeep text-white">
      <div className="section grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 20c3-6 5-9 5-13a3 3 0 1 1 6 0c0 4 2 7 5 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-heading text-lg font-bold">{clinic.name}</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/65">
            {clinic.doctorName} — {clinic.doctorRole}. Evidence-based chiropractic and physiotherapy
            care in Patna.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { href: clinic.social.instagram, label: "Instagram" },
              { href: clinic.social.facebook, label: "Facebook" },
              { href: clinic.social.youtube, label: "YouTube" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs text-white/80 transition-colors hover:border-sky hover:text-sky"
              >
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-sky">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/75 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-sky">Contact</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li>{clinic.address}</li>
            <li>
              <a href={clinic.phoneHref} className="hover:text-white">
                {clinic.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${clinic.email}`} className="hover:text-white">
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-sky">Working Hours</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {clinic.hours.map((h) => (
              <li key={h.day} className="flex flex-col">
                <span className="text-white">{h.day}</span>
                <span className="text-white/60">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
          <span>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </span>
          <div className="flex gap-4">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/80">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
