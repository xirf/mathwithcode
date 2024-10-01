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

<style>
    #svg1 {
        margin: 0 auto;
        display: block;
    }

    #svg1 line
    {
        stroke: var(--vp-c-text-1) !important;
        stroke-width: 2;
    }

    #svg1 text[fill="black"] {
        font-family: Arial, sans-serif;
        fill: var(--vp-c-brand-1) !important;
    }
</style>

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

:::

Btw diatas kita pakai `/=` itu sama aja dengan `bilangan = bilangan / faktor`, sama aja kaya `+= -= *=` yang biasa kita pakai.


## Faktor Persekutuan Terbesar (FPB)

**Faktor Persekutuan Terbesar (FPB)** adalah angka terbesar yang bisa membagi dua bilangan tanpa sisa. FPB membantu kita menemukan kesamaan dari dua bilangan yang berbeda.

Misalnya, FPB dari 12 dan 18 adalah **6**, karena 6 adalah angka terbesar yang bisa membagi kedua bilangan tersebut.

Untuk mencari FPB, kita bisa menggunakan algoritma **Euclidean**. Berikut adalah contoh implementasinya dalam beberapa bahasa pemrograman:

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
#include <iostream>

int fpb(int a, int b) {
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
:::

## Kelipatan Persekutuan Terkecil (KPK)

**Kelipatan Persekutuan Terkecil (KPK)** adalah angka terkecil yang bisa dibagi oleh dua bilangan. KPK sering kita gunakan untuk menemukan kelipatan dari dua bilangan yang berbeda. 

Contohnya, KPK dari 12 dan 18 adalah **36**, karena 36 adalah angka terkecil yang bisa dibagi oleh 12 dan 18.

Kita bisa mencari KPK dengan rumus berikut: **$KPK = (a × b) / FPB$**. Berikut adalah contoh implementasinya:

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
    return a * b / fpb(a, b)
}

val kpk1218 = kpk(12, 18) // 36
```

== C++

```cpp
#include <iostream>

int fpb(int a, int b) {
    while (b != 0) {
        int t = b;
        b = a % b;
        a = t;
    }
    return a;
}

int kpk(int a, int b) {
    return a * b / fpb(a, b);
}

int main() {
    int kpk1218 = kpk(12, 18); // 36
    return 0;
}
```
:::

