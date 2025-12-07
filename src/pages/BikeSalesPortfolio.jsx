import dashboard2 from "../../public/projects/dashboard2.png";
import tableSample from "../../public/projects/tableSample.png";
import incomeChart from "../../public/projects/incomeChart.png";
import ageChart from "../../public/projects/ageChart.png"; // NOTE: hapus spasi di path
import commuteChart from "../../public/projects/commuteChart.png";

const BikeSalesPortfolio = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 prose prose-slate">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Bike Sales Dashboard — Insights
        </h1>
        <p className="mt-3 text-gray-600">
          Interpretasi visual dashboard penjualan sepeda — ringkasan insight dan
          rekomendasi yang rapi untuk portofolio.
        </p>
      </header>

      {/* Section: Dashboard */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold">
            📁 Cuplikan Data & Dashboard
          </h2>
          <p className="text-gray-700">
            Contoh sampel data yang digunakan dan tampilan dashboard hasil
            proses data cleaning, transformasi, dan EDA.
          </p>

          <div className="mt-4 rounded-lg overflow-hidden shadow">
            <img
              src={dashboard2}
              alt="Bike Sales Dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Data Sample</h3>
          <p className="text-gray-600 text-sm">
            Kolom utama: Marital Status, Gender, Income, Commute Distance,
            Region, Age.
          </p>

          <div className="mt-3 rounded-md overflow-hidden shadow-sm">
            <img
              src={tableSample}
              alt="Contoh data tabel"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <hr className="my-6" />

      {/* Key Findings */}
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold">
          🔎 Key Findings — Ringkasan Insight
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-bold">Income vs Purchase</h4>
            <p className="text-sm text-gray-600">
              Pembeli sepeda cenderung berasal dari pendapatan menengah ke atas.
              Pria menunjukkan rata-rata pendapatan tertinggi.
            </p>
            <img
              src={incomeChart}
              alt="Income vs Purchase"
              className="mt-3 w-full rounded"
            />
          </article>

          <article className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-bold">Age Brackets</h4>
            <p className="text-sm text-gray-600">
              Kelompok <strong>Middle Age</strong> mendominasi pembelian.
            </p>
            <img
              src={ageChart}
              alt="Age Brackets Chart"
              className="mt-3 w-full rounded"
            />
          </article>

          <article className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-bold">Commute Distance</h4>
            <p className="text-sm text-gray-600">
              Jarak 0–2 miles memiliki korelasi terkuat dengan pembelian sepeda.
            </p>
            <img
              src={commuteChart}
              alt="Commute Distance Chart"
              className="mt-3 w-full rounded"
            />
          </article>
        </div>
      </section>

      {/* Interpretasi */}
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold">📌 Interpretasi Detail</h2>

        <div className="bg-white p-6 rounded shadow-sm space-y-4">
          <div>
            <h3 className="font-semibold">1. Segmentasi Pendapatan</h3>
            <p className="text-gray-700">
              Konsumen dengan pendapatan menengah–tinggi menjadi segmen paling
              potensial untuk penjualan sepeda.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. Preferensi Usia</h3>
            <p className="text-gray-700">
              Kelompok usia Middle Age merupakan target pasar utama berdasarkan
              pola pembelian.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. Jarak Komuter</h3>
            <p className="text-gray-700">
              Semakin pendek jarak tempuh, semakin tinggi kemungkinan pembelian
              sepeda.
            </p>
          </div>
        </div>
      </section>

      {/* Rekomendasi */}
      <section className="space-y-4 mb-12">
        <h2 className="text-2xl font-semibold">✅ Rekomendasi Strategis</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Fokus kampanye pada segmen usia produktif (35–55 tahun).</li>
          <li>Optimalkan paket produk untuk komuter jarak dekat.</li>
          <li>Perkuat distribusi pada wilayah dengan performa terbaik.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600">
        <p>Komponen ini dirancang khusus untuk portofolio data analytics.</p>
      </footer>
    </div>
  );
};

export default BikeSalesPortfolio;
