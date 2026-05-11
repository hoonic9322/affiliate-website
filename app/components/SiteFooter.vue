<template>
  <footer class="site-footer">
    <div class="footer-bg-glow"></div>

    <div class="footer-inner">
      <div class="footer-brand glass-card">
        <div class="footer-logo">
          <span class="brand-mark">P</span>

          <div>
            <h3>{{ footerText.brandTitle }}</h3>
            <small>{{ footerText.brandSubtitle }}</small>
          </div>
        </div>

        <p>
          {{ footerText.brandDescription }}
        </p>

        <div class="footer-contact-actions">
          <a
            href="https://t.me/jerrymax88"
            target="_blank"
            rel="noopener noreferrer"
            class="primary-button footer-action-link"
          >
            Telegram
          </a>

          <a
            href="https://wa.me/your_number"
            target="_blank"
            rel="noopener noreferrer"
            class="secondary-button footer-action-link"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div class="footer-links">
        <div class="footer-group glass-card">
          <h4>{{ footerText.partnershipTitle }}</h4>

          <NuxtLink to="/business-partner">
            {{ footerText.business }}
          </NuxtLink>

          <NuxtLink to="/agent-partner">
            {{ footerText.agent }}
          </NuxtLink>

          <NuxtLink to="/traffic-partner">
            {{ footerText.traffic }}
          </NuxtLink>

          <NuxtLink to="/technology-partner">
            {{ footerText.technology }}
          </NuxtLink>
        </div>

        <div class="footer-group glass-card">
          <h4>{{ footerText.pageTitle }}</h4>

          <NuxtLink to="/about">
            {{ footerText.about }}
          </NuxtLink>

          <NuxtLink to="/cooperation-model">
            {{ footerText.model }}
          </NuxtLink>

          <NuxtLink to="/faq">
            {{ footerText.faq }}
          </NuxtLink>

          <NuxtLink to="/contact">
            {{ footerText.contact }}
          </NuxtLink>
        </div>

        <div class="footer-group glass-card">
          <h4>{{ footerText.contactTitle }}</h4>

          <a
            href="https://t.me/jerrymax88"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram @jerrymax88
          </a>

          <a
            href="https://wa.me/your_number"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <NuxtLink to="/contact">
            {{ footerText.contactPage }}
          </NuxtLink>
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
      brandSubtitle: 'Partner Cooperation',
      brandDescription:
        '我们欢迎招商、代理、流量和远程技术合作伙伴加入，共同拓展长期合作机会。',
      partnershipTitle: '合作方向',
      pageTitle: '网站页面',
      contactTitle: '联系方式',
      business: '招商合作',
      agent: '代理合作',
      traffic: '流量合作',
      technology: '技术合作',
      about: '关于我们',
      model: '合作模式',
      faq: '常见问题',
      contact: '联系我们',
      contactPage: '查看联系页面',
      copyright: '© 2026 合作伙伴与商务合作网站。保留所有权利。'
    }
  }

  return {
    brandTitle: 'Partner Cooperation',
    brandSubtitle: 'Business Partnership Platform',
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
    contactPage: 'View Contact Page',
    copyright: '© 2026 Partner Cooperation. All rights reserved.'
  }
})
</script>

<style scoped>
.site-footer {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.18), transparent 32%),
    radial-gradient(circle at bottom right, rgba(22, 135, 217, 0.12), transparent 34%),
    var(--color-bg-secondary);
  color: var(--color-text-main);
  border-top: 1px solid rgba(148, 163, 184, 0.16);
}

.footer-bg-glow {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 42px 42px;
  opacity: 0.35;
  pointer-events: none;
}

.footer-inner {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 64px 24px;
  display: grid;
  grid-template-columns: 1.1fr 1.9fr;
  gap: 56px;
}

.footer-brand {
  padding: 28px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  box-shadow:
    0 10px 24px rgba(22, 135, 217, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

.footer-brand h3 {
  margin: 0;
  color: var(--color-text-main);
  font-size: 23px;
  line-height: 1.28;
}

.footer-brand small {
  display: block;
  margin-top: 6px;
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: 700;
}

.footer-brand p {
  max-width: 460px;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 15px;
  line-height: 1.8;
}

.footer-contact-actions {
  display: flex;
  gap: 12px;
  margin-top: 26px;
  flex-wrap: wrap;
}

.footer-action-link {
  min-height: 44px;
  padding: 0 18px;
  border-radius: 12px;
  font-size: 14px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.footer-group {
  min-height: 250px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.footer-group h4 {
  margin: 0 0 8px;
  color: var(--color-text-main);
  font-size: 15px;
  font-weight: 900;
}

.footer-group a {
  color: var(--color-text-secondary);
  font-size: 14px;
  line-height: 1.5;
  text-decoration: none;
  transition: 0.2s ease;
}

.footer-group a:hover {
  color: var(--color-primary-light);
  transform: translateX(2px);
}

.footer-bottom {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(148, 163, 184, 0.16);
  padding: 20px 24px;
  text-align: center;
  background: rgba(7, 17, 42, 0.5);
}

.footer-bottom p {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 13px;
}

@media (max-width: 980px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer-links {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .footer-inner {
    padding: 42px 18px;
  }

  .footer-brand,
  .footer-group {
    padding: 24px;
    border-radius: 18px;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .footer-group {
    min-height: auto;
  }

  .footer-brand h3 {
    font-size: 21px;
  }

  .footer-contact-actions {
    flex-direction: column;
  }

  .footer-action-link {
    width: 100%;
  }
}
</style>