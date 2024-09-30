import UnocssVitePlugin from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { visualizer } from 'rollup-plugin-visualizer'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Math W Code",
  description: "Belajar matematika dengan barisan kode",
  cleanUrls: true,
  metaChunk: true,
  markdown: {
    math: true,
  },
  sitemap: {
    hostname: "https://mathwcode.jamcoder.id",
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    plugins: [
      UnocssVitePlugin(),
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    ]
  }
})
