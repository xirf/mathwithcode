---
contributors:
  - name: "Anka Tama"
    username: "xirf"
---
# Function

In mathematics, an algebraic function is a notation that connects two sets of numbers.
This function is usually written in the form $f(x) = y$
Where $f$ is a function, $x$ is the input, and $y$ is the output.

Algebraic functions have a similar concept to functions in programming where both have *input* dan *output*.
For example, the function $f(x) = 2x + 3$ when we make it as a function in programming, it will be as follows:

:::tabs key:lang
== Javascript
``` js
function myFunction(x) {
    return 2 * x + 3;
}
```
== C++
``` cpp
int myFunction(int x) {
    return 2 * x + 3;
}
```
== Kotlin
``` kotlin
fun myFunction(x: Int): Int {
    return 2 * x + 3
}
```
== Python
``` python
def myFunction(x):
    return 2 * x + 3
```
:::

## Domain, Codomain, and Range
**Domain** is the collection of all input values ​​allowed in the function.
In mathematics, the domain is the collection of all values ​​of x that satisfy a function.

**Codomain** itself is the set of all possible output values ​​of a function.
While **range** is the collection of all output values ​​that are actually produced by the function.

In programming, **domain** and **codomain** can be interpreted as the input and output data types of a defined function.

In other words, domain in the context of programming is the type of data that a function can accept as input (*parameter*),
and codomain is the type of data that the function produces as output.

## Types of Functions
There are several types of functions that are often used in mathematics, including:

### Fungsi Linear
A linear function is a function whose form is $f(x) = ax + b$ Where $a$ and $b$ is a constant.
This function has a graph in the form of a straight line.
For example, the function $f(x) = 1x + 0.5$ will produce a graph like the following:

<iframe src="https://www.desmos.com/calculator/es5blw1hph?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>

### Quadratic Function
A quadratic function is a function whose form is $f(x) = ax^2 + bx + c$ where $a$, $b$, and $c$ is a constant.
This function has a parabolic graph.

<iframe src="https://www.desmos.com/calculator/4pk6cxq51f?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>

### Exponential Function
Exponential function is a function whose form is $f(x) = a^x$ where $a$ is a constant.
This function has a graph in the form of an increasing curve.

<iframe src="https://www.desmos.com/calculator/lxqtx41d3e?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>

### Logarithmic Function
The logarithmic function is a function that is the opposite of the exponential function.
This function has the form $f(x) = \log_a(x)$ where $a$ is a constant. This function has a graph in the form of a decreasing curve.

<iframe src="https://www.desmos.com/calculator/tbuqmiynvo?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>

### Trigonometric Functions
Trigonometric functions are functions that involve trigonometric functions such as sin, cos, tan, and so on.
This function has a wave-shaped graph. Below is an example of a trigonometric function graph where
- Red is the function $sin(x)$
- Green is the function $cos(x)$
- Purple is the function $tan(x)$
<iframe src="https://www.desmos.com/calculator/rxoyns9qxd?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>

## Operations on Functions

### Addition and Subtraction Functions
Addition and subtraction of functions is done by adding or subtracting one function to another. For example
$$f(x) = 2x + 3$$
$$g(x) = 3x - 2$$

So the sum of the two functions is

$$\begin{align*}
    (f + g)(x) &= f(x) + g(x) \\
    &= (2x + 3) + (3x - 2) \\
    &= 5x + 1
\end{align*}$$

If we make it as a function in programming, it will be like the followings:
:::tabs key:lang
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
:::

### Multiplication of Functions
Function multiplication is done by multiplying one function by another function. For example
$$f(x) = 2x + 3$$
$$g(x) = 3x - 2$$

So the multiplication of the two functions is

$$\begin{align*}
    (f \cdot g)(x) &= f(x) \cdot g(x) \\
    &= (2x + 3) \cdot (3x - 2) \\
    &= 6x^2 + 4x - 6
\end{align*}$$

If we make it as a function in programming, it will be like the followings:

:::tabs key:lang
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
:::

### Function Composition
A composition of function is a function whose result is another function. For example

$$f(x) = 2x + 3$$
$$g(x) = 3x - 2$$

So the composition function of the two functions is

$$\begin{align*}
    (f \circ g)(x) &= f(g(x)) \\
    &= f(3x - 2) \\
    &= 2(3x - 2) + 3 \\
    &= 6x - 4 + 3 \\
    &= 6x - 1
\end{align*}$$

If we make it as a function in programming, it will be like the followings:
:::tabs key:lang
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
:::

> [!NOTE] Properties of composition functions
> - The composition function is not commutative, meaning that $f \circ g \neq g \circ f$
> - Associative composition function, meaning $(f \circ g) \circ h = f \circ (g \circ h)$
> - The composition function has an identity element, meaning that $f \circ I = f$ where $I$ is an identity function

### Inverse Function

An inverse function is a function whose result is another function that is the inverse of that function. For example

$$f(x) = 2x + 3$$

So to find the inverse of the function, we have to find $f^{-1}(x)$ dimana $f^{-1}(f(x)) = x$.

The steps to find the inverse of a function are as follows:

1. Change the form of $y = f(x)$ to $x = f^{-1}(y)$
2. Solve $x$ from the equation
3. Subtitute $x$ with $f^{-1}(y)$
4. Solve the equation

Example of finding the inverse of a function $f(x) = 2x + 6$ are as follows:

$$\begin{align*}
    y &= f(x) = 2x + 6 \\
    2x &= y - 6 \\
    x &= \frac{1}{2}y-3
\end{align*}$$

Then the inverse of the function $f(x) = 2x + 6$ is $f^{-1}(x) = \frac{1}{2}x-3$

When we make it as a function in programming where the value $x$ is known and the output is the value $y$, then it will be as follows:
:::tabs key:lang
== Javascript
``` js
function inverseFunction(y, a, b) {
  if (a === 0) {
    throw new Error("Value of a cannot be 0");
  }
  return (y - b) / a;
}

const a = 2;  // Suppose a = 2
const b = 3;  // Suppose b = 3
const y = 7;  // Value of y = (f(x))
// f(x) = 2x + 3
const x = inverseFunction(y, a, b);
console.log(`Inverse of f(${y}) is x = ${x}`);
```
== C++
``` cpp
int inverseFunction(int y, int a, int b) {
  if (a == 0) {
    throw "Value of a cannot be 0";
  }
  return (y - b) / a;
}

int main() {
  int a = 2;  // Suppose a = 2
  int b = 3;  // Suppose b = 3
  int y = 7;  // Value of y = (f(x))
  // f(x) = 2x + 3
  int x = inverseFunction(y, a, b);
  cout << "Inverse of f(" << y << ") is x = " << x << endl;
  return 0;
}
```
== Kotlin
``` kotlin
fun inverseFunction(y: Int, a: Int, b: Int): Int {
  if (a == 0) {
    throw IllegalArgumentException("Value of a cannot be 0")
  }
  return (y - b) / a
}

fun main() {
  val a = 2  // Suppose a = 2
  val b = 3  // Suppose b = 3
  val y = 7  // Value of y = (f(x))
  // f(x) = 2x + 3
  val x = inverseFunction(y, a, b)
  println("Inverse of f($y) is x = $x")
}
```
== Python
``` python
def inverseFunction(y, a, b):
  if a == 0:
    raise Exception("Value of a cannot be 0")
  return (y - b) / a

a = 2  # Suppose a = 2
b = 3  # Suppose b = 3
y = 7  # Value of y = (f(x))
# f(x) = 2x + 3
x = inverseFunction(y, a, b)
print(f"Inverse of f({y}) is x = {x}")
```
:::
