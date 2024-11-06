---
title: Numbers
description: Example of using Numbers in programming
---

# Numbers

Numbers are the foundation of mathematics, everything in math uses numbers. In programming, numbers are also very important. We can perform various mathematical operations with numbers, such as addition, subtraction, multiplication, and division.

However, numbers in programming are categorized into several types, depending on their data type. So, the use of numbers in programming will be slightly different from standard mathematics. Let's learn more about it!

## Integers

Integers are numbers without decimals. In programming, integers are usually referred to as `integer`. Examples of integers include 1, 2, 3, 4, 5, and so on.

:::tabs
== Javascript
```js
let myInteger = 10;
```
== Kotlin
```kt
val myInteger: Int = 10
```
== C++
```cpp
int myInteger = 10;
```
== Python
```python
myInteger = 10
```
:::

Although it seems simple, don't forget that in programming, numbers have limits! For example, in JavaScript, the largest number you can use is **`9,007,199,254,740,992`**. That's equivalent to a very large number. I even have trouble saying it, seriously.

Now, in C++ and other languages that have more data types than JS (which only has `number` and `BigInt`), the limits depend on the data type you use. For example, if you use `short` in C++, you can reach the number **`32,767`** except in Python, which doesn't have a limit for integers, as Python dynamically handles the size of integers. Here's an example:

:::tabs
== Javascript

| Data Type | Size (bits) | Minimum | Maximum | Maximum (Explicitly) |
|-----------|------------------|---------------|----|---------------------------|
| Number    | 64             | -9,007,199,254,740,991<br /> (−2<sup>53</sup> - 1) | 9,007,199,254,740,992 <br /> (2<sup>53</sup> - 1 )  | 18,446,744,073,709,551,616 (2<sup>64</sup>) |
| BigInt    | max 1,000,000,000               | `depends on memory` | `depends on memory`  | `depends on memory` |
== C++
| Data Type | Size (bits | Minimum                                         | Maximum                                      | Maximum (Explicitly) |
|-----------|------------------|------------------------------------------------|-----------------------------------------------|---------------------------|
| `short`     | 16              | -32,768                                       | 32,767                                        | 65,536 (2<sup>16</sup>) |
| `int`       | 32               | -2,147,483,648 (-2<sup>31</sup>)              | 2,147,483,647 (2<sup>31</sup> - 1)           | 4,294,687,296 (2<sup>32</sup>) |
| `long`      | 64               | -9,223,372,036,854,775,808 (-2<sup>63</sup>) | 9,223,372,036,854,775,807 (2<sup>63</sup> - 1) | 18,446,744,073,709,551,616 (2<sup>64</sup>) |
| `long long` | 64               | -9,223,372,036,854,775,808 (-2<sup>63</sup>) | 9,223,372,036,854,775,807 (2<sup>63</sup> - 1) | 18,446,744,073,709,551,616 (2<sup>64</sup>) |

There are many more details which [you can check here](https://learn.microsoft.com/en-us/cpp/c-language/cpp-integer-limits?view=msvc-170#limits-on-integer-constants)
== Kotlin
| Data Type | Size (bits | Minimum                                         | Maximum                                      | Maximum (Explicitly) |
|-----------|------------------|------------------------------------------------|-----------------------------------------------|---------------------------|
| `Byte`      | 8             | -128                                           | 127                                           | 256 (2<sup>8</sup>)
| `Short`     | 16               | -32,768                                       | 32,767                                        | 65,536 (2<sup>16</sup>) |
| `Int`       | 32              | -2,147,483,648 (-2<sup>31</sup>)              | 2,147,483,647 (2<sup>31</sup> - 1)           |  4,294,687,296 (2<sup>32</sup>) |
| `Long`      | 64               | -9,223,372,036,854,775,808 (-2<sup>63</sup>) | 9,223,372,036,854,775,807 (2<sup>63</sup> - 1) | 18,446,744,073,709,551,616 (2<sup>64</sup>) |
:::

## Decimal Numbers (Floating Point)

Decimal numbers or floating points are numbers that have decimals. In programming, decimal numbers are usually referred to as `float` or `double`. Examples of decimal numbers include 1.5, 2.3, 3.14, and so on. To create a decimal number, you can use code like the following

:::tabs
== Javascript
```js
let myDecimal = 3.14;
```
== Kotlin
```kt
val myDecimal: Float = 3.14F
```
We can also use `double` for decimal numbers that have more digits after the decimal point (up to 15 digits). Here's an example:
```kt
val myDecimal: Double = 3.141592653589793f
```
== C++
```cpp
float myDecimal = 3.14f;
```
We can also use `double` for decimal numbers that have more digits after the decimal point (up to 15 digits). Here's an example:
```cpp
double myDecimal = 3.141592653589793F;
```
== Python
```python
myDecimal = 3.14
```
:::


## Fractional Numbers

Fractional numbers are numbers that have a numerator and a denominator. In programming, fractional numbers are usually referred to as `fraction`. Examples of fractional numbers include 1/2, 3/4, 5/6, and so on. Unfortunately, programming does not have a data type for fractional numbers. They are simply computed, resulting in a decimal number. An example of its use is as follows:

:::tabs
== Javascript
```js
let myFraction = 1/2;
```
== Kotlin
```kt
val myFraction = 1/2 // Automatically converted to float
```
== C++
```cpp
float myFraction = 1/2;
```
== Python
```python
myFraction = 1/2
```
:::

> [!WARNING] Caution when performing operations with fractional and decimal numbers
> In many programming languages, including JavaScript, there is something called `floating point error`, which can cause calculation results for decimal numbers to be inaccurate. This happens because decimal numbers cannot always be precisely represented in binary format.
>
> For example, when we add 0.1 and 0.2 in JavaScript, the result is not 0.3, but rather 0.30000000000000004. This is due to the limitations of decimal number representation in computers.
>
> To avoid this issue, it is recommended to limit the precision of calculation results by rounding to the desired number of decimal places (for instance, using `toFixed()` or `Math.round()`.
>
> You can also use libraries like BigNumber or others.

What about **mixed fractions**? In mathematics, there's something like $1\frac{1}{2}$, and you can do it in programming too. You can use `float` or `double` for mixed fractions. An example of its use is as follows:
:::tabs
== Javascript
```js
let mixedFraction = 1 + 1/2;
```
== Kotlin
```kt
val mixedFraction: Double = 1 + 1/2
```
== C++
```cpp
double mixedFraction = 1 + 1/2;
```
== Python
```python
mixedFraction = 1 + 1/2
```
:::

Why addition? Because mixed fractions can actually be converted to regular decimal numbers. For example, $1\frac{1}{2}$ can be converted to $1 + \frac{1}{2}$, which is equal to $1.5$.
