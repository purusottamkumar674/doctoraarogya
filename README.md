# Aarogya Chiropractic & Physiotherapy Centre — Website

Full 10-page (+13 condition pages +7 blog posts) Next.js 14 (App Router)
website, built in **TypeScript + Tailwind CSS**, based on the project PRD.
Includes an animated hero slider and scroll-triggered micro-animations
throughout, as specified.

## Pages

| Route | Page |
|---|---|
| `/` | Home (hero slider, why choose us, conditions, services, doctor, patient journey, reviews, FAQ, map) |
| `/about` | About Doctor |
| `/services` | Services overview (10 anchor-linked service sections) |
| `/conditions` | Conditions index (13 conditions) |
| `/conditions/[slug]` | Individual condition page (dynamic, SEO template) |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual blog post (dynamic) |
| `/gallery` | Filterable gallery with lightbox |
| `/appointment` | Appointment booking form + WhatsApp/Call/Map |
| `/contact` | Contact page |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Hero Slider & Animations

- **`components/HeroSlider.tsx`** — the 4-slide auto-playing hero, with
  crossfade transitions, staggered text reveal, dot progress indicators,
  arrow navigation, swipe gestures, and keyboard support. Respects
  `prefers-reduced-motion`.
- **`components/Reveal.tsx`** — a reusable scroll-triggered fade-up wrapper
  (IntersectionObserver-based) used throughout the site for section
  headings, cards, and timelines.
- **`components/Counter.tsx`** — count-up stat animation for the homepage
  stats strip.
- **`components/FaqAccordion.tsx`** — smooth expand/collapse FAQ component
  used on the Home, Services, and every Condition page.
- All keyframes/animations are defined in `tailwind.config.ts` and
  `app/globals.css`, and are automatically disabled for users with
  `prefers-reduced-motion: reduce`.

## Customizing content

Nearly everything — clinic details, hero slides, services, all 13
conditions, testimonials, blog articles, FAQs, and gallery items — lives in
one file:

```
lib/data.ts
```

Editing this file updates every page that references it (services page,
condition pages, service/condition cross-linking, nav dropdowns, etc.).

## Extending condition & blog content for SEO

The PRD calls for each of the 13 condition pages to run ~1000–1500 words
for strong SEO performance. The current `whatIs`, `causes`, `symptoms`,
`diagnosis`, `recovery`, `selfCare`, and `faqs` fields in `lib/data.ts` give
each page a complete, correctly structured template — but the copy is
intentionally concise so the project ships complete and functional. To hit
the full word count, expand each field's text with more detail (ideally
written or reviewed by the doctor) — no code changes are needed, since
every condition page is rendered dynamically from this data.

## Connecting the appointment form

`components/AppointmentForm.tsx` and the contact form on `/contact`
currently simulate submission on the client. To make them live, connect
`handleSubmit` to:

- A Next.js API route (`app/api/appointment/route.ts`) that emails/SMS's
  the front desk, or
- A form backend such as Formspree/Getform, or a WhatsApp Business API
  webhook.

## Adding real photos & videos

Hero slides currently use CSS gradients as stand-ins so the project runs
without any image assets. Replace them with real photography using
`next/image`:

1. Add images to `/public/images/`.
2. In `components/HeroSlider.tsx`, replace the gradient `<div>` per slide
   with an `<Image fill className="object-cover" ... />`.
3. Do the same for the doctor photo (`app/about/page.tsx`, `app/page.tsx`),
   the Gallery tiles (`components/GalleryGrid.tsx`), and blog post headers.

## Schema markup & SEO

`app/layout.tsx` includes `MedicalClinic` + `Physician` JSON-LD structured
data. Each condition and blog page has unique `generateMetadata` for
per-page SEO titles/descriptions. Add `FAQPage` schema per condition page
if you want rich FAQ snippets in search results.

## Notes

- The Google Map on Contact/Appointment pages uses a keyless embed based on
  a text search query (`clinic.mapsQuery` in `lib/data.ts`). For a pinned
  location, replace it with an embed URL from Google Maps' "Share > Embed a
  map" for the exact clinic address.
- Bilingual content is currently mixed inline (Hindi + English together,
  as in the PRD). A toggle-based bilingual system can be added later with
  `next-intl` if a strict language switch is required.
