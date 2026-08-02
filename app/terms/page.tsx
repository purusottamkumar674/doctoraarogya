import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${clinic.name}`,
};

export default function TermsPage() {
  return (
    <>
      <PageBanner title="Terms & Conditions" crumbs={[{ href: "/terms", label: "Terms & Conditions" }]} />
      <section className="section max-w-3xl space-y-6 py-16 text-slateBlue md:py-20">
        <h2 className="text-xl font-bold text-navy">Appointment &amp; Cancellation Policy</h2>
        <p>
          Please arrive on time for your appointment. If you need to cancel or reschedule, kindly
          inform us at least 3 hours in advance by calling or messaging {clinic.phone}.
        </p>

        <h2 className="text-xl font-bold text-navy">Website Use</h2>
        <p>
          This website is provided for informational purposes about {clinic.name}'s services. You
          agree to use it only for lawful purposes.
        </p>

        <h2 className="text-xl font-bold text-navy">Medical Disclaimer</h2>
        <p>
          Content on this website — including condition pages and blog articles — is for general
          educational purposes only and is not a substitute for professional medical diagnosis or
          advice. Always consult {clinic.doctorName} or another qualified healthcare provider
          regarding any medical condition.
        </p>

        <h2 className="text-xl font-bold text-navy">Limitation of Liability</h2>
        <p>
          While we strive for accuracy, {clinic.name} is not liable for any decisions made solely
          based on information found on this website without an in-person consultation.
        </p>

        <p className="text-sm text-slateBlue/70">
          This is a template. Please have it reviewed by a legal professional before publishing.
        </p>
      </section>
    </>
  );
}
