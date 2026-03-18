import React from "react";
import { FiAward, FiBriefcase, FiMail, FiGithub, FiLinkedin, FiTerminal } from "react-icons/fi";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import GridBackground from "./components/GridBackground";
import SectionHeading from "./components/SectionHeading";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import FadeIn from "./components/FadeIn";

import {
  EMAIL,
  EXPERIENCE,
  GITHUB,
  LINKEDIN,
  PROJECTS,
  ROADMAP,
  SKILL_GROUPS,
} from "./data";

function App() {
  return (
    <div className="app-shell">
      <GridBackground />
      <Header />

      <main className="container">
        <Hero />

        {/* ═══════ ABOUT ═══════ */}
        <section id="about" className="section">
          <SectionHeading kicker="About" title="What I Do" />

          <div className="about-grid">
            <FadeIn delay={0.1}>
              <p className="about-text">
                I'm an IT Administrator focused on <strong>Microsoft 365, Intune,
                Entra ID, endpoint operations, security controls,</strong> and{" "}
                <strong>process standardization</strong>. I bring a service-oriented
                mindset forged from years of operational leadership across
                hospitality, logistics, and customer-facing roles.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="about-text">
                My direction is <strong>cybersecurity</strong>. I'm building from
                practical IT administration into stronger defensive security,
                automation, and hands-on technical depth — working toward{" "}
                <strong>CompTIA Security+</strong> and advanced Microsoft
                certifications.
              </p>
            </FadeIn>
          </div>

          <div className="stats-grid">
            {[
              { value: "M365", label: "Platform Expertise" },
              { value: "Intune", label: "Device Management" },
              { value: "Entra ID", label: "Identity & Access" },
              { value: "Sec+", label: "Security Focus" },
            ].map((stat, i) => (
              <FadeIn key={stat.value} delay={0.15 + i * 0.08}>
                <div className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="experience-cards">
            {EXPERIENCE.map((item, i) => (
              <FadeIn key={item} delay={0.1 + i * 0.08}>
                <div className="exp-card">
                  <FiBriefcase size={18} />
                  <p>{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ═══════ SKILLS ═══════ */}
        <section id="skills" className="section">
          <SectionHeading kicker="Technical Skills" title="Tools & Technologies I Work With" />
          <div className="skills-grid">
            {SKILL_GROUPS.map((group, i) => (
              <SkillCard key={group.title} group={group} delay={0.08 + i * 0.06} />
            ))}
          </div>
        </section>

        {/* ═══════ PROJECTS ═══════ */}
        <section id="projects" className="section">
          <SectionHeading kicker="Projects" title="Selected Work" />
          <div className="projects-grid">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={0.08 + i * 0.08} />
            ))}
          </div>
        </section>

        {/* ═══════ ROADMAP ═══════ */}
        <section id="roadmap" className="section">
          <SectionHeading kicker="Roadmap" title="Learning & Certifications" />

          <div className="roadmap-layout">
            <FadeIn delay={0.1}>
              <div className="roadmap-card">
                <h3><FiAward /> Certification Path</h3>
                <ul className="roadmap-items">
                  {ROADMAP.map((item) => (
                    <li key={item.name}>
                      <span className={`roadmap-status ${item.status}`}>
                        {item.status === "active" ? "Active" : "Target"}
                      </span>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="roadmap-card">
                <h3><FiTerminal /> What I'm Building Next</h3>
                <ul className="roadmap-items">
                  {[
                    "Better project case studies with screenshots and outcomes",
                    "More PowerShell automation examples",
                    "Security-focused lab work and documentation",
                    "Deeper portfolio content for admin-to-cyber transition",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════ CONTACT ═══════ */}
        <section id="contact" className="section">
          <SectionHeading kicker="Contact" title="Let's Connect" />

          <FadeIn delay={0.1}>
            <p className="contact-text">
              Interested in collaborating or have an opportunity? I'd love to hear
              from you. Reach out via email or connect on LinkedIn.
            </p>
          </FadeIn>

          <div className="contact-grid">
            <FadeIn delay={0.15}>
              <a className="contact-card" href={`mailto:${EMAIL}`}>
                <FiMail />
                <div>
                  <strong>Email</strong>
                  <span>{EMAIL}</span>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a className="contact-card" href={LINKEDIN} target="_blank" rel="noreferrer">
                <FiLinkedin />
                <div>
                  <strong>LinkedIn</strong>
                  <span>Professional profile</span>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.25}>
              <a className="contact-card" href={GITHUB} target="_blank" rel="noreferrer">
                <FiGithub />
                <div>
                  <strong>GitHub</strong>
                  <span>Projects & source code</span>
                </div>
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
