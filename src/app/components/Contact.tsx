import { Mail, MapPin, Clock } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const contactInfo = [
  { icon: Mail, label: "Email", value: "toorugoodman11@gmail.com", color: "#6366f1", bg: "#eef2ff", darkBg: "rgba(99,102,241,0.12)" },
  { icon: MapPin, label: "Location", value: "Albay, Philippines — Available Remote", color: "#10b981", bg: "#f0fdf4", darkBg: "rgba(16,185,129,0.1)" },
  { icon: Clock, label: "Working Hours", value: "Mon–Fri, 8pm–2am (PHT)", color: "#f59e0b", bg: "#fffbeb", darkBg: "rgba(245,158,11,0.1)" },
];

export function Contact() {
  const { isDark } = useTheme();

  const sectionBg = isDark ? "#0a0f1e" : "#f8fafc";
  const cardBg = isDark ? "#111827" : "white";
  const cardBorder = isDark ? "#1e2d45" : "#e2e8f0";
  const headingColor = isDark ? "#f1f5f9" : "#0f172a";
  const subColor = isDark ? "#64748b" : "#94a3b8";
  const labelColor = isDark ? "#475569" : "#94a3b8";
  const inputText = isDark ? "#e2e8f0" : "#334155";

  return (
    <section id="contact" className="py-24 transition-colors duration-300" style={{ background: sectionBg }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#6366f1" }}>
            Get In Touch
          </p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: headingColor }}>
            Let's Work Together
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ lineHeight: 1.7, color: subColor }}>
            Ready to streamline your business? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left info */}
          <div className="md:col-span-5 flex flex-col gap-4 max-w-2xl mx-auto">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="flex items-start gap-4 rounded-2xl p-5 transition-colors duration-300"
                  style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: isDark ? info.darkBg : info.bg }}
                  >
                    <Icon size={19} style={{ color: info.color }} />
                  </div>
                  <div>
                    <p style={{ color: labelColor, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-0.5">{info.label}</p>
                    <p style={{ color: inputText, fontWeight: 500, fontSize: "0.875rem" }}>{info.value}</p>
                  </div>
                </div>
              );
            })}

            <div
              className="rounded-2xl p-6 mt-4"
              style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white text-sm" style={{ fontWeight: 600 }}>Currently Available</span>
              </div>
              <p style={{ color: "#c7d2fe", fontSize: "0.85rem", lineHeight: 1.65 }}>
                I'm open to new dev and VA projects, both short-term and long-term. Let's discuss your needs!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}