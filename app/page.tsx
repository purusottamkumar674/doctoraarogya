import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import ServiceCard from "@/components/ServiceCard";
import ConditionCard from "@/components/ConditionCard";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import {
  clinic,
  whyChooseUs,
  services,
  conditions,
  patientJourney,
  testimonials,
  homeFaqs,
} from "@/lib/data";

const whyChooseIcons = [
  "M9 12l2 2 4-4",
  "M12 3v18M4.5 8.5h15M4.5 15.5h15",
  "M4 20c3-6 5-9 5-13a3 3 0 1 1 6 0c0 4 2 7 5 13",
  "M12 2l2.6 5.9L21 9l-4.7 4.1L17.5 20 12 16.6 6.5 20l1.2-6.9L3 9l6.4-1.1L12 2Z",
  "M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z",
  "M4 6h16M4 12h10M4 18h7",
  "M13 3L4 14h6l-1 7 9-11h-6l1-7Z",
  "M12 2a10 10 0 1 0 10 10",
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* quick stats strip */}
      <section className="border-b border-line bg-white py-8">
        <div className="section flex flex-wrap items-center justify-between gap-6">
          <Counter end={12} suffix="+" label="Years Experience" />
          <Counter end={8400} suffix="+" label="Patients Treated" />
          <Counter end={13} label="Conditions Treated" />
          <Counter end={10} label="Specialised Services" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section py-16 md:py-20">
        <Reveal>
          <p className="eyebrow mb-3">Why Choose Us</p>
          <h2 className="mb-10 max-w-xl text-3xl font-bold text-navy md:text-4xl">
            क्यों चुनें Aarogya Chiropractic &amp; Physiotherapy Centre?
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 80}>
              <div className="card flex h-full flex-col gap-3 p-5 transition-shadow hover:shadow-lift">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/10 text-green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d={whyChooseIcons[i % whyChooseIcons.length]}
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-heading font-semibold text-ink">{item.title}</p>
                  <p className="text-sm text-slateBlue">{item.hindi}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONDITIONS WE TREAT */}
      <section className="border-y border-line bg-white py-16 md:py-20">
        <div className="section">
          <Reveal>
            <p className="eyebrow mb-3">Conditions We Treat</p>
            <h2 className="mb-2 max-w-2xl text-3xl font-bold text-navy md:text-4xl">
              हम इन समस्याओं का मूल्यांकन और उपचार करते हैं
            </h2>
            <p className="mb-10 max-w-xl text-slateBlue">
              We evaluate and treat the following conditions using evidence-based chiropractic and
              physiotherapy protocols.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((c, i) => (
              <Reveal key={c.slug} delayMs={(i % 6) * 60}>
                <ConditionCard condition={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section py-16 md:py-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow mb-3">Our Services</p>
            <h2 className="max-w-xl text-3xl font-bold text-navy md:text-4xl">
              Ten specialised programmes under one roof.
            </h2>
          </Reveal>
          <Link href="/services" className="btn-secondary shrink-0">
            View All Services
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delayMs={(i % 3) * 90}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* MEET YOUR DOCTOR */}
      <section className="border-y border-line bg-navy py-16 text-white md:py-20">
        <div className="section grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="mx-auto flex h-64 w-full max-w-xs items-center justify-center rounded-xl2 bg-white/10 backdrop-blur-sm md:h-72">
              <div className="text-center">
                <span className="font-heading text-xl font-bold">{clinic.doctorName}</span>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-skyLight">
                  {clinic.doctorRole}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-skyLight">
              Meet Your Doctor
            </p>
            <blockquote className="mb-6 max-w-2xl text-xl font-medium leading-relaxed text-white/95 md:text-2xl">
              &ldquo;मेरा उद्देश्य केवल दर्द कम करना नहीं, बल्कि दर्द के वास्तविक कारण को समझकर
              वैज्ञानिक और व्यक्तिगत उपचार देना है, ताकि मरीज अपनी दैनिक गतिविधियों में आत्मविश्वास
              के साथ लौट सकें।&rdquo;
            </blockquote>
            <p className="mb-6 font-heading font-semibold">
              — {clinic.doctorName}, {clinic.doctorRole}
            </p>
            <Link href="/about" className="btn-outline-white">
              Read Full Profile
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PATIENT JOURNEY */}
      <section className="section py-16 md:py-20">
        <Reveal>
          <p className="eyebrow mb-3">How We Work</p>
          <h2 className="mb-12 max-w-xl text-3xl font-bold text-navy md:text-4xl">
            Patient Journey
          </h2>
        </Reveal>
        <div className="relative grid gap-8 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-6 hidden h-0.5 origin-left bg-line md:block" />
          {patientJourney.map((step, i) => (
            <Reveal key={step.step} delayMs={i * 120} className="relative">
              <div className="relative z-10 flex flex-col items-start gap-3 md:items-center md:text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-heading text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="font-heading font-semibold text-ink">{step.step}</h3>
                <p className="text-sm leading-relaxed text-slateBlue">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PATIENT REVIEWS */}
      <section className="border-y border-line bg-white py-16 md:py-20">
        <div className="section">
          <Reveal>
            <p className="eyebrow mb-3">Patient Reviews</p>
            <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <h2 className="max-w-xl text-3xl font-bold text-navy md:text-4xl">
                ⭐⭐⭐⭐⭐ Recovery, in their own words.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delayMs={i * 90}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section py-16 md:py-20">
        <Reveal>
          <p className="eyebrow mb-3">Common Questions</p>
          <h2 className="mb-10 max-w-xl text-3xl font-bold text-navy md:text-4xl">FAQ</h2>
        </Reveal>
        <Reveal>
          <FaqAccordion items={homeFaqs} />
        </Reveal>
      </section>

      {/* CONTACT / MAP */}
      <section className="border-t border-line bg-skyLight/50 py-16 md:py-20">
        <div className="section grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">Visit Us</p>
            <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">{clinic.address}</h2>
            <p className="mb-6 text-slateBlue">
              📞 {clinic.phone} · Open {clinic.hours[0].time}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/appointment" className="btn-primary">
                Book Appointment
              </Link>
              <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="overflow-hidden rounded-xl2 border border-line shadow-card">
              <iframe
                title="Clinic location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapsQuery)}&output=embed`}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
