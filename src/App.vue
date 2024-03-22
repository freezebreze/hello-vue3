<template>
  <n-config-provider :theme="isDark ? darkTheme : undefined">
    <n-dialog-provider>
      <n-message-provider>
        <router-view :key="key"></router-view>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { isMobile, watchResize } from '@bassist/utils'
import { darkTheme } from 'naive-ui'
import { DarkKey } from './util/SymbolKey'
import { useTheme } from '@/hooks/theme'
const { isDark } = useTheme()
const route = useRoute()
provide(DarkKey, isDark)
const key = computed(() => `${String(route.name || route.path)}-${new Date()}`)
watchResize(() => {
  document.body.className = `platform-${isMobile() ? 'mobile' : 'desktop'}`
})
</script>
