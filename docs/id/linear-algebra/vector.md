# Vektor

**Vektor** adalah konsep matematika yang digunakan untuk merepresentasikan besaran yang memiliki **arah** dan **besar**. Vektor sering digunakan dalam berbagai bidang ilmu, seperti fisika, matematika, dan komputer.

## Notasi dan Representasi

Vektor dapat direpresentasikan secara horizontal maupun vertikal. Notasi yang umum digunakan untuk merepresentasikan vektor adalah dengan menggunakan huruf tebal, misalnya $\mathbf{v}$.

$$ \mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix} $$

Dalam ruang dua dimensi, vektor hanya memiliki dua komponen, yaitu $v_1$ dan $v_2$ misalnya $\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \end{bmatrix}$.

Dalam pemrograman, vektor sering direpresentasikan sebagai suatu array, list, atau tuple. Misalnya kita dapat merepresentasikan vektor $\mathbf{v} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$ sebagai:

:::tabs
== JavaScript
```javascript
const v = [1, 2];
```
== Kotlin
```kotlin
val v = listOf(1, 2)
```
== C++
```cpp
std::vector<int> v = {1, 2};
```
:::

Vektor juga dapat direpresentasikan dalam bentuk koordinat kartesian, yaitu dengan menggunakan titik $(x, y)$.

## Operasi Dasar

### Penjumlahan Vektor

Penjumlahan vektor dilakukan dengan cara menjumlahkan setiap komponen vektor. Misalnya, jika kita memiliki dua vektor $\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \end{bmatrix}$ dan $\mathbf{w} = \begin{bmatrix} w_1 \\ w_2 \end{bmatrix}$, maka penjumlahan vektor $\mathbf{v} + \mathbf{w}$ adalah:

$$ \mathbf{v} + \mathbf{w} = \begin{bmatrix} v_1 + w_1 \\ v_2 + w_2 \end{bmatrix} $$

Operasi ini apabila diimplementasikan dalam pemrograman kita bisa memanfaatkan fungsi `map` yang akan melakukan iterasi pada setiap elemen vektor.
:::tabs
== JavaScript
```javascript
const v = [1, 2];
const w = [3, 4];
const sum = v.map((vi, i) => vi + w[i]);
console.log(sum); // [4, 6]
```
== Kotlin
```kotlin
val v = listOf(1, 2)
val w = listOf(3, 4)
val sum = v.zip(w).map { (vi, wi) -> vi + wi }
println(sum) // [4, 6]
```
== C++
```cpp
std::vector<int> v = {1, 2};
std::vector<int> w = {3, 4};
std::vector<int> sum;
for (int i = 0; i < v.size(); i++) {
    sum.push_back(v[i] + w[i]);
}
```
:::


Kita juga bisa menggunakan perulangan `for` untuk melakukan penjumlahan vektor. Misalnya pada contoh untuk bahasa pemrograman `C++` di atas.

### Perkalian Skalar

Perkalian skalar adalah operasi yang dilakukan dengan mengalikan setiap komponen vektor dengan suatu bilangan skalar. Misalnya, jika kita memiliki vektor $\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \end{bmatrix}$ dan bilangan skalar $c$, maka perkalian skalar $c \cdot \mathbf{v}$ adalah:

$$ c \cdot \mathbf{v} = \begin{bmatrix} c \cdot v_1 \\ c \cdot v_2 \end{bmatrix} $$

Disini setiap elemen vektor $\mathbf{v}$ akan dikalikan dengan bilangan skalar $c$ ini akan menghasilkan vektor baru yang elemennya diperoleh dari perkalian skalar tersebut.

:::tabs
== JavaScript
```javascript
const v = [1, 2];
const c = 2;
const scaled = v.map(vi => c * vi);
console.log(scaled); // [2, 4]
```
== Kotlin
```kotlin
val v = listOf(1, 2)
val c = 2
val scaled = v.map { vi -> c * vi }
println(scaled) // [2, 4]
```
== C++
```cpp
std::vector<int> v = {1, 2};
int c = 2;
std::vector<int> scaled;
for (int i = 0; i < v.size(); i++) {
    scaled.push_back(c * v[i]);
}
```
:::

### Selisih Vektor

Selisih atau pengurangan vektor sama seperti penjumlahan vektor, hanya saja kita melakukan pengurangan pada setiap komponen vektor. Misalnya, jika kita memiliki dua vektor $\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \end{bmatrix}$ dan $\mathbf{w} = \begin{bmatrix} w_1 \\ w_2 \end{bmatrix}$, maka selisih vektor $\mathbf{v} - \mathbf{w}$ adalah:

$$ \mathbf{v} - \mathbf{w} = \begin{bmatrix} v_1 - w_1 \\ v_2 - w_2 \end{bmatrix} $$

:::tabs
== JavaScript
```javascript
const v = [1, 2];
const w = [3, 4];
const diff = v.map((vi, i) => vi - w[i]);
console.log(diff); // [-2, -2]
```
== Kotlin
```kotlin
val v = listOf(1, 2)
val w = listOf(3, 4)
val diff = v.zip(w).map { (vi, wi) -> vi - wi }
println(diff) // [-2, -2]
```
== C++
```cpp
std::vector<int> v = {1, 2};
std::vector<int> w = {3, 4};
std::vector<int> diff;
for (int i = 0; i < v.size(); i++) {
    diff.push_back(v[i] - w[i]);
}
```
:::

## Magnitudo Vektor

Magnitudo vektor adalah panjang dari vektor tersebut. Untuk menghitung magnitudo vektor, kita dapat menggunakan rumus berikut:

$$ \|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2 + \ldots + v_n^2} $$

Dalam ruang dua dimensi, magnitudo vektor $\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \end{bmatrix}$ adalah:

$$ \|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2} $$

Dalam pemrograman, kita dapat menghitung magnitudo vektor dengan menggunakan fungsi `reduce` dan `sqrt` untuk menghitung akar kuadrat.

:::tabs
== JavaScript
```javascript
const v = [3, 4];
const magnitude = Math.sqrt(v.reduce((acc, vi) => acc + vi ** 2, 0));
console.log(magnitude); // 5
```
== Kotlin
```kotlin
val v = listOf(3, 4)
val magnitude = Math.sqrt(v.fold(0.0) { acc, vi -> acc + vi * vi })
println(magnitude) // 5.0
```
== C++
```cpp
std::vector<int> v = {3, 4};
double magnitude = 0;
for (int i = 0; i < v.size(); i++) {
    magnitude += v[i] * v[i];
}
magnitude = sqrt(magnitude);
```
:::

## Produk Skalar (*Dot Product*)

Produk skalar adalah operasi yang menghasilkan suatu bilangan skalar dari dua vektor. Untuk menghitung produk skalar dari dua vektor $\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \end{bmatrix}$ dan $\mathbf{w} = \begin{bmatrix} w_1 \\ w_2 \end{bmatrix}$, kita dapat menggunakan rumus berikut:

$$ \mathbf{v} \cdot \mathbf{w} = v_1 \cdot w_1 + v_2 \cdot w_2 $$

Contoh apabila kita memiliki dua vektor $\mathbf{v} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$ dan $\mathbf{w} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}$, maka produk skalar dari kedua vektor tersebut adalah:

$$ \mathbf{v} \cdot \mathbf{w} = 1 \cdot 3 + 2 \cdot 4 = 11 $$


:::tabs
== JavaScript
```javascript
const v = [1, 2];
const w = [3, 4];
const dotProduct = v.reduce((acc, vi, i) => acc + vi * w[i], 0);
console.log(dotProduct); // 11
```
== Kotlin
```kotlin
val v = listOf(1, 2)
val w = listOf(3, 4)
val dotProduct = v.zip(w).fold(0) { acc, (vi, wi) -> acc + vi * wi }
println(dotProduct) // 11
```
== C++
```cpp
std::vector<int> v = {1, 2};
std::vector<int> w = {3, 4};
int dotProduct = 0;
for (int i = 0; i < v.size(); i++) {
    dotProduct += v[i] * w[i];
}
```
:::

Produk skalar memberikan informasi tentang sejauh mana dua vektor mengarah ke arah yang sama. Jika hasilnya nol, maka vektor-vektor tersebut ortogonal (tegak lurus satu sama lain).


## Produk Silang (*Cross Product*)

Produk silang adalah operasi yang menghasilkan vektor baru yang tegak lurus terhadap kedua vektor yang dioperasikan. Produk silang hanya dapat dilakukan pada vektor tiga dimensi. Untuk menghitung produk silang dari dua vektor $\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix}$ dan $\mathbf{w} = \begin{bmatrix} w_1 \\ w_2 \\ w_3 \end{bmatrix}$, kita dapat menggunakan rumus berikut:

$$ \mathbf{v} \times \mathbf{w} = \begin{bmatrix} v_2 \cdot w_3 - v_3 \cdot w_2 \\ v_3 \cdot w_1 - v_1 \cdot w_3 \\ v_1 \cdot w_2 - v_2 \cdot w_1 \end{bmatrix} $$

Produk silang dari dua vektor $\mathbf{v} = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$ dan $\mathbf{w} = \begin{bmatrix} 4 \\ 5 \\ 6 \end{bmatrix}$ adalah:

$$ \mathbf{v} \times \mathbf{w} = \begin{bmatrix} 2 \cdot 6 - 3 \cdot 5 \\ 3 \cdot 4 - 1 \cdot 6 \\ 1 \cdot 5 - 2 \cdot 4 \end{bmatrix} = \begin{bmatrix} -3 \\ 6 \\ -3 \end{bmatrix} $$

Produk silang ini penting dalam fisika untuk menghitung momen gaya dan dalam grafika komputer untuk menghitung vektor normal.

:::tabs
== JavaScript
```javascript
const v = [1, 2, 3];
const w = [4, 5, 6];
const cross_product = [
    v[1] * w[2] - v[2] * w[1],
    v[2] * w[0] - v[0] * w[2],
    v[0] * w[1] - v[1] * w[0]
];

console.log(cross_product); // [-3, 6, -3]
```
== Kotlin
```kotlin
val v = listOf(1, 2, 3)
val w = listOf(4, 5, 6)
val cross_product = listOf(
    v[1] * w[2] - v[2] * w[1],
    v[2] * w[0] - v[0] * w[2],
    v[0] * w[1] - v[1] * w[0]
)
println(cross_product) // [-3, 6, -3]
```
== C++
```cpp
std::vector<int> v = {1, 2, 3};
std::vector<int> w = {4, 5, 6};
std::vector<int> cross_product = {
    v[1] * w[2] - v[2] * w[1],
    v[2] * w[0] - v[0] * w[2],
    v[0] * w[1] - v[1] * w[0]
};
```
:::
