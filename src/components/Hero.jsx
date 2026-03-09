import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from "react-icons/fi";
import { EMAIL, GITHUB, LINKEDIN, RESUME } from "../data";
import Terminal from "./Terminal";

function Hero() {
  return (
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
  );
}

export default Hero;
