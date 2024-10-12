# Transformasi Linear

Transformasi linear adalah aturan yang memetakan setiap vektor dalam satu ruang vektor ke vektor lain dalam ruang vektor yang mungkin berbeda, dengan tetap mempertahankan operasi penambahan vektor dan perkalian skalar. Dengan kata lain, transformasi linear adalah fungsi yang mengambil vektor sebagai input dan menghasilkan vektor sebagai output, tunduk pada batasan berikut:

* **Aditivitas**: Tranformasi yang diterapkan pada penjumlahan dua vektor menghasilkan hasil yang sama dengan penjumlahan hasil transformasi pada masing-masing vektor.
$$
\mathbf{T}(\mathbf{u} + \mathbf{v}) = \mathbf{T}(\mathbf{u}) + \mathbf{T}(\mathbf{v})
$$
*  **Homogenitas**: Transformasi yang diterapkan pada kelipatan skalar dari suatu vektor sama dengan kelipatan skalar dari transformasi yang diterapkan pada vektor tersebut.
$$
\mathbf{T}(c\mathbf{u}) = c\mathbf{T}(\mathbf{u})
$$

## Jenis-Jenis Transformasi Linear

Transformasi linear dapat digunakan untuk mengubah sebuah vektor menjadi vektor lain, seperti memperbesar, mengecilkan, atau bahkan mengubah rotasi vektor tersebut. Berikut adalah beberapa jenis transformasi linear:

### 1. Scalling

Kita dapat menggunakan scalar untuk memperbesar atau memperkecil vektor.
$$
\mathbf{u}= \begin{pmatrix}i \\ j \end{pmatrix}
$$
$$
\mathbf{T}(c\mathbf{u})= c \begin{pmatrix}i \\ j \end{pmatrix} = \begin{pmatrix}i \cdot c \\ j \cdot c \end{pmatrix}
$$

Bisa diimplementasikan menjadi program, seperti berikut:
:::tabs
== Javascript
``` js
function scalling(vector, scalar) {
    let result = [];
    for (let i = 0; i < vector.length; i++) {
        result.push(vector[i] * scalar);
    }
    return result;
}

// contoh penggunaan
let vector = [2, 3];
let scalar = 2;
let result = scalling(vector, scalar);
console.log(result); // output: [4, 6]
```
== C++
``` cpp
#include <iostream>
#include <cmath>

void scalling(double vector[], double scalar) {
    double hasilVector[sizeof(vector) / sizeof(vector[0])];
    for (int i = 0; i < sizeof(vector) / sizeof(vector[0]); i++) {
        hasilVector[i] = vector[i] * scalar;
    }
    std::cout << "Hasil dari scalling vektor [" << vector[0] << ", " << vector[1] << "] dengan scalar " << scalar << " adalah [" << hasilVector[0] << ", " << hasilVector[1] << "]" << std::endl;
}


int main() {
    double vector[] = {2, 3};
    double scalar = 2;
    
    scalling(vector, scalar); // Output: [4, 6]
    return 0;
}
```
== Python
``` py
def scalling(vector, scalar):
    hasil = []
    for i in range(len(vector)):
        hasil.append(vector[i] * scalar)
    return hasil

# contoh penggunaan
vector = [2, 3]
scalar = 2
result = scalling(vector, scalar)
print(result)  # output: [4, 6]
```
:::


### 2. Rotasi

Kita dapat merotasikan vektor dengan cara mengalikan vektor tersebut dengan matriks rotasi $R(\theta)$, dengan $\theta$ adalah sudut rotasi vektor tersebut. 
$$
R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}
$$
$$
R(\theta)u = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}  \begin{pmatrix}i \\ j \end{pmatrix}= \begin{pmatrix} i\cos\theta - j\sin\theta \\ i\sin\theta + j\cos\theta \end{pmatrix}
$$
Bisa diimplementasikan menjadi program, seperti berikut:
:::tabs
== Javascript
``` js
function rotasi(vector, theta) {
    // Inisialisasi array untuk menyimpan hasil rotasi
    let hasil = [];
    
    // Hitung cosinus dan sinus dari sudut theta
    let cosTheta = Math.cos(theta);
    let sinTheta = Math.sin(theta);
    
    // Lakukan perhitungan rotasi untuk komponen i dan j
    hasil.push(vector[0] * cosTheta - vector[1] * sinTheta); // Komponen i
    hasil.push(vector[0] * sinTheta + vector[1] * cosTheta); // Komponen j
    
    // Return hasil rotasi
    return hasil;
}

// contoh penggunaan
let vector = [2, 3];
let theta = Math.PI / 2; // 90 derajat
let result = rotasi(vector, theta);
console.log(result);
```
== Python
``` py
import math

def rotasi(vector, theta):
    # Inisialisasi array untuk menyimpan hasil rotasi
    hasil = []
    
    # Hitung cosinus dan sinus dari sudut theta
    cosTheta = math.cos(theta)
    sinTheta = math.sin(theta)
    
    # Lakukan perhitungan rotasi untuk komponen i dan j
    hasil.append(vector[0] * cosTheta - vector[1] * sinTheta) # Komponen i
    hasil.append(vector[0] * sinTheta + vector[1] * cosTheta) # Komponen j
    
    # Return hasil rotasi
    return hasil

# contoh penggunaan
vector = [2, 3]
theta = math.pi / 2 # 90 derajat
result = rotasi(vector, theta)
print(result)

```
== C++
``` cpp
#include <iostream>
#include <cmath>

void rotasi(double vector[], double theta, double hasil[]) {
    // Hitung cosinus dan sinus dari sudut theta
    double cosTheta = std::cos(theta);
    double sinTheta = std::sin(theta);
    
    // Lakukan perhitungan rotasi untuk komponen i dan j
    hasil[0] = vector[0] * cosTheta - vector[1] * sinTheta; // Komponen i
    hasil[1] = vector[0] * sinTheta + vector[1] * cosTheta; // Komponen j
}

int main() {
    double vector[] = {2, 3};
    double theta = M_PI / 2; // 90 derajat
    double result[2];
    
    rotasi(vector, theta, result);
    std::cout << "(" << result[0] << ", " << result[1] << ")" << std::endl;
    
    return 0;
}
```
:::

### 3. Penggeseran

Kita dapat melakukan shearing untuk membuat vektor tegeser seolah-olah terdistorsi dengan cara mengalikan vektor tersebut dengan matriks shearing $S(a, b)$, dengan $a$ dan $b$ adalah parameter shearing, ubah $b$ menjadi 0 untuk penggeseran secara horizontal atau ubah $a$ menjadi 0 untuk penggeseran secara vertikal, atau dapat menggabungkannya. 
$$
S(a, b) = \begin{pmatrix} 1 & a \\ b & 1 \end{pmatrix}
$$
$$
S(a, b)u = \begin{pmatrix} 1 & a \\ b & 1 \end{pmatrix}  \begin{pmatrix}i \\ j \end{pmatrix}= \begin{pmatrix} i + aj \\ bi + j \end{pmatrix}
$$
Bisa diimplementasikan menjadi program, seperti berikut:
:::tabs
== Javascript
``` js
function geser(vector, a, b) {
    // Hitung hasil penggeseran
    let hasil = [vector[0] * 1 + a * vector[1], b * vector[0] + vector[1] * 1];
    return hasil;
}

// contoh penggunaan
vector = [2, 3];
a = 1; // parameter shearing horizontal
b = 0; // parameter shearing vertikal
result = geser(vector, a, b);
console.log(result);
```
== Python
``` py
def geser(vector, a, b):
    # Hitung hasil penggeseran
    hasil = [vector[0] * 1 + a * vector[1], b * vector[0] + vector[1] * 1]
    return hasil

# contoh penggunaan
vector = [2, 3]
a = 1  # parameter shearing horizontal
b = 0  # parameter shearing vertikal
result = geser(vector, a, b)
print(result)
```
== C++
``` cpp
#include <iostream>
#include <vector>

std::vector<double> geser(const std::vector<double>& vector, double a, double b) {
    // Hitung hasil penggeseran
    std::vector<double> hasil = {vector[0] * 1 + a * vector[1], b * vector[0] + vector[1] * 1};
    return hasil;
}

int main() {
    // contoh penggunaan
    std::vector<double> vector = {2, 3};
    double a = 1; // parameter shearing horizontal
    double b = 0; // parameter shearing vertikal
    std::vector<double> result = geser(vector, a, b);
    std::cout << "(" << result[0] << ", " << result[1] << ")" << std::endl;
    return 0;
}
```
:::


### 4. Refleksi

Kita dapat melakukan refleksi untuk membuat vektor terlihat seperti cerminan dengan cara mengalikan vektor tersebut dengan matriks refleksi $F(x, y)$, dengan $x$ dan $y$ adalah parameter refleksi, ubah $x$ menjadi -1 untuk refleksi secara horizontal atau ubah $y$ menjadi -1 untuk refleksi secara vertikal, atau dapat menggabungkannya. 

* Refleksi terhadap sumbu x :
$$
R_xu = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \begin{pmatrix}i \\ j\end{pmatrix} = \begin{pmatrix} i \\ -j \end{pmatrix}
$$
* Refleksi terhadap sumbu y :
$$
R_yu = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix}i \\ j\end{pmatrix} = \begin{pmatrix} -i \\ j \end{pmatrix}
$$
Bisa diimplementasikan menjadi program, seperti berikut:
:::tabs
== Javascript
``` js
function refleksi(vector, terhadap) {
    let hasil;
    if (terhadap === "x") {
        hasil = [vector[0], -vector[1]];
    } else if (terhadap === "y") {
        hasil = [-vector[0], vector[1]];
    return hasil;
}

// contoh penggunaan
let vector = [2, 3];
let result = refleksi(vector, "x"); // atau refleksi(vector, "y") untuk refleksi terhadap y
console.log(result);

```
== Python
``` py
def refleksi(vector, terhadap):
    hasil;
    if (terhadap == "x"):
        hasil = [vector[0], -vector[1]]
    elif (terhadap == "y"):
        hasil = [-vector[0], vector[1]]
    return hasil

# contoh penggunaan
vector = [2, 3]
result = refleksi(vector, "x")  # atau refleksi(vector, "y") untuk refleksi terhadap y
print(result)
```
== C++
``` cpp
#include <iostream>

void refleksi(double vector[], double terhadap[], double hasil[]) {
    if (terhadap[0] == 1) {
        hasil[0] = vector[0];
        hasil[1] = -vector[1];
    } else if (terhadap[0] == 2) {
        hasil[0] = -vector[0];
        hasil[1] = vector[1];
    }
}

int main() {
    double vector[] = {2, 3};
    double terhadap[] = {1}; // 1 untuk refleksi terhadap x, 2 untuk refleksi terhadap y
    double hasil[2];
    
    refleksi(vector, terhadap, hasil);
    
    std::cout << "Hasil refleksi vektor [" << vector[0] << ", " << vector[1] << "] terhadap ";
    if (terhadap[0] == 1) {
        std::cout << "x adalah [" << hasil[0] << ", " << hasil[1] << "]" << std::endl;
    } else if (terhadap[0] == 2) {
        std::cout << "y adalah [" << hasil[0] << ", " << hasil[1] << "]" << std::endl;
    }
    
    return 0;
}
```
:::

::: info
Sebenarnya semua jenis-jenis yang disebutkan merupakan sedikit gambaran dari transformasi linear karena transformasi linear dapat bebas dilakukan dengan membuat matriks transformasi sendiri selama masih mematuhi aturan Aditivitas dan Homogenitas serta aturan Perkalian matriks. 
:::

---
Rijal  
Instagram :[ ri.jalll ](https://www.instagram.com/ri.jalll)  
Facebook: [ Rijal ](https://www.facebook.com/24rijal)

---

