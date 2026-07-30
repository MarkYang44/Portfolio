import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <section id="skills" className="section section-skills" data-reveal>
      <SectionHeading
        index="02"
        eyebrow="Skills / Stack"
        title="Tools are chosen for the problem, not the trend."
        description="A working set of languages, frameworks, and systems. Replace or reorder these entries in one data file."
        detailHref="/skills"
      />
      <div className="skill-list">
        {skillGroups.map((group, index) => (
          <article className="skill-row" key={group.label}>
            <div className="skill-index">{String(index + 1).padStart(2, "0")}</div>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

