import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: `Gallery | ${clinic.name}`,
  description: "Clinic photos, treatment sessions, rehabilitation videos, awards and certificates.",
};

const galleryImages = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1631815589968-c2c0b3a3c2c3?w=600&h=400&fit=crop", 
    title: "Treatment Room" 
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop", 
    title: "Chiropractic Adjustment" 
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop", 
    title: "Physiotherapy Session" 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop", 
    title: "Doctor Consultation" 
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", 
    title: "Spine Rehabilitation" 
  },
  { 
    id: 6, 
    src: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop", 
    title: "Modern Equipment" 
  },
  { 
    id: 7, 
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop", 
    title: "Patient Recovery" 
  },
  { 
    id: 8, 
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop", 
    title: "Clinic Reception" 
  },
  { 
    id: 9, 
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop", 
    title: "Dry Needling Therapy" 
  },
  { 
    id: 10, 
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop", 
    title: "Exercise & Rehab Area" 
  },
  { 
    id: 11, 
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop", 
    title: "Postural Correction" 
  },
  { 
    id: 12, 
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop", 
    title: "Doctor & Patient Care" 
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Clinic, treatments, rehabilitation aur achievements — ek jhalak."
        crumbs={[{ href: "/gallery", label: "Gallery" }]}
      />
      <section className="section py-16 md:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Reveal key={img.id} delayMs={(i % 4) * 80}>
              <div className="group relative h-64 w-full overflow-hidden rounded-xl2 border border-line bg-navy/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay & title */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-semibold">{img.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}