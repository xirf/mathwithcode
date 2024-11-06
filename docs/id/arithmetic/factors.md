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

:::tabs
== Javascript

```js
function faktorisasi(bilangan) {
	let faktor = 2;
	let faktorisasi = [];
	while (bilangan > 1) {
		if (bilangan % faktor === 0) {
			faktorisasi.push(faktor);
			bilangan /= faktor;
		} else {
			faktor++;
		}
	}
	return faktorisasi;
}

let faktorisasi100 = faktorisasi(100); // [2, 2, 5, 5]
```

== Kotlin

```kt
fun faktorisasi(bilangan: Int): List<Int> {
    var faktor = 2
    val faktorisasi = mutableListOf<Int>()
    var bilangan = bilangan
    while (bilangan > 1) {
        if (bilangan % faktor == 0) {
            faktorisasi.add(faktor)
            bilangan /= faktor
        } else {
            faktor++
        }
    }
    return faktorisasi
}

val faktorisasi100 = faktorisasi(100) // [2, 2, 5, 5]
```

== C++

```cpp
#include <iostream>
#include <vector>

std::vector<int> faktorisasi(int bilangan) {
    int faktor = 2;
    std::vector<int> faktorisasi;
    while (bilangan > 1) {
        if (bilangan % faktor == 0) {
            faktorisasi.push_back(faktor);
            bilangan /= faktor;
        } else {
            faktor++;
        }
    }
    return faktorisasi;
}

int main() {
    std::vector<int> faktorisasi100 = faktorisasi(100); // [2, 2, 5, 5]
    return 0;
}
```
== Python
```python
def faktorisasi(bilangan):
    faktor = 2
    faktorisasi = []
    while bilangan > 1:
        if bilangan % faktor == 0:
            faktorisasi.append(faktor)
            bilangan /= faktor
        else:
            faktor += 1

    return faktorisasi

faktorisasi100 = faktorisasi(100) # [2, 2, 5, 5]
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
:::tabs
== Javascript

```js
function kelipatan(a, n) {
    let kelipatan = [];
    for (let i = 1; i <= n; i++) {
        kelipatan.push(a * i);
    }
    return kelipatan;
}

let kelipatan3 = kelipatan(3, 5); // [3, 6, 9, 12, 15]
```
== Kotlin

```kt
fun kelipatan(a: Int, n: Int): List<Int> {
    val kelipatan = mutableListOf<Int>()
    for (i in 1..n) {
        kelipatan.add(a * i)
    }
    return kelipatan
}

val kelipatan3 = kelipatan(3, 5) // [3, 6, 9, 12, 15]
```
== C++

```cpp
std::vector<int> kelipatan(int a, int n) {
    std::vector<int> kelipatan;
    for (int i = 1; i <= n; i++) {
        kelipatan.push_back(a * i);
    }
    return kelipatan;
}

int main() {
    std::vector<int> kelipatan3 = kelipatan(3, 5); // [3, 6, 9, 12, 15]
    return 0;
}
```
== Python
```python
def kelipatan(a, n):
    kelipatan = []
    for i in range(1, n+1):
        kelipatan.append(a * i)

    return kelipatan

kelipatan3 = kelipatan(3, 5)

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
:::tabs
== Javascript

```javascript
function fpb(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

let fpb1218 = fpb(12, 18); // 6
```
== Kotlin

```kotlin
fun fpb(a: Int, b: Int): Int {
    var a = a
    var b = b
    while (b != 0) {
        val t = b
        b = a % b
        a = t
    }
    return a
}

val fpb1218 = fpb(12, 18) // 6
```
== C++

```cpp
std::vector<int> fpb(int a, int b) {
    while (b != 0) {
        int t = b;
        b = a % b;
        a = t;
    }
    return a;
}

int main() {
    int fpb1218 = fpb(12, 18); // 6
    return 0;
}
```
== Python
```python
def fpb(a, b):
    while b != 0:
        t = b
        b = a % b
        a = t

    return a

fpb1218 = fpb(12, 18) # 6
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
:::tabs
== Javascript

```javascript
function kpk(a, b) {
    return (a * b) / fpb(a, b);
}

let kpk1218 = kpk(12, 18); // 36
```
== Kotlin

```kotlin
fun kpk(a: Int, b: Int): Int {
    return (a * b) / fpb(a, b)
}

val kpk1218 = kpk(12, 18) // 36
```
== C++

```cpp
int kpk(int a, int b) {
    return (a * b) / fpb(a, b);
}

int main() {
    int kpk1218 = kpk(12, 18); // 36
    return 0;
}
```
== Python
```python
def kpk(a, b):
    return (a * b) / fpb(a, b)

kpk1218 = kpk(12, 18) # 36.0
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