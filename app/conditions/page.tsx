import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import ConditionCard from "@/components/ConditionCard";
import { clinic, conditions } from "@/lib/data";

export const metadata: Metadata = {
  title: `Conditions We Treat | ${clinic.name}`,
  description:
    "Neck pain, back pain, sciatica, slip disc, cervical spondylosis, frozen shoulder, knee pain, tennis elbow, heel pain, arthritis, sports injury, paralysis rehab and postural problems — treated at Aarogya Chiropractic & Physiotherapy Centre, Patna.",
};

export default function ConditionsIndexPage() {
  return (
    <>
      <PageBanner
        title="Conditions We Treat"
        subtitle="हर condition ka apna dedicated assessment aur treatment approach — click karke poori jaankari dekhein."
        crumbs={[{ href: "/conditions", label: "Conditions" }]}
      />
      <section className="section py-16 md:py-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c, i) => (
            <Reveal key={c.slug} delayMs={(i % 6) * 60}>
              <ConditionCard condition={c} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
