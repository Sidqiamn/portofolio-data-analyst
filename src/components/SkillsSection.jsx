import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Data Analysis
  { name: "Python", category: "Data Analysis", icon: "🐍" },
  { name: "R", category: "Data Analysis", icon: "📐" },
  { name: "SQL", category: "Data Analysis", icon: "🗄️" },
  { name: "Pandas", category: "Data Analysis", icon: "🐼" },
  { name: "NumPy", category: "Data Analysis", icon: "🔢" },
  { name: "Scikit-learn", category: "Data Analysis", icon: "🤖" },
  { name: "Statistics", category: "Data Analysis", icon: "📊" },
  { name: "Data Cleaning", category: "Data Analysis", icon: "🧹" },
  { name: "EDA", category: "Data Analysis", icon: "🔍" },
  // Visualization
  { name: "Tableau", category: "Data Visualization", icon: "📊" },
  { name: "Power BI", category: "Data Visualization", icon: "⚡" },
  { name: "Matplotlib", category: "Data Visualization", icon: "📈" },
  { name: "Seaborn", category: "Data Visualization", icon: "🌊" },
  { name: "Dashboarding", category: "Data Visualization", icon: "🖥️" },
  // Tools
  { name: "Excel / Spreadsheet", category: "Data Tools", icon: "📗" },
  { name: "ETL Process", category: "Data Tools", icon: "🔄" },
  { name: "Git & GitHub", category: "Data Tools", icon: "🐙" },
  { name: "Data Modeling", category: "Data Tools", icon: "🗺️" },
  { name: "Google Looker Studio", category: "Data Tools", icon: "🔭" },
];

const categories = ["all", "Data Analysis", "Data Visualization", "Data Tools"];

const categoryMeta = {
  "all": { color: "hsl(var(--primary))", bg: "hsl(var(--primary)/0.1)" },
  "Data Analysis": { color: "#3b82f6", bg: "#eff6ff" },
  "Data Visualization": { color: "#E97627", bg: "#fff7ed" },
  "Data Tools": { color: "#217346", bg: "#f0fdf4" },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  const meta = categoryMeta[activeCategory] || categoryMeta["all"];

  return (
    <section
      data-aos="zoom-in"
      id="skills"
      className="py-20 px-4 relative bg-secondary/20"
    >
      <div className="container mx-auto max-w-5xl">

        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60
                           border border-primary/20 px-4 py-1 rounded-full bg-primary/5">
            Technical Skills
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm max-w-md mx-auto">
          Tools dan teknologi yang saya kuasai untuk analisis data end-to-end.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 capitalize border",
                activeCategory === cat
                  ? "text-white border-transparent shadow-md scale-105"
                  : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              )}
              style={
                activeCategory === cat
                  ? { background: categoryMeta[cat]?.color || "hsl(var(--primary))", borderColor: "transparent" }
                  : {}
              }
            >
              {cat === "all" ? "🔎 All Skills" : cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="group bg-card rounded-xl border border-border px-5 py-4
                         flex items-center gap-4 card-hover transition-all duration-300
                         hover:border-primary/30 hover:shadow-md"
              style={{ animationDelay: `${i * 0.03}s` }}
            >
              {/* Icon box */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0
                           group-hover:scale-110 transition-transform duration-300"
                style={{ background: meta.bg }}
              >
                {skill.icon}
              </div>
              <div>
                <span className="font-semibold text-sm text-foreground">{skill.name}</span>
                <div
                  className="text-[10px] font-bold mt-0.5"
                  style={{ color: categoryMeta[skill.category]?.color }}
                >
                  {skill.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Menampilkan{" "}
          <strong className="text-foreground">{filteredSkills.length}</strong>{" "}
          dari {skills.length} skill
        </p>
      </div>
    </section>
  );
};
