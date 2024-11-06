---
contributors:
  - name: "Anka Tama"
    username: "xirf"
---

# Quadratic Equation

A quadratic equation can be defined as a polynomial equation (an equation consisting of several terms) of degree two,
which implies that this equation consists of at least one term squared. The general form of a quadratic equation is:

$$ax^2 + bx + c = 0$$

Where $x$ is an unknown variable and $a$, $b$, $c$ is a numerical coefficient. For example, $x^2 + 2x +1$ is a quadratic equation.
Here, $a ≠ 0$ because if it is equal to zero then the equation is no longer quadratic and will become a linear equation, such as $bx + c = 0$.

<iframe src="https://www.desmos.com/calculator/4pk6cxq51f?embed" width="300" height="200" class="mx-auto w-full" style="border: 1px solid #ccc" frameborder=0></iframe>
<div class="text-center text-sm text-gray-500">

Quadratic equation graph of $f(x) = 0.1x^2 + 0.5 - 0.3x$

</div>

## General Formula

The roots of a quadratic equation can be found using the quadratic formula. The quadratic formula is:

$$x = \frac{-b ± \sqrt{b^2 - 4ac}}{2a}$$

Where $±$ here means two possible values ​​for $x$.
This formula is known as the quadratic formula or abc formula.
This formula can be used to find the roots of a quadratic equation $ax^2 + bx + c = 0$.

## Discriminant

The discriminant is the part of the quadratic formula that is located under the root sign.
The discriminant is used to determine the type of roots of a quadratic equation. The discriminant is defined as:

$$D = b^2 - 4ac$$

Where $a$, $b$, and $c$ is the coefficient of the quadratic equation $ax^2 + bx + c = 0$.
Here are some possible discriminant values:

-   If $D > 0$, then the quadratic equation has real number solutions.
-   If $D = 0$, then the quadratic equation has two equal real roots.
-   If $D < 0$, then the quadratic equation has two complex roots.

## Using the Quadratic Formula

The roots of a quadratic equation are two values $x$, which is obtained by solving the quadratic equation.
The roots of this quadratic equation are also called the zeros of the equation.
For example, the roots of the equation $x^2 - 3x - 4 = 0$ can be searched using the following method:

$$\begin{align*}
x &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \\
x &= \frac{-(-3) \pm \sqrt{3^2 - 4\cdot1\cdot(-4)}}{2\cdot1} \\
x &= \frac{3 \pm \sqrt{9 - - 16}}{2} \\
x &= \frac{3 \pm \sqrt{9 + 16}}{2} \\
x &= \frac{3 \pm \sqrt{25}}{2} \\
x &= \frac{3 \pm 5}{2}
\end{align*}$$

Let's simplify it to
$$x = \frac{3 ± 5}{2}$$
$$x = \frac{8}{2} \text{ atau } x = -\frac{2}{2}$$

Which eventually becomes $x = 4$ or $x = -1$. So, the roots of the equation $x^2 - 3x - 4 = 0$ is $x = 4$ and $x = -1$.

If implemented in code, the result would be like this:

:::tabs
==Javascript

```js
function findRootsStepByStep(a, b, c) {
	// Step 1: Calculate b^2 and 4ac
	const bSquared = b * b;
	const fourAC = 4 * a * c;
	Step2: Calculate discriminant
	const discriminant = bSquared - fourAC;

	if (discriminant >= 0) {
		// If discriminant >= 0, then continue with real roots
		// Step 3: Calculate the roots from discriminant
		const sqrtDiscriminant = Math.sqrt(discriminant);
		// Step 4: Calculate two possible values for x
		const root1 = (-b + sqrtDiscriminant) / (2 * a);
		const root2 = (-b - sqrtDiscriminant) / (2 * a);
		console.log(`x1 = (-${b} + ${sqrtDiscriminant}) / (2 * ${a}) = ${root1}`);
		console.log(`x2 = (-${b} - ${sqrtDiscriminant}) / (2 * ${a}) = ${root2}`);
		console.log(`The roots are: x1 = ${root1} dan x2 = ${root2}`);
	} else {
		// If discriminant < 0, then it's a complex root
		const realPart = -b / (2 * a);
		const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
		console.log(`x1 = ${realPart} + ${imaginaryPart}i`);
		console.log(`x2 = ${realPart} - ${imaginaryPart}i`);
	}
}

// Example for equation x^2 - 3x - 4 = 0
const a = 1;
const b = -3;
const c = -4;
findRootsStepByStep(a, b, c);
```

== C++

```cpp
#include <iostream>
#include <cmath>

fun findRootsStepByStep(a: Double, b: Double, c: Double) {
    // Step 1: Calculate b^2 and 4ac
    val bSquared = b * b
    val fourAC = 4 * a * c

    Step2: Calculate discriminant
    val discriminant = bSquared - fourAC

    if (discriminant >= 0) {
        // If discriminant >= 0, then continue with real roots
        // Step 3: Calculate the roots from discriminant
        val sqrtDiscriminant = sqrt(discriminant)

        // Step 4: Calculate two possible values for x
        val root1 = (-b + sqrtDiscriminant) / (2 * a)
        val root2 = (-b - sqrtDiscriminant) / (2 * a)
        println("x1 = (-$b + $sqrtDiscriminant) / (2 * $a) = $root1")
        println("x2 = (-$b - $sqrtDiscriminant) / (2 * $a) = $root2")
        println("The roots are: x1 = $root1 dan x2 = $root2")
    } else {
        // If discriminant < 0, then it's a complex root
        val realPart = -b / (2 * a)
        val imaginaryPart = sqrt(-discriminant) / (2 * a)
        println("x1 = $realPart + ${imaginaryPart}i")
        println("x2 = $realPart - ${imaginaryPart}i")
    }
}

fun main() {
    // Example for equation x^2 - 3x - 4 = 0
    val a = 1.0
    val b = -3.0
    val c = -4.0
    findRootsStepByStep(a, b, c)
}

```

== Kotlin

```kotlin
import kotlin.math.sqrt

fun findRootsStepByStep(a: Double, b: Double, c: Double) {
    // Step 1: Calculate b^2 and 4ac
    val bSquared = b * b
    val fourAC = 4 * a * c

    Step2: Calculate discriminant
    val discriminant = bSquared - fourAC

    if (discriminant >= 0) {
        // If discriminant >= 0, then continue with real roots
        // Step 3: Calculate the roots from discriminant
        val sqrtDiscriminant = sqrt(discriminant)

        // Step 4: Calculate two possible values for x
        val root1 = (-b + sqrtDiscriminant) / (2 * a)
        val root2 = (-b - sqrtDiscriminant) / (2 * a)
        println("x1 = (-$b + $sqrtDiscriminant) / (2 * $a) = $root1")
        println("x2 = (-$b - $sqrtDiscriminant) / (2 * $a) = $root2")
        println("The roots are: x1 = $root1 dan x2 = $root2")
    } else {
        // If discriminant < 0, then it's a complex root
        val realPart = -b / (2 * a)
        val imaginaryPart = sqrt(-discriminant) / (2 * a)
        println("x1 = $realPart + ${imaginaryPart}i")
        println("x2 = $realPart - ${imaginaryPart}i")
    }
}

fun main() {
    // Example for equation x^2 - 3x - 4 = 0
    val a = 1.0
    val b = -3.0
    val c = -4.0
    findRootsStepByStep(a, b, c)
}
```
== Python
``` python
import math

def findRootsStepByStep(a, b, c):
	# Step 1: Calculate b^2 and 4ac
	bSquared = b * b
	fourAC = 4 * a * c
	# Step 2: Calculate discriminant
	discriminant = bSquared - fourAC

	if discriminant >= 0:
		# If discriminant >= 0, then continue with real roots
		# Step 3: Calculate the roots from discriminant
		sqrtDiscriminant = math.sqrt(discriminant)
		# Step 4: Calculate two possible values for x
		root1 = (-b + sqrtDiscriminant) / (2 * a)
		root2 = (-b - sqrtDiscriminant) / (2 * a)
		print(f"x1 = (-{b} + {sqrtDiscriminant}) / (2 * {a}) = {root1}")
		print(f"x2 = (-{b} - {sqrtDiscriminant}) / (2 * {a}) = {root2}")
		print(f"The roots are: x1 = {root1} dan x2 = {root2}")
	else:
		# If discriminant < 0, then it's a complex root
		realPart = -b / (2 * a)
		imaginaryPart = math.sqrt(-discriminant) / (2 * a)
		print(f"x1 = {realPart} + {imaginaryPart}i")
		print(f"x2 = {realPart} - {imaginaryPart}i")

# Example for equation x^2 - 3x - 4 = 0
a = 1
b = -3
c = -4
findRootsStepByStep(a, b, c)
```
