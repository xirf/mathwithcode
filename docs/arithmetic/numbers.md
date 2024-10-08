---
title: Bilangan
description: Contoh penggunaan Bilangan dalam pemrograman 
---

# Bilangan 

Bilangan merupakan dasar dari matematika, semuanya di matematika pake bilangan. Dalam pemrograman, bilangan juga sangat penting. Kita bisa melakukan berbagai operasi matematika dengan bilangan, seperti penjumlahan, pengurangan, perkalian, dan pembagian.

Namun bilangan di pemrograman dibagi-bagi ke beberapa jenis, tergantung dari tipe datanya. Jadinya penggunaan bilangan di program bakalan sedikit beda dengan di matematika biasa. yuk pelajari lebih lanjut!

## Bilangan Bulat (Integer)

Bilangan bulat adalah bilangan yang tidak punya koma. Di pemrograman, bilangan bulat biasanya disebut dengan `integer`. Contoh bilangan bulat adalah 1, 2, 3, 4, 5, dan seterusnya.

:::tabs
== Javascript
```js
let bilanganBulat = 10;
```
== Kotlin
```kt
val bilanganBulat: Int = 10
```
== C++
```cpp
int bilanganBulat = 10;
```
== Python
```python
bilanganBulat = 10
```
:::

Meski kelihatannya sederhana, jangan lupa kalau di pemrograman, bilangan punya batasan! Contohnya, di Javascript, bilangan paling besar yang bisa kamu pakai adalah **`9,007,199,254,740,992`**. Itu setara dengan angka yang sangat besar seriously, aku aja bingung ngucapinnya.

Nah, kalau di C++ dan bahasa lain yang punya tipe data lebih banyak daripada JS (cuman `number` dan `BigInt`), batasan itu tergantung tipe data yang kamu pakai. Contoh kalo pake `short` di c++, kamu bisa mencapai angka **`32,767`** terkecuali di python, python tidak memiliki batas bilangan bulat, karena Python secara dinamis menangani ukuran bilangan bulat. contohnya kek dibawah ini

:::tabs
== Javascript

| Tipe Data | Ukuran (bits) | Minimal| Maksimal|
|-----------|------------------|---------------|----|
| Number    | 64               | -9,007,199,254,740,991<br /> (−2<sup>53</sup> - 1) | 9,007,199,254,740,992 <br /> (2<sup>53</sup> - 1 )  |
| BigInt    | max 1,000,000,000               | `tergantung memori` | `tergantung memori`  |
== C++
| Tipe Data | Ukuran (bits) | Minimal                                         | Maksimal                                      |
|-----------|------------------|------------------------------------------------|-----------------------------------------------|
| `short`     | 16               | -32,768                                       | 32,767                                        |
| `int`       | 32               | -2,147,483,648 (-2<sup>31</sup>)              | 2,147,483,647 (2<sup>31</sup> - 1)           |
| `long`      | 64               | -9,223,372,036,854,775,808 (-2<sup>63</sup>) | 9,223,372,036,854,775,807 (2<sup>63</sup> - 1) |
| `long long` | 64               | -9,223,372,036,854,775,808 (-2<sup>63</sup>) | 9,223,372,036,854,775,807 (2<sup>63</sup> - 1) |

Banyak banget selengkapnya cek [sini aja ya](https://learn.microsoft.com/en-us/cpp/c-language/cpp-integer-limits?view=msvc-170#limits-on-integer-constants)
== Kotlin
| Tipe Data | Ukuran (bits) | Minimal                                         | Maksimal                                      |
|-----------|------------------|------------------------------------------------|-----------------------------------------------|
| `Byte`      | 8                | -128                                           | 127                                           |
| `Short`     | 16               | -32,768                                       | 32,767                                        |
| `Int`       | 32               | -2,147,483,648 (-2<sup>31</sup>)              | 2,147,483,647 (2<sup>31</sup> - 1)           |
| `Long`      | 64               | -9,223,372,036,854,775,808 (-2<sup>63</sup>) | 9,223,372,036,854,775,807 (2<sup>63</sup> - 1) |
:::

## Bilangan Desimal (Floating Point)

Bilangan desimal atau floating point adalah bilangan yang punya koma. Di pemrograman, bilangan desimal biasanya disebut dengan `float` atau `double`. Contoh bilangan desimal adalah 1.5, 2.3, 3.14, dan seterusnya. Untuk membuat bilangan desimal kamu bisa menggunakan kode seperti dibawah ini

:::tabs
== Javascript
```js
let bilanganDesimal = 3.14;
```
== Kotlin
```kt
val bilanganDesimal: Float = 3.14F
```
Kita juga bisa menggunakan `double` untuk bilangan desimal yang memiliki angka di belakang koma lebih banyak (sampe 15 digit). Contoh penggunaannya seperti ini:
```kt
val bilanganDesimal: Double = 3.141592653589793f
```
== C++
```cpp
float bilanganDesimal = 3.14f;
```
Kita juga bisa menggunakan `double` untuk bilangan desimal yang memiliki angka di belakang koma lebih banyak (sampe 15 digit). Contoh penggunaannya seperti ini:
```cpp
double bilanganDesimal = 3.141592653589793F;
```
== Python
```python
bilanganDesimal = 3.14
```
:::


## Bilangan Pecahan (Fraction)

Bilangan pecahan adalah bilangan yang punya pembilang dan penyebut. Di pemrograman, bilangan pecahan biasanya disebut dengan `fraction`. Contoh bilangan pecahan adalah 1/2, 3/4, 5/6, dan seterusnya. Sayangnya di pemrograman, bilangan pecahan gak ada tipe datanya tapi langsung dihitung aja yang nantinya hasilnya bakal jadi bilangan desimal. Contoh penggunaannya seperti ini:

:::tabs
== Javascript
```js
let bilanganPecahan = 1/2;
```
== Kotlin
```kt
val bilanganPecahan = 1/2 // Otomatis jadi float
```
== C++
```cpp
float bilanganPecahan = 1/2;
```
== Python
```python
bilanganPecahan = 1/2
```
:::

> [!WARNING]  
> Hati hati kalo mau melakukan operasi ke bilangan pecahan dan desimal karena ada yang namanya `floating point error` yang bisa bikin perhitungannya jadi gak akurat. Contoh kalo kita coba menjumlahkan 0.1 dengan 0.2 di javascript, hasilnya bakal jadi 0.30000000000000004. Jadi kalo mau operasi ke bilangan desimal, lebih baik pake yang presisinya tinggi.

Gimana dengan **Bilangan pecahan campuran** kan di matematika ada kaya $1\frac{1}{2}$, di pemrograman juga bisa kok. Kita bisa menggunakan `float` atau `double` untuk bilangan pecahan campuran. Contoh penggunaannya seperti ini:
:::tabs
== Javascript
```js
let bilanganPecahanCampuran = 1 + 1/2;
```
== Kotlin
```kt
val bilanganPecahanCampuran: Double = 1 + 1/2
```
== C++
```cpp
double bilanganPecahanCampuran = 1 + 1/2;
```
== Python
```python
bilanganPecahanCampuran = 1 + 1/2
```
:::

Kenapa bisa dikali? Karena bilangan pecahan campuran itu sebenernya bisa diubah jadi bilangan desimal biasa. Misal $1\frac{1}{2}$ bisa diubah jadi $1 + \frac{1}{2}$ yang sama dengan $1.5$.
