import data9 from "../../../public/projects/data9.png";
import data10 from "../../../public/projects/data10.png";
import data11 from "../../../public/projects/data11.png";
import data12 from "../../../public/projects/data12.png";
import data13 from "../../../public/projects/data13.png";
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
        {/* 2. INSIGHT - Penjualan Berdasarkan Tahun (Ringkas) */}
        <div className="space-y-3 text-gray-700 leading-relaxed text-justify">
          <h4 className="text-lg mt-5 font-bold">
            2. Tren Total Penjualan, Running Total, dan Harga Rata-Rata per
            Tahun
          </h4>

          <div className="flex justify-center">
            <img
              src={data10}
              alt="Tren penjualan dan harga rata-rata per tahun"
              className="rounded-lg shadow-lg max-w-[400px] w-full"
            />
          </div>

          <p>
            Data menunjukkan bahwa penjualan mengalami fluktuasi yang sangat
            tinggi. Tahun <strong>2013</strong> menjadi titik puncak dengan
            total penjualan <strong>16.344.878</strong>, jauh lebih tinggi
            dibandingkan tahun sebelumnya. Namun, pada <strong>2014</strong>{" "}
            terjadi penurunan drastis hingga kembali ke level rendah seperti
            tahun <strong>2010</strong>.
          </p>

          <p>
            Nilai transaksi rata-rata (avg_harga) terus menurun dari{" "}
            <strong>3.101</strong> pada 2010 hingga hanya <strong>23</strong>{" "}
            pada 2014. Tren ini mengindikasikan perpindahan ke produk berharga
            rendah, diskon besar, atau hilangnya produk bernilai tinggi dari
            pasar.
          </p>
        </div>
        {/* 3. INSIGHT  */}
        <div className="space-y-3 text-gray-700 leading-relaxed text-justify">
          <h4 className="text-lg mt-5 font-bold">
            3. Analisis Kinerja Penjualan Produk per Tahun
          </h4>

          <div className="flex justify-center">
            <img
              src={data11}
              alt="Analisis penjualan produk per tahun"
              className="rounded-lg shadow-lg max-w-[400px] w-full"
            />
          </div>

          <p>
            Hasil analisis menunjukkan bahwa sebagian besar produk mengalami{" "}
            <strong>lonjakan penjualan pada tahun 2013</strong>, seperti{" "}
            <strong>All-Purpose Bike Stand</strong> dan{" "}
            <strong>AWC Logo Cap</strong>, yang penjualannya jauh di atas
            rata-rata historisnya. Namun, pada <strong>2014</strong> hampir
            semua produk mengalami <strong>penurunan tajam</strong> jika
            dibandingkan dengan tahun sebelumnya, menunjukkan ketidakstabilan
            performa antar tahun.
          </p>

          <p>
            Produk seperti <strong>Bike Wash – Dissolver</strong> juga mencatat
            kinerja sangat baik pada 2013 sebelum turun drastis di tahun
            berikutnya. Sementara <strong>Classic Vest – L</strong> tampil solid
            pada 2013 dengan nilai yang jauh di atas rata-rata penjualan
            historisnya.
          </p>

          <p className="font-semibold">
            Kesimpulan: Tahun 2013 menjadi puncak performa bagi banyak produk,
            namun penurunan besar di 2014 menandakan perlunya evaluasi strategi
            harga, stok, dan promosi untuk menjaga konsistensi penjualan.
          </p>
        </div>
        {/* 4. INSIGHT  */}
        <div className="space-y-3 text-gray-700 leading-relaxed text-justify">
          <h4 className="text-lg mt-5 font-bold">
            4. Analisis Kontribusi Penjualan per Kategori
          </h4>

          <div className="flex justify-center">
            <img
              src={data12}
              alt="Analisis kontribusi penjualan per kategori"
              className="rounded-lg shadow-lg max-w-[400px] w-full"
            />
          </div>

          <p>
            Analisis menunjukkan bahwa kategori <strong>Bikes</strong>{" "}
            mendominasi penjualan dengan kontribusi <strong>96.46%</strong>,
            menjadikannya sumber pendapatan utama perusahaan. Meskipun memiliki
            harga lebih tinggi, permintaan tetap kuat dan stabil.
          </p>

          <p>
            Sementara itu, kategori <strong>Accessories</strong> (2.39%) dan{" "}
            <strong>Clothing</strong> (1.16%) memiliki kontribusi yang sangat
            rendah. Rendahnya angka ini mengindikasikan potensi{" "}
            <strong>upselling</strong> yang belum dimaksimalkan, terutama karena
            mayoritas pembeli hanya fokus pada produk sepeda.
          </p>

          <p className="font-semibold">
            Rekomendasi: Optimalkan kategori Bikes melalui harga kompetitif dan
            variasi produk baru, serta tingkatkan penjualan Accessories dan
            Clothing melalui bundling, cross-selling, dan promosi ringan untuk
            menaikkan attach rate.
          </p>
        </div>
        {/* 5. INSIGHT */}
        <div className="space-y-3 text-gray-700 leading-relaxed text-justify">
          <h4 className="text-lg mt-5 font-bold">
            5. Analisis Distribusi Produk Berdasarkan Rentang Harga
          </h4>

          <div className="flex justify-center">
            <img
              src={data13}
              alt="Distribusi produk berdasarkan rentang harga"
              className="rounded-lg shadow-lg max-w-[400px] w-full"
            />
          </div>

          <p>
            Distribusi produk menunjukkan bahwa rentang harga{" "}
            <strong>Below 100</strong> memiliki jumlah produk terbanyak dengan{" "}
            <strong>110 item</strong>. Hal ini menandakan bahwa portofolio
            produk didominasi oleh kategori berbiaya rendah yang menyasar pasar
            massal.
          </p>

          <p>
            Rentang <strong>100–500</strong> juga cukup besar dengan{" "}
            <strong>101 produk</strong>, menunjukkan bahwa segmen harga menengah
            memiliki variasi yang hampir sama kuatnya. Sementara itu, jumlah
            produk pada kategori <strong>500–1000</strong> dan{" "}
            <strong>Above 1000</strong>
            jauh lebih sedikit, menandakan penawaran terbatas pada segmen
            menengah-atas dan premium.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projek1_comp;
