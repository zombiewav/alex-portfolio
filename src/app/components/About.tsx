import { CheckCircle2, Code2, HeadphonesIcon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const highlights = [
  "Frontend: HTML, CSS, JavaScript, React, Tailwind",
  "Backend: Node.js, Python, C, C++, MySQL, Electron",
  "Mobile: Flutter & Kotlin app development",
  "WordPress website development & maintenance",
  "Social media management (Facebook, TikTok, Instagram)",
  "Scheduling, email monitoring & data entry",
];

export function About() {
  const { isDark } = useTheme();

  const bg = isDark ? "#0a0f1e" : "white";
  const cardBg = isDark ? "#111827" : "white";
  const cardBorder = isDark ? "#1e2d45" : "#e2e8f0";
  const textPrimary = isDark ? "#f1f5f9" : "#0f172a";
  const textSecondary = isDark ? "#94a3b8" : "#475569";
  const textMuted = isDark ? "#64748b" : "#94a3b8";
  const logoBg = isDark ? "#1e2d45" : "#eef2ff";
  const logoBorder = isDark ? "#334155" : "#c7d2fe";
  const statBg = isDark ? "#0a0f1e" : "white";
  const divider = isDark ? "#1e293b" : "#e2e8f0";

  return (
    <section id="about" className="py-24 transition-colors duration-300" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#6366f1" }}>
            About Me
          </p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: textPrimary }}>
            Your Reliable Remote Partner
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — styled </> card */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-sm rounded-3xl p-10 flex flex-col items-center text-center transition-colors duration-300"
              style={{ background: logoBg, border: `1px solid ${logoBorder}` }}
            >
              {/* </> Avatar */}
              <div
                className="w-28 h-28 rounded-2xl flex items-center justify-center mb-5 relative"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                  boxShadow: "0 16px 48px rgba(99,102,241,0.4)",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: 900,
                    fontSize: "2.4rem",
                    color: "white",
                    letterSpacing: "-2px",
                    lineHeight: 1,
                  }}
                >
                  &lt;/&gt;
                </span>
              </div>

              <p style={{ color: textPrimary, fontWeight: 900, fontSize: "1.75rem", letterSpacing: "-0.5px" }} className="mb-0.5">
                Alex
              </p>
              <p style={{ color: "#6366f1", fontSize: "0.875rem", fontWeight: 600 }} className="mb-6">
                Developer & VA Specialist
              </p>

              {/* Role badges */}
              <div className="w-full flex flex-col gap-3 mb-6">
                {[
                  { icon: Code2, label: "Full-Stack Developer", color: "#6366f1", bg: isDark ? "rgba(99,102,241,0.12)" : "#eef2ff" },
                  { icon: HeadphonesIcon, label: "Virtual Assistant", color: "#10b981", bg: isDark ? "rgba(16,185,129,0.1)" : "#f0fdf4" },
                ].map(({ icon: Icon, label, color, bg: rbg }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{ background: rbg }}
                  >
                    <Icon size={17} style={{ color }} />
                    <span style={{ color: textPrimary, fontWeight: 600, fontSize: "0.875rem" }}>{label}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="w-full grid grid-cols-2 gap-3">
                {[{ val: "20+", lbl: "Projects" }, { val: "20+", lbl: "Clients" }].map(({ val, lbl }) => (
                  <div key={lbl} className="rounded-xl py-3" style={{ background: statBg }}>
                    <p style={{ color: "#6366f1", fontWeight: 900, fontSize: "1.4rem" }}>{val}</p>
                    <p style={{ color: textMuted, fontSize: "0.7rem" }}>{lbl}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <h3 style={{ color: textPrimary, fontWeight: 700, fontSize: "1.5rem" }} className="mb-4">
              I build, manage, and help your business grow
            </h3>
            <p style={{ color: textSecondary, lineHeight: 1.8 }} className="mb-4">
              I'm Alex — a full-stack developer and virtual assistant with a passion for building clean digital products and keeping businesses organized. I develop web and mobile applications using modern stacks, and provide reliable remote admin support.
            </p>
            <p style={{ color: textSecondary, lineHeight: 1.8 }} className="mb-8">
              Whether you need a React web app, a Flutter mobile app, or someone to manage your social media and inbox — I'm the one-stop partner that saves you time and delivers quality results.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: textSecondary }}>
                  <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0" style={{ color: "#6366f1" }} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-5">
              {[
                { label: "Location", value: "Remote — Worldwide" },
                { label: "Email", value: "toorugoodman11@gmail.com" },
              ].map(({ label, value }, i) => (
                <div key={label} className="flex items-start gap-5">
                  {i > 0 && <div className="w-px h-full self-stretch" style={{ background: divider }} />}
                  <div>
                    <p style={{ color: textMuted, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-1">{label}</p>
                    <p style={{ color: textPrimary, fontWeight: 600, fontSize: "0.875rem" }}>{value}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-5">
                <div className="w-px self-stretch" style={{ background: divider }} />
                <div>
                  <p style={{ color: textMuted, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-1">Availability</p>
                  <p style={{ color: "#10b981", fontWeight: 600, fontSize: "0.875rem" }}>Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
