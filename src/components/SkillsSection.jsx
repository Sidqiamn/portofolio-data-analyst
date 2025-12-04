import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Data Analysis
  { name: "Python", category: "Data Analysis" },
  { name: "R", category: "Data Analysis" },
  { name: "SQL", category: "Data Analysis" },
  { name: "Pandas", category: "Data Analysis" },
  { name: "NumPy", category: "Data Analysis" },
  { name: "Scikit-learn", category: "Data Analysis" },
  { name: "Statistics", category: "Data Analysis" },
  { name: "Data Cleaning", category: "Data Analysis" },
  { name: "EDA (Exploratory Data Analysis)", category: "Data Analysis" },

  // Data Visualization
  { name: "Tableau", category: "Data Visualization" },
  { name: "Power BI", category: "Data Visualization" },
  { name: "Matplotlib", category: "Data Visualization" },
  { name: "Seaborn", category: "Data Visualization" },
  { name: "Dashboarding", category: "Data Visualization" },

  // Data Tools / BI / Others
  { name: "Excel / Spreadsheet", category: "Data Tools" },
  { name: "ETL Process", category: "Data Tools" },
  { name: "Git & GitHub", category: "Data Tools" },
  { name: "Data Modeling", category: "Data Tools" },
  { name: "Google Looker Studio", category: "Data Tools" },
];

const categories = ["all", "Data Analysis", "Data Visualization", "Data Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      data-aos="zoom-in"
      id="skills"
      className="py-12 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center justify-center"
            >
              <h3 className="font-semibold text-lg text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
