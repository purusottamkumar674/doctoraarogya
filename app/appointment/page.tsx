import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AppointmentForm from "@/components/AppointmentForm";
import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: `Book Appointment | ${clinic.name}`,
  description: `Book your physiotherapy or chiropractic appointment with ${clinic.doctorName} in Patna — online, WhatsApp, or call.`,
};

export default function AppointmentPage() {
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapsQuery)}`;

  return (
    <>
      <PageBanner
        title="Book Your Appointment"
        subtitle="Online form bharein, ya WhatsApp/Call se seedha connect karein."
        crumbs={[{ href: "/appointment", label: "Appointment" }]}
      />

      <section className="section py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <AppointmentForm />
          </Reveal>

          <div className="space-y-6">
            <Reveal delayMs={80}>
              <div className="card p-6">
                <h3 className="mb-4 font-heading font-bold text-ink">Other Ways to Book</h3>
                <div className="grid gap-3">
                  <a
                    href={clinic.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    📲 WhatsApp Booking
                  </a>
                  <a
                    href={clinic.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    📞 Call {clinic.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="overflow-hidden rounded-xl2 border border-line shadow-card">
                <iframe
                  title="Clinic location map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapsQuery)}&output=embed`}
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white px-5 py-3 text-center text-sm font-semibold text-navy hover:text-green"
                >
                  📍 Get Directions
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="card p-6">
                <h3 className="mb-3 font-heading font-bold text-ink">Clinic Timing</h3>
                <ul className="space-y-2 text-sm text-slateBlue">
                  {clinic.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span className="text-ink">{h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delayMs={260}>
              <div className="rounded-xl2 border border-green/30 bg-green/10 p-5">
                <p className="text-sm text-ink">
                  <span className="font-semibold">Emergency Contact: </span>
                  <a href={clinic.phoneHref} className="text-navy hover:text-green">
                    {clinic.phone}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
