import { BarChart3, Database, Download, Mail, ExternalLink } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" data-aos="fade-up" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60 border border-primary/20 px-4 py-1 rounded-full bg-primary/5">
            Who I Am
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* ── LEFT: Bio ── */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
                            bg-primary/8 border border-primary/20 text-primary text-sm font-semibold">
              🎓 Aspiring Data Analyst
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Lulusan <strong className="text-foreground">Matematika</strong> dari
              Universitas Pendidikan Indonesia dengan ketertarikan besar pada analisis data.
              Berpengalaman dalam mengolah data untuk menghasilkan insight dan memberikan
              solusi berbasis data yang mendukung pengambilan keputusan.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Terampil dalam <strong className="text-foreground">data cleaning</strong>,{" "}
              <strong className="text-foreground">data visualization</strong>,{" "}
              <strong className="text-foreground">EDA</strong>, hingga pembuatan{" "}
              <strong className="text-foreground">dashboard interaktif</strong> untuk bisnis.
              Menguasai SQL, Python, Excel, Tableau, dan Power BI.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { val: "3+", label: "Tools" },
                { val: "10+", label: "Projects" },
                { val: "S1", label: "Matematika" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center py-3 rounded-xl border border-primary/15 bg-primary/5"
                >
                  <div className="text-xl font-extrabold text-primary">{s.val}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* ── CTA buttons ── */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#contact" className="cosmic-button inline-flex items-center gap-2 justify-center">
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
              <a
                href=""
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full
                           border border-primary text-primary hover:bg-primary/10
                           transition-colors duration-300 text-sm font-semibold"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>

              {/* ── Data Showcase pill ── */}
              <a
                href="https://projectshow-dataanalyst-uh28.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full
                           text-white text-sm font-bold transition-all duration-300
                           hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #E97627, #f59e0b)",
                  boxShadow: "0 3px 14px rgba(233,118,39,0.3)",
                }}
              >
                <BarChart3 className="h-4 w-4" />
                Data Showcase
                <ExternalLink className="h-3 w-3 opacity-80" />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Skill cards ── */}
          <div className="grid grid-cols-1 gap-5">
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-base mb-1">Data Management</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mengumpulkan, membersihkan, dan mengelola data agar siap
                    digunakan untuk analisis yang lebih mendalam dan akurat.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["SQL", "Python", "Pandas", "ETL"].map(t => (
                      <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full
                                                bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-base mb-1">Data Visualization & Insight</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Membuat visualisasi dan dashboard interaktif untuk menyampaikan
                    insight secara jelas, efektif, dan mudah dipahami.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["Tableau", "Power BI", "Excel", "Matplotlib"].map(t => (
                      <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full
                                                bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
