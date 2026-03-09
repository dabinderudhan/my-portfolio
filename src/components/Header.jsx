import React from "react";

function Header() {
  return (
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
  );
}

export default Header;
