import Link from "next/link";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky hover:shadow-lift">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-skyLight text-navy transition-colors group-hover:bg-navy group-hover:text-white">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3v18M4.5 8.5h15M4.5 15.5h15"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h3 className="mb-1 text-lg font-bold text-ink">{service.name}</h3>
      <p className="mb-3 text-xs font-medium uppercase tracking-wide text-sky">{service.hindi}</p>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-slateBlue">{service.summary}</p>
      <Link
        href={`/services#${service.slug}`}
        className="flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-green"
      >
        Learn more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
