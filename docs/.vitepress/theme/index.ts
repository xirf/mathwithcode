// // https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import Layout from './Layout.vue'


export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme