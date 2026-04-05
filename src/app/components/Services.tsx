import { Code2, Server, Smartphone, Globe, Share2, CalendarDays, FileSpreadsheet, BarChart3 } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const services = [
  { icon: Code2, title: "Frontend Development", description: "Building responsive, pixel-perfect web interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS — fast and accessible by default.", tags: ["HTML", "CSS", "React", "Tailwind"], accent: "#6366f1" },
  { icon: Server, title: "Backend Development", description: "Developing robust server-side systems and APIs using Node.js, Python, C/C++, MySQL, and Electron for desktop applications.", tags: ["Node.js", "Python", "MySQL"], accent: "#10b981" },
  { icon: Smartphone, title: "Mobile App Development", description: "Creating cross-platform and native mobile apps using Flutter (iOS & Android) and Kotlin (Android) — smooth and performant.", tags: ["Flutter", "Kotlin"], accent: "#f59e0b" },
  { icon: Globe, title: "WordPress Development", description: "Building and maintaining WordPress websites — from custom themes and plugins to content management and performance optimization.", tags: ["WordPress", "WooCommerce"], accent: "#3b82f6" },
  { icon: Share2, title: "Social Media Management", description: "Managing and growing your business presence on Facebook, TikTok, and Instagram — content planning, scheduling, and engagement.", tags: ["Facebook", "TikTok", "Instagram"], accent: "#a855f7" },
  { icon: CalendarDays, title: "Scheduling & Email Inbox", description: "Organizing your calendar, booking appointments, filtering and responding to emails, and keeping your communications stress-free.", tags: ["Google Calendar", "Gmail"], accent: "#ef4444" },
  { icon: FileSpreadsheet, title: "Data Entry & Research", description: "Accurate and timely data entry, spreadsheet management, web research, and competitor analysis — organized and on schedule.", tags: ["Google Sheets", "Excel"], accent: "#14b8a6" },
  { icon: BarChart3, title: "Sales & Admin Support", description: "Supporting sales pipelines, managing CRM data, drafting proposals, preparing reports, and handling day-to-day admin tasks.", tags: ["CRM", "Admin Tasks"], accent: "#f97316" },
];

export function Services() {
  const { isDark } = useTheme();

  const sectionBg = isDark ? "#0a0f1e" : "white";
  const cardBg = isDark ? "#111827" : "white";
  const cardBorder = isDark ? "#1e2d45" : "#e2e8f0";
  const headingColor = isDark ? "#f1f5f9" : "#0f172a";
  const subColor = isDark ? "#64748b" : "#94a3b8";
  const titleColor = isDark ? "#e2e8f0" : "#0f172a";
  const descColor = isDark ? "#64748b" : "#64748b";

  return (
    <section id="services" className="py-24 transition-colors duration-300" style={{ background: sectionBg }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#6366f1" }}>
            What I Offer
          </p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: headingColor }}>
            Services I Provide
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ lineHeight: 1.7, color: subColor }}>
            From building full-stack web and mobile apps to handling your virtual admin needs — one hire, every skill.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            const tagBg = isDark ? `${service.accent}18` : `${service.accent}12`;
            return (
              <div
                key={service.title}
                className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default flex flex-col"
                style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${service.accent}18` }}
                >
                  <Icon size={21} style={{ color: service.accent }} />
                </div>
                <h3 style={{ color: titleColor, fontWeight: 700, fontSize: "0.95rem" }} className="mb-2">
                  {service.title}
                </h3>
                <p style={{ color: descColor, fontSize: "0.85rem", lineHeight: 1.65 }} className="mb-4 flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-xs"
                      style={{ background: tagBg, color: service.accent, fontWeight: 600 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="mt-14 rounded-3xl p-10 text-center"
          style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" }}
        >
          <h3 className="text-white mb-3" style={{ fontWeight: 700, fontSize: "1.5rem" }}>
            Need a custom solution?
          </h3>
          <p className="mb-6" style={{ color: "#c7d2fe", lineHeight: 1.7 }}>
            I tailor my services to fit your exact business needs. Let's talk about what you're looking for.
          </p>
          <button
            onClick={() => { const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3 rounded-full text-sm transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ background: "white", color: "#4f46e5", fontWeight: 600 }}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
