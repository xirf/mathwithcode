import { defineConfig } from "vitepress";

export const id = defineConfig({
  lang: 'id-ID',
  description: 'Belajar matematika dengan barisan kode',
  themeConfig: {
    nav: [
      {
        text: 'Belajar', link: '/guide/',
      },
      {
        text: 'Donasi', link: 'https://trakteer.id/xirf'
      }
    ],
    sidebar: sidebar(),
    outline: {
      level: [2,3],
      label: 'Di halaman ini'
    },
    editLink: {
      pattern: 'https://github.com/xirf/mathwithcode/edit/master/docs/:path',
      text: 'Perbaiki halaman ini di GitHub'
    },
    footer: {
      message: 'Dirilis di bawah lisensi MIT',
      copyright: 'Copyright © 2024-present Andika & Contributors'
    }
  },
})

function sidebar() {
  return [
      { text: "Panduan", link: "/guide/" },
      {
          text: "Aritmatika",
          collapsed: false,
          items: [
              { text: "Bilangan", link: "/arithmetic/numbers" },
              {
                  text: "Operasi Bilangan",
                  link: "/arithmetic/operation-on-number",
              },
              { text: "Faktor dan Kelipatan", link: "/arithmetic/factors" },
              { text: "Persen", link: "/arithmetic/percent" },
          ],
      },
      {
          text: 'Aljabar Linear',
          collapsed: false,
          items: [
              { text: 'Transformasi Linear', link: '/linear-algebra/linear-transformation' },
              { text: 'Matriks', link: '/linear-algebra/matrix' },
              { text: 'Vektor', link: '/linear-algebra/vector' },
          ]
      },
      {
          text: "Aljabar Linear",
          collapsed: false,
          items: [
              {
                  text: "Transformasi Linear",
                  link: "/linear-algebra/linear-transformation",
              },
              {
                  text: "Perkalian Matriks",
                  link: "/linear-algebra/matrix-multiplication",
              },
          ],
      },
      {
          text: "Statistika",
          collapsed: false,
          items: [
              {
                  text: "Ukuran Letak",
                  link: "/statistics/measures-concentration-dispersion",
              },
          ],
      },
  ]
}
