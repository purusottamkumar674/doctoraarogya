"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { clinic, heroSlides } from "@/lib/data";

const AUTOPLAY_MS = 5500;

const slideImages = ["/header1.png", "/header2.png", "/header3.png", "/header4.png", "/header5.png"];

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

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % total) + total) % total);
    },
    [total]
  );

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
      className="relative min-h-[580px] h-[85vh] w-full overflow-hidden bg-slate-950 md:h-[92vh]"
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
          {/* Full Screen High-Res Image Display */}
          <div className="relative h-full w-full">
            <Image
              src={slideImages[i % slideImages.length]}
              alt={slide.headline || "Clinic banner"}
              fill
              priority={i === 0}
              className="object-cover object-center w-full h-full"
              sizes="100vw"
            />
          </div>

          {/* Decorative geometric pattern */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
              backgroundSize: "48px 48px, 64px 64px",
            }}
          />

          {/* Contrast overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-navyDeep/90 via-navyDeep/50 to-transparent md:from-navyDeep/80" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="section relative z-20 flex h-full flex-col items-start justify-center px-6 md:px-12">
        <div key={active} className="max-w-2xl">
          <p className="mb-4 animate-fadeUp text-xs font-semibold uppercase tracking-[0.2em] text-skyLight">
            {heroSlides[active].eyebrow}
          </p>
          <h1
            className="animate-fadeUp text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            {heroSlides[active].headline}
          </h1>
          <p
            className="mt-4 max-w-xl animate-fadeUp text-base text-skyLight/95 sm:text-lg md:text-xl"
            style={{ animationDelay: "260ms" }}
          >
            {heroSlides[active].subline}
          </p>
          <div
            className="mt-8 flex animate-fadeUp flex-wrap gap-4"
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
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                clinic.mapsQuery
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-md transition-all hover:bg-black/50 md:flex"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-md transition-all hover:bg-black/50 md:flex"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dots + progress */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className="group relative h-2 w-10 overflow-hidden rounded-full bg-white/40"
          >
            {i === active && (
              <span
                key={active}
                className="absolute inset-y-0 left-0 origin-left animate-growLine rounded-full bg-white"
                style={{
                  animationDuration: `${AUTOPLAY_MS}ms`,
                  width: "100%",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}