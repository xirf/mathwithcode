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
const dataTunggal = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const nilaiPersen = 100;
const nilaiPersentil = 50; //1-99
const angkaAwal = 1;
let hasilPersentil = 0;

// Mengurutkan data secara ascending
const dataTersortir = dataTunggal.sort((a, b) => a - b);
const jumlahData = dataTunggal.length;

// Menghitung posisi persentil
const posisi = (jumlahData + angkaAwal) * (nilaiPersentil / nilaiPersen);

// Jika posisi adalah bilangan bulat, ambil nilai pada posisi tersebut
if (Number.isInteger(posisi)) {
    hasilPersentil = dataTersortir[posisi - angkaAwal]; //20
} else {
    // Jika posisi bukan bilangan bulat, lakukan interpolasi
    const indeksBawah = Math.floor(posisi) - angkaAwal;
    const indeksAtas = Math.ceil(posisi) - angkaAwal;

    // Nilai pada indeks bawah dan atas
    const nilaiBawah = dataTersortir[indeksBawah];
    const nilaiAtas = dataTersortir[indeksAtas];

    // Interpolasi untuk menghitung nilai persentil
    hasilPersentil = nilaiBawah + (nilaiAtas - nilaiBawah) * (posisi - Math.floor(posisi)); //20
}
```

== TypeScript
```typescript
//Data Tunggal
const dataTunggal: number[] = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const nilaiPersen: number = 100;
const nilaiPersentil: number = 50; //1-99
const angkaAwal: number = 1;
let hasilPersentil: number = 0;

// Mengurutkan data secara ascending
const dataTersortir: number[] = [...dataTunggal].sort((a, b) => a - b);
const jumlahData: number = dataTunggal.length;

// Menghitung posisi persentil
const posisi: number = (jumlahData + angkaAwal) * (nilaiPersentil / nilaiPersen);

// Jika posisi adalah bilangan bulat, ambil nilai pada posisi tersebut
if (Number.isInteger(posisi)) {
    hasilPersentil = dataTersortir[posisi - angkaAwal];
} else {
    // Jika posisi bukan bilangan bulat, lakukan interpolasi
    const indeksBawah: number = Math.floor(posisi) - angkaAwal;
    const indeksAtas: number = Math.ceil(posisi) - angkaAwal;

    // Nilai pada indeks bawah dan atas
    const nilaiBawah: number = dataTersortir[indeksBawah];
    const nilaiAtas: number = dataTersortir[indeksAtas];

    // Interpolasi untuk menghitung nilai persentil
    hasilPersentil = nilaiBawah + (nilaiAtas - nilaiBawah) * (posisi - Math.floor(posisi));
}
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
const dataKelompok = [
    { interval: [0, 10], frekuensi: 5 },
    { interval: [10, 20], frekuensi: 10 },
    { interval: [20, 30], frekuensi: 8 },
    { interval: [30, 40], frekuensi: 2 }
];

const nilaiPersentil = 50; //1-99
const nilaiAwal = 0;
const nilaiPersen = 100;
let hasilPersentil = 0;

// Fungsi untuk menghitung total frekuensi
function hitungTotalFrekuensi(data) {
    return data.reduce((jumlah, item) => jumlah + item.frekuensi, nilaiAwal);
}

// Fungsi untuk menghitung data kumulatif
function hitungDataKumulatif(data) {
    let frekuensiKumulatif = 0;
    return data.map(item => {
        frekuensiKumulatif += item.frekuensi;
        return { ...item, kumulatif: frekuensiKumulatif };
    });
}

// Fungsi untuk menghitung nilai persentil
function hitungNilaiPersentil(dataKelompok, dataKumulatif, persentil) {
    const totalFrekuensi = hitungTotalFrekuensi(dataKelompok);
    const posisi = (persentil / nilaiPersen) * totalFrekuensi;

    const kelasInterval = dataKumulatif.find(item => item.kumulatif >= posisi);

    if (kelasInterval) {
        const [batasBawah, batasAtas] = kelasInterval.interval;
        const kumulatifBawah = dataKumulatif[dataKumulatif.indexOf(kelasInterval) - 1]?.kumulatif || 0;
        const frekuensiDalamKelas = kelasInterval.frekuensi;

        return batasBawah + ((posisi - kumulatifBawah) / frekuensiDalamKelas) * (batasAtas - batasBawah);
    }

    return 0; // Atau nilai default yang sesuai jika tidak ditemukan kelasInterval
}

// Menghitung nilai persentil ke-50
hasilPersentil = hitungNilaiPersentil(dataKelompok, hitungDataKumulatif(dataKelompok), nilaiPersentil); //17.5
```

== TypeScript
```typescript
// Tipe data untuk data kelompok
type DataKelompok = {
    interval: number[];
    frekuensi: number;
};

// Tipe data untuk data kumulatif
type DataKumulatif = DataKelompok & { kumulatif: number };

// Data kelompok
const dataKelompok: DataKelompok[] = [
    { interval: [0, 10], frekuensi: 5 },
    { interval: [10, 20], frekuensi: 10 },
    { interval: [20, 30], frekuensi: 8 },
    { interval: [30, 40], frekuensi: 2 }
];

const nilaiPersentil: number = 50; //1-99
const nilaiAwal: number = 0;
const nilaiPersen: number = 100;
let hasilPersentil:number = 0

// Fungsi untuk menghitung total frekuensi
function hitungTotalFrekuensi(data: DataKelompok[]): number {
    return data.reduce((jumlah, item) => jumlah + item.frekuensi, nilaiAwal);
}

// Fungsi untuk menghitung data kumulatif
function hitungDataKumulatif(data: DataKelompok[]): DataKumulatif[] {
    let frekuensiKumulatif = 0;
    return data.map(item => {
        frekuensiKumulatif += item.frekuensi;
        return { ...item, kumulatif: frekuensiKumulatif };
    });
}

// Fungsi untuk menghitung nilai persentil
function hitungNilaiPersentil(dataKelompok: DataKelompok[], dataKumulatif: DataKumulatif[], persentil: number): number {
    const totalFrekuensi = hitungTotalFrekuensi(dataKelompok);
    const posisi = (persentil / nilaiPersen) * totalFrekuensi;

    const kelasInterval = dataKumulatif.find(item => item.kumulatif >= posisi);

    if (kelasInterval) {
        const [batasBawah, batasAtas] = kelasInterval.interval;
        const kumulatifBawah = dataKumulatif[dataKumulatif.indexOf(kelasInterval) - 1]?.kumulatif || 0;
        const frekuensiDalamKelas = kelasInterval.frekuensi;

        return batasBawah + ((posisi - kumulatifBawah) / frekuensiDalamKelas) * (batasAtas - batasBawah);
    }

    return 0; // Atau nilai default yang sesuai jika tidak ditemukan kelasInterval
}

// Menghitung nilai persentil ke-50
const nilaiPersentilKe50 = hitungNilaiPersentil(dataKelompok, hitungDataKumulatif(dataKelompok), nilaiPersentil); //17.5
```
:::

## Desil
Desil merupakan pembagian N data yang urut menjadi 10 bagian yang mana data tersebut dibagi sama banyak tersebut, sehingga terdapat 9 nilai desil. Desil dibagi menjadi dua menurut jenis datanya, yaitu Data Tunggal dan Data Berkelompok.

Data tunggal secara umum merupakan deret angka yang terdapat pada sebuah baris atau *array*. Rumus untuk menghitung desil data tunggal adalah sebagai berikut
$$ Di = \frac{i(n+1)}{10} $$

| Simbol        | Pengertian                            |
| ------------- | ------------------------------------- |
| $D_i$         | Persentil ke-i                        |
| i             | Nilai Persentil (1 hingga 9)          |
| n             | Banyaknya data pada baris atau *array*|

Berikut ini contoh *case* dari desil data tunggal dan data berkelompok (menggunakan data sebelumnya)

### Data Tunggal
Misalnya ada baris angka seperti dibawah dan kita ingin mencari desil ke-5

:::tabs
== JavaScript
```javascript
// Data Tunggal
const dataTunggal = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const nilaiPersen = 10
const nilaiDesil = 5; //1-9
let totalDesil = 0;

// Mengurutkan data secara ascending
const dataTersortir = [...dataTunggal].sort((a, b) => a - b);
const ukuranData = dataTunggal.length;

// Menghitung posisi dari nilai desil
const posisi = (nilaiDesil * (ukuranData + 1)) / nilaiPersen;

if (Number.isInteger(posisi)) {
    totalDesil = dataTersortir[posisi - 1]; //20
} else {
    const indeksBawah = Math.floor(posisi) - 1;
    const indeksAtas = Math.ceil(posisi) - 1;
    
    const nilaiBawah = dataTersortir[indeksBawah];
    const nilaiAtas = dataTersortir[indeksAtas];

    // Interpolasi untuk menghitung nilai desil
    totalDesil = nilaiBawah + (nilaiAtas - nilaiBawah) * (posisi - Math.floor(posisi)); //20
}
```

== TypeScript
```typescript
// Data Tunggal
const dataTunggal: number[] = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const nilaiPersen: number = 10
const nilaiDesil: number = 5; //1-9
let totalDesil: number = 0;

// Mengurutkan data secara ascending
const dataTersortir: number[] = [...dataTunggal].sort((a, b) => a - b);
const ukuranData: number = dataTunggal.length;

// Menghitung posisi dari nilai desil
const posisi: number = (nilaiDesil * (ukuranData + 1)) / nilaiPersen;

if (Number.isInteger(posisi)) {
    totalDesil = dataTersortir[posisi - 1]; //20
} else {
    const indeksBawah = Math.floor(posisi) - 1;
    const indeksAtas = Math.ceil(posisi) - 1;
    
    const nilaiBawah = dataTersortir[indeksBawah];
    const nilaiAtas = dataTersortir[indeksAtas];

    // Interpolasi untuk menghitung nilai desil
    totalDesil = nilaiBawah + (nilaiAtas - nilaiBawah) * (posisi - Math.floor(posisi)); //20
}
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
const dataKelompok = [
    { interval: [0, 10], frekuensi: 5 },
    { interval: [10, 20], frekuensi: 10 },
    { interval: [20, 30], frekuensi: 8 },
    { interval: [30, 40], frekuensi: 2 }
];

const nilaiDesil = 9; // 1-9 untuk desil ke-1 hingga ke-9
const nilaiAwal = 0;
const nilaiPersen = 10;
let hasilDesil = 0

// Fungsi untuk menghitung total frekuensi
function hitungTotalFrekuensi(data) {
    return data.reduce((jumlah, item) => jumlah + item.frekuensi, nilaiAwal);
}

// Fungsi untuk menghitung data kumulatif
function hitungDataKumulatif(data) {
    let frekuensiKumulatif = 0;
    return data.map(item => {
        frekuensiKumulatif += item.frekuensi;
        return { ...item, kumulatif: frekuensiKumulatif };
    });
}

// Fungsi untuk menghitung nilai desil
function hitungNilaiDesil(dataKelompok, dataKumulatif, desil) {
    const totalFrekuensi = hitungTotalFrekuensi(dataKelompok);
    const posisi = (desil / nilaiPersen) * totalFrekuensi;

    const kelasInterval = dataKumulatif.find(item => item.kumulatif >= posisi);

    if (kelasInterval) {
        const [batasBawah, batasAtas] = kelasInterval.interval;
        const kumulatifBawah = dataKumulatif[dataKumulatif.indexOf(kelasInterval) - 1]?.kumulatif || 0;
        const frekuensiDalamKelas = kelasInterval.frekuensi;

        return batasBawah + ((posisi - kumulatifBawah) / frekuensiDalamKelas) * (batasAtas - batasBawah);
    }

    return 0; // Atau nilai default yang sesuai jika tidak ditemukan kelasInterval
}

// Menghitung nilai desil ke-9
hasilDesil = hitungNilaiDesil(dataKelompok, hitungDataKumulatif(dataKelompok), nilaiDesil); //29.375
```
== TypeScript
```typescript
// Tipe data untuk data kelompok
type DataKelompok = {
    interval: number[];
    frekuensi: number;
};

// Tipe data untuk data kumulatif
type DataKumulatif = DataKelompok & { kumulatif: number };

// Data kelompok
const dataKelompok: DataKelompok[] = [
    { interval: [0, 10], frekuensi: 5 },
    { interval: [10, 20], frekuensi: 10 },
    { interval: [20, 30], frekuensi: 8 },
    { interval: [30, 40], frekuensi: 2 }
];

const nilaiDesil: number = 9; // 1-9 untuk desil ke-1 hingga ke-9
const nilaiAwal: number = 0;
const nilaiPersen: number = 10;
let hasilDesil:number = 0

// Fungsi untuk menghitung total frekuensi
function hitungTotalFrekuensi(data: DataKelompok[]): number {
    return data.reduce((jumlah, item) => jumlah + item.frekuensi, nilaiAwal);
}

// Fungsi untuk menghitung data kumulatif
function hitungDataKumulatif(data: DataKelompok[]): DataKumulatif[] {
    let frekuensiKumulatif = 0;
    return data.map(item => {
        frekuensiKumulatif += item.frekuensi;
        return { ...item, kumulatif: frekuensiKumulatif };
    });
}

// Fungsi untuk menghitung nilai desil
function hitungNilaiDesil(dataKelompok: DataKelompok[], dataKumulatif: DataKumulatif[], desil: number): number {
    const totalFrekuensi = hitungTotalFrekuensi(dataKelompok);
    const posisi = (desil / nilaiPersen) * totalFrekuensi;

    const kelasInterval = dataKumulatif.find(item => item.kumulatif >= posisi);

    if (kelasInterval) {
        const [batasBawah, batasAtas] = kelasInterval.interval;
        const kumulatifBawah = dataKumulatif[dataKumulatif.indexOf(kelasInterval) - 1]?.kumulatif || 0;
        const frekuensiDalamKelas = kelasInterval.frekuensi;

        return batasBawah + ((posisi - kumulatifBawah) / frekuensiDalamKelas) * (batasAtas - batasBawah);
    }

    return 0; // Atau nilai default yang sesuai jika tidak ditemukan kelasInterval
}

// Menghitung nilai desil ke-9
hasilDesil = hitungNilaiDesil(dataKelompok, hitungDataKumulatif(dataKelompok), nilaiDesil); //29.375
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
const dataTunggal = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const nilaiPersen = 4;
const nilaiKuartil = 2; // 1-3
let totalKuartil = 0;

// Mengurutkan data secara ascending
const dataTersortir = [...dataTunggal].sort((a, b) => a - b);
const jumlahData = dataTunggal.length;

// Menghitung posisi dari nilai kuartil
const posisi = (nilaiKuartil * (jumlahData + 1)) / nilaiPersen;

if (Number.isInteger(posisi)) {
    totalKuartil = dataTersortir[posisi - 1]; //20
} else {
    const indeksBawah = Math.floor(posisi) - 1;
    const indeksAtas = Math.ceil(posisi) - 1;
    
    const nilaiBawah = dataTersortir[indeksBawah];
    const nilaiAtas = dataTersortir[indeksAtas];

    // Interpolasi untuk menghitung nilai kuartil
    totalKuartil = nilaiBawah + (nilaiAtas - nilaiBawah) * (posisi - Math.floor(posisi)); //20
}
```

== TypeScript
```typescript
// Data Tunggal
const dataTunggal: number[] = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const nilaiPersen: number = 4;
const nilaiKuartil: number = 2; // 1-3
let totalKuartil: number = 0;

// Mengurutkan data secara ascending
const dataTersortir: number[] = [...dataTunggal].sort((a, b) => a - b);
const jumlahData: number = dataTunggal.length;

// Menghitung posisi dari nilai kuartil
const posisi: number = (nilaiKuartil * (jumlahData + 1)) / nilaiPersen;

if (Number.isInteger(posisi)) {
    totalKuartil = dataTersortir[posisi - 1]; //20
} else {
    const indeksBawah = Math.floor(posisi) - 1;
    const indeksAtas = Math.ceil(posisi) - 1;
    
    const nilaiBawah = dataTersortir[indeksBawah];
    const nilaiAtas = dataTersortir[indeksAtas];

    // Interpolasi untuk menghitung nilai kuartil
    totalKuartil = nilaiBawah + (nilaiAtas - nilaiBawah) * (posisi - Math.floor(posisi)); //20
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
const dataKelompok = [
    { interval: [0, 10], frekuensi: 5 },
    { interval: [10, 20], frekuensi: 10 },
    { interval: [20, 30], frekuensi: 8 },
    { interval: [30, 40], frekuensi: 2 }
];

const jumlahPersen = 4;
const nilaiKuartil = 2; // 1-3
const nilaiAwal = 0;
let hasilKuartil = 0

// Fungsi untuk menghitung total frekuensi
function hitungTotalFrekuensi(data) {
    return data.reduce((jumlah, item) => jumlah + item.frekuensi, nilaiAwal);
}

// Fungsi untuk menghitung data kumulatif
function hitungDataKumulatif(data) {
    let frekuensiKumulatif = 0;
    return data.map(item => {
        frekuensiKumulatif += item.frekuensi;
        return { ...item, kumulatif: frekuensiKumulatif };
    });
}

// Fungsi untuk menghitung nilai kuartil
function hitungNilaiKuartil(dataKelompok, dataKumulatif, kuartil) {
    const totalFrekuensi = hitungTotalFrekuensi(dataKelompok);
    const posisi = (kuartil / jumlahPersen) * totalFrekuensi;

    const kelasInterval = dataKumulatif.find(item => item.kumulatif >= posisi);

    if (kelasInterval) {
        const [batasBawah, batasAtas] = kelasInterval.interval;
        const kumulatifBawah = dataKumulatif[dataKumulatif.indexOf(kelasInterval) - 1]?.kumulatif || 0;
        const frekuensiDalamKelas = kelasInterval.frekuensi;

        return batasBawah + ((posisi - kumulatifBawah) / frekuensiDalamKelas) * (batasAtas - batasBawah);
    }

    return 0; // Atau nilai default yang sesuai jika tidak ditemukan kelasInterval
}

// Menghitung nilai kuartil ke-2
hasilKuartil = hitungNilaiKuartil(dataKelompok, hitungDataKumulatif(dataKelompok), nilaiKuartil); //17.5
```

== TypeScript
```typescript
// Tipe data untuk data kelompok
type DataKelompok = {
    interval: number[];
    frekuensi: number;
};

// Tipe data untuk data kumulatif
type DataKumulatif = DataKelompok & { kumulatif: number };

// Data kelompok
const dataKelompok: DataKelompok[] = [
    { interval: [0, 10], frekuensi: 5 },
    { interval: [10, 20], frekuensi: 10 },
    { interval: [20, 30], frekuensi: 8 },
    { interval: [30, 40], frekuensi: 2 }
];

const jumlahPersen: number = 4;
const nilaiKuartil: number = 2; // 1-3
const nilaiAwal: number = 0;
let hasilKuartil:number = 0

// Fungsi untuk menghitung total frekuensi
function hitungTotalFrekuensi(data: DataKelompok[]): number {
    return data.reduce((jumlah, item) => jumlah + item.frekuensi, nilaiAwal);
}

// Fungsi untuk menghitung data kumulatif
function hitungDataKumulatif(data: DataKelompok[]): DataKumulatif[] {
    let frekuensiKumulatif = 0;
    return data.map(item => {
        frekuensiKumulatif += item.frekuensi;
        return { ...item, kumulatif: frekuensiKumulatif };
    });
}

// Fungsi untuk menghitung nilai kuartil
function hitungNilaiKuartil(dataKelompok: DataKelompok[], dataKumulatif: DataKumulatif[], kuartil: number): number {
    const totalFrekuensi = hitungTotalFrekuensi(dataKelompok);
    const posisi = (kuartil / jumlahPersen) * totalFrekuensi;

    const kelasInterval = dataKumulatif.find(item => item.kumulatif >= posisi);

    if (kelasInterval) {
        const [batasBawah, batasAtas] = kelasInterval.interval;
        const kumulatifBawah = dataKumulatif[dataKumulatif.indexOf(kelasInterval) - 1]?.kumulatif || 0;
        const frekuensiDalamKelas = kelasInterval.frekuensi;

        return batasBawah + ((posisi - kumulatifBawah) / frekuensiDalamKelas) * (batasAtas - batasBawah);
    }

    return 0; // Atau nilai default yang sesuai jika tidak ditemukan kelasInterval
}

// Menghitung nilai kuartil ke-2
hasilKuartil = hitungNilaiKuartil(dataKelompok, hitungDataKumulatif(dataKelompok), nilaiKuartil); //17.5
```
:::