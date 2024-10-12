// // https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client"

import ContributorsAside from './components/ContributorsAside.vue'
import Consent from './components/Consent.vue'

export default Object.assign({}, DefaultTheme, {
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(ContributorsAside),
      'layout-bottom': () => h(Consent),
    })
  },
  enhanceApp({ app }) {
    enhanceAppWithTabs(app);
  },
}) as Theme