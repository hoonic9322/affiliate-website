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
        '我们为不同背景的合作伙伴提供清晰的合作入口。无论你拥有商务资源、代理网络、流量渠道或技术能力，都可以直接联系我们，沟通适合的合作机会。',

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
        '你可以直接通过 Telegram 或 WhatsApp 联系我们，并简单说明你的合作类型、资源情况、所在市场和期望合作方式。',
      telegram: 'Telegram 联系',
      whatsapp: 'WhatsApp 联系'
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
      'We provide a clear cooperation entry point for partners from different backgrounds. Whether you have business resources, agent networks, traffic channels or technical capability, you can contact us directly to discuss suitable cooperation opportunities.',

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
      'Contact us directly through Telegram or WhatsApp and tell us your cooperation type, available resources, market and expected cooperation model.',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp'
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
  <main class="about-page">
    <section class="page-hero">
      <div class="page-hero-content">
        <p class="section-label">
          {{ pageText.heroLabel }}
        </p>

        <h1>
          {{ pageText.heroTitle }}
        </h1>

        <p>
          {{ pageText.heroDescription }}
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="split-content">
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
            <strong>{{ pageText.business }}</strong>
          </div>

          <div class="highlight-item">
            <strong>{{ pageText.agent }}</strong>
          </div>

          <div class="highlight-item">
            <strong>{{ pageText.traffic }}</strong>
          </div>

          <div class="highlight-item">
            <strong>{{ pageText.technology }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section light-section">
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

      <div class="card-grid">
        <div class="info-card">
          <h3>{{ pageText.cardOneTitle }}</h3>

          <p>
            {{ pageText.cardOneDescription }}
          </p>
        </div>

        <div class="info-card">
          <h3>{{ pageText.cardTwoTitle }}</h3>

          <p>
            {{ pageText.cardTwoDescription }}
          </p>
        </div>

        <div class="info-card">
          <h3>{{ pageText.cardThreeTitle }}</h3>

          <p>
            {{ pageText.cardThreeDescription }}
          </p>
        </div>

        <div class="info-card">
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

      <div class="value-grid">
        <div class="value-card">
          <strong>{{ pageText.valueOneTitle }}</strong>

          <p>
            {{ pageText.valueOneDescription }}
          </p>
        </div>

        <div class="value-card">
          <strong>{{ pageText.valueTwoTitle }}</strong>

          <p>
            {{ pageText.valueTwoDescription }}
          </p>
        </div>

        <div class="value-card">
          <strong>{{ pageText.valueThreeTitle }}</strong>

          <p>
            {{ pageText.valueThreeDescription }}
          </p>
        </div>

        <div class="value-card">
          <strong>{{ pageText.valueFourTitle }}</strong>

          <p>
            {{ pageText.valueFourDescription }}
          </p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-card">
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
          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
            class="primary-button"
          >
            {{ pageText.telegram }}
          </a>

          <a
            href="https://wa.me/your_number"
            target="_blank"
            rel="noopener noreferrer"
            class="secondary-button"
          >
            {{ pageText.whatsapp }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background: #f5f7fb;
  color: #111827;
}

.page-hero {
  max-width: 1180px;
  margin: 0 auto;
  padding: 72px 24px 36px;
}

.page-hero-content {
  padding: 58px 56px;
  border-radius: 24px;
  background:
    radial-gradient(circle at top right, rgba(22, 135, 217, 0.16), transparent 34%),
    #ffffff;
  box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
}

.section-label {
  margin: 0 0 14px;
  color: #1687d9;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 20px;
  color: #07112a;
  font-size: 50px;
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.page-hero p,
.section-heading p,
.split-content p,
.cta-card p,
.value-card p {
  max-width: 820px;
  margin: 0 0 8px;
  color: #334155;
  font-size: 16px;
  line-height: 1.8;
}

.content-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: 48px 24px;
}

.light-section {
  max-width: none;
  background: #ffffff;
}

.light-section > * {
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
  color: #07112a;
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
  background: #ffffff;
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
}

.highlight-panel {
  display: grid;
  gap: 14px;
}

.highlight-item {
  padding: 18px 20px;
  border-radius: 14px;
  background: #f5f7fb;
  border: 1px solid #e5e7eb;
}

.highlight-item strong {
  display: block;
  color: #07112a;
  font-size: 16px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.info-card {
  min-height: 260px;
  padding: 28px;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
}

.info-card h3 {
  margin: 0 0 14px;
  color: #07112a;
  font-size: 20px;
  line-height: 1.35;
}

.info-card p {
  margin: 0 0 8px;
  color: #475569;
  font-size: 15px;
  line-height: 1.75;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.value-card {
  padding: 26px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
}

.value-card strong {
  display: block;
  margin-bottom: 14px;
  color: #1687d9;
  font-size: 18px;
}

.value-card p {
  font-size: 15px;
  color: #475569;
}

.cta-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}

.cta-card {
  padding: 50px;
  border-radius: 24px;
  background: linear-gradient(135deg, #07112a, #123d68);
  color: #ffffff;
}

.cta-card h2,
.cta-card p {
  color: #ffffff;
}

.cta-card p {
  color: rgba(255, 255, 255, 0.84);
}

.cta-card .section-label {
  color: #7dd3fc;
}

.cta-actions {
  display: flex;
  gap: 14px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 800;
  line-height: 1.25;
  text-decoration: none;
}

.primary-button {
  background: #1687d9;
  color: #ffffff;
}

.primary-button:hover {
  background: #0f75c2;
}

.secondary-button {
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: transparent;
  color: #ffffff;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 1080px) {
  .card-grid,
  .value-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
    padding: 36px 24px;
    border-radius: 20px;
  }

  h1 {
    font-size: 36px;
  }

  .section-heading h2,
  .split-content h2,
  .cta-card h2 {
    font-size: 30px;
  }

  .content-section,
  .cta-section {
    padding: 36px 16px;
  }

  .card-grid,
  .value-grid {
    grid-template-columns: 1fr;
  }

  .info-card {
    min-height: auto;
  }

  .split-content,
  .cta-card {
    padding: 30px 22px;
    border-radius: 18px;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }
}
</style>