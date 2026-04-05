import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Bloom Digital Agency",
    initials: "SJ",
    color: "#6366f1",
    rating: 5,
    text: "Alex transformed our operations. From managing our inboxes to setting up our entire cloud infrastructure — she did it all flawlessly. I couldn't imagine running the company without her.",
  },
  {
    name: "Marcus Lee",
    role: "Founder, NovaSaaS",
    initials: "ML",
    color: "#10b981",
    rating: 5,
    text: "We hired Alex for IT support and quickly realized she could handle so much more. She rebuilt our onboarding process, saving us weeks of manual work. Absolute game-changer.",
  },
  {
    name: "Priya Patel",
    role: "VP Operations, Trident Logistics",
    initials: "PP",
    color: "#f59e0b",
    rating: 5,
    text: "Responsive, technically sharp, and incredibly organized. Alex set up our Zendesk helpdesk and manages our executive calendars simultaneously. Best hire we've made remotely.",
  },
  {
    name: "David Okafor",
    role: "CTO, Clearwave Fintech",
    initials: "DO",
    color: "#3b82f6",
    rating: 5,
    text: "Alex migrated our entire server stack to AWS with zero downtime. Her documentation was thorough and she trained our team on the new systems. Exceptional work.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#6366f1" }}>
            Testimonials
          </p>
          <h2 className="text-slate-800" style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
            What Clients Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-7 border border-slate-100 hover:shadow-md transition-all duration-300"
              style={{ background: "#fafafa" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote
                  size={32}
                  className="absolute -top-2 -left-1 opacity-10"
                  style={{ color: t.color }}
                />
                <p className="text-slate-600 text-sm pl-4" style={{ lineHeight: 1.8 }}>
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0"
                  style={{ background: t.color, fontWeight: 700 }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-slate-800 text-sm" style={{ fontWeight: 600 }}>{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
