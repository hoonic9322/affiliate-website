<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const pageText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      seoTitle: '首页 | 合作伙伴与商务合作',
      heroLabel: '合作伙伴与商务合作',
      heroTitle: '寻找长期合作伙伴',
      heroDescription:
        '我们欢迎招商合作、代理合作、流量合作和远程技术合作伙伴加入，共同拓展市场、资源、技术和长期业务机会。',
      viewOptions: '查看合作方向',
      contactUs: '联系我们',

      heroImageAlt: '合作伙伴网络与商务合作视觉图',
      visualContact: '合作类型',
      visualTelegram: '分类联系',
      visualWhatsapp: '快速对接',

      cooperationLabel: '合作类型',
      cooperationTitle: '四大合作方向',
      cooperationDescription:
        '我们为商务资源方、代理团队、流量资源方和远程技术团队提供不同类型的合作机会。',

      businessTitle: '招商合作',
      businessDescription:
        '面向拥有商务资源、区域资源、渠道资源或市场拓展能力的合作伙伴。',

      agentTitle: '代理合作',
      agentDescription:
        '面向代理团队、区域代理、推广代理、社群代理和长期用户资源运营伙伴。',

      trafficTitle: '流量合作',
      trafficDescription:
        '面向网站站长、SEO 团队、广告投放团队、KOL、社群资源方和媒体资源方。',

      technologyTitle: '远程技术合作',
      technologyDescription:
        '面向远程软件开发公司、外包技术团队、UI/UX、QA、DevOps 和系统维护团队。',

      whyLabel: '为什么与我们合作',
      whyTitle: '为长期合作而建立',

      benefitOneTitle: '长期合作机会',
      benefitOneDescription:
        '我们寻找可以长期配合、持续发展和稳定合作的伙伴。',

      benefitTwoTitle: '灵活合作模式',
      benefitTwoDescription:
        '合作方式可根据合作类型、市场、资源和项目需求灵活安排。',

      benefitThreeTitle: '沟通清晰直接',
      benefitThreeDescription:
        '不同合作类型有对应联系人，方便更快安排正确对接。',

      benefitFourTitle: '多种合作方向',
      benefitFourDescription:
        '合作伙伴可以从招商、代理、流量或技术方向切入合作。',

      modelLabel: '合作模式',
      modelTitle: '简单、直接、灵活',
      modelDescription:
        '第一阶段我们不设计复杂申请流程。有合作意向的伙伴可以先选择合作类型，再根据资源、市场、团队能力和合作方向沟通适合的合作模式。',

      modelBusiness: '招商 / 商务合作',
      modelAgent: '代理合作',
      modelTraffic: '流量合作',
      modelTechnology: '远程技术合作',

      ctaLabel: '开始合作',
      ctaTitle: '选择正确的合作类型开始沟通',
      ctaDescription:
        '不同合作类型有不同联系人。请进入联系方式页面，选择招商、代理、流量或技术合作对应的 Telegram / WhatsApp。',
      viewContactOptions: '查看联系方式',
      viewModel: '查看合作模式'
    }
  }

  return {
    seoTitle: 'Home | Partner Cooperation',
    heroLabel: 'PARTNERSHIP & BUSINESS COOPERATION',
    heroTitle: 'Looking for Long-Term Partners',
    heroDescription:
      'We welcome business partners, agents, traffic partners and remote technology teams to build long-term cooperation with us.',
    viewOptions: 'View Partnership Options',
    contactUs: 'Contact Us',

    heroImageAlt: 'Partner network and business cooperation illustration',
    visualContact: 'Contact Type',
    visualTelegram: 'Category Contact',
    visualWhatsapp: 'Fast Matching',

    cooperationLabel: 'COOPERATION TYPES',
    cooperationTitle: 'Four Main Partnership Directions',
    cooperationDescription:
      'We provide different cooperation opportunities for business resources, agent teams, traffic resources and remote technical teams.',

    businessTitle: 'Business Partnership',
    businessDescription:
      'For partners with business resources, market channels, regional connections or commercial development capability.',

    agentTitle: 'Agent Partnership',
    agentDescription:
      'For agent teams, local promoters, community operators and partners who can manage long-term user resources.',

    trafficTitle: 'Traffic Partnership',
    trafficDescription:
      'For website owners, SEO teams, media buyers, KOLs, social communities and affiliate traffic partners.',

    technologyTitle: 'Technology Partnership',
    technologyDescription:
      'For remote software companies, development teams, UI/UX teams, QA teams, DevOps and technical service providers.',

    whyLabel: 'WHY WORK WITH US',
    whyTitle: 'Built for Long-Term Cooperation',

    benefitOneTitle: 'Long-Term Opportunities',
    benefitOneDescription:
      'We are looking for reliable partners who can grow with us continuously.',

    benefitTwoTitle: 'Flexible Cooperation Model',
    benefitTwoDescription:
      'Cooperation can be adjusted based on partner type, market, resources and project needs.',

    benefitThreeTitle: 'Clear Communication',
    benefitThreeDescription:
      'Different cooperation types use different contacts, helping us arrange the correct follow-up faster.',

    benefitFourTitle: 'Multiple Cooperation Areas',
    benefitFourDescription:
      'Partners can cooperate in business development, agency, traffic or technology.',

    modelLabel: 'COOPERATION MODEL',
    modelTitle: 'Simple, Direct and Flexible',
    modelDescription:
      'We do not use a complicated application process in the first phase. Interested partners can choose the correct cooperation type and discuss suitable cooperation models with us.',

    modelBusiness: 'Business Cooperation',
    modelAgent: 'Agent Cooperation',
    modelTraffic: 'Traffic Cooperation',
    modelTechnology: 'Remote Technical Cooperation',

    ctaLabel: 'GET STARTED',
    ctaTitle: 'Choose the Right Cooperation Type to Start',
    ctaDescription:
      'Different cooperation types use different contacts. Please visit the contact page and choose the correct Telegram or WhatsApp for business, agent, traffic or technology cooperation.',
    viewContactOptions: 'View Contact Options',
    viewModel: 'View Cooperation Model'
  }
})

useHead(() => ({
  title: pageText.value.seoTitle,
  meta: [
    {
      name: 'description',
      content:
        currentLanguage.value === 'zh'
          ? '寻找长期招商、代理、流量和远程技术合作伙伴。'
          : 'Looking for long-term business, agent, traffic and remote technology partners.'
    },
    {
      property: 'og:title',
      content: pageText.value.seoTitle
    },
    {
      property: 'og:description',
      content:
        currentLanguage.value === 'zh'
          ? '招商、代理、流量和远程技术合作机会。'
          : 'Business partnership, agent partnership, traffic partnership and remote technology cooperation opportunities.'
    }
  ]
}))
</script>

<template>
  <main class="home-page page-wrapper">
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-copy">
          <p class="section-label hero-label">
            {{ pageText.heroLabel }}
          </p>

          <h1>
            {{ pageText.heroTitle }}
          </h1>

          <p class="hero-description">
            {{ pageText.heroDescription }}
          </p>

          <div class="hero-actions">
            <NuxtLink to="/business-partner" class="primary-button">
              {{ pageText.viewOptions }}
            </NuxtLink>

            <NuxtLink to="/contact" class="secondary-button">
              {{ pageText.contactUs }}
            </NuxtLink>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-image-card glass-card">
            <img src="/images/sections/partner-network.png" :alt="pageText.heroImageAlt">
          </div>

          <div class="visual-card floating-card top-card glass-card">
            <span>{{ pageText.visualContact }}</span>
            <strong>{{ pageText.visualTelegram }}</strong>
          </div>

          <div class="visual-card floating-card bottom-card glass-card">
            <span>{{ pageText.visualContact }}</span>
            <strong>{{ pageText.visualWhatsapp }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.cooperationLabel }}
        </p>

        <h2>
          {{ pageText.cooperationTitle }}
        </h2>

        <p>
          {{ pageText.cooperationDescription }}
        </p>
      </div>

      <div class="partner-grid card-grid-4">
        <NuxtLink to="/business-partner" class="partner-card">
          <div class="card-icon business-icon">
            <span>01</span>
          </div>

          <h3>{{ pageText.businessTitle }}</h3>

          <p>
            {{ pageText.businessDescription }}
          </p>
        </NuxtLink>

        <NuxtLink to="/agent-partner" class="partner-card">
          <div class="card-icon agent-icon">
            <span>02</span>
          </div>

          <h3>{{ pageText.agentTitle }}</h3>

          <p>
            {{ pageText.agentDescription }}
          </p>
        </NuxtLink>

        <NuxtLink to="/traffic-partner" class="partner-card">
          <div class="card-icon traffic-icon">
            <span>03</span>
          </div>

          <h3>{{ pageText.trafficTitle }}</h3>

          <p>
            {{ pageText.trafficDescription }}
          </p>
        </NuxtLink>

        <NuxtLink to="/technology-partner" class="partner-card">
          <div class="card-icon technology-icon">
            <span>04</span>
          </div>

          <h3>{{ pageText.technologyTitle }}</h3>

          <p>
            {{ pageText.technologyDescription }}
          </p>
        </NuxtLink>
      </div>
    </section>

    <section class="section-block dark-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.whyLabel }}
        </p>

        <h2>
          {{ pageText.whyTitle }}
        </h2>
      </div>

      <div class="benefit-grid card-grid-4">
        <div class="benefit-item glass-card">
          <h3>{{ pageText.benefitOneTitle }}</h3>

          <p>
            {{ pageText.benefitOneDescription }}
          </p>
        </div>

        <div class="benefit-item glass-card">
          <h3>{{ pageText.benefitTwoTitle }}</h3>

          <p>
            {{ pageText.benefitTwoDescription }}
          </p>
        </div>

        <div class="benefit-item glass-card">
          <h3>{{ pageText.benefitThreeTitle }}</h3>

          <p>
            {{ pageText.benefitThreeDescription }}
          </p>
        </div>

        <div class="benefit-item glass-card">
          <h3>{{ pageText.benefitFourTitle }}</h3>

          <p>
            {{ pageText.benefitFourDescription }}
          </p>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="split-section glass-card">
        <div>
          <p class="section-label">
            {{ pageText.modelLabel }}
          </p>

          <h2>
            {{ pageText.modelTitle }}
          </h2>

          <p>
            {{ pageText.modelDescription }}
          </p>
        </div>

        <div class="model-list">
          <div class="model-item">
            <strong>{{ pageText.modelBusiness }}</strong>
          </div>

          <div class="model-item">
            <strong>{{ pageText.modelAgent }}</strong>
          </div>

          <div class="model-item">
            <strong>{{ pageText.modelTraffic }}</strong>
          </div>

          <div class="model-item">
            <strong>{{ pageText.modelTechnology }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-card glass-card">
        <p class="section-label">
          {{ pageText.ctaLabel }}
        </p>

        <h2>
          {{ pageText.ctaTitle }}
        </h2>

        <p>
          {{ pageText.ctaDescription }}
        </p>

        <div class="cta-actions">
          <NuxtLink to="/contact" class="primary-button">
            {{ pageText.viewContactOptions }}
          </NuxtLink>

          <NuxtLink to="/cooperation-model" class="secondary-button">
            {{ pageText.viewModel }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
}

.hero-section {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 76px 24px 52px;
}

.hero-content {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  gap: 42px;
  align-items: center;
  padding: 68px;
  border: 1px solid var(--color-card-border);
  border-radius: 32px;
  background:
    linear-gradient(90deg, rgba(7, 17, 42, 0.94), rgba(7, 17, 42, 0.7)),
    url("/images/sections/home-hero-bg.png") center / cover no-repeat;
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.28);
  overflow: hidden;
}

.hero-content::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 42px 42px;
  opacity: 0.35;
  pointer-events: none;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.hero-label {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 16px;
  border: 1px solid rgba(96, 165, 250, 0.32);
  border-radius: var(--radius-pill);
  background: rgba(22, 135, 217, 0.16);
  color: #93c5fd;
  text-transform: uppercase;
}

h1 {
  max-width: 860px;
  margin: 0 0 24px;
  color: var(--color-text-main);
  font-size: 58px;
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.hero-description {
  max-width: 780px;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 18px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 34px;
}

.hero-actions .primary-button,
.hero-actions .secondary-button {
  min-height: 52px;
  padding: 0 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 800;
}

.hero-actions .secondary-button {
  margin-left: 14px;
}

.cta-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 34px;
}

.cta-actions .primary-button,
.cta-actions .secondary-button {
  min-height: 52px;
  padding: 0 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 800;
}

.cta-actions .secondary-button {
  margin-left: 14px;
}

.hero-visual {
  position: relative;
  z-index: 2;
  min-height: 430px;
}

.hero-image-card {
  position: absolute;
  top: 24px;
  right: 0;
  width: 92%;
  padding: 12px;
  border-radius: 28px;
}

.hero-image-card img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 22px;
}

.floating-card {
  position: absolute;
  width: 178px;
  padding: 18px;
  border-radius: 20px;
}

.floating-card span {
  display: block;
  margin-bottom: 6px;
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: 800;
}

.floating-card strong {
  color: var(--color-text-main);
  font-size: 17px;
}

.top-card {
  top: 0;
  left: 0;
}

.bottom-card {
  right: 22px;
  bottom: 12px;
}

.section-block {
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px 24px;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 34px;
}

.section-heading h2,
.split-section h2,
.cta-card h2 {
  margin: 0 0 16px;
  color: var(--color-text-main);
  font-size: 38px;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.section-heading p,
.split-section p,
.cta-card p {
  margin: 0 0 8px;
  color: var(--color-text-secondary);
  font-size: 16px;
  line-height: 1.8;
}

.partner-card {
  display: block;
  min-height: 310px;
  padding: 28px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.72);
  color: inherit;
  text-decoration: none;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease;
  backdrop-filter: blur(14px);
}

.partner-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.48);
  box-shadow: 0 22px 46px rgba(0, 0, 0, 0.28);
}

.card-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  margin-bottom: 24px;
  border-radius: 18px;
  overflow: hidden;
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.28);
}

.card-icon::before,
.card-icon::after {
  content: "";
  position: absolute;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.22);
}

.card-icon::before {
  width: 34px;
  height: 34px;
  right: -10px;
  top: -10px;
}

.card-icon::after {
  width: 22px;
  height: 22px;
  left: -7px;
  bottom: -7px;
}

.card-icon span {
  position: relative;
  z-index: 1;
  font-size: 15px;
  letter-spacing: 0.04em;
}

.business-icon {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
}

.agent-icon {
  background: linear-gradient(135deg, #2563eb, #6366f1);
}

.traffic-icon {
  background: linear-gradient(135deg, #0f766e, var(--color-success));
}

.technology-icon {
  background: linear-gradient(135deg, #334155, #0f172a);
}

.partner-card h3,
.benefit-item h3 {
  margin: 0 0 14px;
  color: var(--color-text-main);
  font-size: 21px;
  line-height: 1.35;
}

.partner-card p,
.benefit-item p {
  margin: 0 0 8px;
  color: var(--color-text-secondary);
  font-size: 15px;
  line-height: 1.75;
}

.dark-section {
  max-width: none;
  background: rgba(15, 23, 42, 0.72);
  border-top: 1px solid rgba(148, 163, 184, 0.16);
  border-bottom: 1px solid rgba(148, 163, 184, 0.16);
}

.dark-section > * {
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
}

.benefit-item {
  padding: 26px;
}

.split-section {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 40px;
  align-items: center;
  padding: 44px;
  border-radius: 24px;
}

.model-list {
  display: grid;
  gap: 14px;
}

.model-item {
  padding: 18px 20px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 14px;
  background: rgba(30, 41, 59, 0.72);
}

.model-item strong {
  display: block;
  color: var(--color-text-main);
  font-size: 16px;
}

.cta-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px 24px 80px;
}

.cta-card {
  padding: 54px;
  border-color: rgba(96, 165, 250, 0.26);
  border-radius: 24px;
  background:
    radial-gradient(circle at top right, rgba(56, 189, 248, 0.18), transparent 34%),
    linear-gradient(135deg, #07112a, #123d68);
  color: var(--color-text-main);
}

.cta-card h2,
.cta-card p {
  color: var(--color-text-main);
}

.cta-card p {
  max-width: 820px;
  color: rgba(255, 255, 255, 0.84);
}

.cta-card .section-label {
  color: #7dd3fc;
}

@media (max-width: 1080px) {
  .hero-content {
    grid-template-columns: 1fr;
    padding: 52px;
  }

  .hero-visual {
    min-height: 390px;
  }

  .hero-image-card {
    left: 70px;
    right: auto;
    width: calc(100% - 70px);
  }

  .split-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 42px 16px 28px;
  }

  .hero-content {
    padding: 36px 22px;
    border-radius: 22px;
  }

  h1 {
    font-size: 38px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .secondary-button {
    margin-left: 0;
    margin-top: 12px;
  }

  .hero-visual {
    min-height: auto;
    margin-top: 34px;
  }

  .hero-image-card,
  .floating-card {
    position: static;
    width: 100%;
  }

  .hero-image-card {
    padding: 10px;
  }

  .floating-card {
    margin-top: 12px;
  }

  .section-heading h2,
  .split-section h2,
  .cta-card h2 {
    font-size: 30px;
  }

  .section-block,
  .cta-section {
    padding: 38px 16px;
  }

  .partner-card {
    min-height: auto;
  }

  .split-section,
  .cta-card {
    padding: 30px 22px;
    border-radius: 18px;
  }

  .cta-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-actions .secondary-button {
    margin-left: 0;
    margin-top: 12px;
  }
}
</style>