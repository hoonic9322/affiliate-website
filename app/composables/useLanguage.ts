export type SiteLanguage = 'en' | 'zh'

export const useLanguage = () => {
  const currentLanguage = useState<SiteLanguage>('currentLanguage', () => 'en')

  const setLanguage = (language: SiteLanguage) => {
    currentLanguage.value = language

    if (import.meta.client) {
      localStorage.setItem('site-language', language)
    }
  }

  const toggleLanguage = () => {
    setLanguage(currentLanguage.value === 'en' ? 'zh' : 'en')
  }

  const initLanguage = () => {
    if (!import.meta.client) {
      return
    }

    const savedLanguage = localStorage.getItem('site-language')

    if (savedLanguage === 'en' || savedLanguage === 'zh') {
      currentLanguage.value = savedLanguage
    }
  }

  return {
    currentLanguage,
    setLanguage,
    toggleLanguage,
    initLanguage
  }
}