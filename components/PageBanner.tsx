import Link from "next/link";

type Crumb = { href: string; label: string };

export default function PageBanner({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="border-b border-line bg-skyLight/60 py-12 md:py-16">
      <div className="section">
        <p className="text-xs font-medium text-slateBlue">
          <Link href="/" className="hover:text-navy">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.href}>
              {" "}
              /{" "}
              <Link href={c.href} className="hover:text-navy">
                {c.label}
              </Link>
            </span>
          ))}
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold text-navy md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-xl text-slateBlue">{subtitle}</p>}
      </div>
    </section>
  );
}
