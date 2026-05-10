<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const pageText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      seoTitle: '代理合作 | 合作伙伴与商务合作',
      seoDescription:
        '面向代理团队、本地推广人员、社群运营者和长期用户资源合作伙伴。',

      heroLabel: '代理合作',
      heroTitle: '代理合作',
      heroDescription:
        '我们正在寻找代理团队、本地推广人员、社群运营者和可以长期运营用户资源的合作伙伴。',

      targetLabel: '我们寻找谁',
      targetTitle: '适合的代理合作对象',

      cardOneTitle: '代理团队',
      cardOneDescription:
        '适合具备用户开发、客户运营、本地推广或长期社群管理经验的代理团队。',

      cardTwoTitle: '本地推广代理',
      cardTwoDescription:
        '适合熟悉本地市场、用户习惯和本地沟通渠道的推广代理。',

      cardThreeTitle: '社群运营方',
      cardThreeDescription:
        '适合运营 Telegram 群、WhatsApp 社群、社交群组或其他私域流量社群的合作方。',

      cardFourTitle: '区域代理',
      cardFourDescription:
        '适合可以开发本地区域市场、管理区域用户资源，并支持长期业务增长的代理伙伴。',

      areasLabel: '合作内容',
      areasTitle: '代理伙伴可以合作的内容',

      areaOne: '用户开发',
      areaTwo: '本地推广',
      areaThree: '社群运营',
      areaFour: '区域市场拓展',
      areaFive: '客户关系维护',
      areaSix: '长期代理合作',

      supportLabel: '代理支持',
      supportTitle: '支持代理长期发展',
      supportDescription:
        '我们重视可以稳定维护用户资源、建立长期关系，并保持清晰沟通的代理合作伙伴。',

      supportOne: '合作方式沟通',
      supportTwo: '推广方向确认',
      supportThree: '市场与用户资源评估',
      supportFour: '长期合作规划',

      expectationLabel: '我们的关注点',
      expectationTitle: '我们关注什么',

      expectationOne: '真实用户资源',
      expectationTwo: '稳定推广能力',
      expectationThree: '沟通清晰直接',
      expectationFour: '长期运营意识',
      expectationFive: '市场理解能力',
      expectationSix: '负责任的合作态度',

      ctaLabel: '开始合作',
      ctaTitle: '联系我们开始代理合作',
      ctaDescription:
        '如果你拥有代理资源、本地推广能力或用户运营经验，可以直接通过 Telegram 或 WhatsApp 联系我们。',
      telegram: 'Telegram 联系',
      whatsapp: 'WhatsApp 联系'
    }
  }

  return {
    seoTitle: 'Agent Partnership | Partner Cooperation',
    seoDescription:
      'Agent partnership opportunities for agent teams, local promoters, community operators and long-term user resource partners.',

    heroLabel: 'AGENT PARTNERSHIP',
    heroTitle: 'Agent Partnership',
    heroDescription:
      'We are looking for agent teams, local promoters, community operators and partners who can build and manage long-term user resources.',

    targetLabel: 'WHO WE ARE LOOKING FOR',
    targetTitle: 'Suitable Agent Partners',

    cardOneTitle: 'Agent Teams',
    cardOneDescription:
      'Teams with experience in user development, customer operation, local promotion or long-term community management.',

    cardTwoTitle: 'Local Promoters',
    cardTwoDescription:
      'Partners who understand local markets, user behavior and local communication channels.',

    cardThreeTitle: 'Community Operators',
    cardThreeDescription:
      'Partners who manage Telegram groups, WhatsApp communities, social groups or other private traffic communities.',

    cardFourTitle: 'Regional Agents',
    cardFourDescription:
      'Partners who can develop local markets, manage regional user resources and support long-term business growth.',

    areasLabel: 'COOPERATION AREAS',
    areasTitle: 'What Agent Partners Can Do',

    areaOne: 'User Development',
    areaTwo: 'Local Promotion',
    areaThree: 'Community Operation',
    areaFour: 'Regional Market Expansion',
    areaFive: 'Customer Relationship Maintenance',
    areaSix: 'Long-Term Agent Cooperation',

    supportLabel: 'SUPPORT FOR AGENTS',
    supportTitle: 'Support for Long-Term Agent Growth',
    supportDescription:
      'We value agent partners who can build stable relationships, manage user resources and communicate clearly for long-term cooperation.',

    supportOne: 'Cooperation discussion',
    supportTwo: 'Promotion direction alignment',
    supportThree: 'Market and user resource review',
    supportFour: 'Long-term cooperation planning',

    expectationLabel: 'OUR EXPECTATIONS',
    expectationTitle: 'What We Care About',

    expectationOne: 'Real user resources',
    expectationTwo: 'Stable promotion ability',
    expectationThree: 'Clear communication',
    expectationFour: 'Long-term operation mindset',
    expectationFive: 'Market understanding',
    expectationSix: 'Responsible cooperation attitude',

    ctaLabel: 'START COOPERATION',
    ctaTitle: 'Contact Us for Agent Cooperation',
    ctaDescription:
      'If you have agent resources, local promotion capability or user operation experience, please contact us directly through Telegram or WhatsApp.',
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
  <main class="partner-page">
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
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.targetLabel }}
        </p>

        <h2>
          {{ pageText.targetTitle }}
        </h2>
      </div>

      <div class="card-grid">
        <div class="info-card">
          <h3>{{ pageText.cardOneTitle }}</h3>
          <p>{{ pageText.cardOneDescription }}</p>
        </div>

        <div class="info-card">
          <h3>{{ pageText.cardTwoTitle }}</h3>
          <p>{{ pageText.cardTwoDescription }}</p>
        </div>

        <div class="info-card">
          <h3>{{ pageText.cardThreeTitle }}</h3>
          <p>{{ pageText.cardThreeDescription }}</p>
        </div>

        <div class="info-card">
          <h3>{{ pageText.cardFourTitle }}</h3>
          <p>{{ pageText.cardFourDescription }}</p>
        </div>
      </div>
    </section>

    <section class="content-section light-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.areasLabel }}
        </p>

        <h2>
          {{ pageText.areasTitle }}
        </h2>
      </div>

      <div class="list-panel">
        <div class="list-item">
          <strong>{{ pageText.areaOne }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.areaTwo }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.areaThree }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.areaFour }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.areaFive }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.areaSix }}</strong>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="split-content">
        <div>
          <p class="section-label">
            {{ pageText.supportLabel }}
          </p>

          <h2>
            {{ pageText.supportTitle }}
          </h2>

          <p>
            {{ pageText.supportDescription }}
          </p>
        </div>

        <div class="expectation-list">
          <div class="expectation-item">
            <strong>{{ pageText.supportOne }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.supportTwo }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.supportThree }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.supportFour }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section light-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.expectationLabel }}
        </p>

        <h2>
          {{ pageText.expectationTitle }}
        </h2>
      </div>

      <div class="requirement-grid">
        <div class="requirement-card">
          <strong>{{ pageText.expectationOne }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.expectationTwo }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.expectationThree }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.expectationFour }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.expectationFive }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.expectationSix }}</strong>
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
.partner-page {
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
.cta-card p {
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
  max-width: 760px;
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

.list-panel {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.list-item {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #f8fafc;
}

.list-item strong,
.expectation-item strong,
.requirement-card strong {
  display: block;
  color: #07112a;
  font-size: 16px;
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

.expectation-list {
  display: grid;
  gap: 14px;
}

.expectation-item {
  padding: 18px 20px;
  border-radius: 14px;
  background: #f5f7fb;
  border: 1px solid #e5e7eb;
}

.requirement-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.requirement-card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #f8fafc;
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
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .list-panel,
  .requirement-grid {
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
  .list-panel,
  .requirement-grid {
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