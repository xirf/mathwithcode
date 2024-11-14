---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "Math W Code"
    text: "Learn mathematics with lines of code"
    tagline: Mathematics with a different approach
    image:
        src: /icon.png
        alt: Math W Code Logo
    actions:
        - theme: brand
          text: Learn Now
          link: /en/guide/
        - theme: alt
          text: Contribute
          link: https://github.com/xirf/mathwithcode
features:
  - icon: 🔢
    title: Arithmetic
    details: Numbers, Operations, Factors, Multiples and others
    link: /en/arithmetic/numbers/
    linkText: Learn
  - icon: 📐
    title: Algebra
    details: Polynomials, Equations, Matrices, Determinants and others
    link: /en/algebra/function/
    linkText: Learn
  - icon: 📈
    title: Linear Algebra
    details: Vectors, Vector Spaces, Orthogonality and others
    link: /en/linear-algebra/linear-transformation
    linkText: Learn
  - icon: 📊
    title: Statistics
    details: Data, Distribution, Regression, Hypothesis Testing and others
    link: /en/statistics/measures-concentration-dispersion
    linkText: Learn
  - icon: 🔄️
    title: Calculus
    details: Limit, Derivative, and Integration  
    link: /en/calculus/limit
    linkText: Learn
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
