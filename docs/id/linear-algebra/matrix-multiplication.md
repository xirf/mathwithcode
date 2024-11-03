---
contributors:
  - name: "Rijal"
    username: "Rnov24"
---
# Perkalian Matriks
Perkalian matriks adalah operasi matematika yang digunakan untuk menggabungkan dua matriks dengan cara mengalikan elemen-elemen yang sesuai. Hasil perkalian matriks adalah matriks baru yang memiliki jumlah baris yang sama dengan matriks pertama dan jumlah kolom yang sama dengan matriks kedua.

## Aturan Perkalian Matriks

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

## Contoh dan implemetasi kode
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

---
Rijal  
Instagram :[ ri.jalll ](https://www.instagram.com/ri.jalll)  
Facebook: [ Rijal ](https://www.facebook.com/24rijal)

---



