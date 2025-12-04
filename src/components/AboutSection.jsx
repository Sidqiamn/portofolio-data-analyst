import { BarChart3, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" data-aos="fade-up" className="py-12 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Aspiring Data Analyst</h3>

            <p className="text-muted-foreground">
              Lulusan Matematika dari Universitas Pendidikan Indonesia dengan
              ketertarikan besar pada analisis data. Berpengalaman dalam
              mengolah data untuk menghasilkan insight dan memberikan solusi
              berbasis data yang mendukung pengambilan keputusan.
            </p>

            <p className="text-muted-foreground">
              Terampil dalam melakukan data cleaning, data visualization,
              exploratory data analysis (EDA), hingga pembuatan dashboard
              interaktif untuk bisnis. Menguasai tools seperti SQL, Python,
              Excel, serta BI Tools seperti Tableau/Power BI. Siap terus belajar
              dan beradaptasi dengan perkembangan data di era digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Management</h4>
                  <p className="text-muted-foreground">
                    Mengumpulkan, membersihkan, dan mengelola data agar siap
                    digunakan untuk analisis yang lebih dalam.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Data Visualization & Insight
                  </h4>
                  <p className="text-muted-foreground">
                    Membuat visualisasi dan dashboard untuk menyampaikan insight
                    secara jelas, efektif, dan mudah dipahami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
