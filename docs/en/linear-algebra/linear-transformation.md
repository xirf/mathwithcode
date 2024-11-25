---
contributors:
  - name: "Rijal"
    username: "Rnov24"
---
# Linear Transformation

A linear transformation is a rule that maps each vector in one vector space to another vector in a possibly different vector space,
while preserving the operations of vector addition and scalar multiplication.
In other words, a linear transformation is a function that takes a vector as input and produces a vector as output,
subject to the following constraints:

* **Additivity**: A transformation applied to the addition of two vectors produces the same result as the sum of the results of the transformation on each vector.
$$
\mathbf{T}(\mathbf{u} + \mathbf{v}) = \mathbf{T}(\mathbf{u}) + \mathbf{T}(\mathbf{v})
$$
*  **Homogeneity**: A transformation applied to a scalar multiple of a vector is the same as a scalar multiple of the transformation applied to that vector.
$$
\mathbf{T}(c\mathbf{u}) = c\mathbf{T}(\mathbf{u})
$$

# Types of Linear Transformations

Linear transformations can be used to change a vector into another vector, such as enlarging, shrinking, or even changing the rotation of the vector. Here are some types of linear transformations:

## Scaling

We can use scalars to enlarge or reduce vectors.
$$
\mathbf{u}= \begin{pmatrix}i \\ j \end{pmatrix}
$$
$$
\mathbf{T}(c\mathbf{u})= c \begin{pmatrix}i \\ j \end{pmatrix} = \begin{pmatrix}i \cdot c \\ j \cdot c \end{pmatrix}
$$

It can be implemented into a program, like the followings:
:::tabs key:lang
== JavaScript
``` js
function scaling(vector, scalar) {
    let result = [];
    for (let i = 0; i < vector.length; i++) {
        result.push(vector[i] * scalar);
    }
    return result;
}

// example usage
let vector = [2, 3];
let scalar = 2;
let result = scaling(vector, scalar);
console.log(result); // output: [4, 6]
```
== C++
``` cpp
#include <iostream>
#include <cmath>

void scaling(double vector[], double scalar) {
    double resultVector[sizeof(vector) / sizeof(vector[0])];
    for (int i = 0; i < sizeof(vector) / sizeof(vector[0]); i++) {
        resultVector[i] = vector[i] * scalar;
    }
    std::cout << "The result of scaling vector [" << vector[0] << ", " << vector[1] << "] with scalar " << scalar << " is [" << resultVector[0] << ", " << resultVector[1] << "]" << std::endl;
}

int main() {
    double vector[] = {2, 3};
    double scalar = 2;

    scaling(vector, scalar); // Output: [4, 6]
    return 0;
}
```
== Kotlin
``` kotlin
fun scaling(vector: List<Int>, scalar: Int): List<Int> {
    val result = mutableListOf<Int>()
    for (value in vector) {
        result.add(value * scalar)
    }
    return result
}

// example usage
fun main() {
    val vector = listOf(2, 3)
    val scalar = 2
    val result = scaling(vector, scalar)
    println(result) // output: [4, 6]
}
```
== Python
``` py
def scaling(vector, scalar):
    result = []
    for i in range(len(vector)):
        result.append(vector[i] * scalar)
    return result

# example usage
vector = [2, 3]
scalar = 2
result = scaling(vector, scalar)
print(result)  # output: [4, 6]
```
:::

## Rotation

We can rotate a vector by multiplying it by a rotation matrix $R(\theta)$, where $\theta$ is the rotation angle of the vector.
$$
R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}
$$
$$
R(\theta)u = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}  \begin{pmatrix}i \\ j \end{pmatrix}= \begin{pmatrix} i\cos\theta - j\sin\theta \\ i\sin\theta + j\cos\theta \end{pmatrix}
$$

It can be implemented into a program, like the followings:
:::tabs key:lang
== JavaScript
``` js
function rotation(vector, theta) {
    // Initialize array to store the rotation result
    let result = [];

    // Calculate the cosine and sine of the angle theta
    let cosTheta = Math.cos(theta);
    let sinTheta = Math.sin(theta);

    // Perform rotation calculation for i and j components
    result.push(vector[0] * cosTheta - vector[1] * sinTheta); // i component
    result.push(vector[0] * sinTheta + vector[1] * cosTheta); // j component

    // Return rotation result
    return result;
}

// example usage
let vector = [2, 3];
let theta = Math.PI / 2; // 90 degrees
let result = rotation(vector, theta);
console.log(result); // expected output: [-3, 2]
```
== C++
``` cpp
#include <iostream>
#include <cmath>

void rotation(double vector[], double theta, double result[]) {
    // Calculate cosine and sine of the angle theta
    double cosTheta = std::cos(theta);
    double sinTheta = std::sin(theta);

    // Perform rotation calculation for i and j components
    result[0] = vector[0] * cosTheta - vector[1] * sinTheta; // i component
    result[1] = vector[0] * sinTheta + vector[1] * cosTheta; // j component
}

int main() {
    double vector[] = {2, 3};
    double theta = M_PI / 2; // 90 degrees
    double result[2];

    rotation(vector, theta, result);
    std::cout << "(" << result[0] << ", " << result[1] << ")" << std::endl; // expected output: (-3, 2)

    return 0;
}
```
== Kotlin
``` kotlin
import kotlin.math.cos
import kotlin.math.sin
import kotlin.math.PI

fun rotation(vector: List<Double>, theta: Double): List<Double> {
    // Calculate the cosine and sine of the angle theta
    val cosTheta = cos(theta)
    val sinTheta = sin(theta)

    // Perform rotation calculation for i and j components
    val iComponent = vector[0] * cosTheta - vector[1] * sinTheta
    val jComponent = vector[0] * sinTheta + vector[1] * cosTheta

    // Return rotation result
    return listOf(iComponent, jComponent)
}

// example usage
fun main() {
    val vector = listOf(2.0, 3.0)
    val theta = PI / 2 // 90 degrees
    val result = rotation(vector, theta)
    println(result) // expected output: [-3.0, 2.0]
}
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
:::

## Shifting

We can perform shearing to make a vector appear shifted or distorted by multiplying it with a shearing matrix \( S(a, b) \), where \( a \) and \( b \) are the shearing parameters. Set \( b = 0 \) for horizontal shearing or \( a = 0 \) for vertical shearing, or combine both for diagonal shearing.

$$
S(a, b) = \begin{pmatrix} 1 & a \\ b & 1 \end{pmatrix}
$$
$$
S(a, b)u = \begin{pmatrix} 1 & a \\ b & 1 \end{pmatrix} \begin{pmatrix} i \\ j \end{pmatrix} = \begin{pmatrix} i + aj \\ bi + j \end{pmatrix}
$$

This can be implemented in a program as follows:

:::tabs key:lang
== JavaScript
``` js
function shear(vector, a, b) {
    // Calculate the shearing result
    let result = [vector[0] * 1 + a * vector[1], b * vector[0] + vector[1] * 1];
    return result;
}

// example usage
let vector = [2, 3];
let a = 1; // horizontal shearing parameter
let b = 0; // vertical shearing parameter
let result = shear(vector, a, b);
console.log(result); // expected output: [5, 3]
```
== C++
``` cpp
#include <iostream>
#include <vector>

std::vector<double> shear(const std::vector<double>& vector, double a, double b) {
    // Calculate the shearing result
    std::vector<double> result = {vector[0] * 1 + a * vector[1], b * vector[0] + vector[1] * 1};
    return result;
}

int main() {
    // example usage
    std::vector<double> vector = {2, 3};
    double a = 1; // horizontal shearing parameter
    double b = 0; // vertical shearing parameter
    std::vector<double> result = shear(vector, a, b);
    std::cout << "(" << result[0] << ", " << result[1] << ")" << std::endl; // expected output: (5, 3)
    return 0;
}
```
== Kotlin
``` kotlin
fun shear(vector: List<Double>, a: Double, b: Double): List<Double> {
    // Calculate the shearing result
    val iComponent = vector[0] * 1 + a * vector[1]
    val jComponent = b * vector[0] + vector[1] * 1
    return listOf(iComponent, jComponent)
}

// example usage
fun main() {
    val vector = listOf(2.0, 3.0)
    val a = 1.0 // horizontal shearing parameter
    val b = 0.0 // vertical shearing parameter
    val result = shear(vector, a, b)
    println(result) // expected output: [5.0, 3.0]
}
```
== Python
``` py
def shear(vector, a, b):
    # Calculate the shearing result
    result = [vector[0] * 1 + a * vector[1], b * vector[0] + vector[1] * 1]
    return result

# example usage
vector = [2, 3]
a = 1  # horizontal shearing parameter
b = 0  # vertical shearing parameter
result = shear(vector, a, b)
print(result)  # expected output: [5, 3]
```
:::


## Reflection

We can perform a reflection to make a vector appear as a mirror image by multiplying it with a reflection matrix \( F(x, y) \), where \( x \) and \( y \) are the reflection parameters. Set \( x = -1 \) for horizontal reflection or \( y = -1 \) for vertical reflection, or combine both for a diagonal reflection.

* Reflection across the x-axis:
$$
R_xu = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \begin{pmatrix} i \\ j \end{pmatrix} = \begin{pmatrix} i \\ -j \end{pmatrix}
$$
* Reflection across the y-axis:
$$
R_yu = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} i \\ j \end{pmatrix} = \begin{pmatrix} -i \\ j \end{pmatrix}
$$

This can be implemented in a program as follows:

:::tabs key:lang
== JavaScript
``` js
function reflect(vector, axis) {
    let result;
    if (axis === "x") {
        result = [vector[0], -vector[1]];
    } else if (axis === "y") {
        result = [-vector[0], vector[1]];
    }
    return result;
}

// example usage
let vector = [2, 3];
let result = reflect(vector, "x"); // or reflect(vector, "y") for reflection across y-axis
console.log(result); // expected output: [2, -3] or [-2, 3]
```
== C++
```cpp
#include <iostream>

void reflect(const double vector[], const char axis, double result[]) {
    if (axis == 'x') {
        result[0] = vector[0];
        result[1] = -vector[1];
    } else if (axis == 'y') {
        result[0] = -vector[0];
        result[1] = vector[1];
    }
}

int main() {
    double vector[] = {2, 3};
    char axis = 'x'; // 'x' for reflection across x-axis, 'y' for reflection across y-axis
    double result[2];

    reflect(vector, axis, result);
    std::cout << "Reflection of vector [" << vector[0] << ", " << vector[1] << "] across ";
    if (axis == 'x') {
        std::cout << "x-axis is [" << result[0] << ", " << result[1] << "]" << std::endl; // expected output: (2, -3)
    } else if (axis == 'y') {
        std::cout << "y-axis is [" << result[0] << ", " << result[1] << "]" << std::endl; // expected output: (-2, 3)
    }

    return 0;
}
```
== Kotlin
``` kotlin
fun reflect(vector: List<Double>, axis: String): List<Double> {
    return if (axis == "x") {
        listOf(vector[0], -vector[1])
    } else if (axis == "y") {
        listOf(-vector[0], vector[1])
    } else {
        vector // return the original vector if axis is not x or y
    }
}

// example usage
fun main() {
    val vector = listOf(2.0, 3.0)
    val axis = "x" // "x" for reflection across x-axis, "y" for reflection across y-axis
    val result = reflect(vector, axis)
    println(result) // expected output: [2.0, -3.0] or [-2.0, 3.0]
}
```
== Python
``` py
def reflect(vector, axis):
    if axis == "x":
        result = [vector[0], -vector[1]]
    elif axis == "y":
        result = [-vector[0], vector[1]]
    return result

# example usage
vector = [2, 3]
axis = "x"  # "x" for reflection across x-axis, "y" for reflection across y-axis
result = reflect(vector, axis)
print(result)  # expected output: [2, -3] or [-2, 3]
```
:::

::: info
In fact, all the transformations mentioned here are examples of linear transformations. Linear transformations allow for creating custom transformation matrices, as long as they adhere to the rules of Additivity, Homogeneity, and Matrix Multiplication.
:::
