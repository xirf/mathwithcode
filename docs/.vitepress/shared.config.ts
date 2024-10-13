import { defineConfig, type HeadConfig } from "vitepress";
import { visualizer } from 'rollup-plugin-visualizer'
import UnocssVitePlugin from 'unocss/vite'
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs"


const umamiScript: HeadConfig = [ "script", {
    defer: "true",
    src: "https://cloud.umami.is/script.js",
    "data-website-id": "f120cb10-6927-4e74-b8e7-49dd74e2f057"
}]

const baseHeader: HeadConfig[] = []

const headers = process.env.NODE_ENV === "production" ?
    baseHeader.concat(umamiScript) :
    baseHeader

export const sharedConfig = defineConfig({
    title: "Math W Code",
    description: "Belajar matematika dengan barisan kode",
    cleanUrls: true,
    head: headers,
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
