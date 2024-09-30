// // https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import Layout from './Layout.vue'
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app);
  },
  Layout,
} satisfies Theme