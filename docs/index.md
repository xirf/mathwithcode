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
    

# features:
#     - title: Feature A
#       details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#     - title: Feature B
#       details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#     - title: Feature C
#       details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

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
