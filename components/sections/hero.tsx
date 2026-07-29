import { siteConfig, socialLinks } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="hero-content">
        <p className="status-label hero-enter hero-enter-1">
          <span className="status-dot" />
          {siteConfig.availability}
        </p>
        <h1 id="hero-title" className="hero-enter hero-enter-2">
          Hi, I&apos;m <span>Mark.</span>
        </h1>
        <p className="hero-role hero-enter hero-enter-3">
          {siteConfig.role}
        </p>
        <p className="hero-statement hero-enter hero-enter-3">
          {siteConfig.hero}
        </p>
        <div className="hero-actions hero-enter hero-enter-4">
          <a className="button button-primary" href="#projects">
            View projects <span aria-hidden="true">↘</span>
          </a>
          <a className="button button-secondary" href="#about">
            About me <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="hero-meta hero-enter hero-enter-4">
        <div>
          <span className="meta-label">Focus</span>
          <p>Software · AI · Systems</p>
        </div>
        <div className="hero-socials">
          <span className="meta-label">Elsewhere</span>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
      <a className="scroll-cue hero-enter hero-enter-4" href="#about">
        <span>Scroll to explore</span>
        <i aria-hidden="true">↓</i>
      </a>
    </section>
  );
}

