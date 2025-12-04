import { Cpu, Laptop } from "lucide-react";

export const MorePortfolios = () => {
  return (
    <div
      id="more-skills"
      className="py-8 px-4 bg-gradient-to-b from-secondary/20 to-background relative"
    >
      <div className="container max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore My <span className="text-primary">Other Expertise</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Selain menjadi Data Analyst, saya juga memiliki keahlian dalam bidang
          lain yang siap memberikan solusi digital secara menyeluruh.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {/* AI Engineer Card */}
          <a
            href="https://portofolio-5z5h.vercel.app/" // Ganti dengan URL kamu
            target="_blank"
            className="group bg-card rounded-xl p-8 shadow-lg border border-primary/20 hover:border-primary transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Cpu className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold tracking-tight">
                AI Engineer
              </h3>
            </div>
            <p className="text-muted-foreground">
              Mengembangkan solusi kecerdasan buatan termasuk Machine Learning,
              Deep Learning, NLP, dan Computer Vision.
            </p>
          </a>

          {/* Web Dev Card */}
          <a
            href="https://your-web-dev-portfolio-url.com" // Ganti dengan URL kamu
            target="_blank"
            className="group bg-card rounded-xl p-8 shadow-lg border border-primary/20 hover:border-primary transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Laptop className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold tracking-tight">
                Web Developer
              </h3>
            </div>
            <p className="text-muted-foreground">
              Membangun website modern menggunakan teknologi terbaru seperti
              Next.js, React, Firebase, dan Tailwind CSS.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
