import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: `About ${clinic.doctorName} | ${clinic.name}`,
  description: `Learn about ${clinic.doctorName}'s qualifications, philosophy, and the mission behind ${clinic.name} in Patna.`,
};

const education = [
  { year: "2011", item: "Bachelor of Physiotherapy (BPT)" },
  // { year: "2013", item: "Master of Physiotherapy (MPT) — Orthopaedics" },
  { year: "2015", item: "Certification in Chiropractic Spinal Manipulation" },
  { year: "2018", item: "Advanced Training in Dry Needling & Trigger Point Therapy" },
  { year: "2021", item: "Certified Neurological Rehabilitation Practitioner" },
];

const memberships = [
  "Indian Association of Physiotherapists (IAP)",
  "Indian Chiropractic Association",
  "Bihar State Physiotherapy Council — Registered Practitioner",
];

const certificates = ["BPT Degree", "MPT Degree", "Chiropractic Certification", "Dry Needling Certification"];

export default function AboutPage() {
  return (
    <>
      <PageBanner title={`About ${clinic.doctorName}`} crumbs={[{ href: "/about", label: "About Doctor" }]} />

      {/* Profile */}
      <section className="section grid items-center gap-12 py-16 md:grid-cols-[1fr_1.2fr] md:py-20">
        <Reveal>
          {/* Bigger image box */}
          <div className="relative mx-auto h-96 w-full max-w-md overflow-hidden rounded-xl2 bg-navy shadow-xl md:h-[460px]">
            <Image
              src="/about.png"
              alt={`${clinic.doctorName}, ${clinic.doctorRole}`}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-top"
              priority
            />
          </div>
        </Reveal>
        <Reveal delayMs={100}>
          <p className="eyebrow mb-3">Lead Practitioner</p>
          <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">
            {clinic.doctorName}, {clinic.doctorRole}
          </h2>
          <p className="mb-4 leading-relaxed text-slateBlue">
            With over 12 years of clinical experience combining physiotherapy and chiropractic care,
            {" "}{clinic.doctorName} has helped thousands of patients across Patna recover from chronic
            pain, sports injuries, and neurological conditions — always starting with a precise
            diagnosis of the root cause.
          </p>
          <p className="mb-6 leading-relaxed text-slateBlue">
            He is known for combining hands-on techniques — chiropractic adjustment, dry needling, and
            manual therapy — with structured, progressive rehabilitation, so patients don&rsquo;t just
            feel better temporarily, but recover lasting function.
          </p>
          <div className="grid grid-cols-2 gap-6 border-t border-line pt-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slateBlue">Experience</p>
              <p className="mt-1 font-heading font-semibold text-ink">12+ years</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slateBlue">Patients Treated</p>
              <p className="mt-1 font-heading font-semibold text-ink">8,400+</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-line bg-white py-16 md:py-20">
        <div className="section grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">Mission</p>
            <h3 className="mb-3 text-xl font-bold text-navy">
              Treat the cause, not just the symptom.
            </h3>
            <p className="leading-relaxed text-slateBlue">
              Our mission is to give every patient a clear, evidence-based explanation of why they are
              in pain — and a structured plan to resolve it, rather than relying on repeated
              short-term relief.
            </p>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="eyebrow mb-3">Vision</p>
            <h3 className="mb-3 text-xl font-bold text-navy">
              A trusted first stop for musculoskeletal care in Patna.
            </h3>
            <p className="leading-relaxed text-slateBlue">
              We aim to be the clinic patients and doctors alike turn to first — combining
              chiropractic and physiotherapy expertise under one roof, backed by measurable,
              transparent progress tracking.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Education timeline */}
      <section className="section py-16 md:py-20">
        <Reveal>
          <p className="eyebrow mb-3">Credentials</p>
          <h2 className="mb-10 max-w-xl text-3xl font-bold text-navy">Qualifications &amp; Experience</h2>
        </Reveal>
        <ol className="space-y-0 border-l-2 border-line pl-6">
          {education.map((e, i) => (
            <Reveal key={e.item} delayMs={i * 90} as="li" className="relative pb-8 last:pb-0">
              <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-green bg-white" />
              <span className="text-xs font-semibold uppercase tracking-widest text-green">{e.year}</span>
              <p className="mt-1 max-w-lg text-ink">{e.item}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Philosophy */}
      <section className="border-y border-line bg-navy py-16 text-white md:py-20">
        <div className="section max-w-2xl">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-skyLight">
              Clinical Philosophy
            </p>
            <blockquote className="text-xl font-medium leading-relaxed md:text-2xl">
              &ldquo;मेरा उद्देश्य केवल दर्द कम करना नहीं, बल्कि दर्द के वास्तविक कारण को समझकर
              वैज्ञानिक और व्यक्तिगत उपचार देना है, ताकि मरीज अपनी दैनिक गतिविधियों में
              आत्मविश्वास के साथ लौट सकें।&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Memberships + Certificates */}
      <section className="section py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">Professional Memberships</p>
            <ul className="space-y-3">
              {memberships.map((m) => (
                <li key={m} className="flex items-start gap-2 text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="eyebrow mb-3">Certificates Gallery</p>
            <div className="grid grid-cols-2 gap-3">
              {certificates.map((c) => (
                <div
                  key={c}
                  className="flex h-24 items-center justify-center rounded-xl2 border border-line bg-skyLight/60 p-3 text-center text-sm font-medium text-navy"
                >
                  {c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-skyLight/60 py-16 text-center md:py-20">
        <div className="section">
          <h2 className="mx-auto mb-6 max-w-xl text-3xl font-bold text-navy">
            Book a consultation with {clinic.doctorName}
          </h2>
          <Link href="/appointment" className="btn-primary">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}