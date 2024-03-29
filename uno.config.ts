import { defineConfig } from '@bassist/uno'
import { presetWind } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'
// https://github.com/chengpeiquan/bassist/tree/main/packages/uno
export default defineConfig({
  theme: {
    colors: {
      brand: 'var(--c-brand)',
      bg: 'var(--c-bg)',
      text: 'var(--c-text)',
      tips: 'var(--c-tips)',
      border: 'var(--c-border)',
      mask: 'var(--c-mask)',
      hover: 'var(--c-hover)',
    },
  },
  presets: [presetWind(), presetDaisy()],
})
