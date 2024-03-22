import { useStorage } from '@/hooks'
import { isDark as isDarkMode } from '@bassist/utils'
import { ref } from 'vue'
import type { PrefersColorScheme } from '@bassist/utils'
const STORAGE_KEY = 'theme-appearance'
export function useTheme() {
  const { storage } = useStorage()
  const defaultThemeIsDark = getLocalTheme()
    ? getLocalTheme() === 'dark'
    : isDarkMode()
  const isDark = ref<boolean>(defaultThemeIsDark)
  function getLocalTheme() {
    return storage.get(STORAGE_KEY)
  }
  function updateTheme(isDarkTheme: boolean) {
    const newTheme: PrefersColorScheme = isDarkTheme ? 'dark' : 'light'
    storage.set(STORAGE_KEY, newTheme)
    isDark.value = newTheme === 'dark'

    const root = document.querySelector('html')
    root!.className = newTheme
  }
  return {
    getLocalTheme,
    isDark,
    updateTheme,
  }
}
