# Linear Equations

Linear equations can be interpreted as an equation whose terms have constants (fixed values) with a single variable.
This equation is called linear because the relationship between its variables forms a straight line when depicted in a two-dimensional graph.
Before starting, we must understand several things below

1. **Variable**: A substitute for a number whose value is not yet known.
2. **Coefficient**: A number that multiplies a variable.
3. **Constant**: A number that has no variables.
4. **Term**: Part of an equation consisting of variables, coefficients, and constants.

Linear equations also have several rules/properties that must be understood, including:

-   Addition and subtraction of numbers on both sides will not change the value of the equation.
-   Multiplication and division of numbers on both sides does not change the value of the equation.
-   The value of the equation does not change if the same number is added or subtracted from both sides.
-   If you move sides of an equation, then addition changes to subtraction, multiplication changes to division, and vice versa.

## Linear Equation in One Variable

A linear equation of one variable is an equation that has one variable.
This equation is usually written in the form $ax + b = c$ where $a$, $b$, and $c$ is a real number and $x$ is a variable.

Example of a linear equation in one variable:
$$ 2x + 3 = 7 $$

To find out the value of $x$ that satisfies the equation, we have to find the value of $x$ which makes both sides of the equation equal. Here are the steps:

1. Eliminate the constant on the left side by reducing the constant on the left side with the constant on the right side.

$$\begin{align*}
    2x + 3 - 3 &= 7 - 3 \\
    2x &= 4
\end{align*}$$

2. Eliminate the coefficient of the variable by dividing both sides by the coefficient of the variable.

$$\begin{align*}
    \frac{2x}{2} &= \frac{4}{2} \\
    x &= 2\\
\end{align*}$$

3. Therefore the value of $x$ which satisfies the equation is $x = 2$.

If we implemented it in code, the code would be like this:
:::tabs
==javascript

```js
function linearEquation(a, b, c) {
	// Equation: a * x + b = c
	const x = (c - b) / a;
	return x;
}
console.log(linearEquation(2, 3, 7)); // Output: 2
```

==kotlin

```kotlin
val a = 2
val b = 3
val c = 7

// Equation: a * x + b = c
val x = (c - b) / a
println("Value of x is: $x")
```

== C++

```cpp
int linearEquation(int a, int b, int c) {
    // Equation: a * x + b = c
    int x = (c - b) / a;
    return x;
}

int main() {
    int a = 2;
    int b = 3;
    int c = 7;
    int x = linearEquation(a, b, c);
    cout << "Value of x is: " << x << endl;
    return 0;
}
```

==Python
```python
def linearEquation(a, b, c):
    # Equation: a * x + b = c
    x = (c - b) / a
    return x

a, b, c, = 2, 3, 7
x = linearEquation(a, b, c)
print(f"Value of x is: {x}")
```

:::

## Linear Equations in Two Variables

As the name suggests, this equation has two variables which are usually written in the form $ax + by = c$ where $a$, $b$, and $c$ is a real number, where $x$ and $y$ iss a variable.

Example of a linear equation of two variables:
$$ 2x + 3y = 7 $$

There are 2 ways to solve this kind of equations, namely by using the substitution and elimination methods.
For the substitution method, we can replace one of the variables with a known value.
While for the elimination method, we can eliminate one of the variables by multiplying one of the equations by a certain number.

### Substitution Method

The following is an example of solving the equation above using the substitution method:

1. First we choose one of the variables to isolate, for example we choose $x$.
2. The variables that we isolate then we save and move the others to the right.
   $$ 2x = 7 - 3y $$
3. Because the isolated value is $2x$ we then divide both sides by $2$.

$$\begin{align*}
x &= \frac{7 - 3y}{2} \\
x &= \frac{7}{2} - \frac{3y}{2} \\
\end{align*}$$

4. So we get a parametric solution from $x$

This parametric value is what will be the value later $y$ yang kita masukkan akan menghasilkan nilai $x$ yang sesuai. Misalnya nilai $y = 1$ maka:


$$\begin{align*}
x &= \frac{7 - 3(1)}{2} \\
x &= \frac{4}{2} \\
x &= 2
\end{align*}$$

What if we implement this problem as code? Here is an example of its implementation:
:::tabs
==javascript

```js
function pldv(a, b, c, y) {
	let x = (c - b * y) / a;
	return { x, y };
}

// 2x + 3y = 7 where y = 1
console.log(pldv(2, 3, 7, 1)); // Output: { x: 2, y: 1 }
```

==kotlin

```kotlin
fun pldv(a: Int, b: Int, c: Int, y: Int): Pair<Int, Int> {
    val x = (c - b * y) / a
    return Pair(x, y)
}

// 2x + 3y = 7 where y = 1
println(pldv(2, 3, 7, 1))  // Output: (2, 1)
```

== C++

```cpp
#include <iostream>
#include <utility>

std::pair<int, int> pldv(int a, int b, int c, int y) {
    int x = (c - b * y) / a;
    return std::make_pair(x, y);
}

int main() {
    // 2x + 3y = 7 where y = 1
    auto result = pldv(2, 3, 7, 1);
    std::cout << "Output: (" << result.first << ", " << result.second << ")" << std::endl;
    return 0;
}
```
== Python
``` python
def pldv(a, b, c, y):
	x = (c - b * y) / a
	return x, y

# 2x + 3y = 7 where y = 1
print(pldv(2, 3, 7, 1))# Output: (x: 2.0, y: 1)
```
:::

### Elimination Method

If we use the elimination method, we need 2 equations for comparison. For example, we have the following 2 equations:
$$ 2x + 3y = 7 $$
$$ 3x - 2y = 8 $$
If we already have two equations, we can eliminate one of the variables by multiplying one of the equations by a certain number. Here are the steps:

1. Convert both equations to standard form.
    $$ 2x + 3y = 7$$
    $$ 3x - 2y = 8$$
2. We will eliminate the variables $y$ y multiplying equation (1) by $2$ and equation (2) with $3$ (we choose the same coefficients).
    $$ 4x + (3 \times 2y) = 7 \times 2$$
    $$ 9x - (2 \times 3y) = 8 \times 3$$
    <div class="w-full max-w-32 h-1px bg-gray-500/50 my-4 mx-auto"></div>

    $$ 4x + 6y = 14$$
    $$ 9x - 6y = 24$$
3. Well, the value of $y$ is the same, so now all we have to do is reduce equation (1) by equation (2).
    $$ 4x + 6y = 14$$
    $$ 9x - 6y = 24$$
    <div class="w-full max-w-32 h-1px bg-text-base my-4 mx-auto relative after:(absolute bg-black dark:bg-white -right-5 w-4 h-1px top-0 content-[''])"></div>

    $$ -5x = -10$$

4. We divide both sides by $-5$.
    $$ \frac{-5x}{-5} = \frac{-10}{-5}$$
    $$ x = 2$$

5. Now that we have got the value $x$ now we look for the value $y$ by subtituting $x$ to one of the equations.

    $$ 2x + 3y = 7$$
    $$ 2(2) + 3y = 7$$
    $$ 4 + 3y = 7$$
    $$ 3y = 3$$
    $$ y = 1$$

6. So the value of $x$ and $y$ that satisfies the equation is $x = 2$ and $y = 1$.

What if we implement this problem as code? Here is an example of its implementation:
:::tabs
==javascript

```js
function eliminationMethod(a1, b1, c1, a2, b2, c2) {
    // Calculate coefficient for elimination
    let factor = a2 / a1;

    // Create a new equation by subtracting
    let newB2 = b2 - factor * b1;
    let newC2 = c2 - factor * c1;

    // Solve for y
    let y = newC2 / newB2;

    // Calculate x by subtituting y to equation 1
    let x = (c1 - b1 * y) / a1;

    return { x: x, y: y };
}

// 2x - 3y = 7 and 3x - 2y = 8
console.log(eliminationMethod(2, 3, 7, 3, -2, 8)); // Output: { x: 2, y: 1 }
```
== kotlin

```kotlin
fun eliminationMethod(a1: Int, b1: Int, c1: Int, a2: Int, b2: Int, c2: Int): Pair<Int, Int> {
    // Calculate coefficient for elimination
    val factor = a2 / a1

    // Create a new equation by subtracting
    val newB2 = b2 - factor * b1
    val newC2 = c2 - factor * c1

    // Solve for y
    val y = newC2 / newB2

    // Calculate x by subtituting y to equation 1
    val x = (c1 - b1 * y) / a1

    return Pair(x, y)
}

// 2x - 3y = 7 and 3x - 2y = 8
println(eliminationMethod(2, 3, 7, 3, -2, 8)) // Output: (2, 1)
```
== C++

```cpp
#include <iostream>
#include <utility>

pair<double, double> eliminationMethod(double a1, double b1, double c1, double a2, double b2, double c2) {
    // Calculate coefficient for elimination
    double factor = a2 / a1;

    // Create a new equation by subtracting
    double newB2 = b2 - factor * b1;
    double newC2 = c2 - factor * c1;

    // Solve for y
    double y = newC2 / newB2;

    // Calculate x by subtituting y to equation 1
    double x = (c1 - b1 * y) / a1;

    return make_pair(x, y);
}

int main() {
    auto result = eliminationMethod(2, 3, 7, 4, -5, 10);
    cout << "x: " << result.first << ", y: " << result.second << endl;
    // Output: x: 3, y: -1
    return 0;
}
```

==Python

```python
def eliminationMethod(a1, b1, c1, a2, b2, c2):
    # Calculate coefficient for elimination
    factor = a2 / a1

    # Create a new equation by subtracting
    newB2 = b2 - factor * b1
    newC2 = c2 - factor * c1

    # Solve for y
    y = newC2 / newB2

    # Calculate x by subtituting y to equation 1
    x = (c1 - b1 * y) / a1

    return x, y

# Example: 2x - 3y = 7 and 3x - 2y = 8
x, y = eliminationMethod(2, 3, 7, 3, -2, 8)
print(f"x: {x}, y: {y}")  # Output: x: 2, y: 1
```
:::
