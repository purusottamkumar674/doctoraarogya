"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { clinic, heroSlides } from "@/lib/data";

const AUTOPLAY_MS = 5500;

const slideGradients = [
  "linear-gradient(135deg, #0F3D6E 0%, #14539A 55%, #33A1FF 100%)",
  "linear-gradient(135deg, #0A2A4D 0%, #0F3D6E 50%, #1E6FB8 100%)",
  "linear-gradient(135deg, #123A63 0%, #1B5C9C 55%, #33A1FF 100%)",
  "linear-gradient(135deg, #0F3D6E 0%, #1B5C9C 50%, #28A745 130%)",
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = heroSlides.length;
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const goTo = useCallback((index: number) => {
    setActive(((index % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || reduceMotion.current) return;
    const id = setInterval(() => setActive((a) => (a + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 45) {
      delta > 0 ? prev() : next();
    }
    touchStartX.current = null;
  }

  return (
    <section
      className="relative h-[62vh] min-h-[480px] w-full overflow-hidden md:h-[78vh]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Clinic highlights"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === active ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          <div
            className={`absolute inset-0 ${i === active ? "animate-kenBurns" : ""}`}
            style={{ background: slideGradients[i % slideGradients.length] }}
          />
          {/* decorative geometric pattern layer, purely CSS */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
              backgroundSize: "48px 48px, 64px 64px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navyDeep/70 via-navyDeep/35 to-navyDeep/10" />
        </div>
      ))}

      {/* content overlay - re-keyed per active slide so animation replays */}
      <div className="section relative z-20 flex h-full flex-col items-start justify-center">
        <div key={active} className="max-w-xl">
          <p className="mb-4 animate-fadeUp text-xs font-semibold uppercase tracking-[0.2em] text-skyLight">
            {heroSlides[active].eyebrow}
          </p>
          <h1
            className="animate-fadeUp text-[2.1rem] font-bold leading-[1.15] text-white md:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            {heroSlides[active].headline}
          </h1>
          <p
            className="mt-4 animate-fadeUp text-lg text-skyLight/90"
            style={{ animationDelay: "260ms" }}
          >
            {heroSlides[active].subline}
          </p>
          <div
            className="mt-8 flex animate-fadeUp flex-wrap gap-3"
            style={{ animationDelay: "400ms" }}
          >
            <a href={clinic.phoneHref} className="btn-primary pulse-btn">
              📞 Call Now
            </a>
            <a
              href={clinic.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              📲 WhatsApp Appointment
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:flex"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:flex"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* dots + progress */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className="group relative h-1.5 w-8 overflow-hidden rounded-full bg-white/30"
          >
            {i === active && (
              <span
                key={active}
                className="absolute inset-y-0 left-0 origin-left animate-growLine rounded-full bg-white"
                style={{ animationDuration: `${AUTOPLAY_MS}ms`, width: "100%" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
