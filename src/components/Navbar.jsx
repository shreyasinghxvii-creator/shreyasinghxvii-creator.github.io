import { useState } from "react";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((previous) => !previous);
  }

  return (
    <header className="site-header">
      <div className="container nav-container">
        {/* Personal brand */}
        <a
          className="brand-mark"
          href="#home"
          onClick={closeMenu}
          aria-label="Shreya Singh — Home"
        >
          <span className="brand-mark__symbol" aria-hidden="true">
            SS
          </span>

          <span className="brand-mark__text">
            <strong>Shreya Singh</strong>
            <small>B.SC. IT STUDENT</small>
          </span>
        </a>

        {/* Mobile navigation toggle */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>

        {/* Main navigation */}
        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's connect
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
