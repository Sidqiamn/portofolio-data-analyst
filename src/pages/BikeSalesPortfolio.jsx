import dashboard2 from "../../public/projects/dashboard2.png";
import tableSample from "../../public/projects/tableSample.png";
import incomeChart from "../../public/projects/incomeChart.png";
import ageChart from "../../public/projects/ageChart.png";
import commuteChart from "../../public/projects/commuteChart.png";

const BikeSalesPortfolio = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-14 font-sans">
      {/* HEADER */}
      <header className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black  bg-clip-text ">
          Bike Sales Dashboard
        </h1>
        <p className="mt-4 text-gray-500 text-lg">
          Insight & visualisasi performa penjualan sepeda
        </p>
      </header>

      {/* DASHBOARD PREVIEW */}
      <section className="flex flex-col gap-14 mb-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            📊 Cuplikan Dashboard
          </h2>

          <div className="group relative rounded-2xl overflow-hidden shadow-xl flex justify-center items-center">
            <img
              src={dashboard2}
              alt="Bike Sales Dashboard"
              className="h-[400px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105 mx-auto"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            📋 Data Sample
          </h3>

          <div className="group rounded-xl overflow-hidden shadow-lg">
            <img
              src={tableSample}
              alt="Contoh data tabel"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* KEY FINDINGS */}
      {/* KEY FINDINGS */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          🔍 Key Findings
        </h2>

        {/* 2 Card di atas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              title: "Income vs Purchase",
              desc: "Pembeli didominasi segmen pendapatan menengah ke atas.",
              img: incomeChart,
            },
            {
              title: "Age Brackets",
              desc: "Kelompok usia Middle Age menjadi pembeli terbanyak.",
              img: ageChart,
            },
          ].map((item, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1"
            >
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              <img
                src={item.img}
                alt={item.title}
                className="mt-4 w-full rounded-xl object-contain"
              />
            </article>
          ))}
        </div>

        {/* Gambar ke-3 full width di bawah */}
        <article className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300">
          <h4 className="font-bold text-lg">Commute Distance</h4>
          <p className="mt-2 text-sm text-gray-500">
            Jarak 0–2 miles memiliki tingkat konversi tertinggi.
          </p>

          <div className="mt-6 flex justify-center">
            <img
              src={commuteChart}
              alt="Commute Distance"
              className="w-full max-w-5xl rounded-xl object-contain"
            />
          </div>
        </article>
      </section>

      {/* INTERPRETATION */}
      <section className="mb-20 space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          📌 Interpretasi Detail
        </h2>

        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl space-y-6">
          {[
            {
              title: "Segmentasi Pendapatan",
              text: "Segmen pendapatan menengah–tinggi memiliki potensi tertinggi dalam keputusan pembelian.",
            },
            {
              title: "Preferensi Usia",
              text: "Usia produktif (Middle Age) menjadi pasar paling stabil.",
            },
            {
              title: "Jarak",
              text: "Semakin pendek jarak, semakin besar peluang pembelian sepeda.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl hover:bg-white transition shadow-sm hover:shadow-md"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECOMMENDATION */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          ✅ Rekomendasi Strategis
        </h2>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <ul className="space-y-4 text-gray-700">
            {[
              "Fokus kampanye pada usia produktif (35–55 tahun).",
              "Optimalkan produk untuk komuter jarak dekat.",
              "Perkuat distribusi di wilayah dengan performa tertinggi.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 hover:translate-x-1 transition"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500"></footer>
    </div>
  );
};

export default BikeSalesPortfolio;
