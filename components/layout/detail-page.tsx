import Link from "next/link";
import type { DetailPageData } from "@/data/detail-pages";

const detailNavigation = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;

type DetailPageProps = {
  readonly page: DetailPageData;
  readonly activePath: string;
};

export function DetailPage({ page, activePath }: DetailPageProps) {
  return (
    <>
      <header className="detail-header">
        <div className="detail-nav">
          <Link className="detail-home" href="/" aria-label="Return to home page">
            MY
          </Link>
          <nav aria-label="Detail pages">
            {detailNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={activePath === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="detail-back" href="/">
            Home <span aria-hidden="true">↙</span>
          </Link>
        </div>
      </header>

      <main className="detail-main">
        <section className="detail-hero">
          <p className="detail-kicker">
            <span>{page.index}</span>
            {page.eyebrow}
          </p>
          <h1>{page.title}</h1>
          <p className="detail-introduction">{page.introduction}</p>
          <span className="detail-status">Framework / Ready to expand</span>
        </section>

        <section
          className="detail-content"
          aria-label={`${page.eyebrow} content framework`}
        >
          {page.sections.map((section) => (
            <article className="detail-card" key={section.label}>
              <p>{section.label}</p>
              <h2>{section.title}</h2>
              <span>{section.body}</span>
            </article>
          ))}
        </section>

        <footer className="detail-footer">
          <p>More content will be added in the next iteration.</p>
          <Link href="/">
            Return to portfolio <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </main>
    </>
  );
}
