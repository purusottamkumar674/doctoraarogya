"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li";
};

/**
 * Wraps children and fades them up into view the first time they enter the
 * viewport. Respects prefers-reduced-motion (handled via CSS fallback in
 * globals.css) and only animates once per element.
 */
export default function Reveal({ children, className = "", delayMs = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = delayMs ? { animationDelay: `${delayMs}ms` } : undefined;

  const Tag = as;
  return (
    // @ts-expect-error -- Tag is a controlled union of intrinsic elements
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
