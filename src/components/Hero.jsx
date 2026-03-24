import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { EMAIL, GITHUB, LINKEDIN, RESUME } from "../data";
import Terminal from "./Terminal";

function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <div className="profile-photo-wrapper">
          <img
            src="/profile.jpeg"
            alt="Dabinder Udhan"
            className="profile-photo"
          />
        </div>

        <div className="status-badge">
          <span className="status-dot" />
          Currently Building &amp; Learning
        </div>

        <h1>
          Dabinder
          <br />
          <span className="gradient">Udhan</span>
          <span className="cursor-blink" />
        </h1>

        <p className="lead">
          L2 IT Administrator specializing in <strong>Microsoft 365</strong>,{" "}
          <strong>Intune</strong>, and <strong>Cybersecurity</strong>.
          Handling escalations, mentoring L1s, and building secure enterprise environments.
        </p>

        <div className="hero-tags">
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
          <a href={RESUME} className="btn btn-secondary" target="_blank" rel="noreferrer">
            <FiDownload /> Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      >
        <Terminal />
      </motion.div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
