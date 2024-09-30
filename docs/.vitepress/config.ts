import { defineConfig } from 'vitepress'
import { sharedConfig } from './shared.config'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,

  locales: {
    root: {
      label: 'Indonesia',
      lang: 'id-ID',
      description: 'Belajar matematika dengan barisan kode',
      themeConfig: {
        nav: [
          { text: 'Belajar', link: '/guide/' },
        ],
        sidebar: [
          { text: 'Panduan', link: '/guide/' },
          {
            text: 'Aritmatika',
            collapsed: false,
            items: [
              { text: 'Bilangan', link: '/arithmetic/numbers' },
              { text: 'Operasi Bilangan', link: '/arithmetic/operation-on-number' },
            ]
          },
        ],
        editLink: {
          pattern: 'https://github.com/xirf/mathwithcode/edit/main/docs/:path',
          text: 'Perbaiki halaman ini di GitHub'
        },

        footer: {
          message: 'Dirilis di bawah lisensi MIT',
          copyright: 'Copyright © 2024-present Anka Tama & Contributors'
        }
      }
    },
  }
})
