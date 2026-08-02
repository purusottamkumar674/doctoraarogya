import Link from "next/link";
import { clinic } from "@/lib/data";

export default function FloatingActions() {
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    clinic.mapsQuery
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <Link
        href="/appointment"
        className="hidden items-center gap-2 rounded-full bg-green px-4 py-2.5 text-sm font-semibold text-white shadow-lift pulse-btn transition-transform hover:scale-105 sm:flex"
      >
        Book Appointment
      </Link>
      <a
        href={clinic.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.99.58 3.84 1.58 5.4L2 22l4.7-1.53a9.94 9.94 0 0 0 5.31 1.53c5.53 0 10.01-4.48 10.01-10.01C22.02 6.48 17.54 2 12.01 2Zm5.86 14.27c-.24.68-1.4 1.3-1.93 1.37-.5.07-1.12.1-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.72-.84.91-1.13.19-.29.38-.24.63-.15.26.1 1.65.78 1.94.92.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
        </svg>
      </a>
      <a
        href={clinic.phoneHref}
        aria-label="Call the clinic"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-lift transition-transform hover:scale-105"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a
        href={directionsHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get directions"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-white shadow-lift transition-transform hover:scale-105"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </a>
    </div>
  );
}
