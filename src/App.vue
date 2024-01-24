<template>
  <n-message-provider>
    <n-config-provider :theme="isDark ? darkTheme : undefined">
      <router-view :key="key"
    /></n-config-provider>
  </n-message-provider>
</template>

<script setup lang="ts">
import { isMobile, watchResize } from '@bassist/utils'
import { darkTheme } from 'naive-ui'
import { isDark as isDarkMode } from '@bassist/utils'
import { useStorage } from '@/hooks'
import DarkKey from './util/SymbolKey'
const { storage } = useStorage()
const route = useRoute()
const defaultThemeIsDark = getLocalTheme()
  ? getLocalTheme() === 'dark'
  : isDarkMode()
const isDark = ref<boolean>(defaultThemeIsDark)
const STORAGE_KEY = 'theme-appearance'
provide(DarkKey as InjectionKey<Ref<boolean>>, isDark)
const key = computed(() => `${String(route.name || route.path)}-${new Date()}`)
function getLocalTheme() {
  return storage.get(STORAGE_KEY)
}

watchResize(() => {
  document.body.className = `platform-${isMobile() ? 'mobile' : 'desktop'}`
})
</script>
