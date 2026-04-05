import { ArrowDown } from "lucide-react";

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "20+", label: "Happy Clients" },
  { value: "100%", label: "Dedication" },
];

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #111827 50%, #1a1040 100%)" }}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-[0.07] blur-3xl" style={{ background: "#6366f1" }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-[0.07] blur-3xl" style={{ background: "#7c3aed" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl" style={{ background: "#818cf8" }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-7"
              style={{ background: "rgba(99,102,241,0.15)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.35)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>

            <p className="mb-1" style={{ color: "#6366f1", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Hi, I'm
            </p>

            <h1 style={{ color: "white", fontWeight: 900, fontSize: "clamp(2.8rem, 6vw, 4.2rem)", lineHeight: 1.05, letterSpacing: "-1px" }} className="mb-3">
              Alex
            </h1>

            <p className="mb-5" style={{ color: "#a5b4fc", fontWeight: 700, fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", lineHeight: 1.3 }}>
              Developer & VA Specialist
            </p>

            <p className="mb-9" style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, maxWidth: 460 }}>
              I build full-stack web and mobile apps, and deliver top-tier virtual assistant services — from React frontends to social media management.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("#portfolio")}
                className="px-7 py-3 rounded-full text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)", fontWeight: 600, boxShadow: "0 4px 20px rgba(99,102,241,0.35)" }}
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-7 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.07)", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.15)", fontWeight: 600 }}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* ── Right: Logo only ── */}
          <div className="hidden md:flex items-center justify-center relative">
            {/* Glow behind logo */}
            <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: "#6366f1" }} />

            {/* Big </> logo tile */}
            <div
              className="relative z-10 w-48 h-48 rounded-3xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)",
                boxShadow: "0 24px 80px rgba(99,102,241,0.5), 0 0 0 1px rgba(165,180,252,0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontWeight: 900,
                  fontSize: "4rem",
                  color: "white",
                  letterSpacing: "-3px",
                  lineHeight: 1,
                }}
              >
                &lt;/&gt;
              </span>
              {/* Shine overlay */}
              <div
                className="absolute top-0 left-0 right-0 h-1/2 rounded-t-3xl"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)" }}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-5 text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p style={{ color: "#a5b4fc", fontWeight: 900, fontSize: "1.75rem", lineHeight: 1 }}>{stat.value}</p>
              <p style={{ color: "#64748b", fontSize: "0.8rem", marginTop: 4 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontSize: "0.65rem" }}>Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}