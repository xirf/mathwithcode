---
title: Bilangan
description: Contoh penggunaan Bilangan dalam pemrograman
---

# Bilangan

Bilangan merupakan dasar dari matematika, semuanya di matematika pake bilangan. Dalam pemrograman, bilangan juga sangat penting. Kita bisa melakukan berbagai operasi matematika dengan bilangan, seperti penjumlahan, pengurangan, perkalian, dan pembagian.

Namun bilangan di pemrograman dibagi-bagi ke beberapa jenis, tergantung dari tipe datanya. Jadinya penggunaan bilangan di program bakalan sedikit beda dengan di matematika biasa. yuk pelajari lebih lanjut!

## Bilangan Bulat (Integer)

Bilangan bulat adalah bilangan yang tidak punya koma. Di pemrograman, bilangan bulat biasanya disebut dengan `integer`. Contoh bilangan bulat adalah 1, 2, 3, 4, 5, dan seterusnya.

:::tabs key:lang
== Javascript
```js
let bilangan_bulat = 10;
```
== Kotlin
```kt
val bilangan_bulat: Int = 10
```
== C++
```cpp
int bilangan_bulat = 10;
```
== Python
```python
bilangan_bulat = 10
```
== Rust
```rust
let bilangan_bulat = 10;
```
:::

Meski kelihatannya sederhana, jangan lupa kalau di pemrograman, bilangan punya batasan! Contohnya, di Rust, bilangan paling besar yang bisa kamu pakai adalah **`340,282,366,920,938,463,463,374,607,431,768,211,455`** atau $2^{128} - 1$. Itu angka yang sangat besar, aku aja bingung ngucapinnya.

Nah, batasan itu tergantung tipe data yang kamu pakai kecuali di python, python tidak memiliki batas bilangan bulat, karena Python secara dinamis menangani ukuran bilangan bulat. contohnya seperti dibawah ini

:::tabs key:lang
== Javascript

| Tipe Data | Ukuran (bits) | Minimal| Maksimal| Maksimal (Secara Eksplisit) |
|-----------|------------------|---------------|----|---------------------------|
| Number    | 64             | -9,007,199,254,740,991<br /> (−2<sup>53</sup> - 1) | 9,007,199,254,740,992 <br /> (2<sup>53</sup> - 1 )  | 18,446,744,073,709,551,616 (2<sup>64</sup>) |
| BigInt    | max 1,000,000,000               | `tergantung memori` | `tergantung memori`  | `tergantung memori` |
== C++
| Tipe Data | Ukuran (bits) | Minimal                                         | Maksimal                                      | Maksimal (Secara Eksplisit)
|-----------|------------------|------------------------------------------------|-----------------------------------------------|---------------------------|
| `short`     | 16              | -32,768                                       | 32,767                                        | 65,536 (2<sup>16</sup>) |
| `int`       | 32               | -2,147,483,648 (-2<sup>31</sup>)              | 2,147,483,647 (2<sup>31</sup> - 1)           | 4,294,687,296 (2<sup>32</sup>) |
| `long`      | 64               | -9,223,372,036,854,775,808 (-2<sup>63</sup>) | 9,223,372,036,854,775,807 (2<sup>63</sup> - 1) | 18,446,744,073,709,551,616 (2<sup>64</sup>) |
| `long long` | 64               | -9,223,372,036,854,775,808 (-2<sup>63</sup>) | 9,223,372,036,854,775,807 (2<sup>63</sup> - 1) | 18,446,744,073,709,551,616 (2<sup>64</sup>) |

Banyak banget selengkapnya cek [sini aja ya](https://learn.microsoft.com/en-us/cpp/c-language/cpp-integer-limits?view=msvc-170#limits-on-integer-constants)
== Kotlin
| Tipe Data | Ukuran (bits) | Minimal                                         | Maksimal                                      | Maksimal (Secara Eksplisit) |
|-----------|------------------|------------------------------------------------|-----------------------------------------------|---------------------------|
| `Byte`      | 8             | -128                                           | 127                                           | 256 (2<sup>8</sup>)
| `Short`     | 16               | -32,768                                       | 32,767                                        | 65,536 (2<sup>16</sup>) |
| `Int`       | 32              | -2,147,483,648 (-2<sup>31</sup>)              | 2,147,483,647 (2<sup>31</sup> - 1)           |  4,294,687,296 (2<sup>32</sup>) |
| `Long`      | 64               | -9,223,372,036,854,775,808 (-2<sup>63</sup>) | 9,223,372,036,854,775,807 (2<sup>63</sup> - 1) | 18,446,744,073,709,551,616 (2<sup>64</sup>) |
:::

## Bilangan Desimal (Floating Point)

Bilangan desimal atau floating point adalah bilangan yang punya koma. Di pemrograman, bilangan desimal biasanya disebut dengan `float` atau `double`. Contoh bilangan desimal adalah 1.5, 2.3, 3.14, dan seterusnya. Untuk membuat bilangan desimal kamu bisa menggunakan kode seperti dibawah ini

:::tabs key:lang
== Javascript
```js
let bilangan_desimal = 3.14;
```
== Kotlin
```kt
val bilangan_desimal: Float = 3.14F
```
Kita juga bisa menggunakan `double` untuk bilangan desimal yang memiliki angka di belakang koma lebih banyak (sampe 15 digit). Contoh penggunaannya seperti ini:
```kt
val bilangan_desimal: Double = 3.141592653589793f
```
== C++
```cpp
float bilangan_desimal = 3.14f;
```
Kita juga bisa menggunakan `double` untuk bilangan desimal yang memiliki angka di belakang koma lebih banyak (sampe 15 digit). Contoh penggunaannya seperti ini:
```cpp
double bilangan_desimal = 3.141592653589793F;
```
== Python
```python
bilangan_desimal = 3.14
```
== Rust
```rust
let bilangan_desimal = 3.14;
```
:::


## Bilangan Pecahan (Fraction)

Bilangan pecahan adalah bilangan yang punya pembilang dan penyebut. Di pemrograman, bilangan pecahan biasanya disebut dengan `fraction`. Contoh bilangan pecahan adalah 1/2, 3/4, 5/6, dan seterusnya. Sayangnya di pemrograman, bilangan pecahan gak ada tipe datanya tapi langsung dihitung aja yang nantinya hasilnya bakal jadi bilangan desimal. Contoh penggunaannya seperti ini:

:::tabs key:lang
== Javascript
```js
let bilangan_pecahan = 1 / 2;
```
== Kotlin
```kt
val bilangan_pecahan = 1 / 2 // Otomatis jadi float
```
== C++
```cpp
float bilangan_pecahan = 1 / 2;
```
== Python
```python
bilangan_pecahan = 1 / 2
```
== Rust
```rust
let bilangan_pecahan = 1.0 / 2.0;
```

Berbeda dengan Kotlin, di mana nilai dapat otomatis berubah menjadi float, Rust dan beberapa bahasa pemrograman lainnya sensitif terhadap tipe data. Misalnya, jika kita menggunakan `1 / 2`, hasilnya akan `0` karena `1` merupakan integer. Untuk mendapatkan hasil sebagai float, kita perlu menambahkan `.0` di belakangnya.
:::

> [!WARNING]  Perhatian saat melakukan operasi dengan bilangan pecahan dan desimal
> Dalam banyak bahasa pemrograman, termasuk JavaScript, ada yang disebut dengan `floating point error`, yang dapat menyebabkan hasil perhitungan tidak akurat. Hal ini terjadi karena bilangan desimal tidak selalu dapat direpresentasikan secara tepat dalam format biner.
>
> Contoh, ketika kita menjumlahkan 0.1 dan 0.2 di JavaScript, hasilnya bukan 0.3, melainkan 0.30000000000000004. Ini disebabkan oleh keterbatasan representasi angka desimal dalam komputer.
>
> Untuk menghindari masalah ini, sebaiknya batasi presisi hasil perhitungan dengan cara Membulatkan hasil ke jumlah angka desimal yang diinginkan (misalnya dengan `toFixed()` atau `Math.round()`.
>
> Kamu juga bisa menggunakan pustaka seperti BigNumber atau yang lainnya

Gimana dengan **Bilangan pecahan campuran** kan di matematika ada kaya $1\frac{1}{2}$, di pemrograman juga bisa kok. Kita bisa menggunakan `float` atau `double` untuk bilangan pecahan campuran. Contoh penggunaannya seperti ini:
:::tabs key:lang
== Javascript
```js
let bilangan_pecahan_campuran = 1 + 1 / 2;
```
== Kotlin
```kt
val bilangan_pecahan_campuran: Double = 1 + 1 / 2
```
== C++
```cpp
double bilangan_pecahan_campuran = 1 + 1 / 2;
```
== Python
```python
bilangan_pecahan_campuran = 1 + 1 / 2
```
== Rust
```rust
let bilangan_pecahan_campuran = 1.0 + 1.0 / 2.0;
```
:::

Kenapa bisa dikali? Karena bilangan pecahan campuran itu sebenernya bisa diubah jadi bilangan desimal biasa. Misal $1\frac{1}{2}$ bisa diubah jadi $1 + \frac{1}{2}$ yang sama dengan $1.5$.
