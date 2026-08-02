"use client";

import { useState } from "react";
import { galleryCategories, galleryItems } from "@/lib/data";

const tileGradients = [
  "linear-gradient(135deg,#0F3D6E,#33A1FF)",
  "linear-gradient(135deg,#123A63,#28A745)",
  "linear-gradient(135deg,#0A2A4D,#1E6FB8)",
  "linear-gradient(135deg,#14539A,#33A1FF)",
];

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof galleryCategories)[number] | "All">("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = galleryItems.filter((item) => active === "All" || item.category === active);
  const openItem = galleryItems.find((i) => i.id === lightbox);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {(["All", ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "border-navy bg-navy text-white"
                : "border-line bg-white text-slateBlue hover:border-sky hover:text-navy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setLightbox(item.id)}
            className="group relative aspect-square overflow-hidden rounded-xl2 border border-line"
          >
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
              style={{ background: tileGradients[i % tileGradients.length] }}
            />
            <div className="absolute inset-0 bg-navyDeep/0 transition-colors group-hover:bg-navyDeep/25" />
            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navyDeep/80 to-transparent p-3 text-left text-xs font-medium text-white">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {openItem && (
        <div
          className="fixed inset-0 z-[60] flex animate-fadeIn items-center justify-center bg-navyDeep/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full max-w-2xl">
            <div
              className="aspect-video w-full rounded-xl2"
              style={{ background: tileGradients[galleryItems.indexOf(openItem) % tileGradients.length] }}
            />
            <p className="mt-4 text-center text-white">{openItem.caption}</p>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute -top-4 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
