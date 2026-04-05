import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const contactInfo = [
  { icon: Mail, label: "Email", value: "toorugoodman11@gmail.com", color: "#6366f1", bg: "#eef2ff", darkBg: "rgba(99,102,241,0.12)" },
  { icon: MapPin, label: "Location", value: "Albay, Philippines — Available Remote", color: "#10b981", bg: "#f0fdf4", darkBg: "rgba(16,185,129,0.1)" },
  { icon: Clock, label: "Working Hours", value: "Mon–Fri, 8pm–2am (PHT)", color: "#f59e0b", bg: "#fffbeb", darkBg: "rgba(245,158,11,0.1)" },
];

export function Contact() {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sectionBg = isDark ? "#0a0f1e" : "#f8fafc";
  const cardBg = isDark ? "#111827" : "white";
  const cardBorder = isDark ? "#1e2d45" : "#e2e8f0";
  const headingColor = isDark ? "#f1f5f9" : "#0f172a";
  const subColor = isDark ? "#64748b" : "#94a3b8";
  const labelColor = isDark ? "#475569" : "#94a3b8";
  const inputBg = isDark ? "#1a2235" : "white";
  const inputBorder = isDark ? "#1e2d45" : "#e2e8f0";
  const inputText = isDark ? "#e2e8f0" : "#334155";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

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
          <div className="md:col-span-2 flex flex-col gap-4">
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
              className="rounded-2xl p-6 mt-auto"
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

          {/* Right form */}
          <div
            className="md:col-span-3 rounded-2xl p-8 transition-colors duration-300"
            style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: isDark ? "rgba(16,185,129,0.12)" : "#f0fdf4" }}
                >
                  <CheckCircle2 size={32} style={{ color: "#10b981" }} />
                </div>
                <h3 style={{ color: headingColor, fontWeight: 700, fontSize: "1.25rem" }} className="mb-2">
                  Message Sent!
                </h3>
                <p style={{ color: subColor, fontSize: "0.875rem" }} className="max-w-xs">
                  Thanks for reaching out, {form.name}. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", service: "", message: "" }); }}
                  className="mt-6 px-5 py-2 rounded-full text-sm transition-colors"
                  style={{ background: isDark ? "rgba(99,102,241,0.15)" : "#eef2ff", color: "#6366f1", fontWeight: 600 }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label style={{ color: labelColor, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }} className="block mb-1.5">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        required
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                        style={{
                          background: inputBg,
                          border: `1px solid ${inputBorder}`,
                          color: inputText,
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "#6366f1"; }}
                        onBlur={(e) => { e.target.style.borderColor = inputBorder; }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ color: labelColor, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }} className="block mb-1.5">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: form.service ? inputText : subColor }}
                  >
                    <option value="">Select a service...</option>
                    <option>Frontend Development (React / Tailwind / HTML)</option>
                    <option>Backend Development (Node.js / Python / MySQL)</option>
                    <option>Mobile App (Flutter / Kotlin)</option>
                    <option>WordPress Website</option>
                    <option>Social Media Management</option>
                    <option>Scheduling & Email Inbox Management</option>
                    <option>Data Entry & Online Research</option>
                    <option>Sales & Admin Support</option>
                    <option>Other / Custom Package</option>
                  </select>
                </div>

                <div>
                  <label style={{ color: labelColor, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }} className="block mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors resize-none"
                    style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: inputText }}
                    onFocus={(e) => { e.target.style.borderColor = "#6366f1"; }}
                    onBlur={(e) => { e.target.style.borderColor = inputBorder; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl text-white text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 disabled:opacity-70"
                  style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)", fontWeight: 600 }}
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}