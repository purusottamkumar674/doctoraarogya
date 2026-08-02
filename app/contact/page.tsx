import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact Us | ${clinic.name}`,
  description: `Get in touch with ${clinic.name} in Patna — address, phone, WhatsApp and working hours.`,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" crumbs={[{ href: "/contact", label: "Contact" }]} />

      <section className="section grid gap-12 py-16 md:grid-cols-2 md:py-20">
        <Reveal>
          <div className="card space-y-6 p-6 md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slateBlue">Address</p>
              <p className="mt-1 text-ink">{clinic.address}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slateBlue">Phone</p>
              <a href={clinic.phoneHref} className="mt-1 block text-ink hover:text-navy">
                {clinic.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slateBlue">Email</p>
              <a href={`mailto:${clinic.email}`} className="mt-1 block text-ink hover:text-navy">
                {clinic.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slateBlue">Working Hours</p>
              {clinic.hours.map((h) => (
                <p key={h.day} className="mt-1 text-ink">
                  {h.day}: <span className="text-slateBlue">{h.time}</span>
                </p>
              ))}
            </div>
            <a
              href={clinic.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <form className="card grid gap-5 p-6 md:p-8">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-slateBlue">Name</span>
              <input type="text" required className="rounded-xl border border-line px-4 py-2.5 text-sm focus:border-sky focus:outline-none" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-slateBlue">Phone</span>
              <input type="tel" required className="rounded-xl border border-line px-4 py-2.5 text-sm focus:border-sky focus:outline-none" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-slateBlue">Message</span>
              <textarea rows={4} className="rounded-xl border border-line px-4 py-2.5 text-sm focus:border-sky focus:outline-none" />
            </label>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
        </Reveal>
      </section>

      <section className="border-t border-line bg-skyLight/50 py-10">
        <div className="section overflow-hidden rounded-xl2 border border-line shadow-card">
          <iframe
            title="Clinic location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapsQuery)}&output=embed`}
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
