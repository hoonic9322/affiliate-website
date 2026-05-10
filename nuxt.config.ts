// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  app: {
    head: {
      title: 'Partner Cooperation | 合作伙伴与商务合作',
      titleTemplate: '%s | Partner Cooperation',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'description',
          content:
            'Partner Cooperation is a bilingual business cooperation website for business partners, agents, traffic partners and remote technology partners. 合作伙伴与商务合作网站，面向招商、代理、流量和远程技术合作伙伴。'
        },
        {
          name: 'keywords',
          content:
            'partner cooperation, business partnership, agent partnership, traffic partnership, technology partnership, 招商合作, 代理合作, 流量合作, 远程技术合作'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          property: 'og:title',
          content: 'Partner Cooperation | 合作伙伴与商务合作'
        },
        {
          property: 'og:description',
          content:
            'Looking for long-term business, agent, traffic and remote technology partners. 寻找长期招商、代理、流量和远程技术合作伙伴。'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://your-domain.com'
        },
        {
          property: 'og:image',
          content: 'https://your-domain.com/og-image.jpg'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Partner Cooperation | 合作伙伴与商务合作'
        },
        {
          name: 'twitter:description',
          content:
            'Business, agent, traffic and remote technology cooperation opportunities. 招商、代理、流量和远程技术合作机会。'
        },
        {
          name: 'twitter:image',
          content: 'https://your-domain.com/og-image.jpg'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  }
})