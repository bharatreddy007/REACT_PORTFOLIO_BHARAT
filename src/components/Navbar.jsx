import React, { useEffect, useState } from "react";
import "../assets/css/Navbar.css"; // Keep the CSS import

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [theme, setTheme] = useState("dark"); // State to manage the theme (dark by default)

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "WORK", href: "#work" },
    { label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply the selected theme to the body element
  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${theme}-mode`);
  }, [theme]);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <header className={isScrolled ? "navbar header-scrolled" : "navbar"}>
      <div className="nav-container">
        {/* Brand Logo */}
        <div className="brand-logo">
          <span className="logo-highlight">SAI Bharat</span>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
                {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu" onClick={() => setMenuVisible(!menuVisible)}>
          <span className="menu-icon">{menuVisible ? "✖" : "☰"}</span>
        </div>

        {/* Mobile Slide-in Menu */}
        <nav className={`mobile-nav ${menuVisible ? "active" : ""}`}>
          <ul className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <li key={index} className="mobile-nav-item" onClick={() => setMenuVisible(false)}>
                <a href={link.href} className="mobile-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>


      </div>
    </header>
  );
};

export default Navbar;
