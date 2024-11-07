# Persen

Pernah dapat diskon pas belanja?, biasanya kalo gak di coret ya pake tanda persen ($\%$). Nah, persen ini adalah cara kita mengukur seberapa besar atau kecil suatu nilai dibandingkan dengan nilai aslinya.

Misalnya kamu beli baju seharga Rp. $100.000$ tapi kamu dapat diskon $20\%$, berarti kamu bisa beli bajunya dengan harga Rp. $80.000$.

Cara ngitung harga diskon itu gampang banget, kita bisa pakai rumus:
$$ nilaiDiskon = \frac{harga}{100} \times persen $$

Jadi kalo kita mau ngitung $20\%$ dari $100.000$ kita bisa tulis:
$$ nilaiDiskon = \frac{100.000}{100} \times 20\% = 20.000 $$

karena dibagi $100$ jadi kita bisa kurangi dua nol dari $100.000$ jadi $1.000$ dan dikalikan $20$ jadi $20.000$.

Kalo diubah ke kodingan, kita bisa tulis seperti ini:
:::tabs
== Javascript
```js
let harga = 100000;
let diskon = 20;
let nilaiDiskon = (harga / 100) * diskon; // 20000
```
== Kotlin
```kt
val harga = 100000
val diskon = 20
val nilaiDiskon = (harga / 100) * diskon // 20000
```
== C++
```cpp
int harga = 100000;
int diskon = 20;
int nilaiDiskon = (harga / 100) * diskon; // 20000
```
== Python
```python
harga = 100000
diskon = 20
nilaiDiskon = (harga / 100) * diskon # 20000.0
```
:::

## Mencari Nilai Asli

Kalo sebelumnya kita ngitung persen dari nilai asli, sekarang kita akan mencari nilai asli dari nilai diskon tersebut. Caranya tinggal dibalik aja rumusnya jadi:
$$ nilai = \frac{nilaiDiskon}{diskon} \times 100 $$

Misalnya kita punya nilai diskon sebesar $20.000$ dan kita mau cari nilai aslinya, kita bisa tulis:
$$ nilai = \frac{20.000}{20\%} \times 100 = 100.000 $$

Kalo diubah ke kodingan, kita bisa tulis seperti ini:
:::tabs
== Javascript
```js
let nilaiDiskon = 20000;
let diskon = 20;
let harga = (nilaiDiskon / diskon) * 100; // 100000
```
== Kotlin
```kt
val nilaiDiskon = 20000
val diskon = 20
val harga = (nilaiDiskon / diskon) * 100 // 100000
```
== C++
```cpp
int nilaiDiskon = 20000;
int diskon = 20;
int harga = (nilaiDiskon / diskon) * 100; // 100000
```
== Python
```python
nilaiDiskon = 20000
diskon = 20
harga = (nilaiDiskon / diskon) * 100 # 100000.0

```
:::

## Mencari Persen

Kalo sebelumnya kita ngitung persen dari nilai asli, sekarang kita akan mencari nilai diskon dari nilai asli tersebut. Rumusnya kita ubah jadi:
$$ persen = \frac{nilaiDiskon}{nilai} \times 100 $$
Misalnya kita punya nilai asli sebesar $100.000$, dan nilai diskon $20.000$ lalu kita mau cari persennya, kita bisa tulis:
$$ persen = \frac{20.000}{100.000} \times 100 = 20\% $$

Kalo diubah ke kodingan, kita bisa tulis seperti ini:
:::tabs
== Javascript
```js
let harga = 100000;
let nilaiDiskon = 20000;
let persen = (nilaiDiskon / harga) * 100; // 20
```
== Kotlin
```kt
val harga = 100000
val nilaiDiskon = 20000
val persen = (nilaiDiskon / harga) * 100 // 20
```
== C++
```cpp
int harga = 100000;
int nilaiDiskon = 20000;
int persen = (nilaiDiskon / harga) * 100; // 20
```
== Python
```python
harga = 100000
nilaiDiskon = 20000
persen = (nilaiDiskon / harga) * 100 # 20.0
```
:::
