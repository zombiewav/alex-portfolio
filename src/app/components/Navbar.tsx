import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? isDark
      ? "rgba(10,15,30,0.97)"
      : "rgba(255,255,255,0.97)"
    : "transparent";

  const navShadow = scrolled ? (isDark ? "0 1px 0 rgba(255,255,255,0.06)" : "0 1px 0 rgba(0,0,0,0.08)") : "none";
  const linkColor = scrolled ? (isDark ? "#cbd5e1" : "#475569") : "rgba(255,255,255,0.85)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: navBg, boxShadow: navShadow, backdropFilter: scrolled ? "blur(16px)" : "none" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)" }}
          >
            <span style={{ fontFamily: "monospace", fontWeight: 900, fontSize: "0.85rem", color: "white", letterSpacing: "-1px" }}>
              &lt;/&gt;
            </span>
          </div>
          <span
            style={{
              fontWeight: 800,
              fontSize: "1.1rem",
              color: scrolled ? (isDark ? "#f1f5f9" : "#0f172a") : "white",
            }}
          >
            Alex
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="text-sm transition-colors duration-200 hover:text-indigo-400"
              style={{ color: linkColor, fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: scrolled
                ? isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
                : "rgba(255,255,255,0.12)",
              color: scrolled ? (isDark ? "#94a3b8" : "#64748b") : "rgba(255,255,255,0.8)",
            }}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="px-5 py-2 rounded-full text-sm text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)", fontWeight: 600 }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: scrolled
                ? isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
                : "rgba(255,255,255,0.12)",
              color: scrolled ? (isDark ? "#94a3b8" : "#64748b") : "rgba(255,255,255,0.8)",
            }}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="transition-colors"
            style={{ color: scrolled ? (isDark ? "#f1f5f9" : "#334155") : "white" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: isDark ? "#0a0f1e" : "white",
            borderColor: isDark ? "#1e2d45" : "#f1f5f9",
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="text-sm transition-colors hover:text-indigo-400"
                style={{ color: isDark ? "#94a3b8" : "#475569", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
              className="px-5 py-2.5 rounded-full text-sm text-white text-center"
              style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)", fontWeight: 600 }}
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
