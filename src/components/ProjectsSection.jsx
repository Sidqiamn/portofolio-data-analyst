import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Dashboard Analisis Data E-commerce",
    description: "Analisis mendalam pola penjualan & perilaku pelanggan menggunakan SQL dan Power BI.",
    image: "/projects/dashboard1.png",
    tags: ["SQL", "Power BI", "EDA"],
    githubUrl: "https://github.com/Sidqiamn",
    to: "/project1",
    accent: "#3b82f6",
  },
  {
    id: 2,
    title: "Bike Sales Dashboard",
    description: "Dashboard penjualan sepeda dengan Pivot Table dan visualisasi Excel yang interaktif.",
    image: "/projects/dashboard2.png",
    tags: ["Excel", "Pivot", "Dashboard"],
    githubUrl: "https://github.com/Sidqiamn",
    to: "/BikeSalesPortfolio",
    accent: "#217346",
  },
  {
    id: 3,
    title: "E-commerce Analytics (Streamlit)",
    description: "Aplikasi analitik interaktif berbasis Python & Streamlit untuk visualisasi data order.",
    image: "/projects/orderheatmap.png",
    tags: ["Streamlit", "Python"],
    githubUrl: "https://github.com/Sidqiamn",
    to: "/EcommerceAnalytics",
    accent: "#E97627",
  },
];

const tagColors = {
  SQL: { bg: "#eff6ff", color: "#3b82f6", border: "#bfdbfe" },
  "Power BI": { bg: "#fefce8", color: "#b45309", border: "#fde68a" },
  EDA: { bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" },
  Excel: { bg: "#f0fdf4", color: "#15803d", border: "#86efac" },
  Pivot: { bg: "#f0fdf4", color: "#15803d", border: "#86efac" },
  Dashboard: { bg: "#faf5ff", color: "#7c3aed", border: "#ddd6fe" },
  Streamlit: { bg: "#fff7ed", color: "#c2410c", border: "#fed7aa" },
  Python: { bg: "#eff6ff", color: "#1d4ed8", border: "#bfdbfe" },
};

export const ProjectsSection = () => {
  return (
    <section data-aos="zoom-out" id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60
                           border border-primary/20 px-4 py-1 rounded-full bg-primary/5">
            Portfolio
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto text-sm leading-relaxed">
          Berikut beberapa proyek terbaru saya — dibuat dengan akurasi tinggi
          dan perhatian penuh pada detail analitik.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm
                         border border-border hover:border-primary/30
                         card-hover flex flex-col transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: project.accent }}
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => {
                    const c = tagColors[tag] || { bg: "#f8fafc", color: "#64748b", border: "#e2e8f0" };
                    return (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[10px] font-bold rounded-full border"
                        style={{ background: c.bg, color: c.color, borderColor: c.border }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <h3 className="text-base font-bold mb-2 leading-snug">{project.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Bottom actions */}
                <div className="flex items-center justify-between pt-3 border-t border-border/60">
                  <Link
                    to={project.to}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary
                               hover:underline transition-all"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Lihat Detail
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground
                               hover:bg-secondary transition-all"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            className="cosmic-button inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Sidqiamn"
          >
            <Github className="h-4 w-4" />
            Check My Github
            <ArrowRight className="h-4 w-4" />
          </a>

          {/* ── Data Showcase button ── */}
          <a
            href="https://projectshow-dataanalyst-uh28.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                       text-white font-bold text-sm transition-all duration-300
                       hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #E97627 0%, #f59e0b 45%, #217346 100%)",
              boxShadow: "0 4px 18px rgba(233,118,39,0.30)",
            }}
          >
            🗺️ Data Analyst Showcase
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
