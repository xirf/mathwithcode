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
          {
            text: 'Belajar', link: '/guide/',
          },
          {
            text: 'Kontribusi', link: 'https://github.com/xirf/mathwithcode'
          },
          {
            text: 'Donasi', link: 'https://trakteer.id/xirf'
          }
        ],
        sidebar: [
          { text: 'Panduan', link: '/guide/' },
          {
            text: 'Aritmatika',
            collapsed: false,
            items: [
              { text: 'Bilangan', link: '/arithmetic/numbers' },
              { text: 'Operasi Bilangan', link: '/arithmetic/operation-on-number' },
              { text: 'Faktor dan Kelipatan', link: '/arithmetic/factors' },
              { text: 'Persen', link: '/arithmetic/percent' },
            ]
          },
          {
            text: "Statistik",
            collapsed: true,
            items: [
              {text: "Ukuran Letak", link: "/statistics/measures-concentration-dispersion"},
            ]
          }
        ],
        editLink: {
          pattern: 'https://github.com/xirf/mathwithcode/edit/master/docs/:path',
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
