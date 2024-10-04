# Persen

Pernah dapat diskon pas belanja?, biasanya kalo gak di coret ya pake tanda persen ($%$). Nah, persen ini adalah cara kita mengukur seberapa besar atau kecil suatu nilai dibandingkan dengan nilai aslinya. 

Misalnya kamu beli baju seharga Rp. $100.000$ tapi kamu dapat diskon $20\%$, berarti kamu bisa beli bajunya dengan harga Rp. $80.000$.

Cara ngitung persen itu gampang banget, kita bisa pakai rumus:
$$ persen = \frac{nilai}{100} \times persen $$

Jadi kalo kita mau ngitung $20\%$ dari $100.000$ kita bisa tulis:
$$ persen = \frac{100.000}{100} \times 20\% = 20.000 $$

karena dibagi $100$ jadi kita bisa kurangi dua nol dari $100.000$ jadi $1.000$ dan dikalikan $20$ jadi $20.000$.

Kalo diubah ke kodingan, kita bisa tulis seperti ini:
:::tabs
== Javascript
```js
let harga = 100000;
let diskon = 20;
let persen = (harga / 100) * diskon; // 20000
```
== Kotlin
```kt
val harga = 100000
val diskon = 20
val persen = (harga / 100) * diskon // 20000
```
== C++
```cpp
int harga = 100000;
int diskon = 20;
int persen = (harga / 100) * diskon; // 20000
```
:::

## Mencari Nilai Asli

Kalo sebelumnya kita ngitung persen dari nilai asli, sekarang kita akan mencari nilai asli dari nilai persen tersebut. Caranya tinggal dibalik aja rumusnya jadi:
$$ nilai = \frac{persen}{persen} \times 100 $$

Misalnya kita punya nilai persen sebesar $20.000$ dan kita mau cari nilai aslinya, kita bisa tulis:
$$ nilai = \frac{20.000}{20\%} \times 100 = 100.000 $$

Kalo diubah ke kodingan, kita bisa tulis seperti ini:
:::tabs
== Javascript
```js
let persen = 20000;
let diskon = 20;
let harga = (persen / diskon) * 100; // 100000
```
== Kotlin
```kt
val persen = 20000
val diskon = 20
val harga = (persen / diskon) * 100 // 100000
```
== C++
```cpp
int persen = 20000;
int diskon = 20;
int harga = (persen / diskon) * 100; // 100000
```
:::

## Mencari Persen

Kalo sebelumnya kita ngitung persen dari nilai asli, sekarang kita akan mencari nilai persen dari nilai asli tersebut. Rumusnya kita ubah jadi:
$$ persen = \frac{nilai}{nilai} \times 100 $$
Misalnya kita punya nilai asli sebesar $100.000$ dan kita mau cari persennya, kita bisa tulis:
$$ persen = \frac{100.000}{100.000} \times 100 = 20\% $$

Kalo diubah ke kodingan, kita bisa tulis seperti ini:
:::tabs
== Javascript
```js
let harga = 100000;
let diskon = 20000;
let persen = (diskon / harga) * 100; // 20
```
== Kotlin
```kt
val harga = 100000
val diskon = 20000
val persen = (diskon / harga) * 100 // 20
```
== C++
```cpp
int harga = 100000;
int diskon = 20000;
int persen = (diskon / harga) * 100; // 20
```
:::
