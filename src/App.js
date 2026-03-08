import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiDownload,
} from "react-icons/fi";
import "./App.css";

const EMAIL = "Dabinder.udhan@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/dabinderudhan/";
const GITHUB = "https://github.com/dabinderudhan";

const PROJECTS = [
  {
    id: "intune",
    title: "Intune Deployment SOP",
    description:
      "Standardized device deployment workflow for faster onboarding and consistent endpoint configuration.",
    tags: ["Intune", "Entra ID", "SOP", "Endpoint"],
    details: [
      "Created a repeatable onboarding workflow for new and repurposed devices.",
      "Improved consistency for profile setup, app readiness, and enrollment checks.",
      "Reduced manual steps and deployment mistakes.",
    ],
  },
  {
    id: "security",
    title: "Email Security Hardening",
    description:
      "Improved Microsoft 365 email protection using Defender for O365 policies, Safe Links, and Safe Attachments.",
    tags: ["Defender for O365", "Exchange", "Security"],
    details: [
      "Strengthened inbound mail protection for higher-risk users.",
      "Improved spam and malicious link handling.",
      "Focused on safer email defaults and policy-based protection.",
    ],
  },
  {
    id: "automation",
    title: "Automation Dashboard",
    description:
      "Built scripts and dashboards to reduce repetitive operational work and improve visibility.",
    tags: ["PowerShell", "Automation", "Reporting"],
    details: [
      "Reduced repetitive manual work through automation.",
      "Improved reporting consistency and daily visibility.",
      "Made recurring processes easier to maintain.",
    ],
  },
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
    const chars =
      "01<>/$#{}[]=+*%ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

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
      ctx.fillStyle = "rgba(7, 16, 24, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "rgba(74, 222, 128, 0.22)";
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

  return <canvas ref={canvasRef} className="matrixCanvas" aria-hidden="true" />;
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
    "Available commands: help, about, skills, projects, contact, linkedin, github, clear",
  ]);
  const [command, setCommand] = useState("");
  const inputRef = useRef(null);

  const introText = useTypewriter(
    [
      "dabinder@portfolio:~$ whoami",
      "IT Administrator | Microsoft 365 | Intune | Entra ID",
      "dabinder@portfolio:~$ focus",
      "Automation-first operations + security-minded delivery",
      "dabinder@portfolio:~$ next",
      "Cybersecurity (defensive -> offensive)",
    ],
    18,
    300
  );

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    let output = [];

    switch (cmd) {
      case "help":
        output = [
          "Available commands: help, about, skills, projects, contact, linkedin, github, clear",
        ];
        break;
      case "about":
        output = [
          "IT Administrator focused on Microsoft 365, Intune, Entra ID, automation, and cybersecurity growth.",
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runCommand(command);
    setCommand("");
  };

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminalTop">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminalTitle">interactive-terminal</span>
      </div>

      <pre className="terminalIntro">
        {introText}
        <span className="cursor">▍</span>
      </pre>

      <div className="terminalDivider" />

      <div className="terminalHistory">
        {history.map((line, index) => (
          <div key={`${line}-${index}`} className="terminalLine">
            {line}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="terminalForm">
          <span className="terminalPrompt">dabinder@portfolio:~$</span>
          <input
            ref={inputRef}
            className="terminalInput"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            autoComplete="off"
            spellCheck="false"
            aria-label="Terminal command input"
          />
        </form>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      className="card projectCard"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.35 }}
    >
      <div className="projectGlow" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <ul className="projectDetails">
        {project.details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="app">
      <MatrixBackground />

      <header className="header">
        <div className="container nav">
          <div className="logoWrap">
            <div className="logo">DU</div>
            <div>
              <div className="name">Dabinder Udhan</div>
              <div className="role">IT Admin • M365 • Intune • Cybersecurity</div>
            </div>
          </div>

          <nav className="navLinks">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container heroGrid">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow">Automation-first • Security-minded • Modern IT</p>
              <h1>
                Building reliable Microsoft 365 and endpoint operations with a
                growing cybersecurity focus.
              </h1>
              <p className="subtitle">
                I work on device deployment, identity, email security,
                documentation, and automation that reduces manual work and
                improves consistency.
              </p>

              <div className="heroButtons">
                <a
                  className="btn"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin /> LinkedIn
                </a>

                <a className="btnOutline" href={`mailto:${EMAIL}`}>
                  <FiMail /> Email
                </a>

                <a
                  className="btnOutline"
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub /> GitHub
                </a>

                <a
                  className="btnOutline"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiDownload /> Resume
                </a>
              </div>

              <div className="miniBadges">
                <span>Intune</span>
                <span>Entra ID</span>
                <span>Exchange Online</span>
                <span>Defender for O365</span>
                <span>PowerShell</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Terminal />
            </motion.div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About</h2>
            <div className="gridTwo">
              <div className="card">
                <h3>What I do</h3>
                <p>
                  I am an IT Administrator focused on Microsoft 365, Intune,
                  Entra ID, endpoint operations, security controls, and process
                  standardization.
                </p>
              </div>

              <div className="card">
                <h3>What I’m building toward</h3>
                <p>
                  My direction is cybersecurity. I’m building from practical IT
                  administration into stronger defensive security, automation,
                  and hands-on technical depth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section sectionAlt">
          <div className="container">
            <h2>Skills</h2>
            <div className="gridThree">
              <motion.div
                className="card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3>Microsoft</h3>
                <ul>
                  <li>Microsoft 365</li>
                  <li>Intune</li>
                  <li>Entra ID</li>
                  <li>Exchange Online</li>
                </ul>
              </motion.div>

              <motion.div
                className="card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
              >
                <h3>Security</h3>
                <ul>
                  <li>Defender for O365</li>
                  <li>Email Security</li>
                  <li>Least Privilege</li>
                  <li>Policy Hardening</li>
                </ul>
              </motion.div>

              <motion.div
                className="card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
              >
                <h3>Automation</h3>
                <ul>
                  <li>PowerShell</li>
                  <li>Automation Scripts</li>
                  <li>Reporting</li>
                  <li>Process Optimization</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Projects</h2>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="sectionLink"
              >
                <FiExternalLink /> View GitHub
              </a>
            </div>

            <div className="gridThree">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section sectionAlt">
          <div className="container">
            <h2>Contact</h2>
            <div className="gridTwo">
              <div className="card">
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
              </div>

              <div className="card">
                <h3>Links</h3>
                <p>
                  <a href={LINKEDIN} target="_blank" rel="noreferrer">
                    <FiLinkedin /> LinkedIn
                  </a>
                </p>
                <p>
                  <a href={GITHUB} target="_blank" rel="noreferrer">
                    <FiGithub /> GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© {year} Dabinder Udhan</footer>
    </div>
  );
}

export default App;
