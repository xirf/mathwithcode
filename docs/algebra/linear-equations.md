# Persamaan Linear

Persamaan linear bisa diartikan sebagai seuatu persamaan yang suku-sukunya memiliki konstanta (nilai tetap) dengan variabel tunggal. Persamaan ini disebut linear karena hubungan antara variabel-variabelnya membentuk garis lurus jika digambarkan dalam grafik dua dimensi. Sebelum memulai kita wajib paham beberapa hal dibawah ini

1. **Variabel**: Pengganti bilangan yang nilainya belum diketahui.
2. **Koeffisien**: Bilangan yang mengalikan variabel.
3. **Konstanta**: Bilangan yang tidak memiliki variabel.
4. **Suku**: Bagian dari persamaan yang terdiri dari variabel, koefisien, dan konstanta.

Persamaan linear juga memiliki beberapa aturan/sifat yang harus dipahami, diantaranya:

- Penjumlahan dan pengurangan bilangan kedua ruas tak akan mengubah persamaan nilai.
- Perkalian dan pembagian bilangan kedua ruas tidak mengubah nilai persamaan
- Nilai persamaan tidak berubah jika kedua ruas ditambah atau dikurangi bilangan yang sama.
- Suatu persamaan jika dipindah ruas maka penjumlahan berubah jadi pengurangan, perkalian berubah menjadi pembagian, dan sebaliknya.

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
:::

## Persamaan Linear Dua Variabel

Sesuai dengan namanya, persamaan ini memiliki dua variabel yang bisanya ditulis dalam bentuk $ax + by = c$ dimana $a$, $b$, dan $c$ adalah bilangan riil dan $x$ dan $y$ adalah variabel.

Contoh persamaan linear dua variabel:
$$ 2x + 3y = 7 $$

Ada 2 cara untuk meyelesaikan persamaan yaitu dengan menggunakan metode substitusi dan eliminasi. Untuk metode substitusi, kita bisa mengganti salah satu variabel dengan nilai yang sudah diketahui. Sedangkan untuk metode eliminasi, kita bisa menghilangkan salah satu variabel dengan cara mengalikan salah satu persamaan dengan bilangan tertentu.

Berikut contoh penyelesaian persamaan diatas dengan menggunakan metode eliminasi:

1. Kita akan menghilangkan variabel $y$ dengan mengalikan persamaan dengan $3$.
$$ 2x + 3y = 7 $$
