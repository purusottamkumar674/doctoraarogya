import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { clinic } from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${clinic.name} | Chiropractor & Physiotherapist in Patna`,
  description:
    "Evidence-based chiropractic and physiotherapy care by Dr. Sarvesh Kumar Tiwari in Patna. Neck pain, back pain, sciatica, sports injury, stroke rehab and more. Book your appointment today.",
  keywords: [
    "physiotherapist in Patna",
    "chiropractor in Patna",
    "best physiotherapy clinic in Patna",
    "neck pain treatment Patna",
    "back pain specialist Patna",
    "sciatica treatment Patna",
    "dry needling Patna",
    "slip disc treatment Patna",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  medicalSpecialty: ["Physiotherapy", "Chiropractic"],
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address,
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800010",
    addressCountry: "IN",
  },
  telephone: clinic.phone,
  physician: {
    "@type": "Physician",
    name: clinic.doctorName,
    jobTitle: clinic.doctorRole,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
