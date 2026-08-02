import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { clinic, articles } from "@/lib/data";

export const metadata: Metadata = {
  title: `Blog | ${clinic.name}`,
  description: "Health tips, recovery guides, and articles from Aarogya Chiropractic & Physiotherapy Centre, Patna.",
};

export default function BlogIndexPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageBanner
        title="Health Articles & Recovery Tips"
        subtitle="Naye lekh har hafte — posture, recovery, chiropractic aur physiotherapy ke baare mein."
        crumbs={[{ href: "/blog", label: "Blog" }]}
      />

      <section className="section py-16 md:py-20">
        {/* featured */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group mb-12 flex flex-col overflow-hidden rounded-xl2 border border-line bg-white shadow-card transition-shadow hover:shadow-lift md:flex-row"
          >
            <div className="h-48 bg-gradient-to-br from-navy to-sky md:h-auto md:w-2/5" />
            <div className="flex flex-1 flex-col justify-center p-6 md:p-10">
              <span className="mb-3 w-fit rounded-full bg-skyLight px-3 py-1 text-xs font-semibold uppercase tracking-widest text-navy">
                {featured.category}
              </span>
              <h2 className="mb-3 text-2xl font-bold text-navy group-hover:text-green md:text-3xl">
                {featured.title}
              </h2>
              <p className="mb-4 text-slateBlue">{featured.excerpt}</p>
              <span className="text-sm font-semibold text-sky">{featured.readTime} · Read more →</span>
            </div>
          </Link>
        </Reveal>

        {/* grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delayMs={(i % 3) * 90}>
              <Link
                href={`/blog/${a.slug}`}
                className="card group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="mb-3 w-fit rounded-full bg-skyLight px-3 py-1 text-xs font-semibold uppercase tracking-widest text-navy">
                  {a.category}
                </span>
                <h3 className="mb-2 text-lg font-bold leading-snug text-ink group-hover:text-navy">
                  {a.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slateBlue">{a.excerpt}</p>
                <div className="flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs text-slateBlue">{a.readTime}</span>
                  <span className="text-sm font-semibold text-sky">Read more →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
