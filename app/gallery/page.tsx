import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import GalleryGrid from "@/components/GalleryGrid";
import { clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: `Gallery | ${clinic.name}`,
  description: "Clinic photos, treatment sessions, rehabilitation videos, awards and certificates.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Clinic, treatments, rehabilitation aur achievements — ek jhalak."
        crumbs={[{ href: "/gallery", label: "Gallery" }]}
      />
      <section className="section py-16 md:py-20">
        <GalleryGrid />
      </section>
    </>
  );
}
