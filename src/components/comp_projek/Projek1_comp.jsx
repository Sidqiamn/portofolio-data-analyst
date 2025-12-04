import data9 from "../../../public/projects/data9.png";
const Projek1_comp = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold ">🔍 Advance Analytic</h3>
      <section className="space-y-8">
        {/* 1. INSIGHT - Penjualan Berdasarkan Tahun (Ringkas) */}

        <div className="space-y-3 text-gray-700 leading-relaxed text-justify">
          <h4 className="text-lg mt-5 font-bold">
            1. Tren Order, Pendapatan, dan Customer Aktif per Tahun
          </h4>
          <div className="flex justify-center">
            <img
              src={data9}
              alt="Pengelompokan produk berdasarkan kategori dan subkategori"
              className="rounded-lg shadow-lg max-w-[400px] w-full"
            />
          </div>
          <p>
            Terlihat peningkatan signifikan pada tahun <strong>2013</strong> di
            mana jumlah order barang melonjak hingga <strong>52.782</strong> dan
            menjadi penyumbang pendapatan tertinggi sebesar{" "}
            <strong>16.344.878</strong>. Tahun ini juga mencatat{" "}
            <strong>customer aktif terbanyak</strong> yaitu{" "}
            <strong>17.427</strong> pelanggan.
          </p>

          <p>
            Sementara itu, tahun-tahun di awal periode seperti{" "}
            <strong>2010–2011</strong> masih menunjukkan aktivitas penjualan
            yang relatif rendah baik dari sisi order, pendapatan, maupun jumlah
            pelanggan.
          </p>

          <p className="font-semibold">
            Kesimpulan: Tahun 2013 merupakan puncak pertumbuhan bisnis dengan
            kinerja terbaik, menunjukkan peningkatan minat dan ekspansi
            pelanggan yang sangat kuat.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projek1_comp;
