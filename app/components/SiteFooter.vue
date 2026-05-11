<template>
  <footer class="site-footer">
    <div class="footer-bg-glow"></div>

    <div class="footer-inner">
      <div class="footer-brand">
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
          <NuxtLink to="/contact" class="footer-primary-link">
            {{ footerText.contactOptions }}
          </NuxtLink>

          <NuxtLink to="/cooperation-model" class="footer-secondary-link">
            {{ footerText.viewModel }}
          </NuxtLink>
        </div>
      </div>

      <div class="footer-links">
        <div class="footer-group">
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

        <div class="footer-group">
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

        <div class="footer-group">
          <h4>{{ footerText.contactTitle }}</h4>

          <NuxtLink to="/contact">
            {{ footerText.businessContact }}
          </NuxtLink>

          <NuxtLink to="/contact">
            {{ footerText.agentContact }}
          </NuxtLink>

          <NuxtLink to="/contact">
            {{ footerText.trafficContact }}
          </NuxtLink>

          <NuxtLink to="/contact">
            {{ footerText.technologyContact }}
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
        '我们欢迎招商、代理、流量和远程技术合作伙伴加入。不同合作类型有不同联系方式，请进入联系页面选择对应合作方向。',
      partnershipTitle: '合作方向',
      pageTitle: '网站页面',
      contactTitle: '分类联系方式',

      business: '招商合作',
      agent: '代理合作',
      traffic: '流量合作',
      technology: '技术合作',

      about: '关于我们',
      model: '合作模式',
      faq: '常见问题',
      contact: '联系我们',

      contactOptions: '查看联系方式',
      viewModel: '查看合作模式',

      businessContact: '招商 / 商户合作联系',
      agentContact: '代理合作联系',
      trafficContact: '流量合作联系',
      technologyContact: '技术合作联系',

      copyright: '© 2026 合作伙伴与商务合作网站。保留所有权利。'
    }
  }

  return {
    brandTitle: 'Partner Cooperation',
    brandSubtitle: 'Business Partnership Platform',
    brandDescription:
      'We welcome business, agent, traffic and remote technology partners. Different cooperation types use different contacts, please choose the correct contact type on the contact page.',
    partnershipTitle: 'Partnership',
    pageTitle: 'Pages',
    contactTitle: 'Contact by Category',

    business: 'Business Partnership',
    agent: 'Agent Partnership',
    traffic: 'Traffic Partnership',
    technology: 'Technology Partnership',

    about: 'About Us',
    model: 'Cooperation Model',
    faq: 'FAQ',
    contact: 'Contact Us',

    contactOptions: 'View Contact Options',
    viewModel: 'View Cooperation Model',

    businessContact: 'Business / Merchant Contact',
    agentContact: 'Agent Contact',
    trafficContact: 'Traffic Contact',
    technologyContact: 'Technology Contact',

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
    #0b1220;
  color: #ffffff;
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
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 24px;
  background: rgba(15, 23, 42, 0.58);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(14px);
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
  background: linear-gradient(135deg, #1687d9, #0f75c2);
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  box-shadow:
    0 10px 24px rgba(22, 135, 217, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

.footer-brand h3 {
  margin: 0;
  color: #ffffff;
  font-size: 23px;
  line-height: 1.28;
}

.footer-brand small {
  display: block;
  margin-top: 6px;
  color: #94a3b8;
  font-size: 12px;
  font-weight: 700;
}

.footer-brand p {
  max-width: 460px;
  margin: 0;
  color: #cbd5e1;
  font-size: 15px;
  line-height: 1.8;
}

.footer-contact-actions {
  display: flex;
  gap: 12px;
  margin-top: 26px;
  flex-wrap: wrap;
}

.footer-primary-link,
.footer-secondary-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 11px;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  transition: 0.2s ease;
}

.footer-primary-link {
  border: 1px solid rgba(56, 189, 248, 0.28);
  background: linear-gradient(135deg, #1687d9, #0f75c2);
  color: #ffffff;
  box-shadow:
    0 10px 24px rgba(22, 135, 217, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

.footer-primary-link:hover {
  background: linear-gradient(135deg, #1d9bf0, #1687d9);
  transform: translateY(-1px);
}

.footer-secondary-link {
  border: 1px solid rgba(203, 213, 225, 0.28);
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

.footer-secondary-link:hover {
  border-color: #38bdf8;
  background: rgba(22, 135, 217, 0.18);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.footer-group {
  min-height: 250px;
  padding: 26px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.54);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.footer-group h4 {
  margin: 0 0 8px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 900;
}

.footer-group a {
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.5;
  text-decoration: none;
  transition: 0.2s ease;
}

.footer-group a:hover {
  color: #38bdf8;
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
  color: #94a3b8;
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
    border-radius: 18px;
    padding: 24px;
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

  .footer-primary-link,
  .footer-secondary-link {
    width: 100%;
  }
}
</style>