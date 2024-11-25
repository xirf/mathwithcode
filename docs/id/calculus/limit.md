# Limit Fungsi

Limit adalah suatu nilai yang didekati oleh suatu fungsi ketika fungsi diberi input yang juga mendekati suatu nilai tertentu. Limit biasa didefinisikan dengan

$$\begin{align*}
    \lim_{x \to a} f(x) = L
\end{align*}$$

Dengan memahami konsep limit, kita bisa dapat mudah untuk  mengetahui perilaku sebuah fungsi pada titik-titik tertentu. Kita dapat mengetahui suatu fungsi tersebut apakah bersifat kontinu, tidak kontinu, atau diferensiabel.

## Cara menentukan limit
Misalnya terdapat sebuah fungsi $f(x) = x+3$ dan kita ingin mengetahui nilai limit disekitar nilai $x=3$. Nilai limit bisa didapat dengan menghitung nilai suatu fungsi dari beberapa nilai input $x$ dari "kanan" dan/atau dari "kiri"
 <iframe src="https://www.desmos.com/calculator/2cirqrpari?embed" width="400" height="400" style="border: 1px solid #ccc" frameborder=0></iframe>


| Kiri                | Kanan               |
| --------------------|---------------------|
|$f(2.9) = 5.9$       | $f(3.1) = 6.1$      |
|$f(2.99) = 5.99$     | $f(3.01) = 6.01$    |
|$f(2.99) = 5.999$    | $f(3.001) = 6.001$  |
| ...                 | ...                 |

atau dengan menggunakan kode program:
:::tabs key:lang
== Javascript
```js
function f(x){
    return x+3;
}

function calculateLimit(point){
    //dari kanan
    for(let i = 1; i<=10;i++){
        let y = f(point+1/(10**i));
        console.log(`f(${point+1/(10**i)})=${y}`);
    }
    //dari kiri
    for(let i = 1; i<=10;i++){
        let y = f(point-1/(10**i));
        console.log(`f(${point-1/(10**i)})=${y}`);
    }
}
calculateLimit(3);

```
== Kotlin
```kt
fun f(x: Double): Double {
    return x + 3
}

fun calculateLimit(point: Double) {
    // dari kanan
    println("Mencari limit dari arah kanan:")
    for (i in 1..10) {
        val y = f(point + 1 / Math.pow(10.0, i.toDouble()))
        println("f(${point + 1 / Math.pow(10.0, i.toDouble())}) = $y")
    }

    // dari kiri
    println("Mencari limit dari arah kiri:")
    for (i in 1..10) {
        val y = f(point - 1 / Math.pow(10.0, i.toDouble()))
        println("f(${point - 1 / Math.pow(10.0, i.toDouble())}) = $y")
    }
}

fun main() {
    calculateLimit(3.0)
}

```
== C++
```cpp
#include <iostream>
#include <cmath>

double f(double x) {
    return x + 3;
}

void calculateLimit(double point) {
    // dari kanan
    std::cout << "Mencari limit dari arah kanan:" << std::endl;
    for (int i = 1; i <= 10; i++) {
        double y = f(point + 1 / std::pow(10, i));
        std::cout << "f(" << (point + 1 / std::pow(10, i)) << ") = " << y << std::endl;
    }

    // dri kiri
    std::cout << "Mencari limit dari arah kiri:" << std::endl;
    for (int i = 1; i <= 10; i++) {
        double y = f(point - 1 / std::pow(10, i));
        std::cout << "f(" << (point - 1 / std::pow(10, i)) << ") = " << y << std::endl;
    }
}

int main() {
    calculateLimit(3.0);
    return 0;
}

```
== Python
```python
def f(x):
    return x + 3

def calculate_limit(point):
    # dari kanan
    print("Mencari limit dari arah kanan:")
    for i in range(1, 11):
        y = f(point + 1 / (10 ** i))
        print(f"f({point + 1 / (10 ** i)}) = {y}")

    # dari kiri
    print("Mencari limit dari arah kiri:")
    for i in range(1, 11):
        y = f(point - 1 / (10 ** i))
        print(f"f({point - 1 / (10 ** i)}) = {y}")

# Run the calculation
calculate_limit(3)
```
== Rust
```rust
fn f(x: f64) -> f64 {
    x + 3.0
}

fn calculate_limit(point: f64) {
    // Dari kanan
    println!("Mencari limit dari arah kanan:");
    for i in 1..=10 {
        let y = f(point + 1.0 / 10f64.powi(i));
        println!("f({}) = {}", point + 1.0 / 10f64.powi(i), y);
    }

    // Dari kiri
    println!("Mencari limit dari arah kiri:");
    for i in 1..=10 {
        let y = f(point - 1.0 / 10f64.powi(i));
        println!("f({}) = {}", point - 1.0 / 10f64.powi(i), y);
    }
}

fn main() {
    calculate_limit(3.0);
}
```
:::

Baik dari kiri maupun kanan, semua nilai fungsi mendekati nilai $6$. Dengan begitu nilai limit dari fungsi disekitar pada $x=3$ adalah $6$. Sekilas hasilnya identik dengan ketika kita langsung memberi input $x=3$ pada fungsi tersebut. Namun terdapat satu keunikan yaitu limit dari suatu fungsi dapat tetap dihitung walaupun fungsi tersebut tidak terdefinisi di titik yang ditentukan. Sebagai contoh, ambil sebuah fungsi yang mirip dengan $f(x)=x+3$,
yakni $g(x)=\frac{x^2-9}{x-3}$

<iframe src="https://www.desmos.com/calculator/hnezdurbof?embed" width="400" height="400" style="border: 1px solid #ccc" frameborder=0></iframe>

(coba klik posisi $x=3$) terlihat fungsi tersebut memiliki grafik yang identik dengan $f(x)=x+3$ namun pada nilai $x=3$ fungsi menjadi tidak terdefinisi. Begitupun jika kita hitung nilai limitnya pada titik tersebut
| Kiri                | Kanan               |
| --------------------|---------------------|
|$f(2.9) = 5.9$       | $f(3.1) = 6.1$      |
|$f(2.99) = 5.99$     | $f(3.01) = 6.01$    |
|$f(2.99) = 5.999$    | $f(3.001) = 6.001$  |
| ...                 | ...                 |

kode program:
:::tabs key:lang
== Javascript
```js
function f(x){
    return (x**2-9)/(x-3);
}

function calculateLimit(point){
    //dari kanan
    for(let i = 1; i<=10;i++){
        let y = f(point+1/(10**i));
        console.log(`f(${point+1/(10**i)})=${y}`);
    }
    //dari kiri
    for(let i = 1; i<=10;i++){
        let y = f(point-1/(10**i));
        console.log(`f(${point-1/(10**i)})=${y}`);
    }
}
calculateLimit(3);

```
== Kotlin
```kt
fun f(x: Double): Double {
    return (x**2-9)/(x-3)
}

fun calculateLimit(point: Double) {
    // dari kanan
    println("Mencari limit dari arah kanan:")
    for (i in 1..10) {
        val y = f(point + 1 / Math.pow(10.0, i.toDouble()))
        println("f(${point + 1 / Math.pow(10.0, i.toDouble())}) = $y")
    }

    // dari kiri
    println("Mencari limit dari arah kiri:")
    for (i in 1..10) {
        val y = f(point - 1 / Math.pow(10.0, i.toDouble()))
        println("f(${point - 1 / Math.pow(10.0, i.toDouble())}) = $y")
    }
}

fun main() {
    calculateLimit(3.0)
}

```
== C++
```cpp
#include <iostream>
#include <cmath>

double f(double x) {
    return (x**2-9)/(x-3);
}

void calculateLimit(double point) {
    // dari kanan
    std::cout << "Mencari limit dari arah kanan:" << std::endl;
    for (int i = 1; i <= 10; i++) {
        double y = f(point + 1 / std::pow(10, i));
        std::cout << "f(" << (point + 1 / std::pow(10, i)) << ") = " << y << std::endl;
    }

    // dri kiri
    std::cout << "Mencari limit dari arah kiri:" << std::endl;
    for (int i = 1; i <= 10; i++) {
        double y = f(point - 1 / std::pow(10, i));
        std::cout << "f(" << (point - 1 / std::pow(10, i)) << ") = " << y << std::endl;
    }
}

int main() {
    calculateLimit(3.0);
    return 0;
}

```
== Python
```python
def f(x):
    return (x**2-9)/(x-3)

def calculate_limit(point):
    # dari kanan
    print("Mencari limit dari arah kanan:")
    for i in range(1, 11):
        y = f(point + 1 / (10 ** i))
        print(f"f({point + 1 / (10 ** i)}) = {y}")

    # dari kiri
    print("Mencari limit dari arah kiri:")
    for i in range(1, 11):
        y = f(point - 1 / (10 ** i))
        print(f"f({point - 1 / (10 ** i)}) = {y}")

# Run the calculation
calculate_limit(3)
```
== Rust
```rust
fn f(x: f64) -> f64 {
    (x.powi(2) - 9.0) / (x - 3.0)
}

fn calculate_limit(point: f64) {
    // Dari kanan
    println!("Mencari limit dari arah kanan:");
    for i in 1..=10 {
        let y = f(point + 1.0 / 10f64.powi(i));
        println!("f({}) = {}", point + 1.0 / 10f64.powi(i), y);
    }

    // Dari kiri
    println!("Mencari limit dari arah kiri:");
    for i in 1..=10 {
        let y = f(point - 1.0 / 10f64.powi(i));
        println!("f({}) = {}", point - 1.0 / 10f64.powi(i), y);
    }
}

fn main() {
    calculate_limit(3.0);
}
```
:::
dengan begitu kita bisa mengetahui bahwa nilai limit sebenarnya tidak dipengaruhi oleh nilai suatu fungsi pada titik dimana kita menghitung limitnya.
