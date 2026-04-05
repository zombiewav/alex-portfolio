import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const servicesList = [
  "Frontend Development",
  "Backend Development",
  "Mobile Apps",
  "WordPress",
  "Social Media Management",
  "Virtual Assistant",
];

export function Footer() {
  const { isDark } = useTheme();

  const footerBg = isDark ? "#060c18" : "#0f172a";
  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.06)";

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: footerBg }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)" }}
              >
                <span style={{ fontFamily: "monospace", fontWeight: 900, fontSize: "0.85rem", color: "white", letterSpacing: "-1px" }}>
                  &lt;/&gt;
                </span>
              </div>
              <span style={{ color: "white", fontWeight: 800, fontSize: "1.1rem" }}>Alex</span>
            </div>
            <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.7 }} className="mb-6">
              Full-Stack Developer & Virtual Assistant helping businesses build, manage, and grow through remote support.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-indigo-600"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <Icon size={15} style={{ color: "#64748b" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ color: "white", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{ color: "#64748b", fontSize: "0.875rem" }}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ color: "white", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {servicesList.map((s) => (
                <li key={s}>
                  <span style={{ color: "#64748b", fontSize: "0.875rem" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p style={{ color: "white", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-4">
              Start a Project
            </p>
            <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.7 }} className="mb-4">
              Ready to delegate and focus on what matters most?
            </p>
            <a
              href="mailto:toorugoodman11@gmail.com"
              className="inline-block px-5 py-2.5 rounded-full text-sm text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)", fontWeight: 600 }}
            >
              toorugoodman11@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: `1px solid ${borderColor}` }}
        >
          <p style={{ color: "#334155", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Alex. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo("#home")}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)" }}
            aria-label="Back to top"
          >
            <ArrowUp size={15} style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
