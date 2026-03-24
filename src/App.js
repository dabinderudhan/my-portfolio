import React, { useEffect, useState } from "react";
import { FiAward, FiBriefcase, FiMail, FiGithub, FiLinkedin, FiTerminal, FiExternalLink } from "react-icons/fi";
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
  CYBER_LABS,
  BLOG_POSTS,
  TOOLS,
  ROADMAP,
  SKILL_GROUPS,
} from "./data";

/* ── GitHub Activity (public API, no auth needed) ── */
function GitHubActivity() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/dabinderudhan/events/public?per_page=6")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setEvents(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatEvent = (e) => {
    const repo = e.repo?.name?.split("/")[1] || e.repo?.name || "";
    switch (e.type) {
      case "PushEvent": return `Pushed ${e.payload?.commits?.length || 1} commit(s) to ${repo}`;
      case "CreateEvent": return `Created ${e.payload?.ref_type || "repo"} in ${repo}`;
      case "DeleteEvent": return `Deleted ${e.payload?.ref_type || "branch"} in ${repo}`;
      case "WatchEvent": return `Starred ${repo}`;
      case "ForkEvent": return `Forked ${repo}`;
      case "IssuesEvent": return `${e.payload?.action || "Updated"} issue in ${repo}`;
      case "PullRequestEvent": return `${e.payload?.action || "Updated"} PR in ${repo}`;
      default: return `Activity in ${repo}`;
    }
  };

  const timeAgo = (d) => {
    const mins = Math.floor((Date.now() - new Date(d)) / 60000);
    if (mins < 60) return `${mins}m ago`;
    if (mins < 1440) return `${Math.floor(mins / 60)}h ago`;
    return `${Math.floor(mins / 1440)}d ago`;
  };

  if (loading) return <div className="github-loading">Loading GitHub activity...</div>;
  if (!events.length) return <div className="github-loading">No recent activity found.</div>;

  return (
    <div className="github-feed">
      {events.map((e, i) => (
        <FadeIn key={e.id} delay={0.05 + i * 0.05}>
          <div className="github-event">
            <div className="ge-dot" />
            <div className="ge-content">
              <span className="ge-text">{formatEvent(e)}</span>
              <span className="ge-time">{timeAgo(e.created_at)}</span>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

/* ── Tool Category Colors ── */
const catColors = {
  Cloud: { bg: "rgba(56,189,248,0.1)", color: "#38bdf8", border: "rgba(56,189,248,0.15)" },
  Security: { bg: "rgba(239,68,68,0.1)", color: "#f87171", border: "rgba(239,68,68,0.15)" },
  Infrastructure: { bg: "rgba(129,140,248,0.1)", color: "#a5b4fc", border: "rgba(129,140,248,0.15)" },
  Scripting: { bg: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "rgba(251,191,36,0.15)" },
};

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
                I'm an L2 IT Administrator focused on <strong>Microsoft 365, Intune,
                Entra ID, endpoint operations, security controls,</strong> and{" "}
                <strong>process standardization</strong>. Recently promoted to handle
                escalated issues, mentor L1 team members, and take on deeper
                M365 administration responsibilities.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="about-text">
                My direction is <strong>cybersecurity</strong>. I'm building from
                practical IT administration into stronger defensive security,
                automation, and hands-on technical depth — working toward{" "}
                <strong>CompTIA Security+</strong> and advanced Microsoft
                certifications through my own <strong>cyberlab.local</strong> home lab.
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
          <SectionHeading kicker="Technical Skills" title="Core Capabilities" />
          <div className="skills-grid">
            {SKILL_GROUPS.map((group, i) => (
              <SkillCard key={group.title} group={group} delay={0.08 + i * 0.06} />
            ))}
          </div>
        </section>

        {/* ═══════ TOOLS ═══════ */}
        <section id="tools" className="section">
          <SectionHeading kicker="Toolbox" title="Tools & Platforms I Use" />
          <div className="tools-grid">
            {Object.entries(
              TOOLS.reduce((acc, t) => {
                (acc[t.category] = acc[t.category] || []).push(t);
                return acc;
              }, {})
            ).map(([cat, tools], ci) => {
              const colors = catColors[cat] || catColors.Cloud;
              return (
                <FadeIn key={cat} delay={0.08 + ci * 0.06}>
                  <div className="tools-category-card">
                    <h3 className="tools-cat-title">
                      <span className="tools-cat-dot" style={{ background: colors.color }} />
                      {cat}
                    </h3>
                    <div className="tools-list">
                      {tools.map((t) => (
                        <span
                          key={t.name}
                          className="tool-chip"
                          style={{
                            background: colors.bg,
                            color: colors.color,
                            borderColor: colors.border,
                          }}
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
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

        {/* ═══════ CYBER LAB ═══════ */}
        <section id="cyberlab" className="section">
          <SectionHeading kicker="Cyber Lab" title="Hands-On Security Projects" />

          <FadeIn delay={0.05}>
            <p className="cyberlab-intro">
              Documenting my journey from IT administration into cybersecurity through
              practical, hands-on lab work on my <strong>cyberlab.local</strong> network.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <a href="/cyberlab.html" className="command-center-btn">
              <span className="ccb-icon">🛡</span>
              <div className="ccb-content">
                <strong>Launch CyberLab Command Center</strong>
                <span>Full dashboard — lab tracker, roadmap, skill board, cert progress, career intel & more</span>
              </div>
              <span className="ccb-arrow">→</span>
            </a>
          </FadeIn>

          <FadeIn delay={0.14}>
            <a href="/network.html" className="command-center-btn" style={{ borderColor: "rgba(59,130,246,0.2)", background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(129,140,248,0.06))" }}>
              <span className="ccb-icon" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(129,140,248,0.1))" }}>🌐</span>
              <div className="ccb-content">
                <strong>Interactive Network Diagram</strong>
                <span>Explore cyberlab.local — DC01, WIN10-CLIENT01, Kali — click machines for specs &amp; services</span>
              </div>
              <span className="ccb-arrow">→</span>
            </a>
          </FadeIn>

          <div className="cyberlab-grid">
            {CYBER_LABS.map((lab, i) => (
              <FadeIn key={lab.id} delay={0.15 + i * 0.08}>
                <article className="lab-card">
                  <div className="lab-card-header">
                    <span className={`lab-status ${lab.status}`}>
                      {lab.status === "completed" ? "Completed" : lab.status === "in-progress" ? "In Progress" : "Coming Soon"}
                    </span>
                    <span className="lab-difficulty">{lab.difficulty}</span>
                  </div>
                  <h3>{lab.title}</h3>
                  <p className="lab-subtitle">{lab.subtitle}</p>
                  <p className="lab-description">{lab.description}</p>
                  <div className="lab-tools">
                    {lab.tools.map((tool) => (
                      <span key={tool} className="lab-tool">{tool}</span>
                    ))}
                  </div>
                  {lab.link && (
                    <a href={lab.link} target="_blank" rel="noreferrer" className="inline-link" style={{ marginTop: 16 }}>
                      View Write-Up →
                    </a>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ═══════ BLOG ═══════ */}
        <section id="blog" className="section">
          <SectionHeading kicker="Blog" title="Write-Ups & Insights" />
          <FadeIn delay={0.05}>
            <p className="cyberlab-intro">
              Sharing what I learn — lab walkthroughs, troubleshooting wins, security findings,
              and lessons from the admin-to-cyber journey.
            </p>
          </FadeIn>
          <div className="blog-grid">
            {BLOG_POSTS.map((post, i) => (
              <FadeIn key={post.id} delay={0.1 + i * 0.08}>
                <article className="blog-card">
                  <div className="blog-card-top">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="blog-footer">
                    {post.status === "draft" ? (
                      <span className="blog-draft-badge">Coming Soon</span>
                    ) : (
                      <a href={`/blog/${post.id}`} className="inline-link">
                        Read More <FiExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ═══════ GITHUB ACTIVITY ═══════ */}
        <section id="github-activity" className="section">
          <SectionHeading kicker="GitHub" title="Recent Activity" />
          <FadeIn delay={0.1}>
            <div className="github-card">
              <div className="github-card-header">
                <FiGithub size={20} />
                <span>@dabinderudhan</span>
                <a href={GITHUB} target="_blank" rel="noreferrer" className="github-profile-link">
                  View Profile <FiExternalLink size={12} />
                </a>
              </div>
              <GitHubActivity />
            </div>
          </FadeIn>
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
                    "Blog write-ups for each completed lab",
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
              Interested in collaborating or have an opportunity? I'd love to hear from you.
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
