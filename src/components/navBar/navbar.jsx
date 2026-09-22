import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./navbar.css";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/skills" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nb-nav ${scrolled ? "nb-scrolled" : ""}`}>
        <div className="nb-inner">
          <NavLink to="/" className="nb-logo" onClick={closeMenu}>
            <span className="nb-logo-j">J</span>
            <span className="nb-logo-rest">J</span>
            <span className="nb-logo-dot">.</span>
          </NavLink>

          <div className="nb-links">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nb-link ${isActive ? "nb-link--active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="nb-controls">
            <a href="mailto:jayjathar.dev27@gmail.com" className="nb-hire-btn">
              Hire Me
            </a>

            <button
              className={`nb-burger ${menuOpen ? "nb-burger--open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`nb-mobile-overlay ${
          menuOpen ? "nb-mobile-overlay--open" : ""
        }`}
        onClick={closeMenu}
      />

      <div className={`nb-mobile ${menuOpen ? "nb-mobile--open" : ""}`}>
        <div className="nb-mobile-header">
          <span className="nb-logo">
            <span className="nb-logo-j">J</span>
            <span className="nb-logo-rest">J</span>
            <span className="nb-logo-dot">.</span>
          </span>
          <button className="nb-mobile-close" onClick={closeMenu}>
            ✕
          </button>
        </div>

        <div className="nb-mobile-links">
          {NAV_LINKS.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nb-mobile-link ${isActive ? "nb-mobile-link--active" : ""}`
              }
              onClick={closeMenu}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="nb-mobile-link-num">0{i + 1}</span>
              {item.label}
              <span className="nb-mobile-link-arrow">→</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
