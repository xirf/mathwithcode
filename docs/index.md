---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "Math W Code"
    text: "Belajar matematika dengan barisan kode"
    tagline: Matematika dengan pendekatan yang berbeda
    image:
        src: /icon.png
        alt: Math W Code Logo
    actions:
        - theme: brand
          text: Belajar Sekarang
          link: /guide
        - theme: alt
          text: Beri Kontribusi
          link: https://github.com/xirf/mathwithcode
features:
  - icon: 🔢
    title: Arimatika
    details: Bilangan, Operasi, Faktor, Kelipatan dan sebagainya
    link: /arithmetic/numbers
    linkText: Pelajari
  - icon: 📐
    title: Aljabar
    details: Polinomial, Persamaan, Matriks, Determinan dan sebagainya 
    link: /algebra/function
    linkText: Pelajari
  - icon: 📈
    title: Aljabar Linear
    details: Vektor, Ruang Vektor, Orthogonalitas dan sebagainya
    link: /linear-algebra/linear-transformation
    linkText: Pelajari
  - icon: 📊
    title: Statistika
    details: Data, Distribusi, Regresi, Uji Hipotesis dan sebagainya
    link: /statistics/measures-concentration-dispersion
    linkText: Pelajari
---

<script setup>
  import Home from '@theme/components/HomePage.vue'
</script>

<Home />

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #f6c79f 30%, #35dada);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #f6c79f 50%, #35dada 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
