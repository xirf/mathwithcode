import {
    defineConfig,
    presetIcons,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
  } from 'unocss'
  
  export default defineConfig({
    presets: [
      presetUno(),
      presetIcons({
        scale: 1.2,
        warn: true,
        unit: 'em',
      }),
      presetWebFonts({
        provider: 'google',
        fonts: {
          sans: 'Figtree',
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })