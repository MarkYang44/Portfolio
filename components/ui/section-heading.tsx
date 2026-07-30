type SectionHeadingProps = {
  readonly index: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
  readonly detailHref?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  detailHref,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
        {detailHref ? (
          <Link className="section-more" href={detailHref}>
            Tap For More <span aria-hidden="true">↗</span>
          </Link>
        ) : null}
      </div>
    </header>
  );
}

import Link from "next/link";
