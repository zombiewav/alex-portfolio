import { useState } from "react";
import { Globe, Server, Smartphone, Share2, Calendar, Search, ClipboardList } from "lucide-react";
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

const vaCards = [
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Manage and grow your presence on Facebook, TikTok, and Instagram — content scheduling, community engagement, and analytics.",
    tags: ["Facebook", "TikTok", "Instagram"],
    color: "#6366f1",
  },
  {
    icon: ClipboardList,
    title: "Sales Assistance & Admin Support",
    description: "Support sales pipelines, prepare proposals, handle admin tasks, and keep operations running smoothly.",
    tags: ["CRM Entry", "Sales Docs", "Admin Tasks"],
    color: "#10b981",
  },
  {
    icon: Calendar,
    title: "Scheduling & Email Monitoring",
    description: "Book and manage appointments, coordinate meetings, and monitor your inbox so nothing slips through.",
    tags: ["Calendly", "Google Calendar", "Gmail"],
    color: "#f59e0b",
  },
  {
    icon: Search,
    title: "Data Entry & Online Research",
    description: "Accurate data entry, web research, competitor analysis, and organized reporting delivered on time.",
    tags: ["Google Sheets", "Excel", "Web Research"],
    color: "#3b82f6",
  },
];

export function Skills() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<"dev" | "va">("dev");

  const sectionBg = isDark ? "#111827" : "#f8fafc";
  const cardBg = isDark ? "#1a2235" : "white";
  const cardBorder = isDark ? "#1e2d45" : "#e2e8f0";
  const headingColor = isDark ? "#f1f5f9" : "#0f172a";
  const subColor = isDark ? "#64748b" : "#94a3b8";
  const textPrimary = isDark ? "#e2e8f0" : "#334155";
  const tabBg = isDark ? "#1e293b" : "#e0e7ff";
  const tabActiveText = "white";
  const tabInactiveText = "#6366f1";

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
            A dual skill set spanning full-stack development and virtual assistance — ready to build, manage, and grow your business.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1" style={{ background: tabBg }}>
            {[
              { id: "dev" as const, label: "Developer Skills" },
              { id: "va" as const, label: "Virtual Assistant" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className="px-6 py-2 rounded-full text-sm transition-all duration-300"
                style={{
                  background: activeTab === id ? "#6366f1" : "transparent",
                  color: activeTab === id ? tabActiveText : tabInactiveText,
                  fontWeight: activeTab === id ? 600 : 400,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Developer Skills */}
        {activeTab === "dev" && (
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
        )}

        {/* VA Skills */}
        {activeTab === "va" && (
          <div className="grid sm:grid-cols-2 gap-5">
            {vaCards.map((card) => {
              const Icon = card.icon;
              const cardTagBg = isDark ? `${card.color}18` : `${card.color}12`;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${card.color}18` }}
                  >
                    <Icon size={20} style={{ color: card.color }} />
                  </div>
                  <h3 style={{ color: headingColor, fontWeight: 700, fontSize: "1rem" }} className="mb-2">
                    {card.title}
                  </h3>
                  <p style={{ color: subColor, fontSize: "0.875rem", lineHeight: 1.7 }} className="mb-4">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs"
                        style={{ background: cardTagBg, color: card.color, fontWeight: 600 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA banner */}
        <div
          className="mt-12 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" }}
        >
          <div>
            <p className="text-white mb-1" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
              Full-Stack + VA — all in one hire
            </p>
            <p style={{ color: "#c7d2fe", fontSize: "0.875rem" }}>
              I code, I manage, I deliver. Let's build something great together.
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
