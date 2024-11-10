# Ukuran Letak

Ukuran letak merupakan salah satu cabang dari statistika deskriptif, yang mana digunakan untuk mengetahui
letak suatu rangkaian data dalam sebuah distribusi. Ukuran letak dibagi, menjadi 3 yaitu kuartil, desil, dan persentil.
Ukuran letak biasa digunakan dalam kasus distribusi kelompok.

Misalnya di sebuah posyandu ada petugas yang mengukur berat badan balita untuk memantau perkembangan dan pertumbuhan balita.
Maka ukuran letak digunakan untuk

| Ukuran Letak          | Nilai         | Fungsi                                                        |
| --------------------- | ------------- | -----------------------------                                 |
| Persentil             | 50            | Acuan rata-rata berat balita                                  |
| Persentil             | 5             | Indikasi stunting pada balita                                 |
| Persentil             | 85            | Indikasi obesitas pada balita                                 |
| Kuartil               | Atas          | Acuan batas bawah normal untuk berat badan atau tinggi badan  |
| Kuartil               | Bawah         | Acuan batas atas normal                                       |

## Persentil

Persentil diambil dari kata *percent* yang berarti persen. Persentil merupakan pembagian N data yang urut menjadi 100 bagian yang mana data tersebut dibagi sama banyak tersebut, dibatasi oleh 99 nilai persentil. Persentil dibagi menjadi dua menurut jenis datanya, yaitu Data Tunggal dan Data Berkelompok.

Data tunggal secara umum merupakan deret angka yang terdapat pada sebuah baris atau *array*. Rumus untuk menghitung persentil data tunggal adalah sebagai berikut
$$ Pi = \frac{i(n+1)}{100} $$

| Simbol        | Pengertian    |
| ------------- | ------------- |
| $P_i$         | Persentil ke-i|
| i             | Nilai Persentil (1 hingga 99) |
| n             | Banyaknya data pada baris atau *array*|

Berikut ini contoh *case* dari persentil data tunggal dan data berkelompok

### Data Tunggal
Misalnya ada baris angka seperti dibawah dan kita ingin mencari persentil ke-50

:::tabs
== JavaScript
```javascript
// Data Tunggal
const data_tunggal = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const nilai_persen = 100;
const nilai_persentil = 50; //1-99
const angka_awal = 1;
let hasil_persentil = 0;

// Mengurutkan data secara ascending
const data_tersortir = data_tunggal.sort((a, b) => a - b);
const jumlah_data = data_tunggal.length;

// Menghitung posisi persentil
const posisi = (jumlah_data + angka_awal) * (nilai_persentil / nilai_persen);

// Jika posisi adalah bilangan bulat, ambil nilai pada posisi tersebut
if (Number.isInteger(posisi)) {
    hasil_persentil = data_tersortir[posisi - angka_awal]; //20
} else {
    // Jika posisi bukan bilangan bulat, lakukan interpolasi
    const indeks_bawah = Math.floor(posisi) - angka_awal;
    const indeks_atas = Math.ceil(posisi) - angka_awal;

    // Nilai pada indeks bawah dan atas
    const nilai_bawah = data_tersortir[indeks_bawah];
    const nilai_atas = data_tersortir[indeks_atas];

    // Interpolasi untuk menghitung nilai persentil
    hasil_persentil = nilai_bawah + (nilai_atas - nilai_bawah) * (posisi - Math.floor(posisi)); //20
}
```

==Python
```python
# Data Tunggal
data_tunggal = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16]

nilai_persen = 100
nilai_persentil = 50  # 1-99
angka_awal = 1
hasil_persentil = 0

# Mengurutkan data secara ascending
data_tersortir = sorted(data_tunggal)
jumlah_data = len(data_tunggal)

# Menghitung posisi persentil
posisi = (jumlah_data + angka_awal) * (nilai_persentil / nilai_persen)

# Jika posisi adalah bilangan bulat, ambil nilai pada posisi tersebut
if posisi.is_integer():
    hasil_persentil = data_tersortir[int(posisi) - angka_awal]  # 20
else:
    # Jika posisi bukan bilangan bulat, lakukan interpolasi
    indeks_bawah = int(posisi) - angka_awal
    indeks_atas = int(posisi + 1) - angka_awal

    # Nilai pada indeks bawah dan atas
    nilai_bawah = data_tersortir[indeks_bawah]
    nilai_atas = data_tersortir[indeks_bawah]

    # Interpolasi untuk menghitung nilai persentil
    hasil_persentil = nilai_bawah + (nilai_atas - nilai_bawah) * (posisi - int(posisi))  # 20
    print(hasil_persentil)
```
:::

### Data Berkelompok

Berikut ini rumus persentil untuk data berkelompok

$$ P_p = L + \frac{p/100 - \sum f_b}{f_i} \times c $$

| Simbol        | Pengertian                                                            |
| ------------- | --------------------------------------------------------------------- |
| $P_p$         | Nilai persentil ke-i                                                      |
| L             | Batas bawah kelas interval yang memuat $P_p$                          |
| p             | Nilai persentil (1 hingga 99)                                              |
| $\sum f_b$    | Jumlah frekuensi kumulatif sebelum kelas interval yang memuat $P_p$   |
| $f_i$         | Frekuensi kelas interval yang memuat $P_p$                            |
| c             | Panjang kelas interval yang memuat $P_p$                              |

Misalnya ada data kelompok umur warga dibawah 1 tahun hingga 40 tahun seperti dibawah dan kita ingin mencari persentil ke-50 dari kelompok data tersebut
:::tabs
== JavaScript
```javascript
// Data kelompok
const data_kelompok = [
    { interval: [0, 10], frekuensi: 5 },
    { interval: [10, 20], frekuensi: 10 },
    { interval: [20, 30], frekuensi: 8 },
    { interval: [30, 40], frekuensi: 2 }
];

const nilai_persentil = 50; //1-99
const nilai_awal = 0;
const nilai_persen = 100;
let hasil_persentil = 0;

// Fungsi untuk menghitung total frekuensi
function hitung_total_frekuensi(data) {
    return data.reduce((jumlah, item) => jumlah + item.frekuensi, nilai_awal);
}

// Fungsi untuk menghitung data kumulatif
function hitung_data_kumulatif(data) {
    let frekuensi_kumulatif = 0;
    return data.map(item => {
        frekuensi_kumulatif += item.frekuensi;
        return { ...item, kumulatif: frekuensi_kumulatif };
    });
}

// Fungsi untuk menghitung nilai persentil
function hitung_nilai_persentil(data_kelompok, data_kumulatif, persentil) {
    const total_frekuensi = hitung_total_frekuensi(data_kelompok);
    const posisi = (persentil / nilai_persen) * total_frekuensi;

    const kelas_interval = data_kumulatif.find(item => item.kumulatif >= posisi);

    if (kelas_interval) {
        const [batas_bawah, batas_atas] = kelas_interval.interval;
        const kumulatif_bawah = data_kumulatif[data_kumulatif.indexOf(kelas_interval) - 1]?.kumulatif || 0;
        const frekuensi_dalam_kelas = kelas_interval.frekuensi;

        return batas_bawah + ((posisi - kumulatif_bawah) / frekuensi_dalam_kelas) * (batas_atas - batas_bawah);
    }

    return 0; // Atau nilai default yang sesuai jika tidak ditemukan kelas_interval
}

// Menghitung nilai persentil ke-50
hasil_persentil = hitung_nilai_persentil(data_kelompok, hitung_data_kumulatif(data_kelompok), nilai_persentil); //17.5
```
==Python
```python
# Data kelompok
data_kelompok = [
    {"interval": [0, 10], "frekuensi": 5},
    {"interval": [10, 20], "frekuensi": 10},
    {"interval": [20, 30], "frekuensi": 8},
    {"interval": [30, 40], "frekuensi": 2}
]

nilai_persentil = 50  # 1-99
nilai_awal = 0
nilai_persen = 100
hasil_persentil = 0

# Fungsi untuk menghitung total frekuensi
def hitung_total_frekuensi(data):
    return sum(item['frekuensi'] for item in data)

# Fungsi untuk menghitung data kumulatif
def hitung_data_kumulatif(data):
    frekuensi_kumulatif = 0
    hasil = []
    for item in data:
        frekuensi_kumulatif += item['frekuensi']
        hasil.append({**item, 'kumulatif': frekuensi_kumulatif})
    return hasil

# Fungsi untuk menghitung nilai persentil
def hitung_nilai_persentil(data_kelompok, data_kumulatif, persentil):
    total_frekuensi = hitung_total_frekuensi(data_kelompok)
    posisi = (persentil / nilai_persen) * total_frekuensi

    kelas_interval = next((item for item in data_kumulatif if item['kumulatif'] >= posisi), None)

    if kelas_interval:
        batas_bawah, batas_atas = kelas_interval['interval']
        kumulatif_bawah = data_kumulatif[data_kumulatif.index(kelas_interval) - 1]['kumulatif'] if data_kumulatif.index(kelas_interval) > 0 else 0
        frekuensi_dalam_kelas = kelas_interval['frekuensi']

        return batas_bawah + ((posisi - kumulatif_bawah) / frekuensi_dalam_kelas) * (batas_atas - batas_bawah)

    return 0  # Atau nilai default yang sesuai jika tidak ditemukan kelas_interval

# Menghitung nilai persentil ke-50
hasil_persentil = hitung_nilai_persentil(data_kelompok, hitung_data_kumulatif(data_kelompok), nilai_persentil)  # 17.5
print(hasil_persentil)
```

:::

## Desil
Desil merupakan pembagian N data yang urut menjadi 10 bagian yang mana data tersebut dibagi sama banyak tersebut, sehingga terdapat 9 nilai desil. Desil dibagi menjadi dua menurut jenis datanya, yaitu Data Tunggal dan Data Berkelompok.

Data tunggal secara umum merupakan deret angka yang terdapat pada sebuah baris atau *array*. Rumus untuk menghitung desil data tunggal adalah sebagai berikut
$$ Di = \frac{i(n+1)}{10} $$

| Simbol        | Pengertian                            |
| ------------- | ------------------------------------- |
| $D_i$         | Desil ke-i                            |
| i             | Nilai Desil (1 hingga 9)              |
| n             | Banyaknya data pada baris atau *array*|

Berikut ini contoh *case* dari desil data tunggal dan data berkelompok (menggunakan data sebelumnya)

### Data Tunggal
Misalnya ada baris angka seperti dibawah dan kita ingin mencari desil ke-5

:::tabs
== JavaScript
```javascript
// Data Tunggal
const data_tunggal = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const nilai_persen = 10
const nilai_desil = 5; //1-9
let totalDesil = 0;

// Mengurutkan data secara ascending
const data_tersortir = [...data_tunggal].sort((a, b) => a - b);
const ukuranData = data_tunggal.length;

// Menghitung posisi dari nilai desil
const posisi = (nilai_desil * (ukuranData + 1)) / nilai_persen;

if (Number.isInteger(posisi)) {
    totalDesil = data_tersortir[posisi - 1]; //20
} else {
    const indeks_bawah = Math.floor(posisi) - 1;
    const indeks_atas = Math.ceil(posisi) - 1;

    const nilai_bawah = data_tersortir[indeks_bawah];
    const nilai_atas = data_tersortir[indeks_atas];

    // Interpolasi untuk menghitung nilai desil
    totalDesil = nilai_bawah + (nilai_atas - nilai_bawah) * (posisi - Math.floor(posisi)); //20
}
```
==Python
```python
# Data tunggal
data_tunggal = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16]

nilai_persen = 10
nilai_desil = 5  # 1-9
totalDesil = 0

# Mengurutkan data secara ascending
data_tersortir = sorted(data_tunggal)
ukuranData = len(data_tunggal)

# Menghitung posisi dari nilai desil
posisi = (nilai_desil * (ukuranData + 1)) / nilai_persen

if posisi.is_integer():
    totalDesil = data_tersortir[int(posisi) - 1]  # 20
else:
    indeks_bawah = int(posisi) - 1
    indeks_atas = indeks_bawah + 1

    nilai_bawah = data_tersortir[indeks_bawah]
    nilai_atas = data_tersortir[indeks_atas]

    # Interpolasi untuk menghitung nilai desil
    totalDesil = nilai_bawah + (nilai_atas - nilai_bawah) * (posisi - int(posisi))  # 20

print(totalDesil)
```

:::

### Data Berkelompok
Berikut ini rumus desil untuk data berkelompok

$$ D_i = L + \frac{i/10 - \sum f_b}{f_i} \times c $$

| Simbol        | Pengertian                                                            |
| ------------- | --------------------------------------------------------------------- |
| $D_i$         | Nilai desil ke-i                                                      |
| L             | Batas bawah kelas interval yang memuat $D_i$                          |
| i             | Nilai desil (1 hingga 9)                                              |
| $\sum f_b$    | Jumlah frekuensi kumulatif sebelum kelas interval yang memuat $D_i$   |
| $f_i$         | Frekuensi kelas interval yang memuat $D_i$                            |
| c             | Panjang kelas interval yang memuat $D_i$                              |

Misalnya ada data kelompok umur warga dibawah 1 tahun hingga 40 tahun seperti dibawah dan kita ingin mencari desil ke-9 dari kelompok data tersebut
:::tabs
== JavaScript
```javascript
// Data kelompok
const data_kelompok = [
    { interval: [0, 10], frekuensi: 5 },
    { interval: [10, 20], frekuensi: 10 },
    { interval: [20, 30], frekuensi: 8 },
    { interval: [30, 40], frekuensi: 2 }
];

const nilai_desil = 9; // 1-9 untuk desil ke-1 hingga ke-9
const nilai_awal = 0;
const nilai_persen = 10;
let hasil_desil = 0

// Fungsi untuk menghitung total frekuensi
function hitung_total_frekuensi(data) {
    return data.reduce((jumlah, item) => jumlah + item.frekuensi, nilai_awal);
}

// Fungsi untuk menghitung data kumulatif
function hitung_data_kumulatif(data) {
    let frekuensi_kumulatif = 0;
    return data.map(item => {
        frekuensi_kumulatif += item.frekuensi;
        return { ...item, kumulatif: frekuensi_kumulatif };
    });
}

// Fungsi untuk menghitung nilai desil
function hitung_nilai_desil(data_kelompok, data_kumulatif, desil) {
    const total_frekuensi = hitung_total_frekuensi(data_kelompok);
    const posisi = (desil / nilai_persen) * total_frekuensi;

    const kelas_interval = data_kumulatif.find(item => item.kumulatif >= posisi);

    if (kelas_interval) {
        const [batas_bawah, batas_atas] = kelas_interval.interval;
        const kumulatif_bawah = data_kumulatif[data_kumulatif.indexOf(kelas_interval) - 1]?.kumulatif || 0;
        const frekuensi_dalam_kelas = kelas_interval.frekuensi;

        return batas_bawah + ((posisi - kumulatif_bawah) / frekuensi_dalam_kelas) * (batas_atas - batas_bawah);
    }

    return 0; // Atau nilai default yang sesuai jika tidak ditemukan kelas_interval
}

// Menghitung nilai desil ke-9
hasil_desil = hitung_nilai_desil(data_kelompok, hitung_data_kumulatif(data_kelompok), nilai_desil); //29.375
```

==Python

```python
# Data kelompok
data_kelompok = [
    {"interval": [0, 10], "frekuensi": 5},
    {"interval": [10, 20], "frekuensi": 10},
    {"interval": [20, 30], "frekuensi": 8},
    {"interval": [30, 40], "frekuensi": 2}
]

nilai_desil = 9  # 1-9 untuk desil ke-1 hingga ke-9
nilai_awal = 0
nilai_persen = 10
hasil_desil = 0

# Fungsi untuk menghitung total frekuensi
def hitung_total_frekuensi(data):
    return sum(item["frekuensi"] for item in data)

# Fungsi untuk menghitung data kumulatif
def hitung_data_kumulatif(data):
    frekuensi_kumulatif = 0
    hasil = []
    for item in data:
        frekuensi_kumulatif += item["frekuensi"]
        hasil.append({**item, "kumulatif": frekuensi_kumulatif})
    return hasil

# Fungsi untuk menghitung nilai desil
def hitung_nilai_desil(data_kelompok, data_kumulatif, desil):
    total_frekuensi = hitung_total_frekuensi(data_kelompok)
    posisi = (desil / nilai_persen) * total_frekuensi

    kelas_interval = next((item for item in data_kumulatif if item["kumulatif"] >= posisi), None)

    if kelas_interval:
        batas_bawah, batas_atas = kelas_interval["interval"]
        kumulatif_bawah = data_kumulatif[data_kumulatif.index(kelas_interval) - 1]["kumulatif"] if data_kumulatif.index(kelas_interval) > 0 else 0
        frekuensi_dalam_kelas = kelas_interval["frekuensi"]

        return batas_bawah + ((posisi - kumulatif_bawah) / frekuensi_dalam_kelas) * (batas_atas - batas_bawah)

    return 0  # Atau nilai default yang sesuai jika tidak ditemukan kelas_interval

# Menghitung nilai desil ke-9
hasil_desil = hitung_nilai_desil(data_kelompok, hitung_data_kumulatif(data_kelompok), nilai_desil)  # 29.375
print(hasil_desil)
```
:::

## Kuartil

Kuartil merupakan pembagian N data yang urut menjadi 4 bagian yang mana data tersebut dibagi sama banyak tersebut, sehingga terdapat 3 nilai kuartil. Kuartil dibagi menjadi dua menurut jenis datanya, yaitu Data Tunggal dan Data Berkelompok.

Data tunggal secara umum merupakan deret angka yang terdapat pada sebuah baris atau array. Rumus untuk menghitung kuartil data tunggal adalah sebagai berikut:
$$ Qi = \frac{i(n+1)}{4} $$

| Simbol        | Pengertian                            |
| ------------- | ------------------------------------- |
| Qi            | Kuartil ke-i                          |
| i             | Nilai Kuartil (1 hingga 9)            |
| n             | Banyaknya data pada baris atau *array*|

### Data Tunggal
Misalnya ada baris angka seperti dibawah dan kita ingin mencari kuartil ke-2

:::tabs
== JavaScript
```javascript
// Data Tunggal
const data_tunggal = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const nilai_persen = 4;
const nilai_kuartil = 2; // 1-3
let total_kuartil = 0;

// Mengurutkan data secara ascending
const data_tersortir = [...data_tunggal].sort((a, b) => a - b);
const jumlah_data = data_tunggal.length;

// Menghitung posisi dari nilai kuartil
const posisi = (nilai_kuartil * (jumlah_data + 1)) / nilai_persen;

if (Number.isInteger(posisi)) {
    total_kuartil = data_tersortir[posisi - 1]; //20
} else {
    const indeks_bawah = Math.floor(posisi) - 1;
    const indeks_atas = Math.ceil(posisi) - 1;

    const nilai_bawah = data_tersortir[indeks_bawah];
    const nilai_atas = data_tersortir[indeks_atas];

    // Interpolasi untuk menghitung nilai kuartil
    total_kuartil = nilai_bawah + (nilai_atas - nilai_bawah) * (posisi - Math.floor(posisi)); //20
}
```
:::

### Data Berkelompok

Berikut ini rumus kuartil untuk data berkelompok

$$ Q_i = L + \frac{i/4 - \sum f_b}{f_i} \times c $$

| Simbol        | Pengertian                                                            |
| ------------- | --------------------------------------------------------------------- |
| $Q_i$         | Nilai desil ke-i                                                      |
| L             | Batas bawah kelas interval yang memuat $Q_i$                          |
| i             | Nilai desil (1 hingga 9)                                              |
| $\sum f_b$    | Jumlah frekuensi kumulatif sebelum kelas interval yang memuat $Q_i$   |
| $f_i$         | Frekuensi kelas interval yang memuat $Q_i$                            |
| c             | Panjang kelas interval yang memuat $Q_i$                              |

Misalnya ada data kelompok umur warga dibawah 1 tahun hingga 40 tahun seperti dibawah dan kita ingin mencari kuartil ke-2 dari kelompok data tersebut
:::tabs
== JavaScript
```javascript
// Data kelompok
const data_kelompok = [
    { interval: [0, 10], frekuensi: 5 },
    { interval: [10, 20], frekuensi: 10 },
    { interval: [20, 30], frekuensi: 8 },
    { interval: [30, 40], frekuensi: 2 }
];

const jumlah_persen = 4;
const nilai_kuartil = 2; // 1-3
const nilai_awal = 0;
let hasil_kuartil = 0

// Fungsi untuk menghitung total frekuensi
function hitung_total_frekuensi(data) {
    return data.reduce((jumlah, item) => jumlah + item.frekuensi, nilai_awal);
}

// Fungsi untuk menghitung data kumulatif
function hitung_data_kumulatif(data) {
    let frekuensi_kumulatif = 0;
    return data.map(item => {
        frekuensi_kumulatif += item.frekuensi;
        return { ...item, kumulatif: frekuensi_kumulatif };
    });
}

// Fungsi untuk menghitung nilai kuartil
function hitung_nilai_kuartil(data_kelompok, data_kumulatif, kuartil) {
    const total_frekuensi = hitung_total_frekuensi(data_kelompok);
    const posisi = (kuartil / jumlah_persen) * total_frekuensi;

    const kelas_interval = data_kumulatif.find(item => item.kumulatif >= posisi);

    if (kelas_interval) {
        const [batas_bawah, batas_atas] = kelas_interval.interval;
        const kumulatif_bawah = data_kumulatif[data_kumulatif.indexOf(kelas_interval) - 1]?.kumulatif || 0;
        const frekuensi_dalam_kelas = kelas_interval.frekuensi;

        return batas_bawah + ((posisi - kumulatif_bawah) / frekuensi_dalam_kelas) * (batas_atas - batas_bawah);
    }

    return 0; // Atau nilai default yang sesuai jika tidak ditemukan kelas_interval
}

// Menghitung nilai kuartil ke-2
hasil_kuartil = hitung_nilai_kuartil(data_kelompok, hitung_data_kumulatif(data_kelompok), nilai_kuartil); //17.5
```
== Kotlin
```kotlin
// Data kelompok
data class KelompokData(val interval: Pair<Int, Int>, val frekuensi: Int)

val data_kelompok = listOf(
    KelompokData(0 to 10, 5),
    KelompokData(10 to 20, 10),
    KelompokData(20 to 30, 8),
    KelompokData(30 to 40, 2)
)

val nilai_desil = 9 // 1-9 untuk desil ke-1 hingga ke-9
val nilai_awal = 0
val nilai_persen = 10
var hasil_desil = 0.0

// Fungsi untuk menghitung total frekuensi
fun hitung_total_frekuensi(data: List<KelompokData>): Int {
    return data.sumOf { it.frekuensi }
}

// Fungsi untuk menghitung data kumulatif
fun hitung_data_kumulatif(data: List<KelompokData>): List<KelompokData> {
    var frekuensi_kumulatif = 0
    return data.map {
        frekuensi_kumulatif += it.frekuensi
        it.copy(frekuensi = frekuensi_kumulatif)
    }
}

// Fungsi untuk menghitung nilai desil
fun hitung_nilai_desil(data_kelompok: List<KelompokData>, data_kumulatif: List<KelompokData>, desil: Int): Double {
    val total_frekuensi = hitung_total_frekuensi(data_kelompok)
    val posisi = (desil.toDouble() / nilai_persen) * total_frekuensi

    val kelas_interval = data_kumulatif.find { it.frekuensi >= posisi }

    kelas_interval?.let {
        val (batas_bawah, batas_atas) = it.interval
        val kumulatif_bawah = data_kumulatif.getOrNull(data_kumulatif.indexOf(it) - 1)?.frekuensi ?: 0
        val frekuensi_dalam_kelas = it.frekuensi - kumulatif_bawah

        return batas_bawah + ((posisi - kumulatif_bawah) / frekuensi_dalam_kelas) * (batas_atas - batas_bawah)
    }

    return 0.0 // Atau nilai default yang sesuai jika tidak ditemukan kelas_interval
}

// Menghitung nilai desil ke-9
hasil_desil = hitung_nilai_desil(data_kelompok, hitung_data_kumulatif(data_kelompok), nilai_desil)
println(hasil_desil) // Output: 29.375
```
== C++
```cpp
#include <iostream>
#include <vector>
#include <numeric> // untuk std::accumulate

struct KelompokData {
    std::pair<int, int> interval;
    int frekuensi;
};

int nilai_desil = 9; // 1-9 untuk desil ke-1 hingga ke-9
int nilai_awal = 0;
int nilai_persen = 10;
double hasil_desil = 0;

// Fungsi untuk menghitung total frekuensi
int hitung_total_frekuensi(const std::vector<KelompokData>& data) {
    return std::accumulate(data.begin(), data.end(), nilai_awal,
                           [](int jumlah, const KelompokData& item) {
                               return jumlah + item.frekuensi;
                           });
}

// Fungsi untuk menghitung data kumulatif
std::vector<KelompokData> hitung_data_kumulatif(const std::vector<KelompokData>& data) {
    int frekuensi_kumulatif = 0;
    std::vector<KelompokData> data_kumulatif;

    for (const auto& item : data) {
        frekuensi_kumulatif += item.frekuensi;
        data_kumulatif.push_back({ item.interval, frekuensi_kumulatif });
    }

    return data_kumulatif;
}

// Fungsi untuk menghitung nilai desil
double hitung_nilai_desil(const std::vector<KelompokData>& data_kelompok, const std::vector<KelompokData>& data_kumulatif, int desil) {
    int total_frekuensi = hitung_total_frekuensi(data_kelompok);
    double posisi = (static_cast<double>(desil) / nilai_persen) * total_frekuensi;

    auto kelas_interval = std::find_if(data_kumulatif.begin(), data_kumulatif.end(),
                                      [posisi](const KelompokData& item) {
                                          return item.frekuensi >= posisi;
                                      });

    if (kelas_interval != data_kumulatif.end()) {
        int batas_bawah = kelas_interval->interval.first;
        int batas_atas = kelas_interval->interval.second;
        int index = std::distance(data_kumulatif.begin(), kelas_interval);
        int kumulatif_bawah = (index > 0) ? data_kumulatif[index - 1].frekuensi : 0;
        int frekuensi_dalam_kelas = kelas_interval->frekuensi - kumulatif_bawah;

        return batas_bawah + ((posisi - kumulatif_bawah) / frekuensi_dalam_kelas) * (batas_atas - batas_bawah);
    }

    return 0.0; // Atau nilai default yang sesuai jika tidak ditemukan kelas_interval
}

int main() {
    std::vector<KelompokData> data_kelompok = {
        {{0, 10}, 5},
        {{10, 20}, 10},
        {{20, 30}, 8},
        {{30, 40}, 2}
    };

    // Menghitung nilai desil ke-9
    hasil_desil = hitung_nilai_desil(data_kelompok, hitung_data_kumulatif(data_kelompok), nilai_desil);
    std::cout << hasil_desil << std::endl; // Output: 29.375

    return 0;
}
```
==Python
```python
# Data kelompok
data_kelompok = [
    {"interval": [0, 10], "frekuensi": 5},
    {"interval": [10, 20], "frekuensi": 10},
    {"interval": [20, 30], "frekuensi": 8},
    {"interval": [30, 40], "frekuensi": 2}
]

jumlah_persen = 4
nilai_kuartil = 2  # 1-3
nilai_awal = 0
hasil_kuartil = 0

# Fungsi untuk menghitung total frekuensi
def hitung_total_frekuensi(data):
    return sum(item["frekuensi"] for item in data)

# Fungsi untuk menghitung data kumulatif
def hitung_data_kumulatif(data):
    frekuensi_kumulatif = 0
    hasil = []
    for item in data:
        frekuensi_kumulatif += item["frekuensi"]
        hasil.append({**item, "kumulatif": frekuensi_kumulatif})
    return hasil

# Fungsi untuk menghitung nilai kuartil
def hitung_nilai_kuartil(data_kelompok, data_kumulatif, kuartil):
    total_frekuensi = hitung_total_frekuensi(data_kelompok)
    posisi = (kuartil / jumlah_persen) * total_frekuensi

    kelas_interval = next((item for item in data_kumulatif if item["kumulatif"] >= posisi), None)

    if kelas_interval:
        batas_bawah, batas_atas = kelas_interval["interval"]
        kumulatif_bawah = data_kumulatif[data_kumulatif.index(kelas_interval) - 1]["kumulatif"] if data_kumulatif.index(kelas_interval) > 0 else 0
        frekuensi_dalam_kelas = kelas_interval["frekuensi"]

        return batas_bawah + ((posisi - kumulatif_bawah) / frekuensi_dalam_kelas) * (batas_atas - batas_bawah)

    return 0  # Atau nilai default yang sesuai jika tidak ditemukan kelas_interval

# Menghitung nilai kuartil ke-2
hasil_kuartil = hitung_nilai_kuartil(data_kelompok, hitung_data_kumulatif(data_kelompok), nilai_kuartil)  # 17.5
print(hasil_kuartil)
```
:::
