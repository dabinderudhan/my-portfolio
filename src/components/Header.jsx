import React, { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <a href="#top" className="brand">
            <span className="brand-mark">
              D<span className="dot">.</span>UDHAN
            </span>
          </a>

          <nav className="nav">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                transform: mobileOpen ? "rotate(45deg) translate(5px,5px)" : "none",
              }}
            />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span
              style={{
                transform: mobileOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
