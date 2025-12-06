import data1 from "../../public/projects/data1.png";
import data2 from "../../public/projects/data2.png";
import data3 from "../../public/projects/data3.png";
import data4 from "../../public/projects/data4.png";
import data5 from "../../public/projects/data5.png";
import data6 from "../../public/projects/data6.png";
import data7 from "../../public/projects/data7.png";
import data8 from "../../public/projects/data8.png";
import visual1 from "../../public/projects/visual1.png";
import visual2 from "../../public/projects/visual2.png";
import visual3 from "../../public/projects/visual3.png";
import dashboard1 from "../../public/projects/dashboard1.png";
import dataset from "../../public/projects/dataset.png";
import Projek1_comp from "../components/comp_projek/Projek1_comp";

const Projects1 = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10 text-left space-y-8">
      {/* SECTION 1: PENGENALAN DATA */}

      <section className="space-y-5">
        <h2 className="text-3xl font-bold">
          📊 Analisis Data Penjualan & Pelanggan
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Analisis ini dilakukan menggunakan dua file CSV yang berisi informasi
          pelanggan dan data penjualan. Berikut merupakan cuplikan data awal
          yang digunakan dalam proses analisis:
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-start">
          <img
            src={data1}
            alt="Contoh data awal CSV - Negara"
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
          <img
            src={data2}
            alt="Contoh data awal CSV - Pelanggan"
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={dataset}
            alt="Contoh data awal CSV - Pelanggan"
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
        </div>
      </section>
      <p className="text-gray-700 leading-relaxed">
        Berikut adalah tampilan utama dashboard Power BI yang telah dibuat
        berdasarkan proses <em>data cleaning</em>, <em>transformasi</em>, dan
        <em>exploratory data analysis (EDA)</em>. Dashboard ini dirancang untuk
        memberikan gambaran komprehensif terkait performa penjualan, profil
        pelanggan, serta dinamika kategori produk.
      </p>

      <div className="flex justify-center py-4">
        <img
          src={dashboard1}
          alt="Dashboard Power BI"
          className="rounded-lg shadow-lg w-full md:w-3/4"
        />
      </div>

      <p className="text-gray-700 leading-relaxed">
        Visualisasi ini terdiri dari beberapa komponen utama:
      </p>

      <ul className="list-disc ml-6 mt-2 text-gray-700 leading-relaxed">
        <li>
          <strong>Ringkasan KPI (Key Performance Indicator)</strong>
          Menampilkan total penjualan, jumlah pelanggan, jumlah pesanan, total
          kuantitas, dan
          <em> average price</em>.
        </li>
        <li>
          <strong>Distribusi Geografis Pelanggan</strong> Menggambarkan negara
          dengan kontribusi pelanggan terbesar.
        </li>
        <li>
          <strong>Segmentasi Usia Pelanggan</strong> Menunjukkan persebaran
          pelanggan berdasarkan kelompok umur.
        </li>
        <li>
          <strong>Tren Penjualan</strong> Memvisualisasikan perkembangan
          penjualan dari tahun ke tahun.
        </li>
        <li>
          <strong>Analisis Produk</strong> Menampilkan kategori dengan penjualan
          tertinggi serta produk terbaik berdasarkan total pendapatan.
        </li>
      </ul>

      <hr className="border-gray-300" />

      {/* SECTION 2: EXPLORATORY DATA ANALYSIS */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold">
          🔍 Hasil Exploratory Data Analysis (EDA)
        </h3>

        {/* INSIGHT 1 */}
        <div className="space-y-3">
          <h4 className="text-lg font-bold">1. Sebaran Geografis Pelanggan</h4>
          <p className="text-gray-700 leading-relaxed">
            Berdasarkan hasil analisis, mayoritas pelanggan berasal dari
            negara-negara berikut:
          </p>
          <div className="flex justify-center gap-10">
            <img
              src={data3}
              alt="Pengelompokan produk berdasarkan kategori dan subkategori"
              className="rounded-lg shadow-lg max-w-[300px] w-full"
            />
            <img
              src={visual1}
              alt=""
              className="rounded-lg shadow-lg max-w-[300px] w-full"
            />
          </div>
          <p className="text-gray-700 pt-4 leading-relaxed">
            Berdasarkan jumlah pelanggan, <strong>Amerika Serikat</strong>{" "}
            menjadi pasar terbesar dengan total <strong>7.482 pelanggan</strong>
            . Di posisi kedua,
            <strong>Australia</strong> memiliki <strong>3.591 pelanggan</strong>{" "}
            dan tetap menjadi pasar penting meskipun berbeda cukup jauh dari
            Amerika Serikat.
            <br />
            <br />
            Selanjutnya terdapat tiga negara Eropa dengan jumlah pelanggan yang
            berdekatan, yaitu:
            <strong> Inggris (1.913)</strong>, <strong>Prancis (1.810)</strong>,
            dan
            <strong> Jerman (1.780)</strong>. Ketiganya membentuk kelompok pasar
            menengah yang stabil dalam kontribusi pelanggan.
            <br />
            <br />
            Terakhir, <strong>Kanada</strong> berada pada posisi keenam dengan
            <strong>1.571 pelanggan</strong>, menjadi pasar dengan jumlah
            pelanggan paling rendah di antara keenam negara dalam analisis ini.
          </p>
        </div>

        <hr className="border-gray-300" />

        {/* INSIGHT 2 */}
        <div className="space-y-3">
          <h4 className="text-lg font-bold">
            2. Distribusi Pelanggan Berdasarkan Kelompok Usia
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Berdasarkan hasil analisis, mayoritas pelanggan berasal dari rentang
            usia berikut:
          </p>
          <div className="flex justify-center">
            <img
              src={data4}
              alt="Pengelompokan produk berdasarkan kategori dan subkategori"
              className="rounded-lg shadow-lg max-w-[400px] w-full"
            />
            <img
              src={visual2}
              alt="Pengelompokan produk berdasarkan kategori dan subkategori"
              className="rounded-lg shadow-lg max-w-[300px] w-full"
            />
          </div>
          <p className="text-gray-700 leading-relaxed">
            Pelanggan dikelompokkan ke dalam empat segmen usia utama untuk
            memahami karakteristik pasar berdasarkan demografi. Mayoritas
            pelanggan berasal dari kelompok <strong>Dewasa Paruh Baya</strong>{" "}
            (usia &lt; 59 tahun) dengan total <strong>11.567 pelanggan</strong>,
            menjadikannya segmen pasar terbesar dan fokus utama strategi bisnis.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Segmen <strong>Lansia Awal</strong> (59–70 tahun) menempati posisi
            kedua dengan <strong>4.419 pelanggan</strong>, menunjukkan transisi
            yang stabil dari kelompok usia sebelumnya. Jumlah pelanggan menurun
            lebih tajam pada segmen <strong>Lansia Tua</strong> (71–99 tahun)
            dengan <strong>2.462 pelanggan</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Kelompok <strong>Sentenarian</strong> (≥100 tahun) hanya berjumlah
            <strong> 19 pelanggan</strong>, namun menunjukkan adanya pelanggan
            berusia sangat lanjut yang tetap aktif.
          </p>
        </div>
      </section>

      {/* INSIGHT 3 */}

      <div className="space-y-4">
        <h4 className="text-lg font-bold">
          3. Analisis Deskriptif Metrik Kinerja Bisnis
        </h4>

        {/* Chart Container */}
        <div className="flex justify-center">
          <img
            src={data5}
            alt="Pengelompokan produk berdasarkan kategori dan subkategori"
            className="rounded-lg shadow-lg max-w-[250px] w-full"
          />
        </div>

        {/* Descriptive Text */}
        <div className="space-y-3 text-gray-700 leading-relaxed text-justify">
          <p>
            Total Sales tercatat sebesar <strong>$29.356.250</strong>.
            Pendapatan ini menunjukkan bahwa bisnis beroperasi pada skala besar
            serta berhasil menciptakan nilai finansial yang signifikan. Total
            Nr. Customers mencapai <strong>18.484</strong> pelanggan,
            mengindikasikan jangkauan pasar yang luas.
          </p>

          <p>
            Total Orders ada di angka <strong>27.659</strong>. Jika dibandingkan
            dengan jumlah pelanggan, rata-rata pesanan per pelanggan adalah
            sekitar <strong>1.5</strong>, menunjukkan adanya repeat order yang
            sehat. Total Quantity yang terjual mencapai <strong>60.423</strong>{" "}
            unit.
          </p>

          <p>
            Average Price berada di kisaran <strong>$486</strong>. Bisnis juga
            memiliki variasi produk yang cukup luas dengan Total Products
            sebanyak <strong>295</strong>, mendukung pemenuhan kebutuhan pasar
            yang beragam.
          </p>

          <p className="font-semibold">
            Kesimpulan: Bisnis memiliki performa finansial kuat, basis pelanggan
            besar, dan efisiensi transaksi yang baik sehingga berpotensi
            mempertahankan pertumbuhan di masa depan.
          </p>
        </div>
      </div>
      {/* INSIGHT 4 */}

      <div className="space-y-4">
        <h4 className="text-lg font-bold">4. Analisis Magnitudo</h4>

        {/* Chart / Summary Images */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <img
            src={data6} // contoh: path/variable untuk gambar penjualan per kategori
            alt="Total penjualan per kategori"
            className="rounded-lg shadow-lg max-w-[300px] w-full"
          />
          <img
            src={data7} // contoh: path/variable untuk gambar avg price per kategori
            alt="Rata-rata harga per kategori"
            className="rounded-lg shadow-lg max-w-[200px] w-full"
          />
          <img
            src={visual3}
            alt="Pengelompokan produk berdasarkan kategori dan subkategori"
            className="rounded-lg shadow-lg max-w-[300px] w-full"
          />
        </div>

        {/* Summary Header */}
        <div className="space-y-3 text-gray-700 leading-relaxed text-justify">
          <p>
            Berdasarkan data yang tersedia, terdapat perbedaan karakter antara
            kategori:
            <strong> Accessories</strong>, <strong>Bikes</strong>,{" "}
            <strong>Clothing</strong>, dan
            <strong> Components</strong>. Berikut ringkasan insight dan
            rekomendasi aksi per kategori.
          </p>
        </div>

        {/* Accessories */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-semibold">Accessories</h5>
          <p className="text-sm text-gray-700">
            <strong>Penjualan:</strong> 36.092 unit •{" "}
            <strong>Total Pendapatan:</strong> 700.262 •
            <strong>Avg Price:</strong> 13
          </p>
          <p className="mt-2 text-gray-700">
            <em>Insight:</em> Accessories memiliki harga paling murah namun
            volume penjualan sangat tinggi — menunjukkan sensitivitas kuat
            terhadap harga rendah dan pasar massal.
          </p>
          <ul className="mt-2 ml-4 list-disc text-gray-700">
            <li>
              Naikkan harga sedikit (misal 5–10%) untuk menaikkan revenue.
            </li>
            <li>Pastikan tetap berada di harga kompetitif.</li>
            <li>
              Revenue meningkat tanpa mengurangi penjualan secara signifikan.
            </li>
          </ul>
        </div>

        {/* Bikes */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-semibold">Bikes</h5>
          <p className="text-sm text-gray-700">
            <strong>Penjualan:</strong> 15.205 unit •{" "}
            <strong>Total Pendapatan:</strong> 28.316.272 •
            <strong>Avg Price:</strong> 949
          </p>
          <p className="mt-2 text-gray-700">
            <em>Insight:</em> Meskipun harga jauh lebih tinggi, Bikes tetap laku
            banyak — menandakan permintaan kuat dan daya beli yang tidak terlalu
            melihat harga pada segmen ini.
          </p>
          <ul className="mt-2 ml-4 list-disc text-gray-700">
            <li>Berikan promo/discount terbatas (misal 5%–10%).</li>
            <li>Atau buat bundle (helm + bike → harga lebih menarik).</li>
            <li>
              Harga sedikit lebih murah untuk produk yang sangat diminati →
              penjualan bisa meningkat pesat.
            </li>
          </ul>
        </div>

        {/* Clothing */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-semibold">Clothing</h5>
          <p className="text-sm text-gray-700">
            <strong>Penjualan:</strong> 9.101 unit •{" "}
            <strong>Total Pendapatan:</strong> 339.716 •
            <strong>Avg Price:</strong> 24
          </p>
          <p className="mt-2 text-gray-700">
            <em>Insight:</em> Harga relatif terjangkau namun penjualan lebih
            rendah daripada accessories — indikasi masalah pada product-market
            fit, variasi produk, atau pemasaran.
          </p>
          <ul className="mt-2 ml-4 list-disc text-gray-700">
            <li>Tingkatkan variasi produk</li>
            <li>
              Lakukan campaign musiman: <q>New Arrival Season</q> dll
            </li>
            <li>Rebranding atau peningkatan kualitas foto produk.</li>
          </ul>
        </div>

        {/* Components */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-semibold">Components</h5>
          <p className="text-sm text-gray-700">
            <strong>Avg Price:</strong> 264 •{" "}
            <em>Data penjualan tidak tersedia</em>
          </p>
          <p className="mt-2 text-gray-700">
            <em>Insight:</em> Komponen berharga sedang, tetapi minim informasi
            penjualan — bisa berarti stok terbatas, kurang promosi, atau
            permintaan rendah.
          </p>
          <ul className="mt-2 ml-4 list-disc text-gray-700">
            <li>harga tinggi perlu diturunkan</li>
            <li>
              Tidak relevan bagi pembeli yang datang, evaluasi apakah produk
              layak dipertahankan
            </li>
          </ul>
        </div>

        {/* Final Recommendations */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h5 className="font-semibold">Rekomendasi Strategis Singkat</h5>
          <ol className="mt-2 ml-4 list-decimal text-gray-700">
            <li>
              Accessories: murah → penjualan tinggi → naikkan harga sedikit
              untuk tingkatkan profit.
            </li>
            <li>
              Bikes: mahal tetapi tetap banyak dibeli → turunkan harga sedikit
              untuk mendorong lonjakan penjualan.
            </li>
            <li>
              Clothing: murah tapi penjualan rendah → perlu peningkatan promosi
              dan variasi produk.
            </li>
          </ol>
        </div>
      </div>
      {/* INSIGHT 5 (Ringkas) */}

      <div className="space-y-3 text-gray-700 leading-relaxed text-justify">
        <h4 className="text-lg font-bold">
          5. Top 5 Produk Berdasarkan Total Pendapatan
        </h4>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <img
            src={data8}
            alt="Top 5 produk berdasarkan total pendapatan"
            className="rounded-lg shadow-lg max-w-[400px] w-full"
          />
        </div>

        <p>
          Semua produk dalam daftar berasal dari kategori <strong>Bikes</strong>
          , khususnya varian <strong>Mountain-200</strong>. Seri ini mendominasi
          pendapatan dan volume penjualan pada dataset.
          <strong> Mountain-200 Black - 46</strong> adalah produk teratas dengan
          jumlah penjualan <strong>620 unit</strong> dan total pendapatan
          sekitar
          <strong> 1.373.454</strong>. Ini menjadi kontributor terbesar dalam
          daftar.
          <strong> Mountain-200 Black - 42</strong> mengikuti di posisi kedua
          dengan
          <strong> 614 unit</strong> terjual dan pendapatan sekitar
          <strong> 1.363.128</strong> selisih penjualan relatif kecil
          dibandingkan peringkat pertama.
        </p>

        <p>
          Varian <strong>Silver</strong> juga tinggi
          <strong> Mountain-200 Silver - 38 </strong>
          dan <strong>Mountain-200 Silver - 46</strong> menempati peringkat
          ketiga dan keempat dengan penjualan masing-masing{" "}
          <strong> 596</strong> dan
          <strong> 580 unit</strong>, menghasilkan pendapatan signifikan meski
          cost sedikit lebih tinggi.
        </p>

        <p>
          <strong>Mountain-200 Black - 38</strong> berada di posisi kelima
          dengan
          <strong>582 unit</strong> terjual dan total pendapatan sekitar
          <strong> 1.294.854</strong>. Secara keseluruhan, variasi warna Black
          cenderung unggul dibanding Silver dalam data ini.
        </p>
      </div>
      <Projek1_comp />
    </div>
  );
};

export default Projects1;
