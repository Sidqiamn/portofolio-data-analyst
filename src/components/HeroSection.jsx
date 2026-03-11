import { ArrowDown, BarChart2, Sparkles } from "lucide-react";
import Lottie from "lottie-react";
import starAnimation from "../animation/birds.json";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Subtle radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, hsl(var(--primary)/0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container max-w-4xl mx-auto text-center z-10 space-y-8">
        {/* ── Eyebrow badge ── */}
        <div className="flex justify-center opacity-0 animate-fade-in">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           border border-primary/30 bg-primary/5 text-primary
                           text-xs font-bold uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Data Analyst · Open to Work
          </span>
        </div>

        {/* ── Name heading ── */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in block">Hi, Saya</span>
            <span className="opacity-0 animate-fade-in-delay-1">
              <span className="text-primary"> Sidqi </span>
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Amanullah
            </span>
          </h1>
        </div>

        {/* ── Description ── */}
        <p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto
                      opacity-0 animate-fade-in-delay-3 leading-relaxed"
        >
          Mengubah data menjadi wawasan strategis. Berfokus pada analisis data,
          visualisasi interaktif, dan pembuatan insight yang mendukung
          pengambilan keputusan yang lebih tepat.
        </p>

        {/* ── CTA buttons ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4
                        pt-2 opacity-0 animate-fade-in-delay-4"
        >
          {/* Primary: view projects */}
          <a
            href="#projects"
            className="cosmic-button inline-flex items-center gap-2"
          >
            View My Work
            <ArrowDown className="h-4 w-4" />
          </a>

          {/* ★ DATA SHOWCASE BUTTON ★ */}
          <a
            href="https://projectshow-dataanalyst-uh28.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5
                       px-6 py-2.5 rounded-full font-semibold text-sm
                       overflow-hidden transition-all duration-300
                       hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background:
                "linear-gradient(135deg, #E97627 0%, #f59e0b 50%, #217346 100%)",
              backgroundSize: "200% 200%",
              boxShadow: "0 4px 20px rgba(233,118,39,0.35)",
              color: "#fff",
              animation: "gradientPan 4s ease infinite",
            }}
          >
            {/* Shimmer overlay */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }}
            />
            <BarChart2 className="h-4 w-4 relative z-10 flex-shrink-0" />
            <span className="relative z-10">Data Analyst Showcase</span>
            <Sparkles className="h-3.5 w-3.5 relative z-10 opacity-80" />
          </a>
        </div>

        {/* ── Tool pills ── */}
        <div className="flex flex-wrap justify-center gap-2 pt-2 opacity-0 animate-fade-in-delay-4">
          {[
            { label: "Tableau", color: "#E97627" },
            { label: "Power BI", color: "#F2C811" },
            { label: "Excel", color: "#217346" },
            { label: "Python", color: "#3b82f6" },
            { label: "SQL", color: "#8b5cf6" },
          ].map((t) => (
            <span
              key={t.label}
              className="px-3 py-1 rounded-full text-xs font-semibold border"
              style={{
                color: t.color,
                borderColor: t.color + "40",
                background: t.color + "10",
              }}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-xs text-muted-foreground mb-1 tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>

      {/* Lottie */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Lottie animationData={starAnimation} loop={true} />
      </div>

      <style>{`
        @keyframes gradientPan {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};
