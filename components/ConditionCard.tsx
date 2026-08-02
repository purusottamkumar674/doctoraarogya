import Link from "next/link";
import type { Condition } from "@/lib/data";

export default function ConditionCard({ condition }: { condition: Condition }) {
  return (
    <Link
      href={`/conditions/${condition.slug}`}
      className="group flex items-center justify-between gap-3 rounded-xl2 border border-line bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky hover:shadow-lift"
    >
      <div>
        <p className="font-heading text-[15px] font-semibold text-ink group-hover:text-navy">
          {condition.name}
        </p>
        <p className="text-xs text-slateBlue">{condition.hindi}</p>
      </div>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-skyLight text-navy transition-colors group-hover:bg-navy group-hover:text-white">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
