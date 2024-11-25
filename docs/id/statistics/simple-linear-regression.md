---
contributors:
  - name: "Fadjar"
    username: "fadjarrafi"
---

# Regresi Linier Sederhana

Pernahkah kamu bertanya-tanya bagaimana perusahaan besar mengambil keputusan investasi iklan mereka? Atau bagaimana properti menentukan harga jual rumah? Jawabannya ada pada teknik statistik yang disebut regresi linier sederhana.

Regresi linier sederhana adalah metode statistik yang memungkinkan kita memahami dan memprediksi hubungan antara dua variabel. Bayangkan seperti mencari "benang merah" yang menghubungkan biaya iklan ($x$) dengan tingkat penjualan ($y$).

Secara matematis, hubungan ini dapat dinyatakan dengan rumus:

$$ 
y = \beta_0 + \beta_1 x + \varepsilon
$$

Dimana: 

| Simbol        | Pengertian    |
| ------------- | ------------- |
| $x$             | Variabel Independen |
| $y$             | Variabel Dependen|
| β₀            | *Intercept* (nilai $y$ ketika $x$ = 0)|
| β₁            | *Slope* (seberapa besar perubahan $y$ untuk setiap unit perubahan $x$)|
| ε             | *Error term*|

## Fungsi Regresi Linier

Regresi linier memiliki dua peran krusial dalam analisis data: 

1. **Pembuktian Hubungan**
    - Membuktikan secara statistik apakah ada hubungan nyata antara dua variable.
    - Mengukur seberapa kuat hubungan tersebut.
    - Contoh: Apakah benar tingkat pendidikan mempengaruhi tingkat pendapatan?

2. **Kekuatan Prediksi**
    - Memungkinkan kita memprediksi nilai di masa depan
    - Membuat keputusan bisnis berdasarkan data historis
    - Contoh: JIka kita menaikkan anggaran iklan sebesar $x$, berapa peningkatan penjualan ($y$) yang bisa diharapkan?

## Menghitung Regresi Linier

Mari kita ambil kasus dimana kita ingin mengetahui keterkaitan antara biaya iklan ($x$) dan penjualan ($y$). Sebagai contoh kita memiliki data seperti berikut:

| Biaya Iklan  | Unit          |
| ------------ | ------------- |
| 100          | 500           |
| 200          | 700           |
| 300          | 900           |
| 400          | 1100          |
| 500          | 1300          |

Sebelum kita menghitung regresi linier sederhana dengan data tersebut, kita perlu:

1. Menghitung *Slope* $\beta_1$
2. Menghitung *Intercept* $\beta_0$

### Menghitung *Slope* ($\beta_1$)

*Slope* atau kemiringan menggambarkan perubahan variabel $y$ terhadap setiap perubahan variabel $x$. Kita bisa menghitung *slope* menggunakan rumus sebagai berikut:

$$
\beta_1 = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sum(x_i - \bar{x})^2}
$$

Dimana: 

| Simbol            | Pengertian    |
| ----------------- | ------------- |
| $x_i$             | Nilai individual dari variabel Independen |
| $y_i$             | Nilai individual dari variabel Dependen |
| $\bar{x}$         | Rata-rata nilai dari seluruh variabel Independen |
| $\bar{y}$         | Rata-rata nilai dari seluruh variabel Dependen |

Mari kita hitung terlebih dahulu rata-rata dari tiap biaya iklan (X) dan unit penjualan (Y):

$$ \bar{x}  = (100 + 200 + 300 + 400 + 500) / 5 = 300 $$

$$ \bar{y} = (500 + 700 + 900 + 1100 + 1300) / 5 = 900 $$

Setelah kita menemukan rata-rata dari biaya iklan dan unit penjualan, selanjutnya kita hitung *Slope* nya:

$$ (100 - 300)(500 - 900) = (-200)(-400) = 80,000 $$
$$ (200 - 300)(700 - 900) = (-100)(-200) = 20,000 $$
$$ (300 - 300)(900 - 900) = (0)(0) = 0 $$
$$ (400 - 300)(1100 - 900) = (100)(200) = 20,000 $$
$$ (500 - 300)(1300 - 900) = (200)(400) = 80,000 $$
$$ Total = 200,000  $$

$$ (100 - 300)² = (-200)² = 40,000 $$
$$ (200 - 300)² = (-100)² = 10,000 $$
$$ (300 - 300)² = (0)² = 0 $$
$$ (400 - 300)² = (100)² = 10,000 $$
$$ (500 - 300)² = (200)² = 40,000 $$
$$ Total = 100,000 $$

$$ \beta_1 = 200,000/100,000 = 2 $$

Dari penjualan data diatas, kita mendapatkan nilai dari *Slope* = 2 yang berarti bahwa setiap kenaikan 1 unit biaya ($x$), akan meningkatkan penjualan ($y$) sebesar 2 unit.

### Menghitung *Intercept* ($\beta_0$)

Setelah kita menemukan nilai *Slope*, kita hitung nilai *Intercept* dengan rumus berikut:

$$
\beta_0 = \bar{y} - \beta_1\bar{x}
$$

Dimana:

| Simbol            | Pengertian    |
| ----------------- | ------------- |
| $\bar{y}$         | Rata-rata nilai dari seluruh variabel independen |
| $\bar{x}$         | Rata-rata nilai dari seluruh variabel dependen |
| $\beta_1$         | *Slope* |

Mari kita hitung *Intercept* dari *Slope* yang sudah kita hitung sebelumnya:

$$ \beta_0 = 900 - (2 × 300) $$

$$ \beta_0 = 300 $$

Ini berarti ketika biaya iklan 0, prediksi penjualan adalah 300 unit. Setelah kita mengetahui *Slope* dan *intercept*, maka kita bisa masukkan ke dalam persamaan regresi linier sebagai berikut:

$$ y = 300 + 2x $$

Lalu bagaimana kita menggunakan rumus ini untuk membuat prediksi? sebagai contoh, di iklan berikutnya kita ingin mengetahu seberapa banyak penjualan jika kita mengeluarkan biaya iklan sejumlah 250. Kita masukkan biaya iklan sejumlah 250 kedalam persamaan yang sudah kita tentukan:

$$ y = 300 + 2(250) $$
$$ y = 300 + 500 $$
$$ y = 800 $$

Jadi jika kita mengeluarkan biaya iklan sejumlah 250, maka dapat diprediksi tingkat penjualan sejumlah 800 unit. Beikut persamaan yang telah kita dapatkan jika kita gambar dalam grafik:

<iframe src="https://www.desmos.com/calculator/zgbfvjefuz?embed" width="700" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

Perhitungan regresi linier yang telah kita buat dapat kita simulasikan dalam program sebagai berikut: 

:::tabs
== JavaScript
```js
// Data penjualan dan iklan
const data_penjualan = {
    biaya_iklan: [100, 200, 300, 400, 500],
    unit_terjual: [500, 700, 900, 1100, 1300]
};

// Menghitung rata-rata dari array
function hitung_rata_rata(data) {
    return data.reduce((total, nilai) => total + nilai, 0) / data.length;
}

// Menghitung slope (β₁) dari data
function hitung_slope(data) {
    const rata_x = hitung_rata_rata(data.biaya_iklan);
    const rata_y = hitung_rata_rata(data.unit_terjual);
    
    let pembilang = 0;
    let penyebut = 0;
    
    // Hitung pembilang dan penyebut untuk rumus slope
    for (let i = 0; i < data.biaya_iklan.length; i++) {
        const selisih_x = data.biaya_iklan[i] - rata_x;
        const selisih_y = data.unit_terjual[i] - rata_y;
        
        pembilang += selisih_x * selisih_y;
        penyebut += selisih_x * selisih_x;
    }
    
    return pembilang / penyebut;
}

// Menghitung intercept (β₀) dari data
function hitung_intercept(data, slope) {
    const rata_x = hitung_rata_rata(data.biaya_iklan);
    const rata_y = hitung_rata_rata(data.unit_terjual);
    
    return rata_y - (slope * rata_x);
}

// Memprediksi unit terjual berdasarkan biaya iklan
function prediksi_penjualan(biaya_iklan, slope, intercept) {
    return intercept + (slope * biaya_iklan);
}

// Hitung regresi
const slope = hitung_slope(data_penjualan);
const intercept = hitung_intercept(data_penjualan, slope);

// Tampilkan hasil
console.log(`Slope (β₁): ${slope}`); // output: 2
console.log(`Intercept (β₀): ${intercept}`); // output: 300

// Contoh prediksi
const biaya_baru = 250;
const prediksi = prediksi_penjualan(biaya_baru, slope, intercept);
console.log(`${prediksi} unit`);
```
:::
## Asumsi Klasik Regresi Linier

Sebelum mulai menerapkan regresi linier, penting untuk kita memahami asumsi-asumsi dasarnya:

1. **Linearitas**

Asumsi pertama dan yang paling mendasar adalah hubungan antara variabel independen ($x$) dan variabel dependen ($y$) harus bersifat linier. Bayangkan jika kita menggambar titik-titik data dalam sebuah grafik, maka titik-titik tersebut seharusnya membentuk pola yang bisa didekati dengan garis lurus. Kita bisa memeriksa asumsi ini dengan membuat scatter plot dari data kita. Jika pola yang terbentuk jauh dari linier, misalnya membentuk kurva atau pola lainnya, maka kita perlu melakukan transformasi data terlebih dahulu. Transformasi yang umum dilakukan bisa berupa logaritma, akar kuadrat, atau transformasi lainnya yang sesuai dengan bentuk data.

2. **Independensi**

Asumsi kedua adalah setiap pengamatan dalam data kita harus bersifat independen atau tidak saling mempengaruhi satu sama lain. Hal ini sangat penting terutama ketika kita bekerja dengan data yang dikumpulkan dari waktu ke waktu (time series). Sebagai contoh, jika kita menganalisis penjualan harian, maka penjualan hari ini seharusnya tidak dipengaruhi oleh penjualan kemarin. Jika terdapat pengaruh antar pengamatan (autokorelasi), hasil analisis kita bisa menjadi bias. Kita bisa memeriksa asumsi ini dengan plot ACF (Autocorrelation Function) atau menggunakan uji statistik seperti Durbin-Watson.

3. **Homoskedastisitas**

Istilah yang mungkin terdengar rumit ini sebenarnya merujuk pada konsep yang cukup sederhana: varians dari error (residual) harus bersifat konstan untuk semua nilai variabel independen. Dalam konteks contoh kita tentang iklan dan penjualan, ini berarti tingkat kesalahan prediksi seharusnya relatif sama, baik untuk biaya iklan yang rendah maupun tinggi. Kita bisa memeriksa asumsi ini dengan membuat plot antara residual dan nilai prediksi. Jika plot menunjukkan pola tertentu (misalnya membentuk corong), maka asumsi ini tidak terpenuhi dan kita perlu melakukan transformasi data atau menggunakan metode analisis yang lebih robust.

4. **Normalitas**

Asumsi terakhir adalah residual atau error harus mengikuti distribusi normal. Ini penting terutama ketika kita ingin melakukan uji hipotesis atau membuat interval kepercayaan. Bayangkan jika kita membuat histogram dari error, maka bentuknya harus menyerupai lonceng yang simetris (kurva normal). Kita bisa memeriksa asumsi ini dengan beberapa cara, mulai dari yang sederhana seperti membuat histogram residual atau Q-Q plot, hingga uji formal seperti Shapiro-Wilk atau Kolmogorov-Smirnov.


## Uji Persamaan dengan Koefisien Determinasi ($R^2$)

Lalu bagaimana jika kita ingin mengetahui kemampuan persamaan regresi dalam menerangkan seberapa pengruh variabel independen secara bersama-sama (stimultan) mempengaruhi variabel dependen? disinilah kita melakukan Uji Koefisien Determinasi.  Koefisien determinasi adalah ukuran yang menunjukkan seberapa baik model regresi menjelaskan data. Kita bisa menghitung koefisien determinasi dengan rumus:

$$ R^2 = 1 - \frac{\sum(y_i - \hat{y_i})^2}{\sum(y_i - \bar{y})^2} $$

Dimana: 

| Simbol            | Pengertian    |
| ----------------- | ------------- |
| $y_i$             | Nilai Aktual |
| $\hat{y_i}$       | Nilai Prediksi |
| $\bar{y}$         | Rata-Rata Nilai Aktual |

Koefisien determinasi menggambarkan besarnya keragaman (informasi) di dalam variabel $y$ yang dapat diberikan oleh model regresi yang kita didapatkan. Nilai koefisien berkisan antara 0 sampai 1. Jika nilai $R^2$ dikalikan 100%, maka ini menunjukkan persentasi keragaman (informasi) dalam variabel $y$.

Untuk dapat menghitung $R^2$, kita perlu untuk menghitung:

1. Nilai Prediksi ($\hat{y_i}$) untuk Setiap $x$
2. Nilai Rata-Rata $y$ Aktual ($\bar{y}$)
3. Nilai SS_total dan SS_residual

### Menghitung Nilai Prediksi ($\hat{y_i}$) untuk Setiap $x$

Kita hitung setiap nilai yang kita miliki dengan persamaan regresi linier yang sudah kita dapatkan sebelumnya, yaitu: $y = 300 + 2x$

| Biaya Iklan (X)  | Unit (Y)      | $\bar{y}$ (Y Prediksi) |
| ---------------- | ------------- | ---------------------- |
| 100              | 500           | 300 + 2(100) = 500     | 
| 200              | 700           | 300 + 2(200) = 700     |
| 300              | 900           | 300 + 2(300) = 900     |
| 400              | 1100          | 300 + 2(400) = 1100    |
| 500              | 1300          | 300 + 2(500) = 1300    |

### Menghitung Nilai Rata-Rata $y$ Aktual ($\bar{y}$)

$$ \bar{y} = (500 + 700 + 900 + 1100 + 1300) / 5 = 900 $$

$$ (500 - 900)² = (-400)² = 160,000 $$
$$ (700 - 900)² = (-200)² = 40,000 $$
$$ (900 - 900)² = 0 $$
$$ (1100 - 900)² = (200)² = 40,000 $$
$$ (1300 - 900)² = (400)² = 160,000 $$
$$ SStotal = 400,000 $$

### Menghitung $R^2$

Kita bisa menghitung $R^2$ dengan menggunakan rumus:

$$ R^2 = 1 - (SSresidual / SStotal) $$

Dimana: 

| Simbol             | Pengertian    |
| -----------------  | ------------- |
| $SSresidual$        | jumlah kuadrat akibat regresi |
| $SStotal$           | total kuadrat |

mari kita hitung total $SStotal$ dan $SSresidual$ sebagai berikut: 
$$ SStotal = \sum(y - \bar{y})^2 $$

$$ (500 - 500)² = 0 $$
$$ (700 - 700)² = 0 $$
$$ (900 - 900)² = 0 $$
$$ (1100 - 1100)² = 0 $$
$$ (1300 - 1300)² = 0 $$

$$ SSresidual = 0 $$

Setelah kita mendapatkan nilai dari $SStotal$ dan $SSresidual$, kita masukkan kedalam rumus koefisien determinasi:

$$ R^2 = 1 - (0 / 400,000) $$
$$ R^2 = 1 $$

Hasil $R^2$ = 1 menunjukkan bahwa:

1. Model menjelaskan 100% variasi dalam data
2. Semua titik data tepat berada pada garis regresi
3. Prediksi model sempurna untuk data yang ada

Berikut perhitungan $R^2$ jika kita gambarkan melalui grafik:

<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" color>
    <rect width="100%" height="100%" fill="white" />
  <!-- Grid Background -->
  <defs>
    <pattern id="grid" width="60" height="40" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 40" fill="none" stroke="#eee" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="600" height="400" fill="url(#grid)"/>
  
  <!-- Axes -->
  <line x1="50" y1="350" x2="550" y2="350" stroke="black" stroke-width="2"/>
  <line x1="50" y1="50" x2="50" y2="350" stroke="black" stroke-width="2"/>
  
  <!-- Axis Labels -->
  <text x="300" y="390" text-anchor="middle">Biaya Iklan (X)</text>
  <text x="20" y="200" transform="rotate(-90, 20, 200)" text-anchor="middle">Penjualan (Y)</text>
  
  <!-- Regression Line -->
  <line x1="50" y1="290" x2="550" y2="90" stroke="blue" stroke-width="2"/>
  
  <!-- Data Points -->
  <circle cx="110" cy="250" r="4" fill="red"/>
  <circle cx="170" cy="230" r="4" fill="red"/>
  <circle cx="230" cy="210" r="4" fill="red"/>
  <circle cx="290" cy="190" r="4" fill="red"/>
  <circle cx="350" cy="170" r="4" fill="red"/>
  
  <!-- R² Annotation -->
  <text x="450" y="100" text-anchor="middle" fill="blue">R² = 1.0</text>
  <text x="450" y="120" text-anchor="middle" font-size="12">Perfect Fit</text>
</svg>

Ini menunjukkan bahwa bahkan dengan sedikit variasi dalam data, $R^2$ tetap bisa sangat tinggi jika model cocok dengan pola data. Kita dapat mensimulasikan perhitungan koefisien determinasi dengan program segabai berikut:

:::tabs
== JavaScript
```js
// Menghitung koefisien determinasi (R²)
function hitung_r_squared(data, slope, intercept) {
    const rata_y = hitung_rata_rata(data.unit_terjual);
    
    let ss_total = 0;  // Sum of squares total
    let ss_residual = 0;  // Sum of squares residual
    
    for (let i = 0; i < data.biaya_iklan.length; i++) {
        const y_prediksi = intercept + (slope * data.biaya_iklan[i]);
        const y_aktual = data.unit_terjual[i];
        
        ss_total += Math.pow(y_aktual - rata_y, 2);
        ss_residual += Math.pow(y_aktual - y_prediksi, 2);
    }
    
    return 1 - (ss_residual / ss_total);
}

// Penggunaan
const r_squared = hitung_r_squared(data_penjualan, slope, intercept);
console.log(`R² (Koefisien Determinasi): ${r_squared.toFixed(4)}`); // Output  0.9989 yang kita bulatkan menjadi 1
```
:::
