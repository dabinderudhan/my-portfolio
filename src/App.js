import React from "react";
import { FiAward, FiBriefcase, FiMail, FiGithub, FiLinkedin, FiTerminal } from "react-icons/fi";
import "./App.css";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MatrixBackground from "./components/MatrixBackground";
import SectionHeading from "./components/SectionHeading";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";

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
      <MatrixBackground />
      <Header />

      <main id="top" className="container">
        <Hero />

        <section id="about" className="section">
          <SectionHeading kicker="About" title="What I do" />

          <div className="two-col">
            <div className="card">
              <h3>Current focus</h3>
              <p>
                I am an IT Administrator focused on Microsoft 365, Intune, Entra ID,
                endpoint operations, security controls, and process standardization.
              </p>
            </div>

            <div className="card">
              <h3>Where I’m heading</h3>
              <p>
                My direction is cybersecurity. I’m building from practical IT
                administration into stronger defensive security, automation, and
                hands-on technical depth.
              </p>
            </div>
          </div>

          <div className="experience-grid">
            {EXPERIENCE.map((item) => (
              <div key={item} className="mini-card">
                <FiBriefcase />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHeading kicker="Skills" title="Core capabilities" />
          <div className="grid three">
            {SKILL_GROUPS.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeading kicker="Projects" title="Selected work" />
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="roadmap" className="section">
          <SectionHeading kicker="Roadmap" title="Learning and certifications" />

          <div className="grid two">
            <div className="card">
              <div className="card-icon">
                <FiAward />
              </div>
              <h3>Certification path</h3>
              <ul className="list">
                {ROADMAP.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="card-icon">
                <FiTerminal />
              </div>
              <h3>What I’m building next</h3>
              <ul className="list">
                <li>Better project case studies with screenshots and outcomes</li>
                <li>More PowerShell automation examples</li>
                <li>Security-focused lab work and documentation</li>
                <li>Deeper portfolio content for admin-to-cyber transition</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <SectionHeading kicker="Contact" title="Let’s connect" />

          <div className="contact-grid">
            <a className="contact-card" href={`mailto:${EMAIL}`}>
              <FiMail />
              <div>
                <strong>Email</strong>
                <span>{EMAIL}</span>
              </div>
            </a>

            <a className="contact-card" href={LINKEDIN} target="_blank" rel="noreferrer">
              <FiLinkedin />
              <div>
                <strong>LinkedIn</strong>
                <span>Professional profile</span>
              </div>
            </a>

            <a className="contact-card" href={GITHUB} target="_blank" rel="noreferrer">
              <FiGithub />
              <div>
                <strong>GitHub</strong>
                <span>Projects and source code</span>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
