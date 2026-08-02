import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { clinic, conditions, getServicesForCondition } from "@/lib/data";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const condition = conditions.find((c) => c.slug === params.slug);
  if (!condition) return {};
  return {
    title: `${condition.name} Treatment in Patna | ${clinic.name}`,
    description: `${condition.summary} Evidence-based ${condition.name.toLowerCase()} treatment by ${clinic.doctorName} in Patna.`,
  };
}

export default function ConditionDetailPage({ params }: { params: { slug: string } }) {
  const condition = conditions.find((c) => c.slug === params.slug);
  if (!condition) notFound();

  const relatedServices = getServicesForCondition(condition);
  const otherConditions = conditions.filter((c) => c.slug !== condition.slug).slice(0, 4);

  return (
    <>
      <PageBanner
        title={`${condition.name} Treatment`}
        subtitle={condition.summary}
        crumbs={[
          { href: "/conditions", label: "Conditions" },
          { href: `/conditions/${condition.slug}`, label: condition.name },
        ]}
      />

      <section className="section grid gap-12 py-16 md:grid-cols-[1.4fr_0.9fr] md:py-20">
        <div className="space-y-12">
          <Reveal>
            <h2 className="mb-3 text-2xl font-bold text-navy">
              What is {condition.name}? <span className="text-slateBlue">({condition.hindi})</span>
            </h2>
            <p className="leading-relaxed text-slateBlue">{condition.whatIs}</p>
          </Reveal>

          <Reveal>
            <h2 className="mb-3 text-2xl font-bold text-navy">Common Causes</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {condition.causes.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="mb-3 text-2xl font-bold text-navy">Symptoms to Watch For</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {condition.symptoms.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="mb-3 text-2xl font-bold text-navy">How We Diagnose It</h2>
            <p className="leading-relaxed text-slateBlue">{condition.diagnosis}</p>
          </Reveal>

          <Reveal>
            <h2 className="mb-3 text-2xl font-bold text-navy">Our Treatment Approach</h2>
            <p className="mb-4 leading-relaxed text-slateBlue">
              Depending on severity, treatment for {condition.name.toLowerCase()} typically draws on:
            </p>
            <div className="flex flex-wrap gap-2">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className="rounded-full border border-line bg-skyLight/60 px-3 py-1.5 text-sm font-medium text-navy hover:border-sky"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="mb-3 text-2xl font-bold text-navy">Expected Recovery Timeline</h2>
            <p className="leading-relaxed text-slateBlue">{condition.recovery}</p>
          </Reveal>

          <Reveal>
            <h2 className="mb-3 text-2xl font-bold text-navy">Self-Care Tips</h2>
            <ul className="space-y-2">
              {condition.selfCare.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-ink">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-green">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {tip}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slateBlue">
              These are general self-care suggestions and are not a substitute for a personalised
              assessment. Please consult us before starting any new exercise if your symptoms are severe.
            </p>
          </Reveal>

          {condition.faqs.length > 0 && (
            <Reveal>
              <h2 className="mb-4 text-2xl font-bold text-navy">FAQs</h2>
              <FaqAccordion items={condition.faqs} />
            </Reveal>
          )}
        </div>

        {/* sidebar */}
        <aside className="space-y-6">
          <Reveal>
            <div className="card sticky top-24 p-6">
              <h3 className="mb-2 font-heading font-bold text-ink">Book an assessment</h3>
              <p className="mb-4 text-sm text-slateBlue">
                Get a personalised {condition.name.toLowerCase()} treatment plan from{" "}
                {clinic.doctorName}.
              </p>
              <Link href="/appointment" className="btn-primary w-full">
                Book Appointment
              </Link>
              <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-3 w-full">
                WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="card p-6">
              <h3 className="mb-3 font-heading font-bold text-ink">Other Conditions</h3>
              <ul className="space-y-2">
                {otherConditions.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/conditions/${c.slug}`} className="text-sm text-navy hover:text-green">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/conditions" className="mt-3 inline-block text-sm font-semibold text-sky hover:text-navy">
                View all conditions →
              </Link>
            </div>
          </Reveal>
        </aside>
      </section>
    </>
  );
}
