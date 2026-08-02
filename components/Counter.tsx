"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
};

export default function Counter({ end, suffix = "", prefix = "", duration = 1400, label }: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * end));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
      <span className="font-heading text-3xl font-bold text-navy md:text-4xl">
        {prefix}
        {value}
        {suffix}
      </span>
      <span className="text-xs font-semibold uppercase tracking-widest text-slateBlue">{label}</span>
    </div>
  );
}
