import { defineConfig } from "vitepress";
import { visualizer } from 'rollup-plugin-visualizer'
import UnocssVitePlugin from 'unocss/vite'
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs"

export const sharedConfig = defineConfig({
    title: "Math W Code",
    description: "Belajar matematika dengan barisan kode",
    cleanUrls: true,
    metaChunk: true,
    lastUpdated: true,
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin)
        },
        math: true,
    },
    sitemap: { hostname: "https://mathwcode.jamcoder.id", },
    themeConfig: {
        search: {
            provider: 'local',
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/xirf/mathwithcode' }
        ],
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
