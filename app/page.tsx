import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteExperience } from "@/components/motion/site-experience";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export default function Home() {
  void projects;
  void skillGroups;

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="pointer-light" aria-hidden="true" />
      <SiteExperience />
      <SiteHeader />
      <main>
        <Hero />
        <div className="page-shell">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
