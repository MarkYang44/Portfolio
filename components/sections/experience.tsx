import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="section section-experience" data-reveal>
      <SectionHeading
        index="04"
        eyebrow="Experience"
        title="The path so far."
        description="A flexible timeline for professional experience, education, or other important chapters."
        detailHref="/experience"
      />
      <div className="timeline">
        {experience.map((item, index) => (
          <article className="timeline-item" key={`${item.role}-${index}`}>
            <div className="timeline-marker">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="timeline-main">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timeline-organization">{item.organization}</p>
            </div>
            <div className="timeline-detail">
              <span>{item.location}</span>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

