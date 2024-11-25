# Percentage

Have you ever received a discount when shopping? Usually, if you don't cross it out, you use a percentage sign ($\%$). Well, this percentage is how we measure how big or small a value is compared to its original value.

For example, you buy clothes for $\$10$ but you get a $20\%$ discount, that means you can buy the clothes for $\$8$.

How to calculate percentage vakue is very easy, we can use the formula:
$$ percentage\;value = \frac{original\;value}{100} \times percentage $$

So if we want to calculate $20\%$ from $\$10$ we can write it as:
$$ percentage\;value = \frac{10}{100} \times 20\% = 2 $$

because divided by $100$, we can subtract two zeros from $10$ which becomes $0.1$ and multiply it by $20$ to get $2$.

If we convert it to code, we can write it like this:
:::tabs key:lang
== Javascript
```js
let price = 10;
let discount = 20;
let percentageValue = (price / 100) * discount; // 2
```
== Kotlin
```kt
val price = 10
val discount = 20
val percentageValue = (price / 100) * discount // 2
```
== C++
```cpp
int price = 10;
int discount = 20;
int percentageValue = (price / 100) * discount; // 2
```
== Python
```python
price = 10
discount = 20
percentageValue = (price / 100) * discount # 2.0
```
:::

## Finding True Value

If previously we calculated the percentage of the original value, now we will find the original value of the percentage value. The method is simply to reverse the formula so:
$$ original\;value = \frac{percentage\;value}{percentage} \times 100 $$

For example, we have a percentage value of $2$ and we want to find the original value, we can write:
$$ original\;value = \frac{2}{20\%} \times 100 = 10 $$

If we convert it to code, we can write it like this:
:::tabs key:lang
== Javascript
```js
let percentageValue = 2;
let discount = 20;
let price = (percentageValue / discount) * 100; // 10
```
== Kotlin
```kt
val percentageValue = 2
val discount = 20
val price = (percentageValue / discount) * 100 // 10
```
== C++
```cpp
int percentageValue = 2;
int discount = 20;
int price = (percentageValue / discount) * 100; // 10
```
== Python
```python
percentageValue = 2
discount = 20
price = (percentageValue / discount) * 100 # 10.0

```
:::

## Finding Percentage

If previously we calculated the percentage of the original value, now we will find the percentage value of the original value. We change the formula to:
$$ percentage = \frac{original\;value}{percentage\;value} \times 100 $$
For example, we have an original value of $10$ and we want to find the percentage, we can write:
$$ percentage = \frac{2}{10} \times 100 = 20\% $$

If we convert it to code, we can write it like this:
:::tabs key:lang
== Javascript
```js
let price = 10;
let discount = 2;
let percentage = (discount / price) * 100; // 20
```
== Kotlin
```kt
val price = 10
val discount = 2
val percentage = (discount / price) * 100 // 20
```
== C++
```cpp
int price = 10;
int discount = 2;
int percentage = (discount / price) * 100; // 20
```
== Python
```python
harga = 10
discount = 2
percentage = (discount / price) * 100 # 20.0
```
:::
