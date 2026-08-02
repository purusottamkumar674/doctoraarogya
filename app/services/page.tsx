import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { clinic, services, getConditionsForService } from "@/lib/data";

export const metadata: Metadata = {
  title: `Services | ${clinic.name}`,
  description:
    "Physiotherapy, chiropractic adjustment, dry needling, cupping therapy, manual therapy, electrotherapy, exercise therapy, sports rehab, neurological rehab and home-visit care in Patna.",
};

const serviceFaqs = [
  {
    q: "Chiropractic कितना safe hai?",
    a: "जब एक trained aur experienced practitioner द्वारा proper assessment ke baad किया जाए, chiropractic adjustment एक controlled aur evidence-based technique hai।",
  },
  {
    q: "Kya ek hi session mein sabhi therapies combine ho sakti hain?",
    a: "Haan, aksar hum ek hi visit mein manual therapy, electrotherapy aur exercise guidance ko combine karte hain, jo bhi condition ke hisaab se sabse effective ho.",
  },
  {
    q: "Home Visit service kis area mein available hai?",
    a: "Home visit Patna city ke andar available hai — booking ke time apna exact location share karein taaki hum confirm kar sakein.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services & Treatments"
        subtitle="Chiropractic aur physiotherapy ka combined approach — har treatment scientifically chosen based on aapki condition par."
        crumbs={[{ href: "/services", label: "Services" }]}
      />

      {/* Detailed service blocks */}
      <section className="section py-16 md:py-20">
        <div className="space-y-16">
          {services.map((s, i) => {
            const relatedConditions = getConditionsForService(s.slug);
            return (
              <div
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-24 items-start gap-10 md:grid-cols-[0.55fr_1.45fr]"
              >
                <Reveal>
                  <div
                    className={`mx-auto flex h-40 w-40 items-center justify-center rounded-xl2 bg-skyLight text-navy md:h-full md:w-full ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <span className="font-heading text-sm font-semibold uppercase tracking-widest">
                      0{i + 1}
                    </span>
                  </div>
                </Reveal>
                <Reveal delayMs={90} className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="mb-1 text-2xl font-bold text-navy md:text-3xl">{s.name}</h2>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-sky">{s.hindi}</p>
                  <p className="mb-4 leading-relaxed text-slateBlue">{s.description}</p>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slateBlue">
                    Helps With
                  </p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {s.helpsWith.map((h) => (
                      <span key={h} className="rounded-full border border-line bg-skyLight/60 px-3 py-1 text-xs text-navy">
                        {h}
                      </span>
                    ))}
                  </div>
                  {relatedConditions.length > 0 && (
                    <p className="mb-5 text-sm text-slateBlue">
                      Commonly used for:{" "}
                      {relatedConditions.map((c, idx) => (
                        <span key={c.slug}>
                          <Link href={`/conditions/${c.slug}`} className="font-medium text-navy hover:text-green">
                            {c.name}
                          </Link>
                          {idx < relatedConditions.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  )}
                  <Link href="/appointment" className="btn-primary">
                    Book This Service
                  </Link>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-white py-16 md:py-20">
        <div className="section max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-3">Common Questions</p>
            <h2 className="mb-8 text-3xl font-bold text-navy">Services FAQ</h2>
          </Reveal>
          <Reveal>
            <FaqAccordion items={serviceFaqs} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section py-16 text-center md:py-20">
        <h2 className="mx-auto mb-6 max-w-xl text-3xl font-bold text-navy">
          Choose your treatment and book now.
        </h2>
        <Link href="/appointment" className="btn-primary">
          Book Appointment
        </Link>
      </section>
    </>
  );
}
