import { Cpu, Laptop, BarChart2, ArrowUpRight } from "lucide-react";

export const MorePortfolios = () => {
  return (
    <div
      id="more-skills"
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(var(--secondary)/0.3) 0%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Subtle grid BG */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--primary)/0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container max-w-5xl mx-auto relative z-10 text-center space-y-12">

        {/* Section label */}
        <div className="flex justify-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60
                           border border-primary/20 px-4 py-1 rounded-full bg-primary/5">
            Other Expertise
          </span>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore My <span className="text-primary">Other Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Selain Data Analyst, saya juga memiliki keahlian di bidang lain
            yang siap memberikan solusi digital secara menyeluruh.
          </p>
        </div>

        {/* ── Featured: Data Analyst Showcase ── */}
        <a
          href="https://projectshow-dataanalyst-uh28.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-3xl overflow-hidden border border-primary/20
                     hover:border-primary/50 transition-all duration-300
                     hover:-translate-y-1 hover:shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(233,118,39,0.08) 0%, rgba(33,115,70,0.08) 100%)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 p-8 text-left">
            {/* Icon block */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0
                         shadow-lg group-hover:scale-105 transition-transform duration-300"
              style={{
                background: "linear-gradient(135deg, #E97627, #f59e0b 50%, #217346)",
              }}
            >
              <BarChart2 className="h-9 w-9 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-xl font-bold">Data Analyst Showcase</h3>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                  style={{ background: "linear-gradient(90deg,#E97627,#217346)" }}
                >
                  FEATURED
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Koleksi lengkap proyek visualisasi data interaktif dengan{" "}
                <strong className="text-foreground">Tableau</strong>,{" "}
                <strong className="text-foreground">Power BI</strong>, dan{" "}
                <strong className="text-foreground">Excel</strong> — mulai dari peta
                sebaran, dashboard KPI, hingga analisis regresi.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Tableau", "Power BI", "Excel", "Geospatial", "Dashboard", "Analytics"].map(t => (
                  <span key={t}
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full
                               bg-primary/8 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <ArrowUpRight
              className="h-6 w-6 text-muted-foreground group-hover:text-primary
                         transition-colors flex-shrink-0 md:self-center"
            />
          </div>
        </a>

        {/* ── Other portfolios grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI Engineer */}
          <a
            href="https://portofolio-5z5h.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-2xl p-7 shadow-sm border border-border
                       hover:border-primary/40 transition-all duration-300
                       hover:-translate-y-1 hover:shadow-xl text-left"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/8 border border-primary/15 flex-shrink-0
                              group-hover:bg-primary/15 transition-colors">
                <Cpu className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-base font-bold">AI Engineer</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mengembangkan solusi kecerdasan buatan termasuk Machine Learning,
                  Deep Learning, NLP, dan Computer Vision.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["ML", "NLP", "Deep Learning", "CV"].map(t => (
                    <span key={t} className="text-[10px] font-semibold px-2 py-0.5
                                              rounded-full bg-secondary text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>

          {/* Web Developer */}
          <a
            href="https://your-web-dev-portfolio-url.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-2xl p-7 shadow-sm border border-border
                       hover:border-primary/40 transition-all duration-300
                       hover:-translate-y-1 hover:shadow-xl text-left"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/8 border border-primary/15 flex-shrink-0
                              group-hover:bg-primary/15 transition-colors">
                <Laptop className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-base font-bold">Web Developer</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Membangun website modern menggunakan teknologi terbaru seperti
                  Next.js, React, Firebase, dan Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["React", "Next.js", "Tailwind", "Firebase"].map(t => (
                    <span key={t} className="text-[10px] font-semibold px-2 py-0.5
                                              rounded-full bg-secondary text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
