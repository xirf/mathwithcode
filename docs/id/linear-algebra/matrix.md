---
contributors:
  - name: "Rijal"
    username: "Rnov24"
  - name: "Anka"
    username: "xirf"
---

# Matriks

**Matrix** adalah susunan bilangan-bilangan atau variabel-variabel yang disusun dalam bentuk baris dan kolom. Matriks biasanya dilambangkan dengan huruf kapital dan elemen-elemen matriks dilambangkan dengan huruf kecil. Sebagai contoh, matriks $A$ dengan ukuran $m \times n$ dapat dituliskan sebagai berikut:

$$ A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix} $$

Setiap elemen pada matriks $A$ dilambangkan dengan $a_{ij}$, dimana $i$ adalah nomor baris dan $j$ adalah nomor kolom. Sebagai contoh, $a_{11}$ adalah elemen pada baris pertama dan kolom pertama.

Dalam pemrograman, matriks sering direpresentasikan sebagai array dua dimensi. Misalnya, matriks $A$ di atas dapat direpresentasikan sebagai array dua dimensi sebagai berikut:

:::tabs
== JavaScript
```javascript
const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```
== Kotlin
```kotlin
val A = arrayOf(
    intArrayOf(1, 2, 3),
    intArrayOf(4, 5, 6),
    intArrayOf(7, 8, 9)
)
```
== C++
```cpp
std::vector<std::vector<int>> A = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```
== Python
```python
A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```
== Rust
```rust
let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```
:::


## Jenis Matriks

Ada beberapa jenis matriks berdasarkan sifat-sifatnya. Beberapa jenis matriks yang umum adalah sebagai berikut:

### Matriks Nol

Merupakan matriks yang semua elemennya bernilai nol. Matriks nol biasanya dilambangkan dengan $O$ atau $0$. Sebagai contoh, matriks nol $2 \times 2$ adalah:

$$ O = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} $$

### Matriks Identitas (*Identity Matrix*)

Merupakan matriks yang elemen-elemen diagonalnya bernilai satu dan elemen-elemen lainnya bernilai nol. Matriks identitas biasanya dilambangkan dengan $I$ atau $E$. Sebagai contoh, matriks identitas $3 \times 3$ adalah:

$$ I = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} $$

### Matriks Segitiga Atas (*Upper Triangular Matrix*)

Merupakan matriks yang elemen-elemen di bawah diagonal utamanya bernilai nol. Sebagai contoh, matriks segitiga atas $3 \times 3$ adalah:

$$ A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix} $$

### Matriks Segitiga Bawah (*Lower Triangular Matrix*)

Merupakan matriks yang elemen-elemen di atas diagonal utamanya bernilai nol. Sebagai contoh, matriks segitiga bawah $3 \times 3$ adalah:

$$ A = \begin{bmatrix} 1 & 0 & 0 \\ 2 & 3 & 0 \\ 4 & 5 & 6 \end{bmatrix} $$

### Matriks Diagonal

Merupakan matriks yang elemen-elemen di luar diagonal utamanya bernilai nol. Sebagai contoh, matriks diagonal $3 \times 3$ adalah:

$$ A = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix} $$

### Matriks Persegi (*Square Matrix*)

Merupakan matriks yang memiliki jumlah baris dan kolom yang sama. Sebagai contoh, matriks persegi $3 \times 3$ adalah:

$$ A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} $$

### Matriks Simetris

Merupakan matriks yang elemen-elemen diagonalnya simetris terhadap diagonal utama. Sebagai contoh, matriks simetris $3 \times 3$ adalah:

$$ A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{bmatrix} $$

### Matriks Ortogonal

Merupakan matriks yang memenuhi sifat $A^T \cdot A = I$. Matriks ortogonal juga memenuhi sifat $A^T = A^{-1}$. Sebagai contoh, matriks ortogonal $2 \times 2$ adalah:

$$ A = \begin{bmatrix} \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta) \end{bmatrix} $$

### Matriks Singular

Merupakan matriks yang tidak memiliki invers. Matriks singular memiliki determinan nol. Sebagai contoh, matriks singular $2 \times 2$ adalah:

$$ A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix} $$

### Matriks Non-Singular

Merupakan matriks yang memiliki invers. Matriks non-singular memiliki determinan tidak nol. Sebagai contoh, matriks non-singular $2 \times 2$ adalah:

$$ A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} $$

## Operasi Matriks

Ada beberapa operasi yang dapat dilakukan pada matriks, antara lain:

### Penjumlahan Matriks

Dua buah matriks dapat dijumlahkan jika memiliki ukuran yang sama. Penjumlahan matriks dilakukan dengan menjumlahkan elemen-elemen yang sesuai. Sebagai contoh, penjumlahan dua matriks $A$ dan $B$ adalah:

$$ A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \quad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} $$

Akan menghasilkan:

$$ A + B = \begin{bmatrix} 1+5 & 2+6 \\ 3+7 & 4+8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix} $$

Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:

:::tabs
== JavaScript
```javascript
const A = [
    [1, 2],
    [3, 4]
];
const B = [
    [5, 6],
    [7, 8]
];
const sum = A.map((row, i) => row.map((val, j) => val + B[i][j]));
console.log(sum); // [[6, 8], [10, 12]]
```
== Kotlin
```kotlin
val A = arrayOf(
    intArrayOf(1, 2),
    intArrayOf(3, 4)
)
val B = arrayOf(
    intArrayOf(5, 6),
    intArrayOf(7, 8)
)
val sum = A.mapIndexed { i, row -> row.mapIndexed { j, val -> val + B[i][j] } }
println(sum) // [[6, 8], [10, 12]]
```
== C++
```cpp
std::vector<std::vector<int>> A = {
    {1, 2},
    {3, 4}
};
std::vector<std::vector<int>> B = {
    {5, 6},
    {7, 8}
};
std::vector<std::vector<int>> sum(A.size(), std::vector<int>(A[0].size(), 0));
for (int i = 0; i < A.size(); i++) {
    for (int j = 0; j < A[0].size(); j++) {
        sum[i][j] = A[i][j] + B[i][j];
    }
}
```
== Python
```python
A = [
    [1, 2],
    [3, 4]
]
B = [
    [5, 6],
    [7, 8]
]
sum = [
    [A[i][j] + B[i][j] for j in range(len(A[0]))]
    for i in range(len(A))
]
print(sum)  # [[6, 8], [10, 12]]
```
== Rust
```rust
let a = [
    [1, 2],
    [3, 4],
];
let b = [
    [5, 6],
    [7, 8],
];

let sum: Vec<Vec<i32>> = a.iter()
    .zip(b.iter())
    .map(|(row_a, row_b)| {
        row_a.iter()
            .zip(row_b.iter())
            .map(|(val_a, val_b)| val_a + val_b)
            .collect()
    })
    .collect();
println!("{:?}", sum); // [[6, 8], [10, 12]]
```
:::

### Pengurangan Matriks

Sama seperti penjumlahan matriks, dua buah matriks dapat dikurangkan jika memiliki ukuran yang sama. Pengurangan matriks dilakukan dengan mengurangkan elemen-elemen yang sesuai. Sebagai contoh, pengurangan dua matriks $A$ dan $B$ adalah:

$$ A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \quad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} $$

Akan menghasilkan:

$$ A - B = \begin{bmatrix} 1-5 & 2-6 \\ 3-7 & 4-8 \end{bmatrix} = \begin{bmatrix} -4 & -4 \\ -4 & -4 \end{bmatrix} $$

Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:

:::tabs
== JavaScript
```javascript
const A = [
    [1, 2],
    [3, 4]
];
const B = [
    [5, 6],
    [7, 8]
];
const diff = A.map((row, i) => row.map((val, j) => val - B[i][j]));
console.log(diff); // [[-4, -4], [-4, -4]]
```
== Kotlin
```kotlin
val A = arrayOf(
    intArrayOf(1, 2),
    intArrayOf(3, 4)
)
val B = arrayOf(
    intArrayOf(5, 6),
    intArrayOf(7, 8)
)
val diff = A.mapIndexed { i, row -> row.mapIndexed { j, val -> val - B[i][j] } }
println(diff) // [[-4, -4], [-4, -4]]
```
== C++
```cpp
std::vector<std::vector<int>> A = {
    {1, 2},
    {3, 4}
};
std::vector<std::vector<int>> B = {
    {5, 6},
    {7, 8}
};
std::vector<std::vector<int>> diff(A.size(), std::vector<int>(A[0].size(), 0));
for (int i = 0; i < A.size(); i++) {
    for (int j = 0; j < A[0].size(); j++) {
        diff[i][j] = A[i][j] - B[i][j];
    }
}
```
== Python
```python
A = [
    [1, 2],
    [3, 4]
]
B = [
    [5, 6],
    [7, 8]
]
diff = [
    [A[i][j] - B[i][j] for j in range(len(A[0]))]
    for i in range(len(A))
]
print(diff)  # [[-4, -4], [-4, -4]]
```
== Rust
```rust
let a = [
    [1, 2],
    [3, 4],
];
let b = [
    [5, 6],
    [7, 8],
];

let diff: Vec<Vec<i32>> = a.iter()
    .zip(b.iter())
    .map(|(row_a, row_b)| {
        row_a.iter()
            .zip(row_b.iter())
            .map(|(val_a, val_b)| val_a - val_b)
            .collect()
    })
    .collect();
println!("{:?}", diff); // [[-4, -4], [-4, -4]]
```
:::


### Perkalian Matriks
Perkalian matriks adalah operasi matematika yang digunakan untuk menggabungkan dua matriks dengan cara mengalikan elemen-elemen yang sesuai. Hasil perkalian matriks adalah matriks baru yang memiliki jumlah baris yang sama dengan matriks pertama dan jumlah kolom yang sama dengan matriks kedua.

#### Aturan Perkalian Matriks

Berikut adalah aturan perkalian matriks:

*   Jumlah baris matriks pertama harus sama dengan jumlah kolom matriks kedua.
$$
A ^{m\times n} \times B^{n \times p}
$$
*   Hasil perkalian matriks adalah matriks baru dengan jumlah baris yang sama dengan matriks pertama dan jumlah kolom yang sama dengan matriks kedua.
$$
A ^{m\times n} \times B^{n \times p} = AB^{m \times p}
$$
*   Elemen-elemen hasil perkalian matriks dihitung dengan mengalikan elemen-elemen yang sesuai dari matriks pertama dan matriks kedua, kemudian menjumlahkan hasilnya.
$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23}
\end{bmatrix} \times
\begin{bmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22} \\
b_{31} & b_{32}
\end{bmatrix} =
\begin{bmatrix}
a_{11}*b_{11} + a_{12}*b_{21} + a_{13}*b_{31} & a_{11}*b_{12} + a_{12}*b_{22} + a_{13}*b_{32} \\
a_{21}*b_{11} + a_{22}*b_{21} + a_{23}*b_{31} & a_{21}*b_{12} + a_{22}*b_{22} + a_{23}*b_{32}
\end{bmatrix}
$$

#### Contoh dan implemetasi kode
Contoh soal perkalian matriks adalah sebagai berikut:

Diberikan dua matriks A dan B dengan ukuran 2x2 dan 2x3, masing-masing:

$$
A =
\begin{bmatrix}
2 & 3 \\
4 & 1
\end{bmatrix}
$$

$$
B =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
$$

Untuk menyelesaikan perkalian matriks diatas. Berikut langkah-langkahnya:

1. kalikan dan jumlahkan baris pertama matriks $A$ dengan kolom pertama matriks $B$.
$$
2\times1 + 3\times4 = 14
$$
2. kalikan dan jumlahkan baris pertama matriks $A$ dengan kolom kedua matriks $B$.
$$
2\times2 + 3\times5 = 19
$$
3. kalikan dan jumlahkan baris pertama matriks $A$ dengan kolom ketiga matriks $B$.
$$
2\times3 + 3\times6 = 24
$$
4. kalikan dan jumlahkan baris kedua matriks $A$ dengan kolom pertama matriks $B$.
$$
4\times1 + 1\times4 = 8
$$
5. kalikan dan jumlahkan baris kedua matriks $A$ dengan kolom kedua matriks $B$.
$$
4\times2 + 1\times5 = 13
$$
6. kalikan dan jumlahkan baris kedua matriks $A$ dengan kolom ketiga matriks $B$.
$$
4\times3 + 1\times6 = 18
$$
7. masukan semua elemen ke matriks baru.
$$
AB =
\begin{bmatrix}
14 & 19 & 24 \\
8 & 13 & 18
\end{bmatrix}
$$



Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:
:::tabs
== Javascript
```js
// Inisialisasi array untuk menyimpan hasil perkalian matriks.
const result = [];

// Inisialisasi kedua matriks.
const A = [
    [2, 3],
    [4, 1]
];

const B = [
    [1, 2, 3],
    [4, 5, 6]
];

for (let i = 0; i < A.length; i++) {
    // Inisialisasi array untuk menyimpan hasil perkalian baris matriks A dengan kolom matriks B.
    result[i] = [];

    // Iterasi kolom matriks B.
    for (let j = 0; j < B[0].length; j++) {
        // Inisialisasi variabel untuk menyimpan hasil perkalian baris matriks A dengan kolom matriks B.
        let sum = 0;

        // Iterasi kolom matriks A dan baris matriks B.
        for (let k = 0; k < A[0].length; k++) {
            // Lakukan perkalian elemen matriks A dengan elemen matriks B dan tambahkan hasilnya ke variabel sum.
            sum += A[i][k] * B[k][j];
        }

        // Simpan hasil perkalian baris matriks A dengan kolom matriks B ke array result.
        result[i][j] = sum;
    }
}

console.log(result);
```
== C++
```cpp
#include <iostream>
#include <vector>

int main() {
    // Inisialisasi kedua matriks
    std::vector<std::vector<int>> A = {
        {2, 3},
        {4, 1}
    };

    std::vector<std::vector<int>> B = {
        {1, 2, 3},
        {4, 5, 6}
    };

    // Inisialisasi array untuk menyimpan hasil perkalian matriks
    std::vector<std::vector<int>> result(A.size(), std::vector<int>(B[0].size(), 0));

    // Iterasi baris matriks A
    for (int i = 0; i < A.size(); i++) {
        // Iterasi kolom matriks B
        for (int j = 0; j < B[0].size(); j++) {
            // Inisialisasi variabel untuk menyimpan hasil perkalian baris matriks A dengan kolom matriks B
            int sum = 0;

            // Iterasi kolom matriks A dan baris matriks B
            for (int k = 0; k < A[0].size(); k++) {
                // Lakukan perkalian elemen matriks A dengan elemen matriks B dan tambahkan hasilnya ke variabel sum
                sum += A[i][k] * B[k][j];
            }

            // Simpan hasil perkalian baris matriks A dengan kolom matriks B ke array result
            result[i][j] = sum;
        }
    }

    // Tampilkan hasil perkalian matriks
    for (const auto& row : result) {
        for (int val : row) {
            std::cout << val << " ";
        }
        std::cout << std::endl;
    }

    return 0;
}
```
== Python
```py
# Inisialisasi kedua matriks
A = [
    [2, 3],
    [4, 1]
]

B = [
    [1, 2, 3],
    [4, 5, 6]
]

# Inisialisasi array untuk menyimpan hasil perkalian matriks
result = [[0 for _ in range(len(B[0]))] for _ in range(len(A))]

# Iterasi baris matriks A
for i in range(len(A)):
    # Iterasi kolom matriks B
    for j in range(len(B[0])):
        # Inisialisasi variabel untuk menyimpan hasil perkalian baris matriks A dengan kolom matriks B
        sum = 0

        # Iterasi kolom matriks A dan baris matriks B
        for k in range(len(A[0])):
            # Lakukan perkalian elemen matriks A dengan elemen matriks B dan tambahkan hasilnya ke variabel sum
            sum += A[i][k] * B[k][j]

        # Simpan hasil perkalian baris matriks A dengan kolom matriks B ke array result
        result[i][j] = sum

# Tampilkan hasil perkalian matriks
for row in result:
    for val in row:
        print(val, end=" ")
    print()

```
== Rust
```rust
let a = [
    [2, 3],
    [4, 1],
];
let b = [
    [1, 2, 3],
    [4, 5, 6],
];

let mut result = vec![vec![0; 3]; 2];
for i in 0..2 {
    for j in 0..3 {
        for k in 0..2 {
            result[i][j] += a[i][k] * b[k][j];
        }
    }
}

for row in result.iter() {
    for val in row.iter() {
        print!("{} ", val);
    }
    println!();
}
```
:::

Untuk bahasa pemrograman Python terdapat operator built-in untuk perkalian matriks yaitu dengan menggunakan simbol `@`. contohnya:
```py
# Inisialisasi kedua matriks
A = [
    [2, 3],
    [4, 1]
]

B = [
    [1, 2, 3],
    [4, 5, 6]
]

# Kalikan kedua matriks dengan @
result = A @ B

# Tampilkan hasil perkalian matriks
for row in result:
    for val in row:
        print(val, end=" ")
    print()
```

## Perkalian Skalar

Perkalian skalar adalah operasi yang dilakukan dengan mengalikan setiap elemen matriks dengan suatu bilangan skalar. Misalnya, jika kita memiliki matriks $A$ dan bilangan skalar $c$, maka perkalian skalar $c \cdot A$ adalah:

$$ c \cdot A = \begin{bmatrix} c \cdot a_{11} & c \cdot a_{12} & \cdots & c \cdot a_{1n} \\ c \cdot a_{21} & c \cdot a_{22} & \cdots & c \cdot a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ c \cdot a_{m1} & c \cdot a_{m2} & \cdots & c \cdot a_{mn} \end{bmatrix} $$

Disini setiap elemen matriks $A$ akan dikalikan dengan bilangan skalar $c$ ini akan menghasilkan matriks baru yang elemennya diperoleh dari perkalian skalar tersebut.

Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:

:::tabs
== JavaScript
```javascript
const A = [
    [1, 2],
    [3, 4]
];
const c = 2;
const scaled = A.map(row => row.map(val => c * val));
console.log(scaled); // [[2, 4], [6, 8]]
```
== Kotlin
```kotlin
val A = arrayOf(
    intArrayOf(1, 2),
    intArrayOf(3, 4)
)
val c = 2
val scaled = A.map { row -> row.map { val -> c * val } }
println(scaled) // [[2, 4], [6, 8]]
```
== C++
```cpp
std::vector<std::vector<int>> A = {
    {1, 2},
    {3, 4}
};
int c = 2;
std::vector<std::vector<int>> scaled(A.size(), std::vector<int>(A[0].size(), 0));
for (int i = 0; i < A.size(); i++) {
    for (int j = 0; j < A[0].size(); j++) {
        scaled[i][j] = c * A[i][j];
    }
}
```
== Python
```python
A = [
    [1, 2],
    [3, 4]
]
c = 2
scaled = [
    [c * val for val in row]
    for row in A
]
print(scaled)  # [[2, 4], [6, 8]]
```
== Rust
```rust
let a = [
    [1, 2],
    [3, 4],
];
let c = 2;

let scaled: Vec<Vec<i32>> = a.iter()
    .map(|row| {
        row.iter()
            .map(|&val| c * val)
            .collect()
    })
    .collect();
println!("{:?}", scaled); // [[2, 4], [6, 8]]
```
:::


## Transpose Matriks

Transpose matriks adalah operasi yang dilakukan dengan menukar baris dan kolom matriks. Jika kita memiliki matriks $A$ dengan ukuran $m \times n$, maka transpose dari matriks $A$ adalah matriks $A^T$ dengan ukuran $n \times m$. Transpose matriks dilambangkan dengan simbol $^T$. Misalnya, jika kita memiliki matriks $A$ sebagai berikut:

$$ A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} $$

Maka transpose dari matriks $A$ adalah:

$$ A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix} $$

Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:

:::tabs
== JavaScript
```javascript
const A = [
    [1, 2, 3],
    [4, 5, 6]
];
const transpose = A[0].map((_, i) => A.map(row => row[i]));
console.log(transpose); // [[1, 4], [2, 5], [3, 6]]
```
== Kotlin
```kotlin
val A = arrayOf(
    intArrayOf(1, 2, 3),
    intArrayOf(4, 5, 6)
)
val transpose = A[0].indices.map { i -> A.map { row -> row[i] } }
print(transpose) // [[1, 4], [2, 5], [3, 6]]
```
== C++
```cpp
std::vector<std::vector<int>> A = {
    {1, 2, 3},
    {4, 5, 6}
};
std::vector<std::vector<int>> transpose(A[0].size(), std::vector<int>(A.size(), 0));
for (int i = 0; i < A.size(); i++) {
    for (int j = 0; j < A[0].size(); j++) {
        transpose[j][i] = A[i][j];
    }
}
```
== Python
```python
A = [
    [1, 2, 3],
    [4, 5, 6]
]
transpose = [
    [row[i] for row in A]
    for i in range (len(A[0]))
]
print(transpose)  # [[1, 4], [2, 5], [3, 6]]
```
== Rust
```rust
let a = [
    [1, 2, 3],
    [4, 5, 6],
];

let transpose: Vec<Vec<i32>> = (0..3)
    .map(|i| {
        a.iter()
            .map(|row| row[i])
            .collect()
    })
    .collect();
println!("{:?}", transpose); // [[1, 4], [2, 5], [3, 6]]
```
:::

## Determinan Matriks

Determinan matriks adalah nilai skalar yang diperoleh dari operasi matematika pada matriks. Determinan matriks hanya dapat dihitung untuk matriks persegi (matriks yang memiliki jumlah baris dan kolom yang sama). Determinan matriks $A$ dengan ukuran $n \times n$ dilambangkan dengan $|A|$ atau $\text{det}(A)$.

Ada beberapa metode yang dapat digunakan untuk menghitung determinan matriks, antara lain:

### Metode Ekspansi Kofaktor

Metode ini adalah metode yang paling umum digunakan untuk menghitung determinan matriks. Metode ini melibatkan ekspansi kofaktor matriks. Untuk menghitung determinan matriks $A$ dengan ukuran $2 \times 2$, kita dapat menggunakan rumus berikut:

$$ |A| = a_{11} \cdot a_{22} - a_{12} \cdot a_{21} $$

Untuk matriks $3 \times 3$, kita dapat menggunakan rumus berikut:

$$ |A| = a_{11} \cdot |A_{11}| - a_{12} \cdot |A_{12}| + a_{13} \cdot |A_{13}| $$

Dimana $|A_{ij}|$ adalah determinan matriks $A$ setelah menghapus baris ke-$i$ dan kolom ke-$j$. Untuk matriks $n \times n$, kita dapat menggunakan rumus berikut:

$$ |A| = \sum_{j=1}^{n} (-1)^{1+j} \cdot a_{1j} \cdot |A_{1j}| $$

Dimana $|A_{1j}|$ adalah determinan matriks $A$ setelah menghapus baris pertama dan kolom ke-$j$.

Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:

:::tabs
== JavaScript
```javascript
const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function determinant(A) {
    if (A.length === 2) {
        return A[0][0] * A[1][1] - A[0][1] * A[1][0];
    } else {
        return A[0].reduce((acc, val, j) => acc + val * determinant(A.slice(1).map(row => row.filter((_, i) => i !== j)) * (-1) ** (1 + j), 0);
    }
}

console.log(determinant(A)); // 0
```

== Kotlin
```kotlin
val A = arrayOf(
    intArrayOf(1, 2, 3),
    intArrayOf(4, 5, 6),
    intArrayOf(7, 8, 9)
)

fun determinant(A: Array<IntArray>): Int {
    return if (A.size == 2) {
        A[0][0] * A[1][1] - A[0][1] * A[1][0]
    } else {
        A[0].foldIndexed(0) { j, acc, val -> acc + val * determinant(A.sliceArray(1).map { row -> row.filterIndexed { i, _ -> i != j } }) * (-1).toDouble().pow(1 + j).toInt() }
    }
}

println(determinant(A)) // 0
```

== C++
```cpp
#include <iostream>
#include <vector>
#include <cmath>

int determinant(std::vector<std::vector<int>> A) {
    if (A.size() == 2) {
        return A[0][0] * A[1][1] - A[0][1] * A[1][0];
    } else {
        int det = 0;
        for (int j = 0; j < A[0].size(); j++) {
            std::vector<std::vector<int>> submatrix;
            for (int i = 1; i < A.size(); i++) {
                submatrix.push_back(std::vector<int>());
                for (int k = 0; k < A[0].size(); k++) {
                    if (k != j) {
                        submatrix.back().push_back(A[i][k]);
                    }
                }
            }
            det += A[0][j] * determinant(submatrix) * pow(-1, 1 + j);
        }
        return det;
    }
}

int main() {
    std::vector<std::vector<int>> A = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    std::cout << determinant(A) << std::endl; // 0

    return 0;
}
```

== Python
```python
A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

def determinant(A):
    if len(A) == 2:
        return A[0][0] * A[1][1] - A[0][1] * A[1][0]
    else:
        return sum(A[0][j] * determinant([row[:j] + row[j + 1:] for row in A[1:]]) * (-1) ** (1 + j) for j in range(len(A[0])))

print(determinant(A))  # 0
```
== Rust
```rust
fn determinant(matrix: [Vec<i32>]) -> i32 {
    let n = matrix.len();
    if n == 2 {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    let mut det = 0;
    for (j, &val) in matrix[0].iter().enumerate() {
        let sub_matrix: Vec<Vec<i32>> = matrix[1..]
            .iter()
            .map(|row| {
                row.iter()
                    .enumerate()
                    .filter(|&(i, _)| i != j)
                    .map(|(_, &x)| x)
                    .collect()
            })
            .collect();
        det += val * determinant(&sub_matrix) * if j % 2 == 0 { 1 } else { -1 };
    }

    det
}

fn main() {
    let a = vec![
        vec![1, 2, 3],
        vec![4, 5, 6],
        vec![7, 8, 9],
    ];
    println!("{}", determinant(a)); // 0
}
```
:::

### Metode Reduksi Baris

Metode ini adalah metode lain yang dapat digunakan untuk menghitung determinan matriks. Metode ini melibatkan operasi baris elementer untuk mengubah matriks menjadi matriks segitiga atas atau segitiga bawah. Untuk matriks segitiga atas atau segitiga bawah, determinan matriks adalah hasil perkalian elemen diagonal utama. Jika matriks telah direduksi menjadi matriks segitiga atas atau segitiga bawah, maka determinan matriks dapat dihitung dengan rumus berikut:

$$ |A| = a_{11} \cdot a_{22} \cdot \ldots \cdot a_{nn} $$

Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:

:::tabs
== JavaScript
```javascript
const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function determinant(A) {
    let det = 1;
    for (let i = 0; i < A.length; i++) {
        det *= A[i][i];
    }
    return det;
}

console.log(determinant(A)); // 0
```
== Kotlin
```kotlin
val A = arrayOf(
    intArrayOf(1, 2, 3),
    intArrayOf(4, 5, 6),
    intArrayOf(7, 8, 9)
)

fun determinant(A: Array<IntArray>): Int {
    var det = 1
    for (i in A.indices) {
        det *= A[i][i]
    }
    return det
}

println(determinant(A)) // 0
```
== C++
```cpp
#include <iostream>
#include <vector>

int determinant(std::vector<std::vector<int>> A) {
    int det = 1;
    for (int i = 0; i < A.size(); i++) {
        det *= A[i][i];
    }
    return det;
}

int main() {
    std::vector<std::vector<int>> A = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    std::cout << determinant(A) << std::endl; // 0

    return 0;
}
```
== Python
```python
A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

def determinant(A):
    det = 1
    for i in range(len(A)):
        det *= A[i][i]
    return det

print(determinant(A))  # 0
```
== Rust
```rust
fn determinant(matrix: [Vec<i32>]) {
    let mut det = 1;
    for i in 0..matrix.len() {
        det *= matrix[i][i];
    }
    det
}

fn main() {
    let a = vec![
        vec![1, 2, 3],
        vec![4, 5, 6],
        vec![7, 8, 9],
    ];
    println!("{}", determinant(a)); // 0
}
```
:::

## Invers Matriks

Invers matriks adalah matriks yang jika dikalikan dengan matriks aslinya akan menghasilkan matriks identitas. Invers matriks hanya dapat dihitung untuk matriks non-singular (matriks yang memiliki determinan tidak nol). Invers matriks dari matriks $A$ dilambangkan dengan $A^{-1}$. Ada beberapa metode yang dapat digunakan untuk menghitung invers matriks, antara lain:

### Metode Adjoin

Metode ini adalah metode yang paling umum digunakan untuk menghitung invers matriks. Metode ini melibatkan kofaktor dan matriks adjoin. Untuk menghitung invers matriks $A$, kita dapat menggunakan rumus berikut:

$$ A^{-1} = \frac{1}{|A|} \cdot \text{adj}(A) $$

Dimana $|A|$ adalah determinan matriks $A$ dan $\text{adj}(A)$ adalah matriks adjoin dari matriks $A$. Matriks adjoin dari matriks $A$ adalah matriks yang elemennya adalah kofaktor dari matriks $A$ yang telah di-transpose. Kofaktor dari matriks $A$ adalah determinan matriks $A$ setelah menghapus baris dan kolom yang bersangkutan.

Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:

:::tabs
== JavaScript
```javascript
const A = [
    [1, 2],
    [3, 4]
];

function determinant(A) {
    return A[0][0] * A[1][1] - A[0][1] * A[1][0];
}

function cofactor(A, i, j) {
    return A[1 - i][1 - j];
}

function adjoint(A) {
    return [
        [cofactor(A, 0, 0), -cofactor(A, 0, 1)],
        [-cofactor(A, 1, 0), cofactor(A, 1, 1)]
    ];
}

function inverse(A) {
    const det = determinant(A);
    const adj = adjoint(A);
    return adj.map(row => row.map(val => val / det));
}

console.log(inverse(A)); // [[-2, 1], [1.5, -0.5]]
```
== Kotlin
```kotlin
val A = arrayOf(
    intArrayOf(1, 2),
    intArrayOf(3, 4)
)

fun determinant(A: Array<IntArray>): Int {
    return A[0][0] * A[1][1] - A[0][1] * A[1][0]
}

fun cofactor(A: Array<IntArray>, i: Int, j: Int): Int {
    return A[1 - i][1 - j]
}

fun adjoint(A: Array<IntArray>): Array<IntArray> {
    return arrayOf(
        intArrayOf(cofactor(A, 0, 0), -cofactor(A, 0, 1)),
        intArrayOf(-cofactor(A, 1, 0), cofactor(A, 1, 1))
    )
}

fun inverse(A: Array<IntArray>): Array<DoubleArray> {
    val det = determinant(A)
    val adj = adjoint(A)
    return adj.map { row -> row.map { val -> val / det.toDouble() }.toDoubleArray() }.toTypedArray()
}

println(inverse(A).contentDeepToString()) // [[-2.0, 1.0], [1.5, -0.5]]
```
== C++
```cpp
#include <iostream>
#include <vector>

int determinant(std::vector<std::vector<int>> A) {
    return A[0][0] * A[1][1] - A[0][1] * A[1][0];
}

int cofactor(std::vector<std::vector<int>> A, int i, int j) {
    return A[1 - i][1 - j];
}

std::vector<std::vector<int>> adjoint(std::vector<std::vector<int>> A) {
    return {
        {cofactor(A, 0, 0), -cofactor(A, 0, 1)},
        {-cofactor(A, 1, 0), cofactor(A, 1, 1)}
    };
}

std::vector<std::vector<double>> inverse(std::vector<std::vector<int>> A) {
    int det = determinant(A);
    auto adj = adjoint(A);
    return {
        {adj[0][0] / det, adj[0][1] / det},
        {adj[1][0] / det, adj[1][1] / det}
    };
}

int main() {
    std::vector<std::vector<int>> A = {
        {1, 2},
        {3, 4}
    };

    auto inv = inverse(A);
    for (const auto& row : inv) {
        for (double val : row) {
            std::cout << val << " ";
        }
        std::cout << std::endl;
    }

    return 0;
}
```
== Rust
```rust
fn determinant(matrix: &[Vec<f32>]) -> f32 {
    matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
}

fn cofactor(matrix: &[Vec<f32>], i: usize, j: usize) -> f32 {
    matrix[1 - i][1 - j]
}

fn adjoint(matrix: &[Vec<f32>]) -> Vec<Vec<f32>> {
    vec![
        vec![cofactor(&matrix, 0, 0), -cofactor(&matrix, 0, 1)],
        vec![-cofactor(&matrix, 1, 0), cofactor(&matrix, 1, 1)],
    ]
}

fn inverse(matrix: &[Vec<f32>]) -> Vec<Vec<f32>> {
    let det = determinant(&matrix);
    let adj = adjoint(&matrix);
    adj.iter()
        .map(|row| row.iter()
            .map(|&val| val / det)
            .collect())
        .collect()
}

fn main() {
    let a = vec![
        vec![1.0, 2.0],
        vec![3.0, 4.0],
    ];
    let hasil = inverse(&a);
    println!("{:?}", hasil); // [[-2.0, 1.0], [1.5, -0.5]]
}
```
:::

### Metode Eliminasi Gauss-Jordan

Metode ini adalah metode lain yang dapat digunakan untuk menghitung invers matriks. Metode ini melibatkan eliminasi Gauss-Jordan untuk mengubah matriks menjadi matriks identitas. Jika matriks telah direduksi menjadi matriks identitas, maka matriks yang dihasilkan adalah invers dari matriks asli. Rumus umum untuk menghitung invers matriks menggunakan metode eliminasi Gauss-Jordan adalah sebagai berikut:

$$ [A | I] \rightarrow [I | A^{-1}] $$

Dimana $[A | I]$ adalah matriks gabungan dari matriks $A$ dan matriks identitas, dan $[I | A^{-1}]$ adalah matriks gabungan dari matriks identitas dan invers matriks $A$.

Jika diimplementasikan dalam kode, maka hasilnya adalah seperti ini:

:::tabs
== JavaScript
```javascript
const A = [
    [1, 2],
    [3, 4]
];

function inverse(A) {
    const n = A.length;
    const I = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i === j ? 1 : 0));
    const AI = A.map((row, i) => row.concat(I[i]));

    for (let i = 0; i < n; i++) {
        const pivot = AI[i][i];
        for (let j = 0; j < 2 * n; j++) {
            AI[i][j] /= pivot;
        }
        for (let k = 0; k < n; k++) {
            if (k !== i) {
                const factor = AI[k][i];
                for (let j = 0; j < 2 * n; j++) {
                    AI[k][j] -= factor * AI[i][j];
                }
            }
        }
    }

    return AI.map(row => row.slice(n));
}

console.log(inverse(A)); // [[-2, 1], [1.5, -0.5]]
```
== Kotlin
```kotlin
val A = arrayOf(
    intArrayOf(1, 2),
    intArrayOf(3, 4)
)

fun inverse(A: Array<IntArray>): Array<DoubleArray> {
    val n = A.size
    val I = Array(n) { i -> DoubleArray(n) { j -> if (i == j) 1.0 else 0.0 } }
    val AI = A.mapIndexed { i, row -> row.map { it.toDouble() }.toDoubleArray() + I[i] }

    for (i in AI.indices) {
        val pivot = AI[i][i]
        for (j in AI[i].indices) {
            AI[i][j] /= pivot
        }
        for (k in AI.indices) {
            if (k != i) {
                val factor = AI[k][i]
                for (j in AI[k].indices) {
                    AI[k][j] -= factor * AI[i][j]
                }
            }
        }
    }

    return AI.map { row -> row.sliceArray(n) }
}

println(inverse(A).contentDeepToString()) // [[-2.0, 1.0], [1.5, -0.5]]
```
== C++
```cpp
#include <iostream>
#include <vector>

std::vector<std::vector<double>> inverse(std::vector<std::vector<int>> A) {
    int n = A.size();
    std::vector<std::vector<double>> I(n, std::vector<double>(n, 0));
    for (int i = 0; i < n; i++) {
        I[i][i] = 1;
    }
    std::vector<std::vector<double>> AI(n, std::vector<double>(2 * n, 0));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            AI[i][j] = A[i][j];
        }
        AI[i][n + i] = 1;
    }

    for (int i = 0; i < n; i++) {
        double pivot = AI[i][i];
        for (int j = 0; j < 2 * n; j++) {
            AI[i][j] /= pivot;
        }
        for (int k = 0; k < n; k++) {
            if (k != i) {
                double factor = AI[k][i];
                for (int j = 0; j < 2 * n; j++) {
                    AI[k][j] -= factor * AI[i][j];
                }
            }
        }
    }

    std::vector<std::vector<double>> inv(n, std::vector<double>(n, 0));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            inv[i][j] = AI[i][n + j];
        }
    }

    return inv;
}

int main() {
    std::vector<std::vector<int>> A = {
        {1, 2},
        {3, 4}
    };

    auto inv = inverse(A);
    for (const auto& row : inv) {
        for (double val : row) {
            std::cout << val << " ";
        }
        std::cout << std::endl;
    }

    return 0;
}
```
== Rust
```rust
fn inverse(a: Vec<Vec<i32>>) -> Vec<Vec<f64>> {
    let n = a.len();
    let mut ai: Vec<Vec<f64>> = a.iter()
        .enumerate()
        .map(|(i, row)| {
            let mut r: Vec<f64> = row.iter().map(|&x| x as f64).collect();
            r.append(&mut (0..n).map(|j| if i == j { 1.0 } else { 0.0 }).collect());
            r
        })
        .collect();

    for i in 0..n {
        let pivot = ai[i][i];
        for j in 0..ai[i].len() {
            ai[i][j] /= pivot;
        }
        for k in 0..n {
            if k != i {
                let factor = ai[k][i];
                for j in 0..ai[k].len() {
                    ai[k][j] -= factor * ai[i][j];
                }
            }
        }
    }

    ai.iter().map(|row| row[n..].to_vec()).collect()
}

fn main() {
    let a = vec![vec![1, 2], vec![3, 4]];
    let result = inverse(a);
    println!("{:?}", result); // [[-2.0, 1.0], [1.5, -0.5]]
}
```
:::
