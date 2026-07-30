import Link from "next/link";
import { siteConfig, socialLinks } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="contact-section" data-reveal>
      <div className="contact-radar" aria-hidden="true">
        <span />
        <span />
        <i />
      </div>
      <p className="contact-kicker">
        <span>05</span> Start a conversation
      </p>
      <h2>Let&apos;s build something meaningful.</h2>
      <p className="contact-copy">
        Have a thoughtful idea, a difficult technical problem, or simply want
        to compare notes? I&apos;d be glad to hear from you.
      </p>
      <div className="contact-actions">
        <a className="button button-primary button-large" href={`mailto:${siteConfig.contactEmail}`}>
          Get in touch <span aria-hidden="true">↗</span>
        </a>
        <Link className="section-more contact-more" href="/contact">
          Tap For More <span aria-hidden="true">↗</span>
        </Link>
        <span className="contact-note">{siteConfig.contactNote}</span>
      </div>
      <div className="contact-links">
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

