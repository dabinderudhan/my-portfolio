import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

const EMAIL = "Dabinder.udhan@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/dabinderudhan/";
const GITHUB = "https://github.com/dabinderudhan";

function LoadingScreen() {
  return (
    <div className="loading">
      <div className="loading__card">
        <div className="loading__mark" aria-hidden="true">DU</div>
        <div className="loading__title">Dabinder Udhan</div>
        <div className="loading__subtitle">Loading portfolio…</div>
        <div className="loading__bar" aria-hidden="true">
          <div className="loading__barFill" />
        </div>
      </div>
    </div>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section__head">
          <h2>{title}</h2>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="app">
      <header className="header">
        <div className="container header__inner">
          <div className="brand">
            <div className="brand__mark" aria-hidden="true">DU</div>
            <div>
              <div className="brand__name">Dabinder Udhan</div>
              <div className="brand__tag">IT Admin • Microsoft 365 • Intune • Cybersecurity</div>
            </div>
          </div>

          <nav className="nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certs">Certs</a>
            <a href="#contact" className="btn btn--small">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="kicker">Automation-first IT • Security-minded delivery</p>
              <h1>Building reliable, secure Microsoft 365 & endpoint operations.</h1>
              <p className="lead">
                I’m an IT Administrator focused on <strong>Microsoft 365</strong>, <strong>Intune</strong>, and <strong>Entra ID</strong>,
                building toward <strong>Cybersecurity</strong>. I like clean SOPs, repeatable deployments, and security controls that are measurable.
              </p>

              <div className="cta">
                <a className="btn" href="#projects">View projects</a>
                <a className="btn btn--ghost" href={`mailto:${EMAIL}`}>Email me</a>
              </div>

              <div className="badges" aria-label="Highlights">
                <span className="badge">Intune enrollment & deployment</span>
                <span className="badge">M365 email security hardening</span>
                <span className="badge">PowerShell automation</span>
                <span className="badge">Documentation & SOPs</span>
              </div>

              <div className="linksRow">
                <a className="linkChip" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="linkChip" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>

            <aside className="card">
              <div className="card__title">Quick Info</div>
              <div className="card__content">
                <div className="kv">
                  <div className="kv__k">Role</div><div className="kv__v">IT Administrator</div>
                  <div className="kv__k">Focus</div><div className="kv__v">M365 • Intune • Entra • Security</div>
                  <div className="kv__k">Email</div><div className="kv__v"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
                  <div className="kv__k">LinkedIn</div><div className="kv__v"><a href={LINKEDIN} target="_blank" rel="noreferrer">/in/dabinderudhan</a></div>
                </div>
                <div className="divider" />
                <div className="muted small">
                  Open to: IT Admin / Endpoint / M365 / Security-focused roles
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Section
          id="about"
          title="About"
          subtitle="Practical IT operations with a security mindset."
        >
          <div className="grid grid--2">
            <div className="card">
              <div className="card__title">What I do</div>
              <div className="card__content">
                <ul className="list">
                  <li>Endpoint onboarding, standardization, and troubleshooting</li>
                  <li>Microsoft 365 administration (users, licensing, Exchange, Teams basics)</li>
                  <li>Intune/Entra workflows: enrollment, device readiness, compliance basics</li>
                  <li>Email security improvements (Defender for O365 policies and tuning)</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card__title">Where I’m heading</div>
              <div className="card__content">
                <p className="muted">
                  I’m building stronger cybersecurity foundations (defensive first), and I’m turning real admin work into
                  security outcomes: least privilege, safer email, secure device baselines, and better visibility.
                </p>
                <p className="muted small">
                  Education: BCA — Amity University Online (India)
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          title="Skills"
          subtitle="Tools and areas I work with regularly."
        >
          <div className="grid grid--2">
            <div className="card">
              <div className="card__title">Microsoft / Endpoint</div>
              <div className="card__content">
                <ul className="list">
                  <li>Microsoft 365 Admin Center</li>
                  <li>Intune (Windows/macOS): enrollment, app deployment basics</li>
                  <li>Entra ID (Azure AD): identity and access basics</li>
                  <li>Exchange Online: shared mailboxes, rules, forwarding</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card__title">Security / Automation</div>
              <div className="card__content">
                <ul className="list">
                  <li>Defender for O365 policies (Safe Links/Attachments, inbound/outbound tuning)</li>
                  <li>PowerShell scripting (learning + applying at work)</li>
                  <li>Process automation and reporting (scripts + dashboards)</li>
                  <li>Operational documentation (SOPs, ticket notes)</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="A few examples (replace/expand these with your real links anytime)."
        >
          <div className="grid grid--3">
            <div className="card">
              <div className="card__title">Intune Deployment SOP Pack</div>
              <div className="card__content">
                <p className="muted">
                  Standardized OOBE/pre-setup workflow: local admin, user profile prep, baseline apps, and enrollment checks.
                </p>
                <div className="tags">
                  <span className="tag">Intune</span><span className="tag">SOP</span><span className="tag">Deployment</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__title">Defender for O365 Hardening</div>
              <div className="card__content">
                <p className="muted">
                  Safe Links/Attachments, stricter inbound protections for executives, and outbound limits aligned to real usage.
                </p>
                <div className="tags">
                  <span className="tag">M365 Security</span><span className="tag">Defender</span><span className="tag">Exchange</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__title">Automation & Dashboards</div>
              <div className="card__content">
                <p className="muted">
                  Built scripts/automation to reduce manual work and provide reliable daily operational visibility.
                </p>
                <div className="tags">
                  <span className="tag">PowerShell</span><span className="tag">Automation</span><span className="tag">Reporting</span>
                </div>
              </div>
            </div>
          </div>

          <div className="note">
            Want these to be “real”? Add GitHub repo links/screenshots and I’ll convert each card into a proper case study section.
          </div>
        </Section>

        <Section
          id="certs"
          title="Certifications Roadmap"
          subtitle="What I’m actively preparing for."
        >
          <div className="timeline">
            <div className="timeline__item">
              <div className="timeline__dot" aria-hidden="true" />
              <div>
                <div className="timeline__title">MS-900 — Microsoft 365 Fundamentals</div>
                <div className="muted">Validates core Microsoft 365 concepts and administration basics.</div>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__dot" aria-hidden="true" />
              <div>
                <div className="timeline__title">CompTIA A+ → Network+ → Security+</div>
                <div className="muted">Solid fundamentals + stronger security baseline.</div>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__dot" aria-hidden="true" />
              <div>
                <div className="timeline__title">Cybersecurity specialization</div>
                <div className="muted">Defensive focus first, then deeper hands-on labs and offensive methodology.</div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="Best way to reach me:"
        >
          <div className="grid grid--2">
            <div className="card">
              <div className="card__title">Email</div>
              <div className="card__content">
                <p className="muted">
                  <a className="btn" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
                <p className="muted small">
                  Tip: You can add a resume file later and link it here.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card__title">Social</div>
              <div className="card__content">
                <ul className="list">
                  <li><strong>LinkedIn:</strong> <a href={LINKEDIN} target="_blank" rel="noreferrer">{LINKEDIN}</a></li>
                  <li><strong>GitHub:</strong> <a href={GITHUB} target="_blank" rel="noreferrer">{GITHUB}</a></li>
                  <li><strong>Website:</strong> dabinderudhan.com</li>
                </ul>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container footer__inner">
              <span>© {year} Dabinder Udhan</span>
              <span className="muted small">Built with React (CRA).</span>
            </div>
          </footer>
        </Section>
      </main>
    </div>
  );
}
