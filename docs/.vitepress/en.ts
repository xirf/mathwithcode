import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  description: "Learn math with lines of code",
  themeConfig: {
    nav: [
      {
        text: "Learn",
        link: "/en/guide/",
      },
      {
        text: "Donation",
        link: "https://trakteer.id/xirf",
      },
    ],
    sidebar: sidebar(),
    outline: {
      level: [2, 3],
      label: "On this page",
    },
    editLink: {
      pattern:
        "https://github.com/xirf/mathwithcode/edit/master/docs/:path",
      text: "Fix this page on GitHub",
    },
    footer: {
      message: "Released under the MIT license",
      copyright: "Copyright © 2024-present Andika & Contributors",
    },
  },
})

function sidebar() {
  return [
      { text: "Guide", link: "/en/guide/" },
      {
          text: "Arithmetic",
          collapsed: false,
          items: [
              { text: "Numbers", link: "/en/arithmetic/numbers" },
              {
                  text: "Number Operations",
                  link: "/en/arithmetic/operation-on-number",
              },
              { text: "Factors and Multiples", link: "/en/arithmetic/factors" },
              { text: "Percent", link: "/en/arithmetic/percent" },
          ],
      },
      {
          text: "Algebra",
          collapsed: false,
          items: [
              { text: "Function", link: "/en/algebra/function" },
              { text: "Linear Equation", link: "/en/algebra/linear-equation" },
              { text: "Quadratic Equation", link: "/en/algebra/quadratic-equation" },
          ],
      },
      {
          text: "Linear Algebra",
          collapsed: false,
          items: [
              {
                  text: "Linear Transformation",
                  link: "/en/linear-algebra/linear-transformation",
              },
              {
                  text: "Matrix Multiplication",
                  link: "/en/linear-algebra/matrix-multiplication",
              },
          ],
      },
      {
          text: "Statistics",
          collapsed: false,
          items: [
              {
                  text: "Measures of Location",
                  link: "/en/statistics/measures-concentration-dispersion",
              },
          ],
      },
      {
        text: "Calculus",
        collapsed: false,
        items: [
            {
                text: "Limit",
                link: "/en/calculus/limit",
            },
        ],
      },
  ]
}
