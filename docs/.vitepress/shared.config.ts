import { defineConfig } from "vitepress";
import { visualizer } from 'rollup-plugin-visualizer'
import UnocssVitePlugin from 'unocss/vite'

export const sharedConfig = defineConfig({
    title: "Math W Code",
    description: "Belajar matematika dengan barisan kode",
    cleanUrls: true,
    metaChunk: true,
    markdown: { math: true, },
    rewrites: { 'id/:rest': '/:rest', },
    sitemap: { hostname: "https://mathwcode.jamcoder.id", },
    themeConfig: {
        search: {
            provider: 'local',
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/xirf/mathwithcode' }
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
