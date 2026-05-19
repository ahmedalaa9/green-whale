import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Locale } from '../i18n'

export function useLocale() {
  const { locale } = useI18n()

  const isRTL = computed(() => locale.value === 'ar')

  function setLocale(lang: Locale) {
    locale.value = lang
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
  }

  function toggleLocale() {
    setLocale(locale.value === 'en' ? 'ar' : 'en')
  }

  return { locale, isRTL, setLocale, toggleLocale }
}
