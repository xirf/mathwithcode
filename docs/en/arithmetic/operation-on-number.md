---
title: Operations on Number
description: Examples of using mathematical operations on numbers in programming
---

# Operation on Numbers

Number operations or the processes of manipulating certain numeric values ​​using mathematical techniques such as addition, subtraction, multiplication, division, and more. In programming we cannot be separated from what is called number operations because the computer itself runs based on number operations. Here we will discuss number operations that are often used in programming.

## Basic Operation

In programming, we can perform various mathematical operations with numbers. There are addition, subtraction, multiplication, and division. Unlike regular mathematics that uses the symbols `+`, `-`, `*`, and `/`, in programming we use different symbols. An example of its use is as follows:

:::tabs key:lang
== Javascript
```js
let a = 10;
let b = 5;
let additionResult = a + b; // 15
let subtractionResult = a - b; // 5
let multiplicationResult = a * b; // 50
let divisionResult = a / b; // 2
```
== Kotlin
```kt
val a = 10
val b = 5
val additionResult = a + b // 15
val subtractionResult = a - b // 5
val multiplicationResult = a * b // 50
val divisionResult = a / b // 2
```
== C++
```cpp
int a = 10;
int b = 5;
int additionResult = a + b; // 15
int subtractionResult = a - b; // 5
int multiplicationResult = a * b; // 50
int divisionResult = a / b; // 2
```
== Python
```python
a = 10
b = 5
additionResult = a + b # 15
subtractionResult = a - b # 5
multiplicationResult = a * b # 50
divisionResult = a / b # 2
```
:::

Above we use `/` for division and `*` for multiplication. This is because in programming, we cannot use mathematical symbols `÷` and `×` like the usual especially `.` because programming languages ​​generally follow ASCII rules that only support basic characters, so special mathematical symbols such as `÷` and `×` are not available. Instead, programming uses `*` as the replacement for multiplication and `/` as the replacement for division so that the code can run properly.

> [!NOTE]
> Try checking your laptop or PC keyboard, is there `÷` and `×` symbols? (not this x). Most of the time, they don't exist, and that's one of the main reasons why programming doesn't use those symbols. :grin:

## Exponentiation (Powers)

Exponentiation is a mathematical operation used to multiply a number by itself $n$ times. In programming, you can use the `**` operator or the `pow()` to calculate powers. Here's an example:
:::tabs key:lang
== Javascript
```js
let power = 2 ** 3; // 8
let power2 = Math.pow(2, 3); // 8
```
== Kotlin
```kt
val power = 2.0.pow(3) // 8.0
val power2 = Math.pow(2.0, 3.0) // 8.0
```
== C++
```cpp
#include <iostream>
#include <cmath>

int main() {
    double power = pow(2, 3); // 8
    double power2 = pow(2.0, 3.0); // 8
    return 0;
}
```
== Python
```python
power = 2 ** 3 # 8
power2 = pow(2, 3) # 8
```
:::

`pow()` usually takes two parameters, where the first parameter is the base and the second parameter is the exponent. So to calculate $2^3$, we can write it as `pow(2, 3)`.

## Roots

Most programming languages have a function for calculating roots. In JavaScript, we can use the `Math.sqrt()` (*Square Root*) function for square roots. Here's an example:

:::tabs key:lang
== Javascript
```js
let root = Math.sqrt(16); // 4
```

== Kotlin
In Kotlin, we can use the `Math.sqrt()` function. Here's an example:
```kt
val root = Math.sqrt(16.0) // 4.0
```

== C++
In C++, we can use the `sqrt()` function from `cmath` library. Here's an example:
```cpp
#include <iostream>
#include <cmath>

int main() {
    double root = sqrt(16); // 4
    std::cout << root << std::endl;
    return 0;
}
```

== Python
In Python, we can use the `sqrt()` function from `math` library. Here's an example:
```python
import math
root = math.sqrt(16) # 4.0
```
:::

But there's a problem, if we want to calculate roots that are more than 2, like $\sqrt[3]{8}$ or $\sqrt[4]{16}$, Well, in this case, we can just raise the number to the power of $1/n$ where $n$ is the root we want. Here's an example:

:::tabs key:lang
== Javascript
```js
let cubeRoot = Math.pow(8, 1/3); // 2
let fourthRoot = Math.pow(16, 1/4); // 2
```
== Kotlin
```kt
val cubeRoot = Math.pow(8.0, 1.0/3.0) // 2.0
val fourthRoot = Math.pow(16.0, 1.0/4.0) // 2.0
```
== C++
```cpp
#include <iostream>
#include <cmath>

int main() {
    double cubeRoot = pow(8, 1.0/3); // 2
    double fourthRoot = pow(16, 1.0/4); // 2
    std::cout << cubeRoot << std::endl;
    std::cout << fourthRoot << std::endl;
    return 0;
}
```
== Python
```python
cubeRoot = pow(8, 1/3) # 2.0
fourthRoot = pow(16, 1/4) # 2.0
```
:::

This can happen because any number that has an exponent of $1/n$ will produce the root of the number. So if we want to calculate $\sqrt[3]{8}$ we can write it as `pow(8, 1/3)`.

## Modulus

The modulus (remainder) operation calculates the remainder of division between two numbers. For example, if you divide 10 by 3, the remainder result is 1. In programming, you can use the `%` operator to calculate the modulus.

This operation is particularly useful for checking if a number is even, odd, or follows a specific pattern. Here's an example:

:::tabs key:lang
== Javascript
```js
let modulusResult = 10 % 3; // 1
```
== Kotlin
```kt
val modulusResult = 10 % 3 // 1
```
== C++
```cpp
int modulusResult = 10 % 3; // 1
```
== Python
```python
modulusResult = 10 % 3 # 1
```
:::

## Order of Operations

In math, there’s a rule called the order of operations, which dictates the order in which calculations are performed. This also applies to programming and follows the same order as in standard math. It’s called PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction) so the order is as followings

1. Parentheses $()$
2. Exponents $x^y$ and Roots $\sqrt{x}$
3. Multiplication $x \times y$, Division $x \div y$ and Modulus $x \% y$
4. Addition $x + y$ and Subtraction $x - y$

For example, if we want to calculate $6 + 3 * (2^3 + \sqrt{16})$:

1. **Parentheses**: Focus on the expression inside the parentheses $2^3 + \sqrt{16}$.
3. **Exponents (powers)**: Calculate $2^3$.
$$2^3 = 8$$
5. **Roots**: Calculate $\sqrt{16}$.
$$\sqrt{16} = 4$$
7. **Addition inside parentheses**: Now, solve the operation inside parentheses $2^3 + \sqrt{16}$.
$$8 + 4 = 12$$
9. **Multiplication**: Proceed to the operation outside the brackets, which is $3 \times (2^3 + \sqrt{16})$.
$$3 \times 12 = 36$$
11. **Final addition**: Finally, add $6 + 36$.
$$6 + 36 = 42$$
So, the final result is **42**.

In programming, the order of operations is handled by the language, so you don't need to worry about the wrong order of operations. You just need to be careful with the formula you are going to use. If we put the formula into the code, it will look like this.

:::tabs key:lang
== Javascript
```js
let result = 6 + 3 * (2 ** 3 + Math.sqrt(16)); // 42
```
== Kotlin
```kt
val result = 6 + 3 * (2.0.pow(3) + Math.sqrt(16.0)) // 42.0
```

== C++
```cpp
int result = 6 + 3 * (pow(2, 3) + sqrt(16)); // 42
```
== Python
```python
import math
result = 6 + 3 * (pow(2,3) + math.sqrt(16)) # 42.0
```
:::

##
