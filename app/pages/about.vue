<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const pageText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      seoTitle: '关于我们 | 合作伙伴与商务合作',
      seoDescription:
        '了解我们的招商、代理、流量和远程技术合作平台。',

      heroLabel: '关于我们',
      heroTitle: '关于我们的合作平台',
      heroDescription:
        '我们正在建立一个面向不同类型长期合作伙伴的合作入口，包括招商合作方、代理合作方、流量合作方和远程技术合作团队。',
      heroImageAlt: '合作伙伴网络与商务合作平台视觉图',

      whoLabel: '我们是谁',
      whoTitle: '面向长期合作的平台',
      whoDescription:
        '我们的目标是寻找可靠的合作伙伴，共同支持业务增长、市场拓展、用户开发、流量获取和技术交付。',

      business: '招商合作',
      agent: '代理合作',
      traffic: '流量合作',
      technology: '远程技术合作',

      whatLabel: '我们做什么',
      whatTitle: '连接资源、市场与技术',
      whatDescription:
        '我们为不同背景的合作伙伴提供清晰的合作入口。无论你拥有商务资源、代理网络、流量渠道或技术能力，都可以根据对应合作类型联系我们，沟通适合的合作机会。',

      cardOneTitle: '商务资源对接',
      cardOneDescription:
        '我们欢迎可以提供区域资源、商务渠道、市场入口或战略合作机会的合作方。',

      cardTwoTitle: '代理与市场增长',
      cardTwoDescription:
        '我们与可以支持本地推广、用户开发和长期市场运营的代理伙伴合作。',

      cardThreeTitle: '流量与推广合作',
      cardThreeDescription:
        '我们与流量主、SEO 团队、广告投放团队、KOL 和社群运营方合作。',

      cardFourTitle: '远程技术支持',
      cardFourDescription:
        '我们欢迎远程软件公司、开发团队、测试团队和运维团队参与技术合作。',

      valuesLabel: '我们的价值观',
      valuesTitle: '我们重视的合作原则',

      valueOneTitle: '长期合作意识',
      valueOneDescription:
        '我们更重视稳定、持续、长期配合的合作伙伴，而不是一次性的短期接触。',

      valueTwoTitle: '清晰沟通',
      valueTwoDescription:
        '我们重视直接沟通、明确预期和负责任的后续跟进。',

      valueThreeTitle: '真实能力',
      valueThreeDescription:
        '我们关注真实资源、真实流量、真实交付经验和实际合作能力。',

      valueFourTitle: '灵活合作',
      valueFourDescription:
        '合作方式可以根据合作类型、市场区域、资源情况和项目需求进行灵活沟通。',

      ctaLabel: '联系我们',
      ctaTitle: '有兴趣合作？',
      ctaDescription:
        '不同合作类型有不同联系人。请进入联系方式页面，选择招商、代理、流量或技术合作对应的 Telegram / WhatsApp。',
      viewContactOptions: '查看联系方式',
      viewModel: '查看合作模式'
    }
  }

  return {
    seoTitle: 'About Us | Partner Cooperation',
    seoDescription:
      'Learn about our cooperation platform for business partners, agents, traffic partners and remote technology teams.',

    heroLabel: 'ABOUT US',
    heroTitle: 'About Our Cooperation Platform',
    heroDescription:
      'We are building a cooperation entry point for different types of long-term partners, including business partners, agents, traffic partners and remote technology teams.',
    heroImageAlt: 'Partner network and business cooperation platform illustration',

    whoLabel: 'WHO WE ARE',
    whoTitle: 'A Platform for Long-Term Cooperation',
    whoDescription:
      'Our goal is to connect with reliable partners who can support business growth, market expansion, user development, traffic acquisition and technical delivery.',

    business: 'Business Cooperation',
    agent: 'Agent Cooperation',
    traffic: 'Traffic Cooperation',
    technology: 'Technology Cooperation',

    whatLabel: 'WHAT WE DO',
    whatTitle: 'We Connect Resources, Markets and Technology',
    whatDescription:
      'We provide a clear cooperation entry point for partners from different backgrounds. Whether you have business resources, agent networks, traffic channels or technical capability, you can choose the correct cooperation type and contact us to discuss suitable opportunities.',

    cardOneTitle: 'Business Resource Matching',
    cardOneDescription:
      'We welcome partners who can provide regional resources, business channels, market access or strategic cooperation opportunities.',

    cardTwoTitle: 'Agent and Market Growth',
    cardTwoDescription:
      'We work with agent partners who can support local promotion, user development and long-term market operation.',

    cardThreeTitle: 'Traffic and Promotion',
    cardThreeDescription:
      'We cooperate with traffic owners, SEO teams, media buyers, KOLs and community operators.',

    cardFourTitle: 'Remote Technical Support',
    cardFourDescription:
      'We are open to working with remote software companies, development teams, QA teams and DevOps teams.',

    valuesLabel: 'OUR VALUES',
    valuesTitle: 'What We Value in Cooperation',

    valueOneTitle: 'Long-Term Mindset',
    valueOneDescription:
      'We prefer partners who are looking for stable and long-term cooperation instead of short-term contact only.',

    valueTwoTitle: 'Clear Communication',
    valueTwoDescription:
      'We value direct communication, clear expectations and responsible follow-up.',

    valueThreeTitle: 'Real Capability',
    valueThreeDescription:
      'We care about real resources, real traffic, real delivery experience and real cooperation capability.',

    valueFourTitle: 'Flexible Cooperation',
    valueFourDescription:
      'Cooperation can be discussed based on partner type, market, resources and project needs.',

    ctaLabel: 'GET IN TOUCH',
    ctaTitle: 'Interested in Cooperation?',
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
      content: pageText.value.seoDescription
    },
    {
      property: 'og:title',
      content: pageText.value.seoTitle
    },
    {
      property: 'og:description',
      content: pageText.value.seoDescription
    }
  ]
}))
</script>

<template>
  <main class="about-page page-wrapper">
    <section class="page-hero">
      <div class="page-hero-content">
        <div class="hero-copy">
          <p class="section-label hero-label">
            {{ pageText.heroLabel }}
          </p>

          <h1>
            {{ pageText.heroTitle }}
          </h1>

          <p>
            {{ pageText.heroDescription }}
          </p>
        </div>

        <div class="hero-visual">
          <div class="hero-image-card glass-card">
            <img src="/images/sections/partner-network.png" :alt="pageText.heroImageAlt">
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="split-content glass-card">
        <div>
          <p class="section-label">
            {{ pageText.whoLabel }}
          </p>

          <h2>
            {{ pageText.whoTitle }}
          </h2>

          <p>
            {{ pageText.whoDescription }}
          </p>
        </div>

        <div class="highlight-panel">
          <div class="highlight-item">
            <span>01</span>
            <strong>{{ pageText.business }}</strong>
          </div>

          <div class="highlight-item">
            <span>02</span>
            <strong>{{ pageText.agent }}</strong>
          </div>

          <div class="highlight-item basic-card">
            <span>03</span>
            <strong>{{ pageText.traffic }}</strong>
          </div>

          <div class="highlight-item basic-card">
            <span>04</span>
            <strong>{{ pageText.technology }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section dark-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.whatLabel }}
        </p>

        <h2>
          {{ pageText.whatTitle }}
        </h2>

        <p>
          {{ pageText.whatDescription }}
        </p>
      </div>

      <div class="card-grid card-grid-4">
        <div class="info-card glass-card hover-card">
          <div class="mini-icon business-mini">01</div>

          <h3>{{ pageText.cardOneTitle }}</h3>

          <p>
            {{ pageText.cardOneDescription }}
          </p>
        </div>

        <div class="info-card glass-card hover-card">
          <div class="mini-icon agent-mini">02</div>

          <h3>{{ pageText.cardTwoTitle }}</h3>

          <p>
            {{ pageText.cardTwoDescription }}
          </p>
        </div>

        <div class="info-card glass-card hover-card">
          <div class="mini-icon traffic-mini">03</div>

          <h3>{{ pageText.cardThreeTitle }}</h3>

          <p>
            {{ pageText.cardThreeDescription }}
          </p>
        </div>

        <div class="info-card glass-card hover-card">
          <div class="mini-icon tech-mini">04</div>

          <h3>{{ pageText.cardFourTitle }}</h3>

          <p>
            {{ pageText.cardFourDescription }}
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.valuesLabel }}
        </p>

        <h2>
          {{ pageText.valuesTitle }}
        </h2>
      </div>

      <div class="value-grid card-grid-4">
        <div class="value-card glass-card">
          <strong>{{ pageText.valueOneTitle }}</strong>

          <p>
            {{ pageText.valueOneDescription }}
          </p>
        </div>

        <div class="value-card glass-card">
          <strong>{{ pageText.valueTwoTitle }}</strong>

          <p>
            {{ pageText.valueTwoDescription }}
          </p>
        </div>

        <div class="value-card glass-card">
          <strong>{{ pageText.valueThreeTitle }}</strong>

          <p>
            {{ pageText.valueThreeDescription }}
          </p>
        </div>

        <div class="value-card glass-card">
          <strong>{{ pageText.valueFourTitle }}</strong>

          <p>
            {{ pageText.valueFourDescription }}
          </p>
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
.about-page {
  min-height: 100vh;
}

.page-hero {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 72px 24px 36px;
}

.page-hero-content {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(360px, 0.96fr);
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

.page-hero-content::before {
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

.hero-copy,
.hero-visual {
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
  margin: 0 0 20px;
  color: var(--color-text-main);
  font-size: 54px;
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.page-hero p,
.section-heading p,
.split-content p,
.cta-card p,
.value-card p {
  max-width: 820px;
  margin: 0 0 8px;
  color: var(--color-text-secondary);
  font-size: 16px;
  line-height: 1.8;
}

.hero-image-card {
  padding: 12px;
  border-radius: 28px;
}

.hero-image-card img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 22px;
}

.content-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: 52px 24px;
}

.dark-section {
  max-width: none;
  background: rgba(15, 23, 42, 0.72);
  border-top: 1px solid rgba(148, 163, 184, 0.16);
  border-bottom: 1px solid rgba(148, 163, 184, 0.16);
}

.dark-section>* {
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
}

.section-heading {
  max-width: 820px;
  margin-bottom: 30px;
}

.section-heading h2,
.split-content h2,
.cta-card h2 {
  margin: 0 0 16px;
  color: var(--color-text-main);
  font-size: 38px;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.split-content {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 40px;
  align-items: center;
  padding: 44px;
  border-radius: 24px;
}

.highlight-panel {
  display: grid;
  gap: 14px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 14px;
  background: rgba(30, 41, 59, 0.72);
}

.highlight-item span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 12px;
  font-weight: 900;
}

.highlight-item strong {
  display: block;
  color: var(--color-text-main);
  font-size: 16px;
}

.info-card {
  min-height: 295px;
  padding: 28px;
}

.mini-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 16px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.3);
}

.business-mini {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
}

.agent-mini {
  background: linear-gradient(135deg, #2563eb, #6366f1);
}

.traffic-mini {
  background: linear-gradient(135deg, #0f766e, var(--color-success));
}

.tech-mini {
  background: linear-gradient(135deg, #334155, #0f172a);
}

.info-card h3 {
  margin: 0 0 14px;
  color: var(--color-text-main);
  font-size: 20px;
  line-height: 1.35;
}

.info-card p {
  margin: 0 0 8px;
  color: var(--color-text-secondary);
  font-size: 15px;
  line-height: 1.75;
}

.value-card {
  padding: 26px;
}

.value-card strong {
  display: block;
  margin-bottom: 14px;
  color: var(--color-primary-light);
  font-size: 18px;
}

.value-card p {
  font-size: 15px;
  color: var(--color-text-secondary);
}

.cta-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: 52px 24px 80px;
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
  color: rgba(255, 255, 255, 0.84);
}

.cta-card .section-label {
  color: #7dd3fc;
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

@media (max-width: 1080px) {
  .page-hero-content {
    grid-template-columns: 1fr;
    padding: 52px;
  }

  .split-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 42px 16px 28px;
  }

  .page-hero-content {
    padding: 36px 22px;
    border-radius: 22px;
  }

  h1 {
    font-size: 38px;
  }

  .section-heading h2,
  .split-content h2,
  .cta-card h2 {
    font-size: 30px;
  }

  .content-section,
  .cta-section {
    padding: 38px 16px;
  }

  .info-card {
    min-height: auto;
  }

  .split-content,
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