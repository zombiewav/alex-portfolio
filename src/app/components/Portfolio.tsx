import { useState, useEffect } from "react";
import { Tag, Share2, Mail, Globe, X, ZoomIn } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const qlaseImage = "/qlase.png";
const caffeKatImage = "/caffe-kat.png";
const tikTalkImage = "/tiktalk.png";

type DevProject = {
  type: "dev";
  title: string;
  category: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  image: string;
  description: string;
  tech: string[];
  result: string;
};

type VAProject = {
  type: "va";
  title: string;
  category: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  icon: React.ElementType;
  gradient: string;
  darkGradient: string;
  description: string;
  tech: string[];
  result: string;
  accent: string;
};

type Project = DevProject | VAProject;

const devProjects: DevProject[] = [
  {
    type: "dev",
    title: "Qlase",
    category: "Mobile App",
    tag: "Flutter",
    tagColor: "#02569B",
    tagBg: "#eff6ff",
    image: qlaseImage,
    description: "A cross-platform mobile solution for secure QR-based attendance tracking. Built with Flutter, enabling real-time class attendance management with a clean dashboard.",
    tech: ["Flutter", "QR Code", "Mobile", "Cross-Platform"],
    result: "QR Attendance System",
  },
  {
    type: "dev",
    title: "Caffe Kat",
    category: "Web — Landing Page",
    tag: "Web",
    tagColor: "#6366f1",
    tagBg: "#eef2ff",
    image: caffeKatImage,
    description: "A professional landing page built for Caffe Kat, a local coffee shop in Legazpi City. Features a dark, modern aesthetic with a menu showcase and location details.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    result: "Local Business Website",
  },
  {
    type: "dev",
    title: "TikTalk",
    category: "Web App",
    tag: "React",
    tagColor: "#10b981",
    tagBg: "#f0fdf4",
    image: tikTalkImage,
    description: "A web-based random chatting platform built for Bicol University students. Features anonymous matching and real-time announcements.",
    tech: ["React", "Node.js", "Real-time", "Web App"],
    result: "Campus Chat Platform",
  },
];

const vaProjects: VAProject[] = [
  {
    type: "va",
    title: "Social Media Management",
    category: "Virtual Assistant",
    tag: "VA",
    tagColor: "#a855f7",
    tagBg: "#fdf4ff",
    icon: Share2,
    gradient: "linear-gradient(135deg, #fdf4ff, #ede9fe)",
    darkGradient: "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(139,92,246,0.08))",
    description: "Managed Facebook, TikTok, and Instagram accounts for multiple clients — creating content calendars, scheduling posts, and growing organic engagement.",
    tech: ["Facebook", "TikTok", "Instagram", "Content Planning"],
    result: "Organic growth",
    accent: "#a855f7",
  },
  {
    type: "va",
    title: "Email Outreach",
    category: "Virtual Assistant",
    tag: "VA",
    tagColor: "#f59e0b",
    tagBg: "#fffbeb",
    icon: Mail,
    gradient: "linear-gradient(135deg, #fffbeb, #fef3c7)",
    darkGradient: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(251,191,36,0.08))",
    description: "Handled cold email campaigns and inbox management — crafting outreach sequences, following up with leads, and tracking campaign results.",
    tech: ["Cold Email", "Lead Follow-up", "Inbox Mgmt", "Campaigns"],
    result: "Higher response rates",
    accent: "#f59e0b",
  },
  {
    type: "va",
    title: "Web Development (VA)",
    category: "Virtual Assistant",
    tag: "VA",
    tagColor: "#10b981",
    tagBg: "#f0fdf4",
    icon: Globe,
    gradient: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
    darkGradient: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(52,211,153,0.08))",
    description: "Provided web development services as a virtual contractor — building and updating WordPress and HTML sites for clients remotely.",
    tech: ["WordPress", "HTML/CSS", "Content Updates", "Remote Dev"],
    result: "Sites delivered",
    accent: "#10b981",
  },
];

function Modal({ project, isDark, onClose }: { project: Project; isDark: boolean; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const techBg = isDark ? "#1e293b" : "#f1f5f9";
  const techColor = isDark ? "#94a3b8" : "#475569";
  const titleColor = isDark ? "#f1f5f9" : "#0f172a";
  const descColor = isDark ? "#94a3b8" : "#64748b";
  const cardBg = isDark ? "#111827" : "white";

  const isVA = project.type === "va";
  const Icon = isVA ? project.icon : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl"
        style={{ background: cardBg, maxHeight: "90vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ background: "rgba(0,0,0,0.5)", color: "white" }}
        >
          <X size={18} />
        </button>

        {/* Banner */}
        {!isVA && project.type === "dev" ? (
          <div className="w-full" style={{ background: "#0a0f1e" }}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto block"
            />
          </div>
        ) : isVA && Icon ? (
          <div
            className="w-full flex items-center justify-center"
            style={{ height: 220, background: isDark ? (project as VAProject).darkGradient : (project as VAProject).gradient }}
          >
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: isDark ? "#1a2235" : "white" }}
            >
              <Icon size={44} style={{ color: (project as VAProject).accent }} />
            </div>
          </div>
        ) : null}

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs"
              style={{ background: project.tagBg, color: project.tagColor, fontWeight: 600 }}
            >
              {project.tag}
            </span>
            <span style={{ color: "#6366f1", fontSize: "0.8rem", fontWeight: 500 }}>{project.category}</span>
          </div>

          <h2 style={{ color: titleColor, fontWeight: 800, fontSize: "1.6rem" }} className="mb-3">
            {project.title}
          </h2>

          <p style={{ color: descColor, fontSize: "0.95rem", lineHeight: 1.8 }} className="mb-6">
            {project.description}
          </p>

          <div>
            <p style={{ color: isDark ? "#475569" : "#94a3b8", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-2">
              Tech & Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm" style={{ background: techBg, color: techColor }}>
                  <Tag size={11} />{t}
                </span>
              ))}
            </div>
          </div>

          <div
            className="mt-6 flex items-center gap-2 px-4 py-3 rounded-xl"
            style={{ background: isDark ? "rgba(99,102,241,0.12)" : "#eef2ff" }}
          >
            <span style={{ color: "#6366f1", fontWeight: 600, fontSize: "0.85rem" }}>✦ Result:</span>
            <span style={{ color: isDark ? "#a5b4fc" : "#4f46e5", fontSize: "0.85rem" }}>{project.result}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const { isDark } = useTheme();
  const [selected, setSelected] = useState<Project | null>(null);

  const sectionBg = isDark ? "#111827" : "#f8fafc";
  const cardBg = isDark ? "#1a2235" : "white";
  const cardBorder = isDark ? "#1e2d45" : "#e2e8f0";
  const headingColor = isDark ? "#f1f5f9" : "#0f172a";
  const subColor = isDark ? "#64748b" : "#94a3b8";
  const catColor = isDark ? "#475569" : "#94a3b8";
  const titleColor = isDark ? "#e2e8f0" : "#0f172a";
  const descColor = isDark ? "#64748b" : "#64748b";
  const techBg = isDark ? "#1e293b" : "#f1f5f9";
  const techColor = isDark ? "#64748b" : "#475569";
  const divider = isDark ? "#1e2d45" : "#e2e8f0";

  return (
    <section id="portfolio" className="py-24 transition-colors duration-300" style={{ background: sectionBg }}>
      {selected && <Modal project={selected} isDark={isDark} onClose={() => setSelected(null)} />}

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#6366f1" }}>
            My Work
          </p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: headingColor }}>
            Featured Projects
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ lineHeight: 1.7, color: subColor }}>
            Real projects I've built and managed — from mobile apps and web platforms to social media and email campaigns.
          </p>
        </div>

        {/* Dev Projects */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="px-4 py-1.5 rounded-full text-xs uppercase tracking-widest"
              style={{ background: isDark ? "rgba(99,102,241,0.15)" : "#eef2ff", color: "#6366f1", fontWeight: 700 }}
            >
              Development Projects
            </span>
            <div className="flex-1 h-px" style={{ background: divider }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {devProjects.map((p) => (
              <div
                key={p.title}
                onClick={() => setSelected(p)}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer"
                style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
              >
                <div className="relative overflow-hidden" style={{ height: 210 }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,15,30,0.65) 0%, transparent 55%)" }} />
                  {/* Zoom hint on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(99,102,241,0.85)", backdropFilter: "blur(6px)" }}
                    >
                      <ZoomIn size={20} color="white" />
                    </div>
                  </div>
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs"
                    style={{ background: p.tagBg, color: p.tagColor, fontWeight: 600 }}
                  >
                    {p.tag}
                  </span>
                  <span
                    className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs text-white"
                    style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
                  >
                    {p.result}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs mb-1" style={{ color: catColor }}>{p.category}</p>
                  <h3 style={{ color: titleColor, fontWeight: 700, fontSize: "1.05rem" }} className="mb-2">{p.title}</h3>
                  <p style={{ color: descColor, fontSize: "0.85rem", lineHeight: 1.65 }} className="mb-4 line-clamp-2">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs" style={{ background: techBg, color: techColor }}>
                        <Tag size={9} />{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VA Projects */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="px-4 py-1.5 rounded-full text-xs uppercase tracking-widest"
              style={{ background: isDark ? "rgba(168,85,247,0.15)" : "#fdf4ff", color: "#a855f7", fontWeight: 700 }}
            >
              Virtual Assistant Work
            </span>
            <div className="flex-1 h-px" style={{ background: divider }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaProjects.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  onClick={() => setSelected(p)}
                  className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer"
                  style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
                >
                  <div
                    className="relative flex items-center justify-center"
                    style={{ height: 210, background: isDark ? p.darkGradient : p.gradient }}
                  >
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110"
                      style={{ background: isDark ? "#1a2235" : "white" }}
                    >
                      <Icon size={38} style={{ color: p.accent }} />
                    </div>
                    {/* Zoom hint on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}
                      >
                        <ZoomIn size={20} color="white" />
                      </div>
                    </div>
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs"
                      style={{ background: p.tagBg, color: p.tagColor, fontWeight: 600 }}
                    >
                      {p.tag}
                    </span>
                    <span
                      className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs"
                      style={{ background: isDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.8)", color: p.accent, fontWeight: 600 }}
                    >
                      {p.result}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs mb-1" style={{ color: catColor }}>{p.category}</p>
                    <h3 style={{ color: titleColor, fontWeight: 700, fontSize: "1.05rem" }} className="mb-2">{p.title}</h3>
                    <p style={{ color: descColor, fontSize: "0.85rem", lineHeight: 1.65 }} className="mb-4 line-clamp-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs" style={{ background: techBg, color: techColor }}>
                          <Tag size={9} />{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}