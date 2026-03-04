import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMoon, FiSun, FiExternalLink } from "react-icons/fi";
import "./App.css";

const EMAIL = "Dabinder.udhan@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/dabinderudhan/";
const GITHUB = "https://github.com/dabinderudhan";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function useTypewriter(lines, speed = 22, linePause = 450) {
  const [text, setText] = useState("");
  useEffect(() => {
    let cancelled = false;
    (async () => {
      let out = "";
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (let j = 0; j < line.length; j++) {
          if (cancelled) return;
          out += line[j];
          setText(out);
          await new Promise((r) => setTimeout(r, speed));
        }
        if (i !== lines.length - 1) {
          out += "\n";
          setText(out);
          await new Promise((r) => setTimeout(r, linePause));
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [lines, speed, linePause]);
  return text;
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="sectionHead">
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tags, link, onOpen }) {
  return (
    <motion.article variants={fadeUp} className="card cardHover">
      <div className="cardTitleRow">
        <h3 className="cardTitle">{title}</h3>
        <div className="cardActions">
          {link ? (
            <a className="iconBtn" href={link} target="_blank" rel="noreferrer" aria-label="Open link">
              <FiExternalLink />
            </a>
          ) : null}
          <button className="iconBtn" onClick={onOpen} aria-label="Open details">
            Details
          </button>
        </div>
      </div>
      <p className="muted">{desc}</p>
      <div className="tags">
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function Modal({ open, title, children, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="modalBackdrop" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modalHead">
          <div className="modalTitle">{title}</div>
          <button className="iconBtn" onClick={onClose}>Close</button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [theme, setTheme] = useState(() => localStorage.getItem("du_theme") || "dark");
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("du_theme", theme);
  }, [theme]);

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

  const terminalText = useTypewriter(
    [
      "dabinder@portfolio:~$ whoami",
      "IT Administrator | Microsoft 365 | Intune | Entra ID",
      "dabinder@portfolio:~$ focus",
      "Automation-first operations + security-minded delivery",
      "dabinder@portfolio:~$ next",
      "Cybersecurity (defensive → offensive) + hands-on labs",
    ],
    18,
    320
  );

  const projects = [
    {
      id: "intune",
      title: "Intune Deployment SOP Pack",
      desc: "Standardized device onboarding flow for consistent endpoints: OOBE + baseline apps + enrollment checks.",
      tags: ["Intune", "Entra ID", "SOP", "Endpoint"],
      details: (
        <ul className="list">
          <li>Consistent pre-setup workflow for new/repurposed devices</li>
          <li>Baseline app installs + enrollment verification mindset</li>
          <li>Built to reduce manual errors and speed up deployment</li>
        </ul>
      ),
    },
    {
      id: "mdo",
      title: "Defender for O365 Hardening",
      desc: "Improved email security posture: Safe Links/Attachments, inbound strictness for exec users, outbound controls.",
      tags: ["Defender for O365", "Exchange", "Security"],
      details: (
        <ul className="list">
          <li>Policy tuning for standard vs strict user groups</li>
          <li>Lower tolerance to spam/bulk based on org usage</li>
          <li>Goal: measurable reduction in risky mail delivery</li>
        </ul>
      ),
    },
    {
      id: "auto",
      title: "Automation & Dashboards",
      desc: "Reduced repetitive manual work using scripts and reporting — focused on operational visibility and consistency.",
      tags: ["PowerShell", "Automation", "Reporting"],
      details: (
        <ul className="list">
          <li>Automation mindset: repeatable workflows, minimal clicks</li>
          <li>Tracking + reporting to support better decisions</li>
          <li>Security angle: fewer manual mistakes, more consistency</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="#top" aria-label="Home">
            <div className="brandMark">DU</div>
            <div className="brandText">
              <div className="brandName">Dabinder Udhan</div>
              <div className="brandTag">IT Admin • M365 • Intune • Cybersecurity</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certs">Certs</a>
            <a href="#contact" className="btnSmall">Contact</a>

            <button
              className="iconBtn"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container heroInner">
            <motion.div initial="hidden" animate="show" variants={fadeUp} className="heroLeft">
              <div className="kicker">Security-minded • Automation-first • Clean ops</div>
              <h1 className="heroTitle">
                Modern IT operations for <span className="gradText">secure endpoints</span> and <span className="gradText">Microsoft 365</span>.
              </h1>
              <p className="heroLead">
                I build repeatable deployment workflows, tighten identity + email security controls, and automate the boring stuff.
                Growing toward cybersecurity through labs, fundamentals, and real-world admin hardening.
              </p>

              <div className="heroCTA">
                <a className="btn" href="#projects">View Projects</a>
                <a className="btnGhost" href={`mailto:${EMAIL}`}><FiMail /> Email</a>
                <a className="btnGhost" href={LINKEDIN} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
                <a className="btnGhost" href={GITHUB} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              </div>

              <div className="pills">
                <Pill>Intune / Autopilot</Pill>
                <Pill>Entra ID</Pill>
                <Pill>Exchange Online</Pill>
                <Pill>Defender for O365</Pill>
                <Pill>PowerShell</Pill>
              </div>
            </motion.div>

            <motion.aside initial="hidden" animate="show" variants={fadeUp} className="terminal">
              <div className="terminalTop">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminalTitle">terminal</span>
              </div>
              <pre className="terminalBody">
{terminalText}
<span className="cursor">▍</span>
              </pre>
            </motion.aside>
          </div>
        </section>

        {/* ABOUT */}
        <Section
          id="about"
          title="About"
          subtitle="I like clear SOPs, secure defaults, and systems that don’t need babysitting."
        >
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="grid2">
            <div className="card">
              <h3 className="cardTitle">What I do</h3>
              <ul className="list">
                <li>Endpoint onboarding + standardization (Windows/macOS)</li>
                <li>M365 admin work: identity, licensing, Exchange workflows</li>
                <li>Security hardening mindset: least privilege + strong policies</li>
                <li>Automation: PowerShell + repeatable processes</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="cardTitle">What I’m doing now</h3>
              <ul className="list">
                <li>Improving deployment reliability (Intune/Autopilot)</li>
                <li>Strengthening email security controls and monitoring</li>
                <li>Building cybersecurity foundations (defensive first)</li>
                <li>Turning daily IT work into security outcomes</li>
              </ul>
            </div>
          </motion.div>
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          title="Skills"
          subtitle="Tools I use and topics I’m focused on."
        >
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="grid2">
            <div className="card">
              <h3 className="cardTitle">Microsoft / Endpoint</h3>
              <div className="skillGrid">
                <span>Microsoft 365 Admin</span>
                <span>Intune (Windows/macOS)</span>
                <span>Entra ID (Azure AD)</span>
                <span>Exchange Online</span>
                <span>Teams basics</span>
                <span>SharePoint permissions (admin)</span>
              </div>
            </div>

            <div className="card">
              <h3 className="cardTitle">Security / Automation</h3>
              <div className="skillGrid">
                <span>Defender for O365</span>
                <span>Mail flow rules + safe links/attachments</span>
                <span>Least privilege mindset</span>
                <span>PowerShell scripting</span>
                <span>Operational reporting</span>
                <span>Documentation (SOPs)</span>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          title="Projects"
          subtitle="Short, real-world work examples. Click details."
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
            className="grid3"
          >
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                desc={p.desc}
                tags={p.tags}
                onOpen={() => setActiveModal(p)}
              />
            ))}
          </motion.div>

          <div className="note">
            Want it even better? Add your real project links (GitHub, PDFs, screenshots) and I’ll turn each into a case study page.
          </div>
        </Section>

        {/* CERTS */}
        <Section
          id="certs"
          title="Certifications Roadmap"
          subtitle="What I’m preparing for next."
        >
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="timeline">
            <div className="tlItem">
              <div className="tlDot" />
              <div>
                <div className="tlTitle">MS-900 — Microsoft 365 Fundamentals</div>
                <div className="muted">M365 foundations + admin concepts.</div>
              </div>
            </div>
            <div className="tlItem">
              <div className="tlDot" />
              <div>
                <div className="tlTitle">CompTIA A+ → Network+ → Security+</div>
                <div className="muted">Strong fundamentals + security baseline.</div>
              </div>
            </div>
            <div className="tlItem">
              <div className="tlDot" />
              <div>
                <div className="tlTitle">Cybersecurity specialization</div>
                <div className="muted">Defensive first → more labs → offensive methodology.</div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          title="Contact"
          subtitle="Best way to reach me:"
        >
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="grid2">
            <div className="card">
              <h3 className="cardTitle">Email</h3>
              <p className="muted">Fastest response: email me directly.</p>
              <a className="btn" href={`mailto:${EMAIL}`}><FiMail /> {EMAIL}</a>
            </div>

            <div className="card">
              <h3 className="cardTitle">Links</h3>
              <div className="linkList">
                <a className="linkRow" href={LINKEDIN} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
                <a className="linkRow" href={GITHUB} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              </div>
            </div>
          </motion.div>

          <footer className="footer">
            <div className="container footerInner">
              <span>© {year} Dabinder Udhan</span>
              <span className="muted">React • Framer Motion</span>
            </div>
          </footer>
        </Section>
      </main>

      <Modal
        open={!!activeModal}
        title={activeModal?.title}
        onClose={() => setActiveModal(null)}
      >
        {activeModal?.details}
      </Modal>
    </div>
  );
}
