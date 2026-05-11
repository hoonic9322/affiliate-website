export type ContactKey = 'business' | 'agent' | 'traffic' | 'technology'

export interface ContactItem {
  titleZh: string
  titleEn: string
  telegramLabelZh: string
  telegramLabelEn: string
  whatsappLabelZh: string
  whatsappLabelEn: string
  telegramUrl: string
  whatsappUrl: string
  enabled: boolean
}

export type ContactLinks = Record<ContactKey, ContactItem>

const defaultContactLinks: ContactLinks = {
  business: {
    titleZh: '招商 / 商户合作',
    titleEn: 'Business / Merchant Partnership',
    telegramLabelZh: 'Telegram 联系',
    telegramLabelEn: 'Telegram',
    whatsappLabelZh: 'WhatsApp 联系',
    whatsappLabelEn: 'WhatsApp',
    telegramUrl: '#',
    whatsappUrl: '#',
    enabled: true
  },
  agent: {
    titleZh: '代理合作',
    titleEn: 'Agent Partnership',
    telegramLabelZh: 'Telegram 联系',
    telegramLabelEn: 'Telegram',
    whatsappLabelZh: 'WhatsApp 联系',
    whatsappLabelEn: 'WhatsApp',
    telegramUrl: '#',
    whatsappUrl: '#',
    enabled: true
  },
  traffic: {
    titleZh: '流量合作',
    titleEn: 'Traffic Partnership',
    telegramLabelZh: 'Telegram 联系',
    telegramLabelEn: 'Telegram',
    whatsappLabelZh: 'WhatsApp 联系',
    whatsappLabelEn: 'WhatsApp',
    telegramUrl: '#',
    whatsappUrl: '#',
    enabled: true
  },
  technology: {
    titleZh: '技术合作',
    titleEn: 'Technology Partnership',
    telegramLabelZh: 'Telegram 联系',
    telegramLabelEn: 'Telegram',
    whatsappLabelZh: 'WhatsApp 联系',
    whatsappLabelEn: 'WhatsApp',
    telegramUrl: '#',
    whatsappUrl: '#',
    enabled: true
  }
}

export const useContactLinks = () => {
  const contactLinks = useState<ContactLinks>('contactLinks', () => defaultContactLinks)
  const loading = useState<boolean>('contactLinksLoading', () => false)
  const error = useState<string | null>('contactLinksError', () => null)

  const loadContactLinks = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`/config/contact-links.json?t=${Date.now()}`)

      if (!response.ok) {
        throw new Error('Failed to load contact links')
      }

      const data = await response.json()

      contactLinks.value = {
        ...defaultContactLinks,
        ...data
      }
    } catch (err) {
      console.error('Contact links loading error:', err)
      error.value = 'Failed to load contact links'
      contactLinks.value = defaultContactLinks
    } finally {
      loading.value = false
    }
  }

  const getContact = (key: ContactKey) => {
    return contactLinks.value[key]
  }

  return {
    contactLinks,
    loading,
    error,
    loadContactLinks,
    getContact
  }
}