"use client";

import { useState } from "react";
import Link from "next/link";
import { clinic, services, conditions } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "conditions" | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="section flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 20c3-6 5-9 5-13a3 3 0 1 1 6 0c0 4 2 7 5 13"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-heading text-base font-bold leading-tight text-navy md:text-lg">
            Aarogya
            <span className="block text-[11px] font-medium tracking-wide text-slateBlue">
              Chiropractic &amp; Physiotherapy Centre
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link href="/" className="text-[15px] font-medium text-ink hover:text-navy">
            Home
          </Link>
          <Link href="/about" className="text-[15px] font-medium text-ink hover:text-navy">
            About Doctor
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-ink hover:text-navy">
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {openDropdown === "services" && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="grid grid-cols-1 gap-1 rounded-xl2 border border-line bg-white p-3 shadow-lift">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services#${s.slug}`}
                      className="rounded-lg px-3 py-2 text-sm text-ink hover:bg-skyLight hover:text-navy"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("conditions")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-ink hover:text-navy">
              Conditions
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {openDropdown === "conditions" && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-xl2 border border-line bg-white p-3 shadow-lift">
                  {conditions.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/conditions/${c.slug}`}
                      className="rounded-lg px-3 py-2 text-sm text-ink hover:bg-skyLight hover:text-navy"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className="text-[15px] font-medium text-ink hover:text-navy">
            Blog
          </Link>
          <Link href="/gallery" className="text-[15px] font-medium text-ink hover:text-navy">
            Gallery
          </Link>
          <Link href="/contact" className="text-[15px] font-medium text-ink hover:text-navy">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={clinic.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-navy xl:flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
            {clinic.phone}
          </a>
          <Link href="/appointment" className="btn-primary hidden sm:inline-flex">
            Book Appointment
          </Link>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="#0F3D6E" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="#0F3D6E" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/" className="rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-skyLight">
              Home
            </Link>
            <Link href="/about" className="rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-skyLight">
              About Doctor
            </Link>
            <Link href="/services" className="rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-skyLight">
              Services
            </Link>
            <Link href="/conditions" className="rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-skyLight">
              Conditions
            </Link>
            <Link href="/blog" className="rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-skyLight">
              Blog
            </Link>
            <Link href="/gallery" className="rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-skyLight">
              Gallery
            </Link>
            <Link href="/contact" className="rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-skyLight">
              Contact
            </Link>
            <Link href="/appointment" className="btn-primary mt-2 justify-center">
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
