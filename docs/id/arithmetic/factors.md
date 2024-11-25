---
title: Faktor dan Kelipatan
description: Faktorisasi, faktorisasi prima, pohon faktor, FPB, KPK
---

# Faktorisasi

Faktorisasi atau pemfaktoran adalah proses menguraikan suatu bilangan menjadi faktor-faktornya. Faktor disini kaya bilangan yang bisa dikalikan untuk menghasilkan bilangan yang kita mau.

Contoh, faktorisasi dari 12 adalah 2 dan 6, karena $2 \times 6 = 12$. Faktorisasi dari 6 adalah 2 dan 3, karena $2 \times 3 = 6$.

## Faktorisasi Prima

Faktorisasi prima adalah faktorisasi dimana semua faktor yang dihasilkan adalah bilangan prima. Bilangan prima adalah bilangan yang hanya bisa dibagi oleh 1 dan bilangan itu sendiri.

Contoh:

-   Faktorisasi prima dari 12 adalah $12=22×312=22×3$, karena 12 bisa dipecah menjadi 2 kali 6, lalu 6 dipecah lagi menjadi 2 kali 3.
-   Faktorisasi prima dari 30 adalah $30=2×3×530=2×3×5$, karena 30 bisa dipecah menjadi 2, 3, dan 5, yang semuanya adalah bilangan prima.

## Pohon Faktor

Secara sederhana cara mencari faktorisasi kita bisa pakai pohon faktor dimana kita melakukan pembagian berulang-ulang sampai bilangan yang kita bagi adalah bilangan prima.

Misalnya kita memiliki bilangan 100 maka pohon faktornya adalah seperti ini:

<svg width="119px" height="215px" id="svg1">
    <text x="20" y="95" style="font-size: 28px;" fill="#3a5998">2</text>
    <line x1="45" x2="28" y1="38" y2="70" stroke="black"></line>
    <text x="45" y="155" style="font-size: 28px;" fill="#3a5998">2</text>
    <line x1="70" x2="53" y1="98" y2="130" stroke="black"></line>
    <text x="70" y="215" style="font-size: 28px;" fill="#3a5998">5</text>
    <line x1="95" x2="78" y1="158" y2="190" stroke="black"></line>
    <text x="52" y="35" style="font-size: 28px;" fill="chocolate">0</text>
    <text x="37" y="35" style="font-size: 28px;" fill="chocolate">0</text>
    <text x="22" y="35" style="font-size: 28px;" fill="chocolate">1</text>
    <line x1="45" x2="70" y1="38" y2="70" stroke="black"></line>
    <text x="70" y="95" style="font-size: 28px;" fill="black">0</text>
    <text x="55" y="95" style="font-size: 28px;" fill="black">5</text>
    <line x1="70" x2="95" y1="98" y2="130" stroke="black"></line>
    <text x="95" y="155" style="font-size: 28px;" fill="black">5</text>
    <text x="80" y="155" style="font-size: 28px;" fill="black">2</text>
    <line x1="95" x2="112" y1="158" y2="190" stroke="black"></line>
    <text x="104" y="215" style="font-size: 28px;" fill="#3a5998">5</text>
</svg>

Dari pohon faktor diatas kita bisa lihat bahwa faktorisasi dari 100 adalah $2 \times 2 \times 5 \times 5$ atau $2^2 \times 5^2$. Kita bisa tulis faktorisasi dari 100 sebagai $2^2 \times 5^2$.

Kalo di pemrograman kita bisa pake _loop_ dan [modulo](/arithmetic/operation-on-number#modulus) untuk mencari faktorisasi dari suatu bilangan. Berikut contoh implementasinya:

:::tabs key:lang
== Javascript

```js
function hitung_faktorisasi(bilangan) {
	let faktor = 2;
	let hasil_faktorisasi = [];
	while (bilangan > 1) {
		if (bilangan % faktor === 0) {
			hasil_faktorisasi.push(faktor);
			bilangan /= faktor;
		} else {
			faktor++;
		}
	}
	return hasil_faktorisasi;
}

let faktorisasi_100 = hitung_faktorisasi(100);
console.log(faktorisasi_100); // [2, 2, 5, 5]
```

== Kotlin

```kt
fun hitung_faktorisasi(bilangan: Int): List<Int> {
    var faktor = 2
    val hasil_faktorisasi = mutableListOf<Int>()
    var bilangan = bilangan
    while (bilangan > 1) {
        if (bilangan % faktor == 0) {
            hasil_faktorisasi.add(faktor)
            bilangan /= faktor
        } else {
            faktor++
        }
    }
    return hasil_faktorisasi
}

val faktorisasi_100 = hitung_faktorisasi(100)
println(faktorisasi_100) // [2, 2, 5, 5]

```

== C++

```cpp
#include <iostream>
#include <vector>

std::vector<int> hitung_faktorisasi(int bilangan) {
    int faktor = 2;
    std::vector<int> hasil_faktorisasi;
    while (bilangan > 1) {
        if (bilangan % faktor == 0) {
            hasil_faktorisasi.push_back(faktor);
            bilangan /= faktor;
        } else {
            faktor++;
        }
    }
    return hasil_faktorisasi;
}

int main() {
    std::vector<int> faktorisasi_100 = hitung_faktorisasi(100); // [2, 2, 5, 5]
    return 0;
}
```
== Python
```python
def hitung_faktorisasi(bilangan):
    faktor = 2
    hasil_faktorisasi = []
    while bilangan > 1:
        if bilangan % faktor == 0:
            hasil_faktorisasi.append(faktor)
            bilangan /= faktor
        else:
            faktor += 1

    return hasil_faktorisasi

faktorisasi_100 = hitung_faktorisasi(100)
print (faktorisasi_100) # [2, 2, 5, 5]
```

== Rust
```rust
fn hitung_faktorisasi(mut bilangan: f64) -> Vec<f64> {
    let mut faktor = 2.0;
    let mut hasil_faktorisasi = vec![];
    while bilangan > 1.0 {
        if bilangan % faktor == 0.0 {
            hasil_faktorisasi.push(faktor);
            bilangan /= faktor;
        } else {
            faktor += 1.0;
        }
    }
    hasil_faktorisasi
}

fn main() {
    let faktorisasi_100 = hitung_faktorisasi(100);
    println!("{:?}", faktorisasi_100); // [2.0, 2.0, 5.0, 5.0]
}
```
:::

Btw diatas kita pakai `/=` itu sama aja dengan `bilangan = bilangan / faktor`, sama aja kaya `+= -= *=` yang biasa kita pakai.


## Kelipatan

Kelipatan adalah hasil dari perkalian suatu bilangan dengan bilangan lain. Misalnya kamu memiliki bilangan $a$ dan dikaikan dengan bilangan $n$ (positif, negatif, atau nol), maka hasilnya adalah kelipatan dari $a$.

Misalnya lagi jika $a = 3$ maka kelipatan dari 3 adalah:
- $3 \times 1 = 3$
- $3 \times 2 = 6$
- $3 \times 3 = 9$
- dan seterusnya...

Jika kelipatan diimplementasikan dalam pemrograman, kita bisa menggunakan _loop_ untuk melakukan perkalian berulang. Contohnya seperti ini:
:::tabs key:lang
== Javascript

```js
function hitung_kelipatan(a, n) {
    let hasil_kelipatan = [];
    for (let i = 1; i <= n; i++) {
        hasil_kelipatan.push(a * i);
    }
    return hasil_kelipatan;
}

let kelipatan3 = hitung_kelipatan(3, 5);
console.log(kelipatan3); // [3, 6, 9, 12, 15]
```
== Kotlin

```kt
fun hitung_kelipatan(a: Int, n: Int): List<Int> {
    val hasil_kelipatan = mutableListOf<Int>()
    for (i in 1..n) {
        hasil_kelipatan.add(a * i)
    }
    return hasil_kelipatan
}

val kelipatan3 = hitung_kelipatan(3, 5)
println(kelipatan3) // [3, 6, 9, 12, 15]
```
== C++

```cpp
std::vector<int> hitung_kelipatan(int a, int n) {
    std::vector<int> hasil_kelipatan;
    for (int i = 1; i <= n; i++) {
        hasil_kelipatan.push_back(a * i);
    }
    return hasil_kelipatan;
}

int main() {
    std::vector<int> kelipatan3 = hitung_kelipatan(3, 5); // [3, 6, 9, 12, 15]
    return 0;
}
```
== Python
```python
def hitung_kelipatan(a, n):
    hasil_kelipatan = []
    for i in range(1, n+1):
        hasil_kelipatan.append(a * i)
    return hasil_kelipatan

hasil = hitung_kelipatan(3, 5)
print (hasil) # [3, 6, 9, 12, 15]
```
== Rust
```rust
fn hitung_kelipatan(a: u64, n: u64) -> Vec<u64> {
    let mut hasil_kelipatan = vec![];
    for i in 1..(n + 1) {
        hasil_kelipatan.push(a * i);
    }
    hasil_kelipatan
}

fn main() {
    let hasil = hitung_kelipatan(3, 5);
    println!("{:?}", hasil); // [3, 6, 9, 12, 15]
}
```
:::

## Faktor Persekutuan Terbesar (FPB)

FPB itu angka terbesar yang bisa membagi dua bilangan tanpa sisa. FPB biasanya dipakai untuk mencari kesamaan dari dua bilangan yang berbeda.

Nah untuk mencari FPB kita bisa mulai dengan mencari faktorisasi dari kedua bilangan tersebut, lalu kita cari faktor yang sama dari kedua bilangan tersebut. Contoh kalo kita mau cari FPB dari 12 dan 18 kita bisa lakukan seperti ini:

$12 = 1,2,3,4,6,12$

$18 = 1,2,3,6,9,18$

Kita bisa lihat bahwa angka yang sama-sama ada di faktorisasi dari 12 dan 18 adalah $1, 2, 3, \text{dan } 6$. Nah dari angka-angka ini kita bisa ambil yang terbesar yaitu 6. Jadi FPB dari 12 dan 18 adalah **$6$**.

Cara lainnya adalah dengan menggunakan algoritma Euclidean yang rumusnya adalah:

$$\text{FPB}(a, b) = \text{FPB}(b, a \mod b)$$

Cara ngitungnya kek gini:
1. Ambil dua bilangan $a$ dan $b$.
2. Bagi $a$ dengan $b$ dan simpan sisanya (modulus), misalnya $r = a \mod b$.
3. Ganti $a$ dengan $b$ dan $b$ dengan $r$.
4. Ulangi langkah 2 dan 3 sampai sisanya ($r$) menjadi 0.
5. Kalo $r$ udah 0, maka FPB dari $a$ dan $b$ adalah $b$.

Pusing? Tenang, mari jadiin kode aja biar lebih mudah dimengerti kek gini:
:::tabs key:lang
== Javascript

```javascript
function hitung_fpb(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

let fpb_1218 = hitung_fpb(12, 18);
console.log(fpb_1218); // 6
```
== Kotlin

```kotlin
fun hitung_fpb(a: Int, b: Int): Int {
    var a = a
    var b = b
    while (b != 0) {
        val t = b
        b = a % b
        a = t
    }
    return a
}

val fpb_1218 = hitung_fpb(12, 18)
println(fpb_1218) // 6
```
== C++

```cpp
#include<iostream>

std::vector<int> hitung_fpb(int a, int b) {
    while (b != 0) {
        int t = b;
        b = a % b;
        a = t;
    }
    return a;
}

int main() {
    int fpb_1218 = hitung_fpb(12, 18);
    std::cout << fpb_1218 << std::endl; // 6
    return 0;
}
```
== Python
```python
def hitung_fpb(a, b):
    while b != 0:
        t = b
        b = a % b
        a = t

    return a

fpb_1218 = hitung_fpb(12, 18)
print (fpb_1218) # 6
```
== Rust
```rust
fn hitung_fpb(mut a: u64, mut b: u64) -> u64 {
    while b != 0 {
        let t = b;
        b = a % b;
        a = t
    }
    a
}

fn main() {
    let fpb_1218 = hitung_fpb(12, 18);
    println!("{}", fpb_1218); // 6
}
```
:::


## Kelipatan Persekutuan Terkecil (KPK)

Kelipatan Persekutuan Terkecil (KPK) adalah angka terkecil yang bisa dibagi habis oleh dua bilangan. Misalnya, KPK dari 12 dan 18 adalah **$36$**, karena 36 adalah angka terkecil yang bisa dibagi habis oleh kedua bilangan tersebut.

Gak percaya coba kita hitung $12 \times 3 = 36$ dan $18 \times 2 = 36$.

Untuk mencari KPK, kita bisa pakai rumus ini:

$$\text{KPK}(a, b) = \frac{a \times b}{\text{FPB}(a, b)}$$

Kalo disimulasiin kek gini:

1. kita punya FPB dari 12 dan 18 yaitu 6.
2. $12 \times 18 = 216$ (gede banget)
3. $216 \div 6 = 36$ (nah ini KPKnya)

Atau kalo mau rada ribet, kita bisa hitung manual dengan cara mencari kelipatan dari kedua bilangan tersebut. Contoh kalo kita mau cari KPK dari 12 dan 18 kita bisa lakukan seperti ini:

| Bilangan | Kelipatan 1 | Kelipatan 2 | Kelipatan 3 | Kelipatan $n$ |
|----------|-------------|-------------|-------------|---------------|
| 12       | 12          | 24          | 36          | ...           |
| 18       | 18          | 36          | 54          | ...           |

Dari tabel diatas kita bisa lihat bahwa kelipatan yang sama dari 12 dan 18 adalah 36. Jadi KPK dari 12 dan 18 adalah **$36$**.
Kalian bebas sih pake yang mana, yang penting gak salah.


Gampang kan? Mari kita jadiin kode biar lebih mudah dimengerti:
:::tabs key:lang
== Javascript

```javascript
function hitung_kpk(a, b) {
    return (a * b) / hitung_fpb(a, b);
}

let kpk_1218 = hitung_kpk(12, 18);
console.log(kpk_1218); // 36
```
== Kotlin

```kotlin
fun hitung_kpk(a: Int, b: Int): Int {
    return (a * b) / hitung_fpb(a, b)
}

val kpk_1218 = hitung_kpk(12, 18) // 36
println(kpk_1218) // 36
```
== C++

```cpp
#include <iostream>

int hitung_kpk(int a, int b) {
    return (a * b) / hitung_fpb(a, b);
}

int main() {
    int kpk_1218 = hitung_kpk(12, 18);
    std::cout << kpk_1218 << std::endl; // 36
    return 0;
}
```
== Python
```python
def hitung_kpk(a, b):
    return (a * b) / hitung_fpb(a, b)

kpk_1218 = hitung_kpk(12, 18)
print (kpk_1218) # 36.0
```
== Rust
```rust
fn hitung_kpk(a: u64, b: u64) -> u64 {
    (a * b) / hitung_fpb(a, b)
}

fn main() {
    let kpk_1218 = hitung_kpk(12, 18);
    println!("{}", kpk_1218); // 36
}
```
:::

<style>
    #svg1 {
        margin: 0 auto;
        display: block;
    }

    .__svg line,
    #svg1 line
    {
        stroke: var(--vp-c-text-1) !important;
        stroke-width: 2;
    }

    .__svg text[fill="black"],
    #svg1 text[fill="black"] {
        font-family: Arial, sans-serif;
        fill: var(--vp-c-brand-1) !important;
    }
</style>
