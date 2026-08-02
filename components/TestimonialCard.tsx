import type { Testimonial } from "@/lib/data";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M12 2.5l2.9 6.4 6.9.7-5.2 4.7 1.5 6.8L12 17.9l-6.1 3.2 1.5-6.8-5.2-4.7 6.9-.7L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card flex h-full flex-col p-6">
      <Stars rating={testimonial.rating} />
      <p className="my-4 flex-1 text-[15px] leading-relaxed text-ink/85">“{testimonial.quote}”</p>
      <div className="border-t border-line pt-4">
        <p className="font-heading font-semibold text-ink">{testimonial.name}</p>
        <p className="text-xs font-medium uppercase tracking-wide text-slateBlue">
          {testimonial.location} · {testimonial.treatment}
        </p>
      </div>
    </div>
  );
}
