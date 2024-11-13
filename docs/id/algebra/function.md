---
contributors:
  - name: "Anka Tama"
    username: "xirf"
---
# Fungsi

Dalam matematika fungsi aljabar merupakan suatu notasi yang menghubungkan dua himpunan bilangan. Fungsi ini biasanya ditulis dalam bentuk $f(x) = y$ dimana $f$ adalah fungsi, $x$ adalah input, dan $y$ adalah output.

Fungsi aljabar memiliki konsep yang mirip dengan fungsi yang ada di pemrograman dimana keduanya memiliki *input* dan *output*. Misalnya fungsi $f(x) = 2x + 3$ apabila kita jadikan sebagai fungsi di pemrograman, maka akan menjadi seperti berikut:

:::tabs
== Javascript
``` js
function fungsi(x) {
    return 2 * x + 3;
}
```
== C++
``` cpp
int fungsi(int x) {
    return 2 * x + 3;
}
```
== Kotlin
``` kotlin
fun fungsi(x: Int): Int {
    return 2 * x + 3
}
```
== Python
``` python
def fungsi(x):
    return 2 * x + 3
```
== Rust
```rust
fn fungsi(x: u64) -> u64 {
    2 * x + 3
}
```
:::

## Domain, Kodomain, dan Range
**Domain** adalah himpunan semua nilai input yang diperbolehkan dalam fungsi. Dalam matematika, domain adalah himpunan semua nilai $ x $ yang memenuhi fungsi.

**Kodomain** sendiri adalah himpunan semua nilai output yang mungkin dalam fungsi. Sedangkan **range** adalah himpunan semua nilai output yang benar-benar dihasilkan oleh fungsi.

Dalam pemrograman, **domain** dan **kodomain** bisa diartikan sebagai tipe data input dan output dari fungsi yang didefinisikan.

Dengan kata lain, domain dalam konteks pemrograman adalah jenis data yang bisa diterima oleh fungsi sebagai input (*parameter*), dan kodomain adalah jenis data yang dihasilkan oleh fungsi sebagai output.

## Jenis-Jenis Fungsi
Ada beberapa jenis fungsi yang sering digunakan dalam matematika, diantaranya adalah:

### Fungsi Linear
Fungsi linear adalah fungsi yang bentuknya $f(x) = ax + b$ dimana $a$ dan $b$ adalah konstanta. Fungsi ini memiliki grafik berbentuk garis lurus.
Misalnya fungsi $f(x) = 1x + 0.5$. akan menghasilkan grafik seperti berikut:

<iframe src="https://www.desmos.com/calculator/es5blw1hph?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>

### Fungsi Kuadrat
Fungsi kuadrat adalah fungsi yang bentuknya $f(x) = ax^2 + bx + c$ dimana $a$, $b$, dan $c$ adalah konstanta. Fungsi ini memiliki grafik berbentuk parabola.

<iframe src="https://www.desmos.com/calculator/4pk6cxq51f?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>

### Fungsi Eksponensial
Fungsi eksponensial adalah fungsi yang bentuknya $f(x) = a^x$ dimana $a$ adalah konstanta. Fungsi ini memiliki grafik berbentuk kurva yang semakin meningkat.
<iframe src="https://www.desmos.com/calculator/lxqtx41d3e?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>

### Fungsi Logaritma
Fungsi logaritma adalah fungsi yang merupakan kebalikan dari fungsi eksponensial. Fungsi ini memiliki bentuk $f(x) = \log_a(x)$ dimana $a$ adalah konstanta. Fungsi ini memiliki grafik berbentuk kurva yang semakin menurun.
<iframe src="https://www.desmos.com/calculator/tbuqmiynvo?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>

### Fungsi Trigonometri
Fungsi trigonometri adalah fungsi yang melibatkan fungsi trigonometri seperti sin, cos, tan, dan sebagainya. Fungsi ini memiliki grafik berbentuk gelombang. Dibawah ini adalah contoh grafik fungsi trigonometri dimana
- Merah adalah fungsi sin(x)
- Hijau adalah fungsi cos(x)
- Ungu adalah fungsi tan(x)
<iframe src="https://www.desmos.com/calculator/rxoyns9qxd?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>

## Operasi pada Fungsi

### Penjumlahan dan Pengurangan Fungsi
Penjumlahan dan pengurangan fungsi dilakukan dengan cara menambahkan atau mengurangkan fungsi satu dengan fungsi lainnya. Misalnya
$$f(x) = 2x + 3$$
$$g(x) = 3x - 2$$

Maka penjumlahan kedua fungsi tersebut adalah

$$\begin{align*}
    (f + g)(x) &= f(x) + g(x) \\
    &= (2x + 3) + (3x - 2) \\
    &= 5x + 1
\end{align*}$$

Apabila kita jadikan sebagai fungsi di pemrograman, maka akan menjadi seperti berikut:
:::tabs
== Javascript
``` js
function f(x) {
    return 2 * x + 3;
}
function g(x) {
    return 3 * x - 2;
}
function fg(x) {
    return f(x) + g(x);
}
```
== C++
``` cpp
int f(int x) {
    return 2 * x + 3;
}
int g(int x) {
    return 3 * x - 2;
}
int fg(int x) {
    return f(x) + g(x);
}
```
== Kotlin
``` kotlin
fun f(x: Int): Int {
    return 2 * x + 3;
}
fun g(x: Int): Int {
    return 3 * x - 2;
}
fun fg(x: Int): Int {
    return f(x) + g(x);
}
```
== Python
``` python
def f(x):
    return 2 * x + 3

def g(x):
    return 3 * x - 2

def fg(x):
    return f(x) + g(x)
```
== Rust
```rust
fn f(x: u64) -> u64 {
    2 * x + 3
}

fn g(x: u64) -> u64 {
    3 * x - 2
}

fn fg(x: u64) -> u64 {
    f(x) + g(x)
}
```
:::

### Perkalian Fungsi
Perkalian fungsi dilakukan dengan cara mengalikan fungsi satu dengan fungsi lainnya. Misalnya
$$f(x) = 2x + 3$$
$$g(x) = 3x - 2$$

Maka perkalian kedua fungsi tersebut adalah

$$\begin{align*}
    (f \cdot g)(x) &= f(x) \cdot g(x) \\
    &= (2x + 3) \cdot (3x - 2) \\
    &= 6x^2 + 4x - 6
\end{align*}$$

Apabila kita jadikan sebagai fungsi di pemrograman, maka akan menjadi seperti berikut:

:::tabs
== Javascript
``` js
function f(x) {
    return 2 * x + 3;
}
function g(x) {
    return 3 * x - 2;
}
function fg(x) {
    return f(x) * g(x);
}
```
== C++
``` cpp
int f(int x) {
    return 2 * x + 3;
}
int g(int x) {
    return 3 * x - 2;
}
int fg(int x) {
    return f(x) * g(x);
}
```
== Kotlin
``` kotlin
fun f(x: Int): Int {
    return 2 * x + 3;
}
fun g(x: Int): Int {
    return 3 * x - 2;
}
fun fg(x: Int): Int {
    return f(x) * g(x);
}
```
== Python
``` python
def f(x):
    return 2 * x + 3

def g(x):
    return 3 * x - 2

def fg(x):
    return f(x) * g(x)
```
== Rust
```rust
fn f(x: u64) -> u64 {
    2 * x + 3
}

fn g(x: u64) -> u64 {
    3 * x - 2
}

fn fg(x: u64) -> u64 {
    f(x) * g(x)
}
```
:::

### Fungsi Komposisi
Fungsi komposisi adalah fungsi yang hasilnya adalah fungsi lain. Misalnya

$$f(x) = 2x + 3$$
$$g(x) = 3x - 2$$

Maka fungsi komposisi dari kedua fungsi tersebut adalah

$$\begin{align*}
    (f \circ g)(x) &= f(g(x)) \\
    &= f(3x - 2) \\
    &= 2(3x - 2) + 3 \\
    &= 6x - 4 + 3 \\
    &= 6x - 1
\end{align*}$$

Apabila kita jadikan sebagai fungsi di pemrograman, maka akan menjadi seperti berikut:
:::tabs
== Javascript
``` js
function f(x) {
    return 2 * x + 3;
}
function g(x) {
    return 3 * x - 2;
}
function fog(x) {
    return f(g(x));
}
```
== C++
``` cpp
int f(int x) {
    return 2 * x + 3;
}
int g(int x) {
    return 3 * x - 2;
}
int fog(int x) {
    return f(g(x));
}
```
== Kotlin
``` kotlin
fun f(x: Int): Int {
    return 2 * x + 3;
}
fun g(x: Int): Int {
    return 3 * x - 2;
}
fun fog(x: Int): Int {
    return f(g(x));
}
```
== Python
``` python
def f(x):
    return 2 * x + 3

def g(x):
    return 3 * x - 2

def fog(x):
    return f(g(x))
```
== Rust
```rust
fn f(x: u64) -> u64 {
    2 * x + 3
}

fn g(x: u64) -> u64 {
    3 * x - 2
}

fn fog(x: u64) -> u64 {
    f(g(x))
}
```
:::

> [!NOTE] Sifat dari fungsi komposisi
> - Fungsi komposisi tidak komutatif, artinya $f \circ g \neq g \circ f$
> - Fungsi komposisi asosiatif, artinya $(f \circ g) \circ h = f \circ (g \circ h)$
> - Fungsi komposisi memiliki elemen identitas, artinya $f \circ I = f$ dimana $I$ adalah fungsi identitas

### Invers Fungsi

Invers fungsi adalah fungsi yang hasilnya adalah fungsi lain yang merupakan kebalikan dari fungsi tersebut. Misalnya

$$f(x) = 2x + 3$$

Maka untuk mencari invers dari fungsi tersebut, kita harus mencari $f^{-1}(x)$ dimana $f^{-1}(f(x)) = x$.

Langkah-langkah untuk mencari invers fungsi adalah sebagai berikut:

1. Ubah bentuk $y = f(x)$ menjadi $x = f^{-1}(y)$
2. Selesaikan $x$ dari persamaan tersebut
3. Gantikan $x$ dengan $f^{-1}(y)$
4. Selesaikan persamaan tersebut

Contoh untuk mencari invers dari fungsi $f(x) = 2x + 6$ adalah sebagai berikut:

$$\begin{align*}
    y &= f(x) = 2x + 6 \\
    2x &= y - 6 \\
    x &= \frac{1}{2}y-3
\end{align*}$$

Maka invers dari fungsi $f(x) = 2x + 6$ adalah $f^{-1}(x) = \frac{1}{2}x-3$

Apabila kita jadikan sebagai fungsi di pemrograman dimana nilai $x$ sudah diketahui dan outputnya adalah nilai $y$, maka akan menjadi seperti berikut:
:::tabs
== Javascript
``` js
function inverse_function(y, a, b) {
  if (a === 0) {
    throw new Error("Nilai a tidak boleh 0");
  }
  return (y - b) / a;
}

const a = 2;  // Misalkan a = 2
const b = 3;  // Misalkan b = 3
const y = 7;  // Nilai y (f(x))

// f(x) = 2x + 3
const x = inverse_function(y, a, b);
console.log(`Invers dari f(${y}) adalah x = ${x}`);
```
== C++
``` cpp
int inverse_function(int y, int a, int b) {
  if (a == 0) {
    throw "Nilai a tidak boleh 0";
  }
  return (y - b) / a;
}

int main() {
  int a = 2;  // Misalkan a = 2
  int b = 3;  // Misalkan b = 3
  int y = 7;  // Nilai y (f(x))

  // f(x) = 2x + 3
  int x = inverse_function(y, a, b);
  cout << "Invers dari f(" << y << ") adalah x = " << x << endl;
  return 0;
}
```
== Kotlin
``` kotlin
fun inverse_function(y: Int, a: Int, b: Int): Int {
  if (a == 0) {
    throw IllegalArgumentException("Nilai a tidak boleh 0")
  }
  return (y - b) / a
}

fun main() {
  val a = 2  // Misalkan a = 2
  val b = 3  // Misalkan b = 3
  val y = 7  // Nilai y (f(x))

  // f(x) = 2x + 3
  val x = inverse_function(y, a, b)
  println("Invers dari f($y) adalah x = $x")
}
```
== Python
``` python
def inverse_function(y, a, b):
  if a == 0:
    raise Exception("Nilai a tidak boleh 0")
  return (y - b) / a

a = 2  # Misalkan a = 2
b = 3  # Misalkan b = 3
y = 7  # Nilai y (f(x))

# f(x) = 2x + 3
x = inverse_function(y, a, b)
print(f"Invers dari f({y}) adalah x = {x}")
```
== Rust
```rust
fn inverse_function(y: u64, a: u64, b: u64) -> Result<u64, &'static str> {
  if a == 0:
    return Err("Nilai a tidak boleh 0")
  Ok((y - b) / a)
}

fn main() {
    let a: u64 = 2; // Misalkan a = 2
    let b: u64 = 3; // Misalkan b = 3
    let y: u64 = 7; // Nilai y (f(x))

    // f(x) = 2x + 3
    let x = inverse_function(y, a, b).unwrap();
    println!("Invers dari f({}) adalah x = {}", y, x);
}
```
:::
