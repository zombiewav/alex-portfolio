import { Globe, Server, Smartphone } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const frontendSkills = [
  { name: "HTML", color: "#e34c26", bg: "#fff4f0", darkBg: "rgba(227,76,38,0.12)" },
  { name: "CSS", color: "#264de4", bg: "#f0f3ff", darkBg: "rgba(38,77,228,0.12)" },
  { name: "JavaScript", color: "#f0b429", bg: "#fdfbe8", darkBg: "rgba(240,180,41,0.12)" },
  { name: "React", color: "#61dafb", bg: "#f0fdff", darkBg: "rgba(97,218,251,0.1)" },
  { name: "Tailwind CSS", color: "#0ea5e9", bg: "#f0f9ff", darkBg: "rgba(14,165,233,0.12)" },
  { name: "WordPress", color: "#21759b", bg: "#f0f7ff", darkBg: "rgba(33,117,155,0.12)" },
];

const backendSkills = [
  { name: "Node.js", color: "#339933", bg: "#f0fdf4", darkBg: "rgba(51,153,51,0.12)" },
  { name: "Python", color: "#3776ab", bg: "#eff6ff", darkBg: "rgba(55,118,171,0.12)" },
  { name: "C", color: "#555555", bg: "#f5f5f5", darkBg: "rgba(150,150,150,0.12)" },
  { name: "C++", color: "#00599C", bg: "#eff6ff", darkBg: "rgba(0,89,156,0.12)" },
  { name: "MySQL", color: "#4479A1", bg: "#eff6ff", darkBg: "rgba(68,121,161,0.12)" },
  { name: "Electron", color: "#47848f", bg: "#f0fdfa", darkBg: "rgba(71,132,143,0.12)" },
];

const mobileSkills = [
  { name: "Flutter", color: "#02569B", bg: "#eff6ff", darkBg: "rgba(2,86,155,0.15)" },
  { name: "Kotlin", color: "#7F52FF", bg: "#f5f3ff", darkBg: "rgba(127,82,255,0.15)" },
];

export function Skills() {
  const { isDark } = useTheme();

  const sectionBg = isDark ? "#111827" : "#f8fafc";
  const cardBg = isDark ? "#1a2235" : "white";
  const cardBorder = isDark ? "#1e2d45" : "#e2e8f0";
  const headingColor = isDark ? "#f1f5f9" : "#0f172a";
  const subColor = isDark ? "#64748b" : "#94a3b8";
  const textPrimary = isDark ? "#e2e8f0" : "#334155";

  return (
    <section id="skills" className="py-24 transition-colors duration-300" style={{ background: sectionBg }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#6366f1" }}>
            My Expertise
          </p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: headingColor }}>
            Skills & Proficiencies
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ lineHeight: 1.7, color: subColor }}>
            A strong full-stack development skill set for building modern web, mobile, and software applications.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { label: "Frontend Development", icon: Globe, accent: "#6366f1", skills: frontendSkills },
            { label: "Backend Development", icon: Server, accent: "#10b981", skills: backendSkills },
            { label: "Mobile Development", icon: Smartphone, accent: "#f59e0b", skills: mobileSkills },
          ].map(({ label, icon: Icon, accent, skills }) => (
            <div
              key={label}
              className="rounded-2xl p-6 transition-colors duration-300"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${accent}18` }}
                >
                  <Icon size={16} style={{ color: accent }} />
                </div>
                <span style={{ color: headingColor, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default"
                    style={{
                      background: isDark ? s.darkBg : s.bg,
                      border: `1px solid ${s.color}28`,
                    }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    <span style={{ color: textPrimary, fontWeight: 600, fontSize: "0.875rem" }}>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" }}
        >
          <div>
            <p className="text-white mb-1" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
              Full-Stack Development — one dedicated hire
            </p>
            <p style={{ color: "#c7d2fe", fontSize: "0.875rem" }}>
              I code, architect, and deliver modern apps and websites with a focus on quality and performance.
            </p>
          </div>
          <button
            onClick={() => { const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            className="flex-shrink-0 px-6 py-2.5 rounded-full text-sm transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "white", color: "#4f46e5", fontWeight: 600 }}
          >
            Work With Me
          </button>
        </div>
      </div>
    </section>
  );
}
