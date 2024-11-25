# Limit 
The limit is the value that a function approeches  as its input value approaches some value. Limits are defined as

$$\begin{align*}
    \lim_{x \to a} f(x) = L
\end{align*}$$

We can understand the behavior of a function by just determine its limit of a certain point. We will know such function at that point is either continue, discontinue, or differentiable.

## How to detemine the limit
Suppose a curve $f(x) = x+3$ and we will know limit value around $x=3$. We can approach by several  point from lefthand side and righthand side.
 <iframe src="https://www.desmos.com/calculator/2cirqrpari?embed" width="400" height="400" style="border: 1px solid #ccc" frameborder=0></iframe>

| Left                | Right               |
| --------------------|---------------------|
|$f(2.9) = 5.9$       | $f(3.1) = 6.1$      |
|$f(2.99) = 5.99$     | $f(3.01) = 6.01$    |
|$f(2.99) = 5.999$    | $f(3.001) = 6.001$  |
| ...                 | ...                 | 

or with programming code:

:::tabs key:lang
== Javascript
```js
function f(x){
    return x+3;
}

function calculateLimit(point){
    //approaching from right
    for(let i = 1; i<=10;i++){
        let y = f(point+1/(10**i));
        console.log(`f(${point+1/(10**i)})=${y}`);
    }
    //approaching from left
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
    // approaching from right
    println("approaching from right:")
    for (i in 1..10) {
        val y = f(point + 1 / Math.pow(10.0, i.toDouble()))
        println("f(${point + 1 / Math.pow(10.0, i.toDouble())}) = $y")
    }

    // approaching from left
    println("approaching from left:")
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
    // approaching from right
    std::cout << "approaching from right:" << std::endl;
    for (int i = 1; i <= 10; i++) {
        double y = f(point + 1 / std::pow(10, i));
        std::cout << "f(" << (point + 1 / std::pow(10, i)) << ") = " << y << std::endl;
    }

    // approaching from left
    std::cout << "approaching from left:" << std::endl;
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
    # approaching from right
    print("approaching from right:")
    for i in range(1, 11):
        y = f(point + 1 / (10 ** i))
        print(f"f({point + 1 / (10 ** i)}) = {y}")
    
    # approaching from left
    print("approaching from left:")
    for i in range(1, 11):
        y = f(point - 1 / (10 ** i))
        print(f"f({point - 1 / (10 ** i)}) = {y}")

# Run the calculation
calculate_limit(3)

```
:::

From that we can conclude either approaching from left or right, all the values are tend to $6$. Hence the limit of the function in $x=3$ is $6$. At once the result is identical with when we straightly give $x=3$ input to that function. However there is a speciality from the limit that we can still determine the limit value even the function is undefined at certain point. For instance,
let's suppose another function that similiar to the  $f(x)=x+3$, let's take $g(x)=\frac{x^2-9}{x-3}$

<iframe src="https://www.desmos.com/calculator/hnezdurbof?embed" width="400" height="400" style="border: 1px solid #ccc" frameborder=0></iframe>

(please try clicking $x=3$) on bare eyes the curve is strongly similar with $f(x)=x+3$, but actually undefined at $x=3$. Now, we try calculate the limit

| Kiri                | Kanan               |
| --------------------|---------------------|
|$f(2.9) = 5.9$       | $f(3.1) = 6.1$      |
|$f(2.99) = 5.99$     | $f(3.01) = 6.01$    |
|$f(2.99) = 5.999$    | $f(3.001) = 6.001$  |
| ...                 | ...                 | 

code:
:::tabs key:lang
== Javascript
```js
function f(x){
    return (x**2-9)/(x-3);
}

function calculateLimit(point){
    // approaching from right
    for(let i = 1; i<=10;i++){
        let y = f(point+1/(10**i));
        console.log(`f(${point+1/(10**i)})=${y}`);
    }
    // approaching from left
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
    // approaching from right
    println("approaching from right:")
    for (i in 1..10) {
        val y = f(point + 1 / Math.pow(10.0, i.toDouble()))
        println("f(${point + 1 / Math.pow(10.0, i.toDouble())}) = $y")
    }

    // approaching from left
    println("approaching from left:")
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
    // approaching from right
    std::cout << "approaching from right:" << std::endl;
    for (int i = 1; i <= 10; i++) {
        double y = f(point + 1 / std::pow(10, i));
        std::cout << "f(" << (point + 1 / std::pow(10, i)) << ") = " << y << std::endl;
    }

    // approaching from left
    std::cout << "approaching from left:" << std::endl;
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
    # approaching from right
    print("approaching from right:")
    for i in range(1, 11):
        y = f(point + 1 / (10 ** i))
        print(f"f({point + 1 / (10 ** i)}) = {y}")
    
    # approaching from left
    print("approaching from left:")
    for i in range(1, 11):
        y = f(point - 1 / (10 ** i))
        print(f"f({point - 1 / (10 ** i)}) = {y}")

# Run the calculation
calculate_limit(3)

```
:::

Thus we can conclude that determining the limit value is not affected by the value of the function.