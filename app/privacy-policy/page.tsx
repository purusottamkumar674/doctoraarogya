import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: `Privacy Policy | ${clinic.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        crumbs={[{ href: "/privacy-policy", label: "Privacy Policy" }]}
      />

      <section className="section max-w-3xl space-y-6 py-16 text-slateBlue md:py-20">
        <p>
          {`${clinic.name} ("we", "our", "us") respects your privacy. This policy explains what information we collect through this website and how it is used.`}
        </p>

        <h2 className="text-xl font-bold text-navy">
          Information We Collect
        </h2>

        <p>
          When you submit an appointment or contact form, we collect your name,
          phone number, email (if provided), and details about your health
          concern so we can prepare for your visit.
        </p>

        <h2 className="text-xl font-bold text-navy">
          How We Use Your Information
        </h2>

        <p>
          Information submitted is used solely to schedule and prepare for your
          appointment, and to contact you regarding your care. We do not sell or
          rent your personal information to third parties.
        </p>

        <h2 className="text-xl font-bold text-navy">
          Data Storage &amp; Security
        </h2>

        <p>
          Patient information is stored securely and access is limited to
          authorised clinic staff involved in your care.
        </p>

        <h2 className="text-xl font-bold text-navy">
          Your Rights
        </h2>

        <p>
          You may request access to, correction of, or deletion of your
          personal information held by us at any time by contacting{" "}
          {clinic.email}.
        </p>

        <h2 className="text-xl font-bold text-navy">
          Contact
        </h2>

        <p>
          For any questions about this policy, contact us at {clinic.email} or{" "}
          {clinic.phone}.
        </p>

        <p className="text-sm text-slateBlue/70">
          This is a template policy. Please have it reviewed by a legal
          professional before publishing, to ensure it meets applicable data
          protection requirements.
        </p>
      </section>
    </>
  );
}