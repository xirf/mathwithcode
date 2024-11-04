---
contributors:
  - name: "Rijal"
  - username: "Rnov24"
---
# Matrix Multiplication
Matrix multiplication is a mathematical operation used to combine two matrices by multiplying their corresponding elements.
The result of matrix multiplication is a new matrix that has the same number of rows as the first matrix and the same number of columns as the second matrix.

## Rules of Matrix Multiplication

Here are the rules for matrix multiplication:

*   The number of rows of the first matrix must be equal to the number of columns of the second matrix.
$$
A ^{m\times n} \times B^{n \times p}
$$
*   The result of matrix multiplication is a new matrix with the same number of rows as the first matrix and the same number of columns as the second matrix.
$$
A ^{m\times n} \times B^{n \times p} = AB^{m \times p}
$$
*   The elements of the matrix product are calculated by multiplying the corresponding elements of the first and second matrices, then adding the results.
$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23}
\end{bmatrix} \times
\begin{bmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22} \\
b_{31} & b_{32}
\end{bmatrix} =
\begin{bmatrix}
a_{11}*b_{11} + a_{12}*b_{21} + a_{13}*b_{31} & a_{11}*b_{12} + a_{12}*b_{22} + a_{13}*b_{32} \\
a_{21}*b_{11} + a_{22}*b_{21} + a_{23}*b_{31} & a_{21}*b_{12} + a_{22}*b_{22} + a_{23}*b_{32}
\end{bmatrix}
$$

## Code examples and implementation
An example of a matrix multiplication problem is as follows:

Given two matrices A and B of size 2x2 and 2x3, respectively:

$$
A =
\begin{bmatrix}
2 & 3 \\
4 & 1
\end{bmatrix}
$$

$$
B =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
$$

To solve the matrix multiplication above. Here are the steps:

1. Multiply and sum the first row of matrix $A$ with the first column of matrix $B$.
   $$
   2 \times 1 + 3 \times 4 = 14
   $$
2. Multiply and sum the first row of matrix $A$ with the second column of matrix $B$.
   $$
   2 \times 2 + 3 \times 5 = 19
   $$
3. Multiply and sum the first row of matrix $A$ with the third column of matrix $B$.
   $$
   2 \times 3 + 3 \times 6 = 24
   $$
4. Multiply and sum the second row of matrix $A$ with the first column of matrix $B$.
   $$
   4 \times 1 + 1 \times 4 = 8
   $$
5. Multiply and sum the second row of matrix $A$ with the second column of matrix $B$.
   $$
   4 \times 2 + 1 \times 5 = 13
   $$
6. Multiply and sum the second row of matrix $A$ with the third column of matrix $B$.
   $$
   4 \times 3 + 1 \times 6 = 18
   $$
7. Place all elements in a new matrix.
   $$
   AB =
   \begin{bmatrix}
   14 & 19 & 24 \\
   8 & 13 & 18
   \end{bmatrix}
   $$

Below is the code implementation in multiple languages:

:::tabs
== JavaScript
```js
// Initialize arrays for matrices and result
const A = [
    [2, 3],
    [4, 1]
];

const B = [
    [1, 2, 3],
    [4, 5, 6]
];

const result = [];

// Perform matrix multiplication
for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < B[0].length; j++) {
        // Initialize variable to store the sum of products for row A and column B
        let sum = 0;
        for (let k = 0; k < A[0].length; k++) {
            // Multiply elements of row A by elements of column B and add to sum
            sum += A[i][k] * B[k][j];
        }
        // Store the result of multiplying row A by column B in result array
        result[i][j] = sum;
    }
}

console.log(result);
```
== C++
```cpp
#include <iostream>
#include <vector>

int main() {
    // Initialize matrices A and B
    std::vector<std::vector<int>> A = {{2, 3}, {4, 1}};
    std::vector<std::vector<int>> B = {{1, 2, 3}, {4, 5, 6}};
    // Initialize result matrix to store the product of A and B
    std::vector<std::vector<int>> result(A.size(), std::vector<int>(B[0].size(), 0));

    for (int i = 0; i < A.size(); i++) {
        for (int j = 0; j < B[0].size(); j++) {
            // Initialize sum to accumulate the product of elements in row A and column B
            int sum = 0;
            for (int k = 0; k < A[0].size(); k++) {
                // Multiply elements of row A and column B, add to sum
                sum += A[i][k] * B[k][j];
            }
            // Store the result of row-by-column multiplication in result matrix
            result[i][j] = sum;
        }
    }

    for (const auto& row : result) {
        for (int val : row) {
            std::cout << val << " ";
        }
        std::cout << std::endl;
    }

    return 0;
}
```
== Kotlin
``` kotlin
fun main() {
    // Initialize matrices A and B
    val A = arrayOf(
        intArrayOf(2, 3),
        intArrayOf(4, 1)
    )

    val B = arrayOf(
        intArrayOf(1, 2, 3),
        intArrayOf(4, 5, 6)
    )

    // Initialize result matrix to store the product of A and B
    val result = Array(A.size) { IntArray(B[0].size) }

    for (i in A.indices) {
        for (j in B[0].indices) {
            // Initialize sum to accumulate the product of elements in row A and column B
            var sum = 0
            for (k in A[0].indices) {
                // Multiply elements of row A and column B, add to sum
                sum += A[i][k] * B[k][j]
            }
            // Store the result of row-by-column multiplication in result matrix
            result[i][j] = sum
        }
    }

    // Display the result matrix
    for (row in result) {
        println(row.joinToString(" "))
    }
}
```
== Python
```py
# Initialize matrices A and B
A = [
    [2, 3],
    [4, 1]
]

B = [
    [1, 2, 3],
    [4, 5, 6]
]

# Initialize result matrix to store the product of A and B
result = [[0 for _ in range(len(B[0]))] for _ in range(len(A))]

for i in range(len(A)):
    for j in range(len(B[0])):
        # Initialize sum to accumulate the product of elements in row A and column B
        sum = 0
        for k in range(len(A[0])):
            # Multiply elements of row A and column B, add to sum
            sum += A[i][k] * B[k][j]
        # Store the result of row-by-column multiplication in result matrix
        result[i][j] = sum

# Display the result matrix
for row in result:
    for val in row:
        print(val, end=" ")
    print()
```
:::

For the Python programming language, there is a built-in operator for matrix multiplication, namely by using the symbol`@`. For example:
```py
# Initialize both matrices
A = [
    [2, 3],
    [4, 1]
]

B = [
    [1, 2, 3],
    [4, 5, 6]
]

# Multiple both matrices with @
result = A @ B

# Show multiplication result
for row in result:
    for val in row:
        print(val, end=" ")
    print()
```

---
Rijal
<br>
Instagram :[ ri.jalll ](https://www.instagram.com/ri.jalll)
<br>
Facebook: [ Rijal ](https://www.facebook.com/24rijal)

---
