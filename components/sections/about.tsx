import { profileFacts, siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="section section-about" data-reveal>
      <SectionHeading
        index="01"
        eyebrow="About"
        title={siteConfig.aboutTitle}
        detailHref="/about"
      />
      <div className="about-layout">
        <div className="about-aside" aria-hidden="true">
          <span className="coordinate">31.2304° N</span>
          <div className="about-monogram">M</div>
        </div>
        <div className="about-copy">
          {siteConfig.aboutCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <dl className="profile-facts">
            {profileFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

