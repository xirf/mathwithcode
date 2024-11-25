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

-   Jika $D > 0$, maka persamaan kuadrat memiliki solusi bilangan real.
-   Jika $D = 0$, maka persamaan kuadrat memiliki dua akar real yang sama.
-   Jika $D < 0$, maka persamaan kuadrat memiliki dua akar kompleks.

## Menggunakan Rumus Kuadrat

Akar-akar persamaan kuadrat adalah dua nilai $x$, yang diperoleh dengan menyelesaikan persamaan kuadrat. Akar-akar persamaan kuadrat ini juga disebut angka nol dari persamaan tersebut. Sebagai contoh, akar-akar persamaan $x^2 - 3x - 4 = 0$ dapat dicari dengan menggunakan cara berikut:

$$\begin{align*}
x &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \\
x &= \frac{-(-3) \pm \sqrt{3^2 - 4\cdot1\cdot(-4)}}{2\cdot1} \\
x &= \frac{3 \pm \sqrt{9 - - 16}}{2} \\
x &= \frac{3 \pm \sqrt{9 + 16}}{2} \\
x &= \frac{3 \pm \sqrt{25}}{2} \\
x &= \frac{3 \pm 5}{2}
\end{align*}$$

Mari kira sederhanakan menjadi
$$x = \frac{3 ± 5}{2}$$
$$x = \frac{8}{2} \text{ atau } x = -\frac{2}{2}$$

Yang akhirnya menjadi $x = 4$ atau $x = -1$. Jadi, akar-akar dari persamaan $x^2 - 3x - 4 = 0$ adalah $x = 4$ dan $x = -1$.

Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:

:::tabs
== Javascript
```js
function cari_akar_persamaan(a, b, c) {
	// Langkah 1: Hitung b^2 dan 4ac
	const b_squared = b * b;
	const four_ac = 4 * a * c;

	// Langkah 2: Hitung diskriminan
	const discriminant = b_squared - four_ac;

	if (discriminant >= 0) {
		// Jika diskriminan >= 0, lanjutkan dengan akar real
		// Langkah 3: Hitung akar dari diskriminan
		const sqrt_discriminant = Math.sqrt(discriminant);

        // Langkah 4: Hitung dua kemungkinan nilai untuk x
		const root1 = (-b + sqrt_discriminant) / (2 * a);
		const root2 = (-b - sqrt_discriminant) / (2 * a);
		console.log(`x1 = (-${b} + ${sqrt_discriminant}) / (2 * ${a}) = ${root1}`);
		console.log(`x2 = (-${b} - ${sqrt_discriminant}) / (2 * ${a}) = ${root2}`);
		console.log(`Akar-akarnya adalah: x1 = ${root1} dan x2 = ${root2}`);
	} else {
		// Jika diskriminan < 0, akar kompleks
		const real_part = -b / (2 * a);
		const imaginary_part = Math.sqrt(-discriminant) / (2 * a);
		console.log(`x1 = ${real_part} + ${imaginary_part}i`);
		console.log(`x2 = ${real_part} - ${imaginary_part}i`);
	}
}

// Contoh untuk persamaan x^2 - 3x - 4 = 0
const a = 1;
const b = -3;
const c = -4;
cari_akar_persamaan(a, b, c);
```

== C++
```cpp
#include <iostream>
#include <cmath>

fun cari_akar_persamaan(a: Double, b: Double, c: Double) {
    // Langkah 1: Hitung bagian-bagian dari rumus
    val b_squared = b * b;
    val four_ac = 4 * a * c;

    // Langkah 2: Hitung diskriminan
    val discriminant = b_squared - four_ac;

    if (discriminant >= 0) {
        // Jika diskriminan >= 0, lanjutkan dengan akar real
        // Langkah 3: Hitung akar dari diskriminan
        val sqrt_discriminant = sqrt(discriminant);

        // Langkah 4: Hitung dua kemungkinan nilai untuk x
        val root1 = (-b + sqrt_discriminant) / (2 * a);
        val root2 = (-b - sqrt_discriminant) / (2 * a);
        println("x1 = (-$b + $sqrt_discriminant) / (2 * $a) = $root1");
        println("x2 = (-$b - $sqrt_discriminant) / (2 * $a) = $root2");

        // Tampilkan hasil akhirnya
        println("Akar-akarnya adalah: x1 = $root1 dan x2 = $root2");
    } else {
        // Jika diskriminan < 0, akar kompleks
        val real_part = -b / (2 * a);
        val imaginary_part = sqrt(-discriminant) / (2 * a);
        println("x1 = $real_part + ${imaginary_part}i");
        println("x2 = $real_part - ${imaginary_part}i");
    }
}

fun main() {
    // Contoh untuk persamaan x^2 - 3x - 4 = 0
    val a = 1.0;
    val b = -3.0;
    val c = -4.0;
    cari_akar_persamaan(a, b, c);
}
```
== Kotlin
```kotlin
import kotlin.math.sqrt

fun cari_akar_persamaan(a: Double, b: Double, c: Double) {
    // Langkah 1: Hitung bagian-bagian dari rumus
    val b_squared = b * b
    val four_ac = 4 * a * c

    // Langkah 2: Hitung diskriminan
    val discriminant = b_squared - four_ac

    if (discriminant >= 0) {
        // Jika diskriminan >= 0, lanjutkan dengan akar real
        // Langkah 3: Hitung akar dari diskriminan
        val sqrt_discriminant = sqrt(discriminant)

        // Langkah 4: Hitung dua kemungkinan nilai untuk x
        val root1 = (-b + sqrt_discriminant) / (2 * a)
        val root2 = (-b - sqrt_discriminant) / (2 * a)
        println("x1 = (-$b + $sqrt_discriminant) / (2 * $a) = $root1")
        println("x2 = (-$b - $sqrt_discriminant) / (2 * $a) = $root2")
        println("Akar-akarnya adalah: x1 = $root1 dan x2 = $root2")
    } else {
        // Jika diskriminan < 0, akar kompleks
        val real_part = -b / (2 * a)
        val imaginary_part = sqrt(-discriminant) / (2 * a)
        println("x1 = $real_part + ${imaginary_part}i")
        println("x2 = $real_part - ${imaginary_part}i")
    }
}

fun main() {
    // Contoh untuk persamaan x^2 - 3x - 4 = 0
    val a = 1.0
    val b = -3.0
    val c = -4.0
    cari_akar_persamaan(a, b, c)
}
```
== Python
``` python
import math

def cari_akar_persamaan(a, b, c):
	# Langkah 1: Hitung b^2 dan 4ac
	b_squared = b * b
	four_ac = 4 * a * c

	# Langkah 2: Hitung diskriminan
	discriminant = b_squared - four_ac

	if discriminant >= 0:
		# Jika diskriminan >= 0, lanjutkan dengan akar real
		# Langkah 3: Hitung akar dari diskriminan
		sqrt_discriminant = math.sqrt(discriminant)

		# Langkah 4: Hitung dua kemungkinan nilai untuk x
		root1 = (-b + sqrt_discriminant) / (2 * a)
		root2 = (-b - sqrt_discriminant) / (2 * a)
		print(f"x1 = (-{b} + {sqrt_discriminant}) / (2 * {a}) = {root1}")
		print(f"x2 = (-{b} - {sqrt_discriminant}) / (2 * {a}) = {root2}")
		print(f"Akar-akarnya adalah: x1 = {root1} dan x2 = {root2}")
	else:
		# Jika diskriminan < 0, akar kompleks
		real_part = -b / (2 * a)
		imaginary_part = math.sqrt(-discriminant) / (2 * a)
		print(f"x1 = {real_part} + {imaginary_part}i")
		print(f"x2 = {real_part} - {imaginary_part}i")

# Contoh untuk persamaan x^2 - 3x - 4 = 0
a = 1
b = -3
c = -4
cari_akar_persamaan(a, b, c)
```
== Rust
```rust
fn cari_akar_persamaan(a: f64, b: f64, c: f64) {
    // Langkah 1: Hitung bagian-bagian dari rumus
    let b_squared = b * b;
    let four_ac = 4.0 * a * c;

    // Langkah 2: Hitung diskriminan
    let discriminant = b_squared - four_ac;

    if discriminant >= 0.0 {
        // Jika diskriminan >= 0, lanjutkan dengan akar real
        // Langkah 3: Hitung akar dari diskriminan
        let sqrt_discriminant = discriminant.sqrt();

        // Langkah 4: Hitung dua kemungkinan nilai untuk x
        let root1 = (-b + sqrt_discriminant) / (2.0 * a);
        let root2 = (-b - sqrt_discriminant) / (2.0 * a);
        println!("x1 = (-{} + {}) / (2 * {}) = {}", b.abs(), sqrt_discriminant, a, root1);
        println!("x2 = (-{} - {}) / (2 * {}) = {}", b.abs(), sqrt_discriminant, a, root2);

        // Tampilkan hasil akhirnya
        println!("Akar-akarnya adalah: x1 = {} dan x2 = {}", root1, root2);
    } else {
        // Jika diskriminan < 0, akar kompleks
        let real_part: f64 = -b / (2.0 * a);
        let imaginary_part = -discriminant.sqrt() / (2.0 * a);
        println!("x1 = {} + {}", real_part, imaginary_part);
        println!("x2 = {} - {}", real_part, imaginary_part);
    }
}

fun main() {
    // Contoh untuk persamaan x^2 - 3x - 4 = 0
    let a = 1.0;
    let b = -3.0;
    let c = -4.0;
    cari_akar_persamaan(a, b, c);
}
```
:::
