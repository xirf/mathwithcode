---
title: Factor and Multiples
description: Factorization, prime factorization, factor trees, GCF, LCM
---

# Factorization

Factorization is the process of breaking down a number into its factors. Factors here are numbers that can be multiplied to produce the number we want.

For example, the factorization of 12 is 2 and 6, because $2 \times 6 = 12$. The factorization of 6 is 2 and 3, because $2 \times 3 = 6$.

## Prime Factorization

Prime factorization is a factorization in which all the resulting factors are prime numbers. A prime number is a number that can only be divided by 1 and itself.

Examples:

-   The prime factor of 12 is $12=2×2×3$, because 12 can be divided into 2 times 6, then 6 can be divided again into 2 times 3.
-   The prime factor of 30 is $30=2×3×5$, because 30 can be divided into 2, 3, and 5, all of which are prime numbers.

## Factor Tree

Put it simply, we can find factorization by using a factor tree where we perform repeated division until the number we divide is a prime number.

For example, if we have the number 100, then the factor tree is like this:

<svg width="119px" height="215px" id="svg1">
    <text x="20" y="95" style="font-size: 28px;" fill="#3a5998">2</text>
    <line x1="45" x2="28" y1="38" y2="70" stroke="black"></line>
    <text x="45" y="155" style="font-size: 28px;" fill="#3a5998">2</text>
    <line x1="70" x2="53" y1="98" y2="130" stroke="black"></line>
    <text x="70" y="215" style="font-size: 28px;" fill="#3a5998">5</text>
    <line x1="95" x2="78" y1="158" y2="190" stroke="black"></line>
    <text x="52" y="35" style="font-size: 28px;" fill="chocolate">0</text>
    <text x="37" y="35" style="font-size: 28px;" fill="chocolate">0</text>
    <text x="22" y="35" style="font-size: 28px;" fill="chocolate">1</text>
    <line x1="45" x2="70" y1="38" y2="70" stroke="black"></line>
    <text x="70" y="95" style="font-size: 28px;" fill="black">0</text>
    <text x="55" y="95" style="font-size: 28px;" fill="black">5</text>
    <line x1="70" x2="95" y1="98" y2="130" stroke="black"></line>
    <text x="95" y="155" style="font-size: 28px;" fill="black">5</text>
    <text x="80" y="155" style="font-size: 28px;" fill="black">2</text>
    <line x1="95" x2="112" y1="158" y2="190" stroke="black"></line>
    <text x="104" y="215" style="font-size: 28px;" fill="#3a5998">5</text>
</svg>

From the factor tree above we can see that the factorization of 100 is $2 \times 2 \times 5 \times 5$ or $2^2 \times 5^2$. We can write the factorization of 100 as $2^2 \times 5^2$.

In programming, we can use _loop_ and [modulo](/en/arithmetic/operation-on-number#modulus) to find the factorization of a number. Here is an example of its implementation:

:::tabs key:lang
== Javascript

```js
function factorize(number) {
	let factor = 2;
	let factors = [];
	while (number > 1) {
		if (number % factor === 0) {
			factors.push(factor);
			number /= factor;
		} else {
			factor++;
		}
	}
	return factors;
}

let factorize100 = factorize(100); // [2, 2, 5, 5]
```

== Kotlin

```kt
fun factorize(number: Int): List<Int> {
    var factor = 2
    val factors = mutableListOf<Int>()
    var number = number
    while (number > 1) {
        if (number % factor == 0) {
            factors.add(factor)
            number /= factor
        } else {
            factor++
        }
    }
    return factors
}

val factorize100 = factorize(100) // [2, 2, 5, 5]
```

== C++

```cpp
#include <iostream>
#include <vector>

std::vector<int> factorize(int number) {
    int factor = 2;
    std::vector<int> factors;
    while (number > 1) {
        if (number % factor == 0) {
            factors.push_back(factor);
            number /= factor;
        } else {
            factor++;
        }
    }
    return factors;
}

int main() {
    std::vector<int> factorize100 = factorize(100); // [2, 2, 5, 5]
    return 0;
}
```
== Python
```python
def factorize(number):
    factor = 2
    factors = []
    while number > 1:
        if number % factor == 0:
            factors.append(factor)
            number /= factor
        else:
            factor += 1

    return factors

factorize100 = factorize(100) # [2, 2, 5, 5]
```

:::

Btw, what we use above `/=` is the same as `number = number / factor`, it's similar to `+= -= *=` we usually use.


## Multiples

A multiple is the result of multiplying a number by another number. For example, if you have a number $a$ and multiply it by $n$ (which can be positive, negative, or zero), the result is a multiple of $a$.

For example, if $a = 3$ then the multiples of 3 are:
- $3 \times 1 = 3$
- $3 \times 2 = 6$
- $3 \times 3 = 9$
- and so on...

If multiples are implemented in programming, we can use _loop_ to perform repeated multiplication. Here’s an example:
:::tabs key:lang
== Javascript

```js
function multiples(a, n) {
    let multiples = [];
    for (let i = 1; i <= n; i++) {
        multiples.push(a * i);
    }
    return multiples;
}

let multiplesOf3 = multiples(3, 5); // [3, 6, 9, 12, 15]
```
== Kotlin

```kt
fun multiples(a: Int, n: Int): List<Int> {
    val multiples = mutableListOf<Int>()
    for (i in 1..n) {
        multiples.add(a * i)
    }
    return multiples
}

val multiplesOf3 = multiples(3, 5) // [3, 6, 9, 12, 15]
```
== C++

```cpp
std::vector<int> multiples(int a, int n) {
    std::vector<int> multiples;
    for (int i = 1; i <= n; i++) {
        multiples.push_back(a * i);
    }
    return multiples;
}

int main() {
    std::vector<int> multiplesOf3 = multiples(3, 5); // [3, 6, 9, 12, 15]
    return 0;
}
```
== Python
```python
def multiples(a, n):
    multiples = []
    for i in range(1, n+1):
        multiples.append(a * i)

    return multiples

multiplesOf3 = multiples(3, 5) # [3, 6, 9, 12, 15]
```
:::

## Greatest Common Factor (GCF)

GCF is the largest number that can divide two numbers without a remainder. GCF is usually used to find the similarity of two different numbers.

Now to find the GCF we can start by finding the factorization of the two numbers, then we look for the same factors of the two numbers. For example, if we want to find the GCF of 12 and 18, we can do it like this:

$12 = 1,2,3,4,6,12$

$18 = 1,2,3,6,9,18$

We can see that the numbers that are common to both 12 and 18 are $1, 2, 3, \text{and } 6$. Now from these numbers we can take the largest one, which is 6. So the GCF of 12 and 18 is **$6$**.

Another way is to use the Euclidean algorithm, the formula for which is:

$$\text{GCF}(a, b) = \text{GCF}(b, a \mod b)$$

How to calculate it is like this:
1. Take two numbers $a$ and $b$.
2. Divide $a$ with $b$ and save the remainder (modulus), for example $r = a \mod b$.
3. Change $a$ with $b$ and $b$ with $r$.
4. Repeat steps 2 and 3 the rest ($r$) becomes 0.
5. If $r$ is 0, then the GCF of $a$ and $b$ is $b$.

Are you still with me? Relax, let's turn it into code that we can easily understand:
:::tabs key:lang
== Javascript

```javascript
function gcf(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

let gcf1218 = gcf(12, 18); // 6
```
== Kotlin

```kotlin
fun gcf(a: Int, b: Int): Int {
    var a = a
    var b = b
    while (b != 0) {
        val t = b
        b = a % b
        a = t
    }
    return a
}

val gcf1218 = gcf(12, 18) // 6
```
== C++

```cpp
std::vector<int> gcf(int a, int b) {
    while (b != 0) {
        int t = b;
        b = a % b;
        a = t;
    }
    return a;
}

int main() {
    int gcf1218 = gcf(12, 18); // 6
    return 0;
}
```
== Python
```python
def gcf(a, b):
    while b != 0:
        t = b
        b = a % b
        a = t

    return a

gcf1218 = gcf(12, 18) # 6
```
:::


## Least Common Multiple (LCM)

The Least Common Multiple (LCM) is the smallest number that can be divided evenly by two numbers. For example, the LCM of 12 and 18 is **$36$**, because 36 is the smallest number that can be divided evenly by both numbers.

Don't believe it? let's count $12 \times 3 = 36$ and $18 \times 2 = 36$.

To find the LCM, we can use this formula:

$$\text{LCM}(a, b) = \frac{a \times b}{\text{GCF}(a, b)}$$

If simulated, it would be like this:

1. we have the GCF of 12 and 18 which is 6.
2. $12 \times 18 = 216$ (quite big)
3. $216 \div 6 = 36$ (this is the LCM)

Or if you to complicate things, we can calculate manually by finding the multiples of both numbers. For example, if we want to find the LCM of 12 and 18, we can do it like this:

| Number | Multiples of 1	 | Multiples of 2	 | Multiples of 3	 | Multiples of $n$ |
|----------|-------------|-------------|-------------|---------------|
| 12       | 12          | 24          | 36          | ...           |
| 18       | 18          | 36          | 54          | ...           |

From the table above we can see that the common multiple of 12 and 18 is **$36$**.
You are free to use whichever one you like, as long as it's not wrong.

Easy right? Let's turn it into code that we can easily understand::
:::tabs key:lang
== Javascript

```javascript
function lcm(a, b) {
    return (a * b) / gcf(a, b);
}

let lcm1218 = lcm(12, 18); // 36
```
== Kotlin

```kotlin
fun lcm(a: Int, b: Int): Int {
    return (a * b) / gcf(a, b)
}

val lcm1218 = lcm(12, 18) // 36
```
== C++

```cpp
int lcm(int a, int b) {
    return (a * b) / gcf(a, b);
}

int main() {
    int lcm1218 = lcm(12, 18); // 36
    return 0;
}
```
== Python
```python
def lcm(a, b):
    return (a * b) / gcf(a, b)

lcm1218 = lcm(12, 18) # 36.0
```
:::

<style>
    #svg1 {
        margin: 0 auto;
        display: block;
    }

    .__svg line,
    #svg1 line
    {
        stroke: var(--vp-c-text-1) !important;
        stroke-width: 2;
    }

    .__svg text[fill="black"],
    #svg1 text[fill="black"] {
        font-family: Arial, sans-serif;
        fill: var(--vp-c-brand-1) !important;
    }
</style>
