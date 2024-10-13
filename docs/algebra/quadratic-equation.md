---
contributors:
  - name: "Anka Tama"
    username: "xirf"
---

# Persamaan Kuadrat

Persamaan kuadrat (kuadratik) dapat didefinisikan sebagai persamaan polinomial (persamaan yang terdiri dari beberapa suku) tingkat dua, yang menyiratkan bahwa persamaan ini terdiri dari minimal satu suku yang dikuadratkan. Bentuk umum persamaan kuadrat adalah:

$$ax^2 + bx + c = 0$$

Dimana $x$ adalah variabel yang tidak diketahui dan $a$, $b$, $c$ adalah koefisien numerik. Sebagai contoh, $x^2 + 2x +1$ adalah persamaan kuadrat atau kuadratik. Di sini, $a ≠ 0$ karena jika sama dengan nol maka persamaan tersebut tidak lagi berbentuk kuadratik dan akan menjadi persamaan linier, seperti $bx + c = 0$.

<iframe src="https://www.desmos.com/calculator/4pk6cxq51f?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>
<div class="text-center text-sm text-gray-500">

Grafik persamaan kuadrat $f(x) = 0.1x^2 + 0.5 - 0.3x$

</div>

## Rumus Umum

Akar-akar dari persamaan kuadrat dapat ditemukan dengan menggunakan rumus kuadrat. Rumus kuadrat adalah:

$$x = \frac{-b ± \sqrt{b^2 - 4ac}}{2a}$$

Dimana $±$ disini berarti dua kemungkinan nilai untuk $x$. Rumus ini dikenal sebagai rumus kuadrat atau rumus abc. Rumus ini dapat digunakan untuk menemukan akar-akar dari persamaan kuadrat $ax^2 + bx + c = 0$.

## Diskriminan

Diskriminan adalah bagian dari rumus kuadrat yang terletak di bawah tanda akar. Diskriminan digunakan untuk menentukan jenis akar dari persamaan kuadrat. Diskriminan didefinisikan sebagai:

$$D = b^2 - 4ac$$

Dimana $a$, $b$, dan $c$ adalah koefisien dari persamaan kuadrat $ax^2 + bx + c = 0$. Berikut adalah beberapa kemungkinan nilai diskriminan:

-   Jika $D > 0$, maka persamaan kuadrat memiliki solusi bilangan real
-   Jika $D = 0$, maka persamaan kuadrat memiliki dua akar real yang sama.
-   Jika $D < 0$, maka persamaan kuadrat memiliki dua akar kompleks.

## Menggunakan Rumus Kuadrat

Akar-akar persamaan kuadrat adalah dua nilai $x$, yang diperoleh dengan menyelesaikan persamaan kuadrat. Akar-akar persamaan kuadrat ini juga disebut angka nol dari persamaan tersebut. Sebagai contoh, akar-akar persamaan $x^2 - 3x - 4 = 0$ dapat dicari dengan menggunakan cara berikut:

$$x = \frac{-b ± \sqrt{b^2 - 4ac}}{2a}$$
$$x = \frac{-(-3) ± \sqrt{3^2 - 4\cdot1\cdot(-4)}}{2\cdot1}$$
$$x = \frac{3 ± \sqrt{9 - - 16}}{2}$$
$$x = \frac{3 ± \sqrt{9 + 16}}{2}$$
$$x = \frac{3 ± \sqrt{25}}{2}$$
$$x = \frac{3 ± 5}{2}$$

Mari kira sederhanakan menjadi
$$x = \frac{3 ± 5}{2}$$
$$x = \frac{8}{2} \text{ atau } x = -\frac{2}{2}$$

Yang akhirnya menjadi $x = 4$ atau $x = -1$. Jadi, akar-akar dari persamaan $x^2 - 3x - 4 = 0$ adalah $x = 4$ dan $x = -1$.

Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:

:::tabs
==Javascript

```js
function findRootsStepByStep(a, b, c) {
	// Langkah 1: Hitung b^2 dan 4ac
	const bSquared = b * b;
	const fourAC = 4 * a * c;
	// Langkah 2: Hitung diskriminan
	const discriminant = bSquared - fourAC;

	if (discriminant >= 0) {
		// Jika diskriminan >= 0, lanjutkan dengan akar real
		// Langkah 3: Hitung akar dari diskriminan
		const sqrtDiscriminant = Math.sqrt(discriminant);
		// Langkah 4: Hitung dua kemungkinan nilai untuk x
		const root1 = (-b + sqrtDiscriminant) / (2 * a);
		const root2 = (-b - sqrtDiscriminant) / (2 * a);
		console.log(`x1 = (-${b} + ${sqrtDiscriminant}) / (2 * ${a}) = ${root1}`);
		console.log(`x2 = (-${b} - ${sqrtDiscriminant}) / (2 * ${a}) = ${root2}`);
		console.log(`Akar-akarnya adalah: x1 = ${root1} dan x2 = ${root2}`);
	} else {
		// Jika diskriminan < 0, akar kompleks
		const realPart = -b / (2 * a);
		const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
		console.log(`x1 = ${realPart} + ${imaginaryPart}i`);
		console.log(`x2 = ${realPart} - ${imaginaryPart}i`);
	}
}

// Contoh untuk persamaan x^2 - 3x - 4 = 0
const a = 1;
const b = -3;
const c = -4;
findRootsStepByStep(a, b, c);
```

== C++

```cpp
import kotlin.math.sqrt

fun akarPersamaan(a: Double, b: Double, c: Double) {
    // Langkah 1: Hitung bagian-bagian dari rumus
    val bSquared = b * b
    val fourAC = 4 * a * c

    // Langkah 2: Hitung diskriminan
    val discriminant = bSquared - fourAC

    if (discriminant >= 0) {
        // Jika diskriminan >= 0, lanjutkan dengan akar real
        // Langkah 3: Hitung akar dari diskriminan
        val sqrtDiscriminant = sqrt(discriminant)

        // Langkah 4: Hitung dua kemungkinan nilai untuk x
        val root1 = (-b + sqrtDiscriminant) / (2 * a)
        val root2 = (-b - sqrtDiscriminant) / (2 * a)
        println("x1 = (-$b + $sqrtDiscriminant) / (2 * $a) = $root1")
        println("x2 = (-$b - $sqrtDiscriminant) / (2 * $a) = $root2")

        // Tampilkan hasil akhirnya
        println("Akar-akarnya adalah: x1 = $root1 dan x2 = $root2")
    } else {
        // Jika diskriminan < 0, akar kompleks
        val realPart = -b / (2 * a)
        val imaginaryPart = sqrt(-discriminant) / (2 * a)
        println("x1 = $realPart + ${imaginaryPart}i")
        println("x2 = $realPart - ${imaginaryPart}i")
    }
}

fun main() {
    // Contoh untuk persamaan x^2 - 3x - 4 = 0
    val a = 1.0
    val b = -3.0
    val c = -4.0
    akarPersamaan(a, b, c)
}

```

== Kotlin

```kotlin
import kotlin.math.sqrt

fun akarPersamaan(a: Double, b: Double, c: Double) {
    // Langkah 1: Hitung bagian-bagian dari rumus
    val bSquared = b * b
    val fourAC = 4 * a * c

    // Langkah 2: Hitung diskriminan
    val discriminant = bSquared - fourAC

    if (discriminant >= 0) {
        // Jika diskriminan >= 0, lanjutkan dengan akar real
        // Langkah 3: Hitung akar dari diskriminan
        val sqrtDiscriminant = sqrt(discriminant)

        // Langkah 4: Hitung dua kemungkinan nilai untuk x
        val root1 = (-b + sqrtDiscriminant) / (2 * a)
        val root2 = (-b - sqrtDiscriminant) / (2 * a)
        println("x1 = (-$b + $sqrtDiscriminant) / (2 * $a) = $root1")
        println("x2 = (-$b - $sqrtDiscriminant) / (2 * $a) = $root2")
        println("Akar-akarnya adalah: x1 = $root1 dan x2 = $root2")
    } else {
        // Jika diskriminan < 0, akar kompleks
        val realPart = -b / (2 * a)
        val imaginaryPart = sqrt(-discriminant) / (2 * a)
        println("x1 = $realPart + ${imaginaryPart}i")
        println("x2 = $realPart - ${imaginaryPart}i")
    }
}

fun main() {
    // Contoh untuk persamaan x^2 - 3x - 4 = 0
    val a = 1.0
    val b = -3.0
    val c = -4.0
    akarPersamaan(a, b, c)
}
```
