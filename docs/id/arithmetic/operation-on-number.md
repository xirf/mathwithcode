---
title: Operasi pada Bilangan
description: Contoh penggunaan operasi matematika pada bilangan dalam pemrograman
---


# Operasi Bilangan

Operasi bilangan atau proses untuk memanipulasi nilai numerik tertentu pake teknik matematika seperti penjumlahan, pengurangan, perkalian, pembagian, dan banyak lagi. Di pemrograman kita gak bisa lepas dari yang namanya operasi bilangan karena komputer sendiri berjalan berdasarkan operasi bilangan. Di sini kita bakal bahas operasi bilangan yang sering dipake di pemrograman.

## Operasi Dasar

Di pemrograman, kita bisa melakukan berbagai operasi matematika dengan bilangan. Ada penjumlahan, pengurangan, perkalian, dan pembagian. Berbeda dengan matematika biasa yang pakai simbol `+`, `-`, `*`, dan `/`, di pemrograman kita pakai simbol yang berbeda. Contoh penggunaannya seperti ini:

:::tabs
== Javascript
```js
let a = 10;
let b = 5;
let hasil_penjumlahan = a + b; // 15
let hasil_pengurangan = a - b; // 5
let hasil_perkalian = a * b; // 50
let hasil_pembagian = a / b; // 2
```
== Kotlin
```kt
val a = 10
val b = 5
val hasil_penjumlahan = a + b // 15
val hasil_pengurangan = a - b // 5
val hasil_perkalian = a * b // 50
val hasil_pembagian = a / b // 2
```
== C++
```cpp
int a = 10;
int b = 5;
int hasil_penjumlahan = a + b; // 15
int hasil_pengurangan = a - b; // 5
int hasil_perkalian = a * b; // 50
int hasil_pembagian = a / b; // 2
```
== Python
```python
a = 10
b = 5
hasil_penjumlahan = a + b # 15
hasil_pengurangan = a - b # 5
hasil_perkalian = a * b # 50
hasil_pembagian = a / b # 2
```
== Rust
```rust
let a: u64 = 10;
let b: u64 = 5;
let hasil_penjumlahan: u64 = a + b; // 15
let hasil_pengurangan: u64 = a - b; // 5
let hasil_perkalian: u64 = a * b; // 50
let hasil_pembagian: f64 = a as f64 / b as f64; // 2.0
```
:::

Di atas kita menggunakan simbol `/` untuk pembagian dan `*` untuk perkalian. Ini karena dalam pemrograman, kita tidak bisa menggunakan simbol matematika `÷` dan `×` kek biasanya apalagi `.` karena bahasa pemrograman umumnya mengikuti aturan ASCII yang hanya mendukung karakter dasar, sehingga simbol-simbol matematika khusus seperti `÷` dan `×` tidak tersedia. Sebagai gantinya, pemrograman menggunakan `*` sebagai pengganti kali dan `/` sebagai pengganti bagi agar kode bisa berjalan dengan baik.

> [!NOTE]
> Coba cek di keyboard laptop atau PC kalian ada gak tuh simbol `÷` dan `×` (ini bukan x ya) kebanyakan sih gak ada dan itulah salah satu alasannya kenapa pemrograman gak pake simbol itu. :grin:

## Pangkat (Exponentiation)

Pangkat adalah operasi matematika yang digunakan untuk menghitung hasil perkalian bilangan dengan dirinya sendiri sebanyak $n$ kali. Di pemrograman, kita bisa menggunakan operator `**` ataupun pakai `pow()` untuk menghitung pangkat. Contoh penggunaannya seperti ini:
:::tabs
== Javascript
```js
let pangkat = 2 ** 3; // 8
let pangkat2 = Math.pow(2, 3); // 8
```
== Kotlin
```kt
val pangkat = 2.0.pow(3) // 8.0
val pangkat2 = Math.pow(2.0, 3.0) // 8.0
```
== C++
```cpp
#include <iostream>
#include <cmath>

int main() {
    double pangkat = pow(2, 3); // 8
    double pangkat2 = pow(2.0, 3.0); // 8
    return 0;
}
```
== Python
```python
pangkat = 2 ** 3 # 8
pangkat2 = pow(2, 3) # 8
```
== Rust
```rust
let pangkat: u64 = 2_u64.pow(3); // 8
let pangkat2: f64 = 2.0_f64.powf(3.0); // 8.0
```
> [!NOTE]
> Dalam Rust, `powf` bukanlah kesalahan pengetikan, melainkan nama fungsi yang digunakan untuk bilangan float. Jika kamu ingin melakukan operasi pangkat pada bilangan bulat, gunakan fungsi `pow`. Untuk bilangan float, gunakan `powf`.

:::

`pow()` biasanya meminta dua parameter, parameter pertama adalah bilangan yang mau dipangkatkan, dan parameter kedua adalah pangkatnya. jadi kalo kita mau menghitung $2^3$ kita bisa tulis `pow(2, 3)`.

## Akar (Root)

Setiap bahasa pemrograman juga biasanya punya fungsi untuk menghitung akar. Di Javascript, kita bisa menggunakan fungsi `Math.sqrt()` (*Square Root*) untuk menghitung akar. Contoh penggunaannya seperti ini:

```js
let akar = Math.sqrt(16); // 4
```
Di Kotlin, kita bisa menggunakan fungsi `Math.sqrt()` juga. Contoh penggunaannya seperti ini:

```kt
val akar = Math.sqrt(16.0) // 4.0
```

Di C++, kita bisa menggunakan fungsi `sqrt()` dari library `cmath`. Contoh penggunaannya seperti ini:

```cpp
#include <iostream>
#include <cmath>

int main() {
    double akar = sqrt(16); // 4
    std::cout << akar << std::endl;
    return 0;
}
```

Di Python, kita bisa menggunakan library `sqrt()` dari library `math`, Contoh penggunaanya seperti ini:
```python
import math
akar = math.sqrt(16) # 4.0
```

Untuk Rust, kita tidak perlu menggunakan library tambahan untuk menghitung akar kuadrat. Kita bisa memanfaatkan fungsi `sqrt` yang sudah tersedia pada tipe data float. Berikut adalah contohnya:
```rust
let akar: f64 = 16.0_f64.sqrt(); // 4.0
```

Tapi ada masalah kalo kita mau menghitung akar yang lebih dari 2 kaya $\sqrt[3]{8}$ atau $\sqrt[4]{16}$, Nah untuk kasus ini kita bisa pangkatkan aja bilangannya dengan $1/n$  dimana si $n$ itu adalah akar yang kita mau. Contoh penggunaannya seperti ini:

:::tabs
== Javascript
```js
let akar3 = Math.pow(8, 1 / 3); // 2
let akar4 = Math.pow(16, 1 / 4); // 2
```
== Kotlin
```kt
val akar3 = Math.pow(8.0, 1.0 / 3.0) // 2.0
val akar4 = Math.pow(16.0, 1.0 / 4.0) // 2.0
```
== C++
```cpp
#include <iostream>
#include <cmath>

int main() {
    double akar3 = pow(8, 1.0 / 3); // 2
    double akar4 = pow(16, 1.0 / 4); // 2
    std::cout << akar3 << std::endl;
    std::cout << akar4 << std::endl;
    return 0;
}
```
== Python
```python
akar3 = pow(8, 1 / 3) # 2.0
akar4 = pow(16, 1 / 4) # 2.0
```
== Rust
```rust
let akar3: f64 = 8.0_f64.powf(1.0 / 3.0); // 2.0
let akar4: f64 = 16.0_f64.powf(1.0 / 4.0); // 2.0
```
:::

Hal ini bisa terjadi karena apapun bilangan yang memiliki pangkat $1/n$ akan menghasilkan akar dari bilangan tersebut. Jadi kalo kita mau menghitung $\sqrt[3]{8}$ kita bisa tulis `pow(8, 1/3)`.

## Akar (Tanpa Modul)

Kita bisa juga mencari $\lfloor\sqrt{n}\rfloor$ tanpa memakai modul loh dengan cara memanfaatkan persamaan
$$n = x^2 + a$$
dengan $x$ adalah perpangkatan terdekat dari $n$ dan sisanya adalah $a$. Sebagai contoh $n = 18$ maka $x = 4$ lalu sisanya kita bisa cari dengan cara $a = n - x^2$. Kalau di kodingan seperti ini
:::tabs
== Javascript
```js
let n = 18;
let x = 1;
while((x + 1) * (x + 1) <= n){
    x++;
}
let a = n - x * x;
```
== Kotlin
```kt
val n = 18
var x = 1
while ((x + 1) * (x + 1) <= n) {
    x++
}
val a = n - x * x
```
== C++
```cpp
int n = 18;
int x = 1;
while((x + 1) * (x + 1) <= n){
    x++;
}
int a = n - x * x;
```
== Python
```python
n = 18
x = 1
while (x + 1) * (x + 1) <= n:
    x+=1
a = n - x * x
```
== Rust
```rust
let n = 18;
let mut x = 1;
while (x + 1) * (x + 1) <= n {
    x += 1;
}
let a = n - x * x;
```
:::
## Modulus

Modulus atau sisa hasil pembagian adalah operasi matematika yang digunakan untuk menghitung sisa hasil pembagian dua bilangan. Misalnya kamu mau tau sisa hasil pembagian 10 dibagi 3, maka hasilnya adalah 1. Di pemrograman, kita bisa menggunakan operator `%` untuk menghitung modulus.

Operator ini berguna banget buat ngecek bilangan itu genap, ganjil atau punya pola tertentu. Contoh penggunaannya seperti ini:

:::tabs
== Javascript
```js
let hasil_modulus = 10 % 3; // 1
```
== Kotlin
```kt
val hasil_modulus = 10 % 3 // 1
```
== C++
```cpp
int hasil_modulus = 10 % 3; // 1
```
== Python
```python
hasil_modulus = 10 % 3 # 1
```
== Rust
```rust
let Hasil_modulus: u64 = 10 % 3; // 1
```
:::

## Prioritas Operasi

Di dalam matematika, ada aturan yang namanya prioritas operasi. Prioritas operasi ini menentukan urutan operasi mana yang harus dilakukan duluan. Di pemrograman, prioritas operasi ini juga berlaku dan sama dengan matematika biasa. Kalo di bahasa inggris ada yang namanya PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction) jadi urutannya adalah

1. Tanda Kurung $( )$
2. Pangkat $x^y$ dan Akar $\sqrt{x}$
3. Perkalian $x \times y$, Pembagian $x \div y$ dan Modulus $x \% y$
4. Penjumlahan $x + y$ dan Pengurangan $x - y$

contoh kalo pengen menghitung $6 + 3 * (2^3 + \sqrt{16})$ maka:

1. **Tanda kurung**: Fokus pada bagian dalam kurung terlebih dahulu $2^3 + \sqrt{16}$.
3. **Eksponen (pangkat)**: Hitung $2^3$.
$$2^3 = 8$$
5. **Akar**: Hitung $\sqrt{16}$.
$$\sqrt{16} = 4$$
7. **Penjumlahan dalam kurung**: Sekarang, selesaikan operasi dalam kurung $2^3 + \sqrt{16}$.
$$8 + 4 = 12$$
9. **Perkalian**: Lanjutkan ke operasi di luar kurung, yaitu $3 \times (2^3 + \sqrt{16})$.
$$3 \times 12 = 36$$
11. **Penjumlahan terakhir**: Terakhir, tambahkan $6 + 36$.
$$6 + 36 = 42$$
Jadi, hasil akhirnya adalah **42**.

Kalo di pemrograman urutan operasi ini udah di tangani sama bahasanya jadi kamu gak perlu khawatir kalo salah urutan operasi. Kamu cukup teliti aja sama rumus yang akan kamu gunakan. Kalo rumus tadi kita masukkan ke kode maka akan jadi seperti ini.

:::tabs
== Javascript
```js
let hasil = 6 + 3 * (2 ** 3 + Math.sqrt(16)); // 42
```
== Kotlin
```kt
val hasil = 6 + 3 * (2.0.pow(3) + Math.sqrt(16.0)) // 42.0
```

== C++
```cpp
int hasil = 6 + 3 * (pow(2,3) + sqrt(16)); // 42
```
== Python
```python
import math
hasil = 6 + 3 * (pow(2,3) + math.sqrt(16)) # 42.0
```
== Rust
```rust
let hasil: f64 = 6.0 + 3.0 * (2.0_f64.powf(3.0) + 16.0_f64.sqrt()); // 42.0
```
:::

##
