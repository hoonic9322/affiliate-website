<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <h3>{{ footerText.brandTitle }}</h3>
        <p>
          {{ footerText.brandDescription }}
        </p>
      </div>

      <div class="footer-links">
        <div class="footer-group">
          <h4>{{ footerText.partnershipTitle }}</h4>
          <NuxtLink to="/business-partner">{{ footerText.business }}</NuxtLink>
          <NuxtLink to="/agent-partner">{{ footerText.agent }}</NuxtLink>
          <NuxtLink to="/traffic-partner">{{ footerText.traffic }}</NuxtLink>
          <NuxtLink to="/technology-partner">{{ footerText.technology }}</NuxtLink>
        </div>

        <div class="footer-group">
          <h4>{{ footerText.pageTitle }}</h4>
          <NuxtLink to="/about">{{ footerText.about }}</NuxtLink>
          <NuxtLink to="/cooperation-model">{{ footerText.model }}</NuxtLink>
          <NuxtLink to="/faq">{{ footerText.faq }}</NuxtLink>
          <NuxtLink to="/contact">{{ footerText.contact }}</NuxtLink>
        </div>

        <div class="footer-group">
          <h4>{{ footerText.contactTitle }}</h4>
          <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>{{ footerText.copyright }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const footerText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      brandTitle: '合作伙伴与商务合作',
      brandDescription:
        '我们欢迎招商、代理、流量和远程技术合作伙伴加入，共同拓展长期合作机会。',
      partnershipTitle: '合作方向',
      pageTitle: '网站页面',
      contactTitle: '联系我们',
      business: '招商合作',
      agent: '代理合作',
      traffic: '流量合作',
      technology: '技术合作',
      about: '关于我们',
      model: '合作模式',
      faq: '常见问题',
      contact: '联系我们',
      copyright: '© 2026 合作伙伴与商务合作网站。保留所有权利。'
    }
  }

  return {
    brandTitle: 'Partner Cooperation',
    brandDescription:
      'We welcome business, agent, traffic and remote technology partners to build long-term cooperation opportunities together.',
    partnershipTitle: 'Partnership',
    pageTitle: 'Pages',
    contactTitle: 'Contact',
    business: 'Business Partnership',
    agent: 'Agent Partnership',
    traffic: 'Traffic Partnership',
    technology: 'Technology Partnership',
    about: 'About Us',
    model: 'Cooperation Model',
    faq: 'FAQ',
    contact: 'Contact Us',
    copyright: '© 2026 Partner Cooperation. All rights reserved.'
  }
})
</script>

<style scoped>
.site-footer {
  background: #111827;
  color: #ffffff;
}

.footer-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px 24px;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 48px;
}

.footer-brand h3 {
  margin: 0 0 14px;
  font-size: 24px;
  line-height: 1.3;
}

.footer-brand p {
  max-width: 460px;
  margin: 0;
  color: #cbd5e1;
  line-height: 1.8;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.footer-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-group h4 {
  margin: 0 0 6px;
  color: #ffffff;
  font-size: 15px;
}

.footer-group a {
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.5;
  text-decoration: none;
}

.footer-group a:hover {
  color: #ffffff;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 18px 24px;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  color: #94a3b8;
  font-size: 13px;
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 42px 18px;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .footer-brand h3 {
    font-size: 22px;
  }
}
</style>