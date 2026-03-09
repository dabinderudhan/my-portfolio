import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiDownload,
  FiShield,
  FiCpu,
  FiTool,
  FiAward,
  FiBriefcase,
  FiTerminal,
} from "react-icons/fi";
import "./App.css";

const EMAIL = "Dabinder.udhan@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/dabinderudhan/";
const GITHUB = "https://github.com/dabinderudhan";
const RESUME = "#"; // replace with your resume link or PDF path

const SKILL_GROUPS = [
  {
    title: "Microsoft Stack",
    icon: <FiCpu />,
    items: [
      "Microsoft 365",
      "Intune",
      "Entra ID",
      "Exchange Online",
      "Teams Admin",
      "Endpoint Deployment",
    ],
  },
  {
    title: "Security",
    icon: <FiShield />,
    items: [
      "Defender for Office 365",
      "Email Security",
      "Policy Hardening",
      "Least Privilege",
      "Secure Configuration",
      "Operational Security",
    ],
  },
  {
    title: "Automation",
    icon: <FiTool />,
    items: [
      "PowerShell",
      "Task Automation",
      "Reporting",
      "Process Standardization",
      "SOP Documentation",
      "Workflow Improvement",
    ],
  },
];

const PROJECTS = [
  {
    id: "intune",
    title: "Intune Deployment SOP",
    subtitle: "Standardized endpoint onboarding workflow",
    impact: "Reduced deployment inconsistency and made onboarding easier to repeat.",
    tags: ["Intune", "Entra ID", "Endpoint", "SOP"],
    bullets: [
      "Built a repeatable process for new and repurposed Windows devices.",
      "Improved app readiness, profile setup, and enrollment consistency.",
      "Reduced manual setup mistakes with clearer operational steps.",
    ],
    links: [
      { label: "GitHub", href: GITHUB },
    ],
  },
  {
    id: "security",
    title: "Email Security Hardening",
    subtitle: "Safer Microsoft 365 email defaults",
    impact: "Improved protection posture for risky users and everyday mail flow.",
    tags: ["Defender for O365", "Exchange Online", "Security"],
    bullets: [
      "Configured safer inbound protection and stricter policy handling.",
      "Strengthened malicious link and attachment controls.",
      "Focused on practical tenant hardening with policy-based protection.",
    ],
    links: [
      { label: "GitHub", href: GITHUB },
    ],
  },
  {
    id: "automation",
    title: "Automation Dashboard",
    subtitle: "Operational visibility through scripting",
    impact: "Reduced repetitive work and improved reporting consistency.",
    tags: ["PowerShell", "Automation", "Reporting"],
    bullets: [
      "Built scripts and dashboard-style workflows for recurring operational tasks.",
      "Improved visibility and consistency across day-to-day support processes.",
      "Made repetitive actions easier to maintain and reuse.",
    ],
    links: [
      { label: "GitHub", href: GITHUB },
    ],
  },
];

const EXPERIENCE = [
  "IT administration across Microsoft 365, endpoint operations, user support, and process standardization.",
  "Hands-on work with Intune enrollment, device setup, onboarding workflows, and operational documentation.",
  "Security-minded administration with focus on email protection, policy configuration, and safer defaults.",
  "Growing practical depth in automation, PowerShell, and cybersecurity-oriented workflows.",
];

const ROADMAP = [
  "MS-900",
  "CompTIA A+",
  "Network+",
  "Security+",
  "PowerShell scripting",
  "Cybersecurity labs and defensive security projects",
];

function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const fontSize = 14;
    const chars = "01<>/$#{}[]=+*%ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(0);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(0);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(3, 10, 18, 0.10)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(34, 197, 94, 0.18)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i += 1) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 1;
      }

      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-bg" aria-hidden="true" />;
}

function useTypewriter(lines, speed = 18, linePause = 350) {
  const [text, setText] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function run() {
      let output = "";
      for (let i = 0; i < lines.length; i += 1) {
        const line = lines[i];
        for (let j = 0; j < line.length; j += 1) {
          if (cancelled) return;
          output += line[j];
          setText(output);
          // eslint-disable-next-line no-await-in-loop
          await new Promise((resolve) => setTimeout(resolve, speed));
        }

        if (i !== lines.length - 1) {
          output += "\n";
          setText(output);
          // eslint-disable-next-line no-await-in-loop
          await new Promise((resolve) => setTimeout(resolve, linePause));
        }
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [lines, speed, linePause]);

  return text;
}

function Terminal() {
  const [history, setHistory] = useState([
    "dabinder@portfolio:~$ help",
    "Commands: help, about, skills, projects, certs, experience, contact, linkedin, github, resume, clear",
  ]);
  const [command, setCommand] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandLog, setCommandLog] = useState([]);
  const inputRef = useRef(null);

  const introText = useTypewriter(
    [
      "dabinder@portfolio:~$ whoami",
      "IT Administrator | Microsoft 365 | Intune | Entra ID",
      "dabinder@portfolio:~$ focus",
      "Automation-first operations + security-minded delivery",
      "dabinder@portfolio:~$ next",
      "Cybersecurity growth through hands-on admin, defense, and scripting",
    ],
    16,
    280
  );

  const commands = useMemo(
    () => ["help", "about", "skills", "projects", "certs", "experience", "contact", "linkedin", "github", "resume", "clear"],
    []
  );

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    let output = [];

    switch (cmd) {
      case "help":
        output = [
          "Commands: help, about, skills, projects, certs, experience, contact, linkedin, github, resume, clear",
        ];
        break;
      case "about":
        output = [
          "IT Administrator focused on Microsoft 365, Intune, Entra ID, endpoint operations, automation, and cybersecurity growth.",
        ];
        break;
      case "skills":
        output = [
          "Microsoft 365, Intune, Entra ID, Exchange Online, Defender for O365, PowerShell, SOPs, automation",
        ];
        break;
      case "projects":
        output = [
          "1. Intune Deployment SOP",
          "2. Email Security Hardening",
          "3. Automation Dashboard",
        ];
        break;
      case "certs":
        output = ["MS-900, CompTIA A+, Network+, Security+, PowerShell"];
        break;
      case "experience":
        output = [
          "IT administration, endpoint setup, Microsoft 365 operations, documentation, security-minded support",
        ];
        break;
      case "contact":
        output = [EMAIL, LINKEDIN];
        break;
      case "linkedin":
        window.open(LINKEDIN, "_blank", "noopener,noreferrer");
        output = ["Opening LinkedIn..."];
        break;
      case "github":
        window.open(GITHUB, "_blank", "noopener,noreferrer");
        output = ["Opening GitHub..."];
        break;
      case "resume":
        if (RESUME !== "#") {
          window.open(RESUME, "_blank", "noopener,noreferrer");
          output = ["Opening resume..."];
        } else {
          output = ["Resume link not added yet."];
        }
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        output = [""];
        break;
      default:
        output = [`Command not found: ${cmd}`];
    }

    setHistory((prev) => [...prev, `dabinder@portfolio:~$ ${cmd}`, ...output]);
    setCommandLog((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runCommand(command);
    setCommand("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!commandLog.length) return;
      const nextIndex =
        historyIndex === -1 ? commandLog.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setCommand(commandLog[nextIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!commandLog.length) return;

      if (historyIndex === -1) return;

      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandLog.length) {
        setHistoryIndex(-1);
        setCommand("");
      } else {
        setHistoryIndex(nextIndex);
        setCommand(commandLog[nextIndex]);
      }
    }
  };

  return (
    <div
      className="terminal"
      onClick={() => inputRef.current?.focus()}
      role="button"
      tabIndex={0}
    >
      <div className="terminal-header">
        <span />
        <span />
        <span />
      </div>

      <pre className="terminal-intro">
        {introText}
        <span className="cursor">▍</span>
      </pre>

      <div className="terminal-suggestions">
        {commands.map((item) => (
          <button
            key={item}
            type="button"
            className="command-chip"
            onClick={() => runCommand(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="terminal-history">
        {history.map((line, index) => (
          <div key={`${line}-${index}`} className="terminal-line">
            {line}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="terminal-form">
        <span className="terminal-prompt">dabinder@portfolio:~$</span>
        <input
          ref={inputRef}
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
          aria-label="Terminal command input"
          className="terminal-input"
        />
      </form>
    </div>
  );
}

function SkillCard({ group }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
    >
      <div className="card-icon">{group.icon}</div>
      <h3>{group.title}</h3>
      <ul className="list">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
    >
      <div className="project-top">
        <div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <span className="project-impact">{project.impact}</span>
      </div>

      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <ul className="list">
        {project.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-links">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            {link.label} <FiExternalLink />
          </a>
        ))}
      </div>
    </motion.article>
  );
}

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
      <MatrixBackground />

      <header className="site-header">
        <a href="#top" className="brand">
          <span className="brand-badge">DU</span>
          <div>
            <strong>Dabinder Udhan</strong>
            <span>IT Admin • M365 • Intune • Cybersecurity</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top" className="container">
        <section className="hero">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow">Automation-first • Security-minded • Modern IT</div>
            <h1>
              Building reliable Microsoft 365 and endpoint operations with a growing
              cybersecurity focus.
            </h1>
            <p className="lead">
              I work on device deployment, identity, email security, documentation,
              and automation that reduces manual work and improves consistency.
            </p>

            <div className="hero-highlights">
              <span>Microsoft 365</span>
              <span>Intune</span>
              <span>Entra ID</span>
              <span>Exchange Online</span>
              <span>Defender for O365</span>
              <span>PowerShell</span>
            </div>

            <div className="cta-row">
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn btn-primary">
                <FiLinkedin /> LinkedIn
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btn-secondary">
                <FiMail /> Email
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <FiGithub /> GitHub
              </a>
              <a href={RESUME} className="btn btn-secondary">
                <FiDownload /> Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-terminal"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Terminal />
          </motion.div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span className="section-kicker">About</span>
            <h2>What I do</h2>
          </div>

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
          <div className="section-heading">
            <span className="section-kicker">Skills</span>
            <h2>Core capabilities</h2>
          </div>

          <div className="grid three">
            {SKILL_GROUPS.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span className="section-kicker">Projects</span>
            <h2>Selected work</h2>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="roadmap" className="section">
          <div className="section-heading">
            <span className="section-kicker">Roadmap</span>
            <h2>Learning and certifications</h2>
          </div>

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
          <div className="section-heading">
            <span className="section-kicker">Contact</span>
            <h2>Let’s connect</h2>
          </div>

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

      <footer className="site-footer">
        <p>© {year} Dabinder Udhan</p>
      </footer>
    </div>
  );
}

export default App;
