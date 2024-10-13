# Persamaan Linear

Persamaan linear bisa diartikan sebagai seuatu persamaan yang suku-sukunya memiliki konstanta (nilai tetap) dengan variabel tunggal. Persamaan ini disebut linear karena hubungan antara variabel-variabelnya membentuk garis lurus jika digambarkan dalam grafik dua dimensi. Sebelum memulai kita wajib paham beberapa hal dibawah ini

1. **Variabel**: Pengganti bilangan yang nilainya belum diketahui.
2. **Koeffisien**: Bilangan yang mengalikan variabel.
3. **Konstanta**: Bilangan yang tidak memiliki variabel.
4. **Suku**: Bagian dari persamaan yang terdiri dari variabel, koefisien, dan konstanta.

Persamaan linear juga memiliki beberapa aturan/sifat yang harus dipahami, diantaranya:

-   Penjumlahan dan pengurangan bilangan kedua ruas tak akan mengubah persamaan nilai.
-   Perkalian dan pembagian bilangan kedua ruas tidak mengubah nilai persamaan
-   Nilai persamaan tidak berubah jika kedua ruas ditambah atau dikurangi bilangan yang sama.
-   Suatu persamaan jika dipindah ruas maka penjumlahan berubah jadi pengurangan, perkalian berubah menjadi pembagian, dan sebaliknya.

## Persamaan Linear Satu Variabel

Persamaan linear satu variabel adalah persamaan yang memiliki satu variabel. Persamaan ini biasanya ditulis dalam bentuk $ax + b = c$ dimana $a$, $b$, dan $c$ adalah bilangan riil dan $x$ adalah variabel.

Contoh persamaan linear satu variabel:
$$ 2x + 3 = 7 $$

Untuk mengetahui nilai $x$ yang memenuhi persamaan tersebut, kita harus mencari nilai $x$ yang membuat kedua ruas persamaan sama. Berikut langkah-langkahnya:

1. Eliminasi konstanta pada ruas kiri dengan cara mengurangkan konstanta pada ruas kiri dengan konstanta pada ruas kanan.
   $$ 2x + 3 - 3 = 7 - 3 $$
$$ 2x = 4 $$
2. Eliminasi koefisien variabel dengan cara membagi kedua ruas dengan koefisien variabel.
   $$ \frac{2x}{2} = \frac{4}{2} $$
$$ x = 2 $$
3. Sehingga nilai $x$ yang memenuhi persamaan tersebut adalah $x = 2$.

Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:
:::tabs
==javascript

```js
function linearEquation(a, b, c) {
	// Persamaan: a * x + b = c
	const x = (c - b) / a;
	return x;
}
console.log(linearEquation(2, 3, 7)); // Output: 2
```

==kotlin

```kotlin
val a = 2
val b = 3
val c = 7

// Persamaan: a * x + b = c
val x = (c - b) / a
println("Nilai x adalah: $x")
```

== C++

```cpp
int linearEquation(int a, int b, int c) {
    // Persamaan: a * x + b = c
    int x = (c - b) / a;
    return x;
}

int main() {
    int a = 2;
    int b = 3;
    int c = 7;
    int x = linearEquation(a, b, c);
    cout << "Nilai x adalah: " << x << endl;
    return 0;
}
```

==Python
```python
def linearEquation(a, b, c):
    # Persamaan: a * x + b = c
    x = (c - b) / a
    return x

a, b, c, = 2, 3, 7
x = linearEquation(a, b, c)
print(f"Nilai x adalah: {x}")
```

:::

## Persamaan Linear Dua Variabel

Sesuai dengan namanya, persamaan ini memiliki dua variabel yang bisanya ditulis dalam bentuk $ax + by = c$ dimana $a$, $b$, dan $c$ adalah bilangan riil dan $x$ dan $y$ adalah variabel.

Contoh persamaan linear dua variabel:
$$ 2x + 3y = 7 $$

Ada 2 cara untuk meyelesaikan persamaan yaitu dengan menggunakan metode substitusi dan eliminasi. Untuk metode substitusi, kita bisa mengganti salah satu variabel dengan nilai yang sudah diketahui. Sedangkan untuk metode eliminasi, kita bisa menghilangkan salah satu variabel dengan cara mengalikan salah satu persamaan dengan bilangan tertentu.

### Metode Substitusi

Berikut contoh penyelesaian persamaan diatas dengan menggunakan metode substitusi:

1. Pertama kita pilih salah satu variable untuk diisolasi, misalnya kita pilih $x$.
2. variable yang kita isolasi kemudian kita simpan dan pindahkan lainnya ke kanan.
   $$ 2x = 7 - 3y $$
3. Karena nilai yang diisolasi adalah $2x$ maka kita bagi kedua ruas dengan $2$.
   $$ \frac{2x}{2} = \frac{7 - 3y}{2} $$
$$ x = \frac{7 - 3y}{2} $$
4. Nah kita dapat solusi parametrik dari $x$

Nila parametrik inilah yang nantinya berapapun nilai $y$ yang kita masukkan akan menghasilkan nilai $x$ yang sesuai. Misalnya nilai $y = 1$ maka:
$$ x = \frac{7 - 3(1)}{2} $$
$$ x = \frac{4}{2} $$
$$ x = 2 $$

Bagaimana jika permasalahan ini kita jadikan kode? Berikut contoh implementasinya:
:::tabs
==javascript

```js
function pldv(a, b, c, y) {
	let x = (c - b * y) / a;
	return { x, y };
}

// 2x + 3y = 7 dimana y = 1
console.log(pldv(2, 3, 7, 1)); // Output: { x: 2, y: 1 }
```

==kotlin

```kotlin
fun pldv(a: Int, b: Int, c: Int, y: Int): Pair<Int, Int> {
    val x = (c - b * y) / a
    return Pair(x, y)
}

// 2x + 3y = 7 dimana y = 1
println(pldv(2, 3, 7, 1))  // Output: (2, 1)
```

== C++

```cpp
#include <iostream>
#include <utility>

std::pair<int, int> pldv(int a, int b, int c, int y) {
    int x = (c - b * y) / a;
    return std::make_pair(x, y);
}

int main() {
    // 2x + 3y = 7 dimana y = 1
    auto result = pldv(2, 3, 7, 1);
    std::cout << "Output: (" << result.first << ", " << result.second << ")" << std::endl;
    return 0;
}
```

:::

### Metode Eliminasi

Jika menggunakan metode eliminasi, kita membutuhkan 2 persamaan sebagai perbandingan. Misalnya kita punya 2 persamaan berikut:
$$ 2x + 3y = 7 $$
$$ 3x - 2y = 8 $$
Jika sudah memiliki dua persamaan kita bisa menghilangkan salah satu variabel dengan cara mengalikan salah satu persamaan dengan bilangan tertentu. Berikut langkah-langkahnya:

1. Ubah kedua persamaan menjadi bentuk standar.
    $$ 2x + 3y = 7$$
    $$ 3x - 2y = 8$$
2. Kita akan mengeleminasi variabel $y$ dengan cara mengalikan persamaan (1) dengan $2$ dan persamaan (2) dengan $3$ (koefisien yang sama kita pilih).
    $$ 4x + (3 \times 2y) = 7 \times 2$$
    $$ 9x - (2 \times 3y) = 8 \times 3$$
    <div class="w-full max-w-32 h-1px bg-gray-500/50 my-4 mx-auto"></div>

    $$ 4x + 6y = 14$$
    $$ 9x - 6y = 24$$
3. Nah nilai $y$ udah sama tinggal kita kurangkan persamaan (1) dengan persamaan (2).
    $$ 4x + 6y = 14$$
    $$ 9x - 6y = 24$$
    <div class="w-full max-w-32 h-1px bg-text-base my-4 mx-auto relative after:(absolute bg-black dark:bg-white -right-5 w-4 h-1px top-0 content-[''])"></div>

    $$ -5x = -10$$

4. Kita bagi kedua ruas dengan $-5$.
    $$ \frac{-5x}{-5} = \frac{-10}{-5}$$
    $$ x = 2$$

5. Nah kita sudah mendapatkan nilai $x$ sekarang kita cari nilai $y$ dengan cara substitusi nilai $x$ ke salah satu persamaan.

    $$ 2x + 3y = 7$$
    $$ 2(2) + 3y = 7$$
    $$ 4 + 3y = 7$$
    $$ 3y = 3$$
    $$ y = 1$$

6. Sehingga nilai $x$ dan $y$ yang memenuhi persamaan tersebut adalah $x = 2$ dan $y = 1$.

Bagaimana jika permasalahan ini kita jadikan kode? Berikut contoh implementasinya:
:::tabs
==javascript

```js
function pldvEliminasi(a1, b1, c1, a2, b2, c2) {
    // Menghitung koefisien untuk eliminasi
    let factor = a2 / a1;

    // Membuat persamaan baru dengan mengurangi
    let newB2 = b2 - factor * b1;
    let newC2 = c2 - factor * c1;

    // Menyelesaikan untuk y
    let y = newC2 / newB2;

    // Menghitung x dengan substitusi y ke dalam persamaan 1
    let x = (c1 - b1 * y) / a1;

    return { x: x, y: y };
}

// 2x - 3y = 7 dan 3x - 2y = 8
console.log(pldvEliminasi(2, 3, 7, 3, -2, 8)); // Output: { x: 2, y: 1 }
```
== kotlin

```kotlin
fun pldvEliminasi(a1: Int, b1: Int, c1: Int, a2: Int, b2: Int, c2: Int): Pair<Int, Int> {
    // Menghitung koefisien untuk eliminasi
    val factor = a2 / a1

    // Membuat persamaan baru dengan mengurangi
    val newB2 = b2 - factor * b1
    val newC2 = c2 - factor * c1

    // Menyelesaikan untuk y
    val y = newC2 / newB2

    // Menghitung x dengan substitusi y ke dalam persamaan 1
    val x = (c1 - b1 * y) / a1

    return Pair(x, y)
}

// 2x - 3y = 7 dan 3x - 2y = 8
println(pldvEliminasi(2, 3, 7, 3, -2, 8)) // Output: (2, 1)
```
== C++

```cpp
#include <iostream>
#include <utility>

pair<double, double> pldvEliminasi(double a1, double b1, double c1, double a2, double b2, double c2) {
    // Menghitung koefisien untuk eliminasi
    double factor = a2 / a1;

    // Membuat persamaan baru dengan mengurangi
    double newB2 = b2 - factor * b1;
    double newC2 = c2 - factor * c1;

    // Menyelesaikan untuk y
    double y = newC2 / newB2;

    // Menghitung x dengan substitusi y ke dalam persamaan 1
    double x = (c1 - b1 * y) / a1;

    return make_pair(x, y);
}

int main() {
    auto result = pldvEliminasi(2, 3, 7, 4, -5, 10);
    cout << "x: " << result.first << ", y: " << result.second << endl; 
    // Output: x: 3, y: -1
    return 0;
}
```

==Python

```python
def pldvEliminasi(a1, b1, c1, a2, b2, c2):
    # Menghitung koefisien untuk eliminasi
    factor = a2 / a1

    # Membuat persamaan baru dengan mengurangi
    newB2 = b2 - factor * b1
    newC2 = c2 - factor * c1

    # Menyelesaikan untuk y
    y = newC2 / newB2

    # Menghitung x dengan substitusi y ke dalam persamaan 1
    x = (c1 - b1 * y) / a1

    return x, y

# Contoh: 2x - 3y = 7 dan 3x - 2y = 8
x, y = pldvEliminasi(2, 3, 7, 3, -2, 8)
print(f"x: {x}, y: {y}")  # Output: x: 2, y: 1
```
:::
