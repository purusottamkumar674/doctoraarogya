import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { clinic, articles } from "@/lib/data";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | ${clinic.name} Blog`,
    description: article.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-skyLight/60 py-12 md:py-16">
        <div className="section max-w-3xl">
          <p className="text-xs font-medium text-slateBlue">
            <Link href="/" className="hover:text-navy">Home</Link> /{" "}
            <Link href="/blog" className="hover:text-navy">Blog</Link> / {article.title}
          </p>
          <span className="mt-4 inline-block w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-navy">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">{article.title}</h1>
          <p className="mt-4 text-sm text-slateBlue">
            By {clinic.doctorName} · {article.readTime}
          </p>
        </div>
      </section>

      <section className="section max-w-3xl py-16 md:py-20">
        <Reveal>
          <div className="mb-8 h-56 rounded-xl2 bg-gradient-to-br from-navy to-sky md:h-72" />
        </Reveal>
        <div className="space-y-5">
          {article.body.map((para, i) => (
            <Reveal key={i} delayMs={i * 60}>
              <p className="leading-relaxed text-ink/90">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-xl2 border border-line bg-skyLight/50 p-6 text-center">
            <p className="mb-4 font-heading font-semibold text-ink">
              Have a similar concern? Book a consultation with {clinic.doctorName}.
            </p>
            <Link href="/appointment" className="btn-primary">
              Book Appointment
            </Link>
          </div>
        </Reveal>

        {related.length > 0 && (
          <Reveal>
            <div className="mt-12">
              <h3 className="mb-4 font-heading text-xl font-bold text-navy">Related Articles</h3>
              <ul className="space-y-3">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/blog/${a.slug}`} className="text-navy hover:text-green">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </section>
    </>
  );
}
